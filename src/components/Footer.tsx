import { useQRScoutState } from '@/store/store';

export function Footer() {
  const teamNumber = useQRScoutState(state => state.formData.teamNumber);
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center justify-center p-2 gap-2">
        <span className="text-2xl text-primary font-rhr-ns">
          {teamNumber}
        </span>
      </div>
    </footer>
  );
}
