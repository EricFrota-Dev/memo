interface RefProps {
  reference: number;
}

const PorcentageBar = ({ reference }: RefProps) => {
  return (
    <div className="md:w-2/4 w-4/6 h-2 bg-zinc-600 rounded relative border border-dotted border-zinc-500">
      <div
        className={`absolute transition-all h-2 bg-cyan-400 rounded`}
        style={{ width: `${reference}%` }}></div>
    </div>
  );
};

export default PorcentageBar;
