interface DescriptionItemProps {
  label: string;
  value: string | number;
}

const DescriptionItem = ({ label, value }: DescriptionItemProps) => (
  <div className="flex gap-x-2">
    <dt className="font-semibold text-gray-400">{label} :</dt>
    <dd>{value}</dd>
  </div>
);

export default DescriptionItem;
