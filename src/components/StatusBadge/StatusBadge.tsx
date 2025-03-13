import { StatusBadgeEnum } from './types';

interface StatusBadgeProps {
  status: StatusBadgeEnum;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case StatusBadgeEnum.Pending:
        return 'yellow';
      case StatusBadgeEnum.InProgress:
        return 'green';
      case StatusBadgeEnum.Completed:
        return 'blue';
    }
  };

  return (
    <div>
      <h2>Task Status:</h2>
      <p style={{ color: getColor() }}>{status}</p>
    </div>
  );
};
