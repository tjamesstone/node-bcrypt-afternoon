module.exports = {
    dragonTreasure: async (req, res) => {
        // const db = req.app.get('db')
        const treasure = await req.app.get('db').get_dragon_treasure(1)
        return res.status(200).send(treasure)
    },
    getUserTreasure: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const userTreasure = await db.get_user_treasure([id])
        return res.status(200).send(userTreasure)
    },
}