type TaskListHeaderProps = {
  count: number;
};

export default function TaskListHeader({ count }: TaskListHeaderProps) {
  return <h2 className="mt-4 mb-2">Total Tasks ({count})</h2>;
}
