const FormError = ({ message = null }) => {
  if (!message) return null;

  return (
    <div className="bg-red-500 p-[12px] max-w-[750px] mx-auto w-full flex items-center gap-[8px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            strokeWidth={1.5}
            d="M10.367 4.462L2.752 17.655a1.885 1.885 0 0 0 1.634 2.827h15.228a1.885 1.885 0 0 0 1.633-2.827L13.633 4.462a1.885 1.885 0 0 0-3.266 0m1.628 3.116v6.277"
          ></path>
          <path strokeWidth={2} d="M12.043 17.326h-.009"></path>
        </g>
      </svg>
      <p className="text-[14px] text-destructive text-white select-none">
        {message}
      </p>
    </div>
  );
};

export default FormError;
