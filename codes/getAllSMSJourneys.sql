Select
    top 50000 sends,
    sentDate,
    messageName,
    journeyName,
    JourneyStatus
from
    (
        Select
            count(s.subscriberKey) as sends,
            cast(s.actionDateTime as date) as sentDate,
            s.name as messageName,
            j.journeyName,
            j.JourneyStatus
        from
            _smsmessagetracking s
            left join _journey j on s.JBDefinitionID = j.JourneyID
            left join _JourneyActivity ja on j.versionID = ja.versionID
        where
            ja.ActivityType = 'smssync'
        group by
            cast(s.actionDateTime as date),
            s.name,
            j.journeyName,
            j.JourneyStatus
    ) x

    order by sentDate
