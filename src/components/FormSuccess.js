const FormSuccess = ({ message = null }) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500 p-[12px] max-w-[750px] mx-auto w-full flex items-center gap-[8px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="#fff" strokeWidth={1.5}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m7.393 12.084l2.593 2.593a.983.983 0 0 0 1.395 0l5.227-5.226"
          ></path>
          <rect width={18.5} height={18.5} x={2.75} y={2.75} rx={6}></rect>
        </g>
      </svg>
      <p className="text-[14px] text-destructive text-white select-none">
        {message}
      </p>
    </div>
  );
};

export default FormSuccess;
