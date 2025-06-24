// pages/CompetitionDetails.jsx
import { useParams } from 'react-router-dom';
import competitions from '../data/competitions-list'; // Competitions data import
import CompetitionShowcase from './compPageNew';


export default function CompetitionDetails() {
  const { slug } = useParams();
  const competition = competitions.find((c) => c.slug === slug);
  console.log(competition);
  console.log(Array.isArray(competition)); // should be true
console.log(competition); // see what it actually is

  if (!competition) {
    return <div>Competition not found.</div>;
  }

  return (
    <div> 
        <h1> Hello </h1>
<CompetitionShowcase competition={competition}></CompetitionShowcase>
</div>
  );
}
