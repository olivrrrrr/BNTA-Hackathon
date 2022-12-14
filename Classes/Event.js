class Event {
    constructor(id, title, description, attendees, organisers, startDate, endDate, tags, wheelchairAccessible, cost, isDrinking, imageURL) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.attendees = attendees,
        this.organisers = organisers,
        this.startDate = startDate,
        this.endDate = endDate,
        this.tags = tags,
        this.wheelchairAccessible = wheelchairAccessible,
        this.cost = cost,
        this.isDrinking = isDrinking,
        this.imageURL = imageURL
    }
}

export default Event;
