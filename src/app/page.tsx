import { Button, ButtonColor } from "@/components/button/button";
import PieChart from "@/components/charts/pie/pie";

export default function Home() {
  return (
    <>
      <Button color={ButtonColor.DANGER} className="p-4">Bottone</Button>
      <div style ={{ width: '400px', height: '400px' }}>
      <PieChart />
      </div>
    </>
  );
}
