module.exports = {
    name: 'Today\'s Classes - Instructor',
    publisher: 'Trevecca Nazarene University',
    cards: [{
        type: 'TodayClassesGraphQL',
        source: './src/cards/TodayClasses.jsx',
        title: 'Today\'s Classes - Instructor',
        displayCardType: 'Today\'s Classes - Instructor',
        description: 'Today\'s Classes for Instructor via GraphQL',
        queries: {
            'instructional-events-by-section': [{
                resourceVersions: {
                buildings: { min: 11 },
                instructionalEvents: { min: 11 },
                rooms: { min: 10 },
                sections: { min: 16 }
                },
                query: `
                    query instructionalEventsBySection($sectionId: ID){
                        instructionalEvents : {instructionalEvents}(
                            filter: {
                                {section}: {
                                id: {EQ: $sectionId}
                                }
                            }
                        ){
                            edges {
                                node {
                                    id
                                    recurrence {
                                        timePeriod {
                                            startOn,
                                            endOn
                                        }
                                        repeatRule {
                                            type
                                            interval
                                            ends {
                                                repetitions,
                                                date
                                            }
                                            daysOfWeek
                                            repeatBy {
                                                dayOfMonth,
                                                dayOfMonth
                                            }
                                        }
                                    }
                                    locations {
                                        location {
                                            room: {room} { 
                                                number
                                                building: {building} {
                                                    title
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `
            }],
            'today-sections': [{
                resourceVersions: {
                courses: { min: 16 },
                persons: { min: 12 },
                sectionInstructors: { min: 10 },
                sections: { min: 16 },
                subjects: { min: 6 },
                instructor: { min: 12 }
                },
                'query': `
                    query todaysSections($personId: ID, $yesterday: Date, $tomorrow: Date){
                        sectionInstructors: {sectionInstructors}(
                            filter: {
                                {instructor}: {
                                    id: {EQ: $personId}
                                }
                                {section}: {
                                    startOn: {BEFORE: $tomorrow}
                                    endOn: {AFTER: $yesterday}
                                }
                            }
                        ){
                            edges {
                                node {
                                    sections: {section} {
                                        id
                                        course: {course} {
                                            titles {
                                                value
                                            }
                                            number
                                            subject: {subject} {
                                                abbreviation
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `
            }]
        }
    }]
}
