import { useAppContext, resolveSection } from "../../context/AppContext";
import "./Home.css";

export default function Home() {
  const { config } = useAppContext();

  return (
    <div className="home">
      {config.homeSections.map((section) => {
        const Section = resolveSection(section.type);
        if (!Section) return null;
        return <Section key={section.id} section={section} />;
      })}
    </div>
  );
}