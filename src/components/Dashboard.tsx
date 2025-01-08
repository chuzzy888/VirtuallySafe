import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import logo from "../assets/images/vlg.png";

import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "../../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Resource {
  id: string;
  title: string;
  coverImage: string;
  pdfUrl: string;
  page: string;
}

const Dashboard: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<{
    title: string;
    coverImage: File | null;
    pdfFile: File | null;
    page: string;
  }>({
    title: "",
    coverImage: null,
    pdfFile: null,
    page: "Parent",
  });
  const [editResource, setEditResource] = useState<Resource | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  const fetchResources = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "resources"));
      const fetchedResources: Resource[] = [];
      querySnapshot.forEach(doc => {
        fetchedResources.push({ id: doc.id, ...doc.data() } as Resource);
      });
      setResources(fetchedResources);
      setFilteredResources(fetchedResources);
    } catch (error) {
      toast.error("Failed to fetch resources.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    const filtered = resources.filter(resource => {
      const matchesSearch = resource.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        filterType === "All" || resource.page === filterType;
      return matchesSearch && matchesFilter;
    });
    setFilteredResources(filtered);
  }, [searchQuery, filterType, resources]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files } = target;

    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleEdit = (resource: Resource) => {
    setEditResource(resource);
    setFormData({
      title: resource.title,
      coverImage: null,
      pdfFile: null,
      page: resource.page,
    });
    setEditModalOpen(true);
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    if (!editResource) return;

    const { title, coverImage, pdfFile, page } = formData;

    setLoading(true);
    try {
      const updates: Partial<Resource> = { title, page };

      if (coverImage) {
        const coverRef = ref(storage, `covers/${coverImage.name}`);
        await uploadBytes(coverRef, coverImage);
        updates.coverImage = await getDownloadURL(coverRef);
      }

      if (pdfFile) {
        const pdfRef = ref(storage, `pdfs/${pdfFile.name}`);
        await uploadBytes(pdfRef, pdfFile);
        updates.pdfUrl = await getDownloadURL(pdfRef);
      }

      const resourceRef = doc(db, "resources", editResource.id);
      await updateDoc(resourceRef, updates);

      toast.success("Resource updated successfully!");
      fetchResources();
      setEditModalOpen(false);
      setEditResource(null);
      setFormData({
        title: "",
        coverImage: null,
        pdfFile: null,
        page: "Parent",
      });
    } catch (error) {
      toast.error("Failed to update resource.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (
    resourceId: string,
    coverUrl: string,
    pdfUrl: string
  ) => {
    if (!window.confirm("Are you sure you want to delete this resource?"))
      return;

    setLoading(true);
    try {
      const resourceRef = doc(db, "resources", resourceId);

      const coverRef = ref(storage, coverUrl);
      const pdfRef = ref(storage, pdfUrl);

      await deleteObject(coverRef);
      await deleteObject(pdfRef);

      await deleteDoc(resourceRef);

      toast.success("Resource deleted successfully!");
      fetchResources();
    } catch (error) {
      toast.error("Failed to delete resource.");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { title, coverImage, pdfFile, page } = formData;

    if (!title || !coverImage || !pdfFile || !page) {
      toast.error("Please provide all required fields.");
      return;
    }

    setLoading(true);
    try {
      const coverRef = ref(storage, `covers/${coverImage.name}`);
      const pdfRef = ref(storage, `pdfs/${pdfFile.name}`);

      await uploadBytes(coverRef, coverImage);
      await uploadBytes(pdfRef, pdfFile);

      const coverUrl = await getDownloadURL(coverRef);
      const pdfUrl = await getDownloadURL(pdfRef);

      await addDoc(collection(db, "resources"), {
        title,
        coverImage: coverUrl,
        pdfUrl,
        page,
      });

      toast.success("Resource added successfully!");
      fetchResources();
      setFormData({
        title: "",
        coverImage: null,
        pdfFile: null,
        page: "Parent",
      });
    } catch (error) {
      toast.error("Failed to add resource.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-josefin">
      <ToastContainer />
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Resource Manager</h1>
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="object-cover h-8 md:h-12 rounded-lg bg-[#00294B] p-2"
            />
          </a>
        </div>
        <div className=" flex flex-col md:flex-row gap-5 p-5 ">
          <form
            onSubmit={handleSubmit}
            className="mb-6 space-y-4 shadow-xl p-5"
          >
            <p>Add Resource*</p>

            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              placeholder="Title"
              className="border p-2 rounded w-full"
            />
            <select
              name="page"
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            >
              <option value="Parent">Parent</option>
              <option value="Advocacy">Advocacy</option>
              <option value="child">Young</option>
              <option value="General">General</option>
              <option value="Educator">Educator</option>
            </select>
            <p className="text-green-400">Upload coverImage</p>
            <input
              type="file"
              name="coverImage"
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <p className="text-yellow-400">Upload PDF</p>

            <input
              type="file"
              name="pdfFile"
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "bg-gray-500" : "bg-blue-500"
              } text-white px-4 py-2 rounded hover:bg-blue-600 transition-all`}
            >
              {loading ? "Please wait..." : "Add Resource"}
            </button>
          </form>
          <div className=" gap-4 mb-6">
            <p className="text-red-500">Search and Filter*</p>
            <input
              type="text"
              placeholder="Search by title"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="All">All Types</option>
              <option value="Parent">Parent</option>
              <option value="Advocacy">Advocacy</option>
              <option value="child">Young</option>
              <option value="General">General</option>
              <option value="Educator">Educator</option>
            </select>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="bg-gray-50 p-4 rounded shadow-md relative"
            >
              <h2 className="text-lg font-semibold">{resource.title}</h2>
              <p className="text-sm text-gray-600">Type: {resource.page}</p>
              <img
                src={resource.coverImage}
                alt={resource.title}
                className="w-full h-32 object-cover my-2"
              />
              <a
                href={resource.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View PDF
              </a>
              <div className="mt-2 flex justify-between">
                <button
                  onClick={() => handleEdit(resource)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    handleDelete(
                      resource.id,
                      resource.coverImage,
                      resource.pdfUrl
                    )
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Edit Resource</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="border p-2 rounded w-full"
              />
              <select
                name="page"
                value={formData.page}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              >
                <option value="Parent">Parent</option>
                <option value="Advocacy">Advocacy</option>
                <option value="child">Young</option>
                <option value="General">General</option>
                <option value="Educator">Educator</option>
              </select>
              <input
                type="file"
                name="coverImage"
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
              <input
                type="file"
                name="pdfFile"
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading ? "bg-gray-500" : "bg-blue-500"
                  } text-white px-4 py-2 rounded hover:bg-blue-600 transition-all`}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
