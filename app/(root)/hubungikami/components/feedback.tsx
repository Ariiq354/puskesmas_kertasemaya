export default function Feedback() {
  return (
    <div className="container bg-red-500 bg-opacity-80 rounded-lg p-12 gap-12 flex items-center flex-col mb-24 shadow-lg">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Feedback</h1>
      </div>
      <div className="flex justify-center items-center w-full max-w-4xl">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRs_o95LtpiGRL5Ued3atcaGVOqA_rfsqJrvZIeW2AhgwsLjlGi90crECEtMhCSazxlx61HYzZpuwq7/embed?start=false&loop=false&delayms=60000"
          width="960"
          height="569"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}
