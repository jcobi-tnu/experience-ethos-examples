module.exports = {
    name: 'Trevecca Today\'s Classes',
    publisher: 'Trevecca Nazarene University',
    cards: [{
        type: 'TodayClasses',
        source: './src/cards/TodayClasses.jsx',
        title: 'Today\'s Classes',
        displayCardType: 'Today Classes',
        description: 'Today Classes',
        configuration: {
            client: [{
                key: 'serviceUrl',
                label: 'Service URL',
                type: 'string',
                required: true
            }],
            server: [{
                key: 'ethosApiKey',
                label: 'Ethos API Key',
                type: 'password',
                require: false
            }]
        }
    }]
}
