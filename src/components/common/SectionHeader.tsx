interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <h2 className="text-lg font-semibold mb-3">{title}</h2>
);

export default SectionHeader;
