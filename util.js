export function incrementYes(votes) {
    if ("yes" in votes) {
        votes.yes += 1;
    } else {
        votes.yes = 1;
    }
    return votes;
}

function calVotesPercentage (Votes){
    const yesVotes = Votes.yes || 0;
    const noVotes = Votes.no || 0;
    const totalVotes = yesVotes + noVotes;

    if (totalVotes ===0) {
        return {
            yesPercentage: 0,
            noPercentage: 0
        };
    }

    const yesPercentage = (yesVotes / totalVotes) *100;
    const noPercentage = (noVotes / totalVotes) *100;

    return {
        yesPercentage: yesPercentage.toFixed(2),
        noPercentage: noPercentage.toFixed(2)
    }
}