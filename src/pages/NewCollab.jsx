import FormCollab from "../components/FormCollab";

const NewCollab = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-white p-5 bg-sky-600 rounded shadow-lg shadow-gray-300">
        Add Collaborator
      </h1>
      <FormCollab />
    </div>
  );
};

export default NewCollab;
