export function incrementYes(votes) {
    if ("yes" in votes) {
        votes.yes += 1;
    } else {
        votes.yes = 1;
    }
    return votes;
}