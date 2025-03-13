// type naudojame kai norime issikelti kaip konstanta; type reiskia, kad yra galimybe pasirinkti tik is keliu variantu:
type AlertTypes = 'success' | 'warning' | 'error';

// interface naudojame objektams:
interface AlertProps {
  // TypeScript union types:
  type: AlertTypes;
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const getColor = () => {
    switch (type) {
      case 'success':
        return 'green';
      case 'error':
        return 'red';
      case 'warning':
        return 'orange';
    }
  };

  return <div style={{ color: getColor() }}>{message}</div>;
};
