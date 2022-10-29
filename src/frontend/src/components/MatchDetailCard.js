import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/team/${otherTeam}`;
  return (
    <div>
      <h3>Latest Matches</h3>
      <h4>vs {otherTeam}</h4>
    </div>
  );
};
