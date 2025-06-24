// pages/CompetitionDetails.jsx
import { useParams } from 'react-router-dom';
import competitions from '../data/competitions-list'; // Competitions data import
import CompetitionShowcase from './compPageNew';


export default function CompPage() {
  const { slug } = useParams();
  const competition = competitions.find((c) => c.slug === slug);
  console.log("slug from URL:", slug);
console.log("All slugs in data:", competitions.map(c => c.slug));
  console.log(competition);
  console.log(Array.isArray(competition)); // should be true
console.log(competition); // see what it actually is

  if (!competition) {
    return <div>Competition not found.</div>;
  }

  return (
    <div> 
<CompetitionShowcase competition={competition}></CompetitionShowcase>
</div>
  );
}
