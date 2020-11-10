const contact = () => {
    const form = async (req, res) => {
        res.render('form')
    }

    return {
        form
    }
}

module.exports = contact