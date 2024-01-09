import PromptCard from "./PromptCard";

const standardProfile = ({
  name,
  description,
  data,
  handleEdit,
  handleDelete,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} </span>Profile
      </h1>
      <p className="desc text-left">{description}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit?.(post)}
            handleDelete={() => handleDelete?.(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default standardProfile;
