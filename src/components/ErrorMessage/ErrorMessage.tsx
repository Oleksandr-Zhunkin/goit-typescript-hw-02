type ErrorMessage = {
  error: string | null;
};

export const ErrorMessage = ({ error }: ErrorMessage) => {
  return (
    <div>
      <p className="flex justify-center font-medium text-2xl">{error}!</p>
    </div>
  );
};
