const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">{children}</div>
  );
};

export default Card;
