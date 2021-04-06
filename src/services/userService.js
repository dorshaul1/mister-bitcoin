export const userService = {
    getUser
}

const loggedInUser = {
    name: "Ochoa Hyde",
    coins: 100,
    moves: []
}

function getUser() {
    return loggedInUser
}
