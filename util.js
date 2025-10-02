export function incrementYes(votes) {
    if ("yes" in votes) {
        votes.yes += 1;
    } else {
        votes.yes = 1;
    }
    return votes;
}

export function incrementNo(votes) {
    if ("no" in votes) {
        votes.no += 1;
    } else {
        votes.no = 1;
    }
    return votes;
}

export function calVotesPercentage(votes) {
    const yesVotes = votes.yes || 0;
    const noVotes = votes.no || 0;
    const totalVotes = yesVotes + noVotes;

    if (totalVotes === 0) {
        return {
            yesPercentage: 0,
            noPercentage: 0
        };
    }

    const yesPercentage = (yesVotes / totalVotes) * 100;
    const noPercentage = (noVotes / totalVotes) * 100;

    return {
        yesPercentage: parseInt(yesPercentage.toFixed(0)),
        noPercentage: parseInt(noPercentage.toFixed(0))
    };
}