import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({ match, teamName }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/team/${otherTeam}`;
  return (
    <div>
      <h1>
        vs
        <Link to={otherTeamRoute}> {otherTeam} </Link>
      </h1>
    </div>
  );
};
