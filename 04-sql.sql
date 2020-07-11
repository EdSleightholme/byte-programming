Select COUNT(event_data->'StateName'), 
FROM app_events
WHERE EXTRACT(
        MONTH
        FROM created_at
    ) == ?
    AND bot_id == ?
    AND event_type == 'VisitState'
    AND (
        event_data @> '{"StateName":reorder-allergy-info}'::jsonb
        OR event_data @> '{"StateName":reorder}'::jsonb
        OR  event_data @> '{"StateName":reorder-pay}'::jsonb
    );