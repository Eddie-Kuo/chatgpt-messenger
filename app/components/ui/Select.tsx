' use client';

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
}

export default function Select({
  label,
  value,
  onChange,
  options,
  disabled,
}: SelectProps) {
  return <div>Select</div>;
}
