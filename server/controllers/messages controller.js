let messages = [];
let id = 0;

module.exports = {
    create: ( req, res, next ) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( mesasges );
    },

    read: ( req, res, next ) => {
        res.status(200).send( messages );

    },
    update: ( req, res, next ) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: mesage.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send( messages );

    },
    destroy: ( req, res, next ) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex( message => message.id == deleteID );
        messages.splice(messageIndex, 1);
        res.status(200).send( messages );
    }
};