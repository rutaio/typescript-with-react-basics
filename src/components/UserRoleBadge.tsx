type UserRoles = 'admin' | 'editor' | 'viewer';

interface UserRoleBadgeProps {
  role: UserRoles;
  name: string;
}

export const UserRoleBadge: React.FC<UserRoleBadgeProps> = ({ role, name }) => {
  const getColor = () => {
    if (role === 'admin') {
      return 'purple';
    } else if (role === 'editor') {
      return 'yellow';
    } else if (role === 'viewer') {
      return 'blue';
    }
  };

  return <span style={{ color: getColor() }}>{name}</span>;
};
