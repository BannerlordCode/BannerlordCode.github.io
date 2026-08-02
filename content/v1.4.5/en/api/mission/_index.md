---
title: "Mission API — v1.4.5"
description: "The Mission (battle/encounter) simulation layer: Mission lifecycle, Agent, Team, Formation, MissionBehavior and MissionLogic. Mental map and entry order."
---
# Mission API

The Mission layer is the **tactical simulation**: a single battle or encounter running on its own clock, separate from the Campaign map.

## ↑ Parent Navigation

- [API index](../)
- [Architecture index](../../architecture/)
- [Crash boundaries](../../architecture/crash-boundary)

## What this module is

`api/mission` holds `Mission` (the running encounter), `Agent` (a participant), `Team`/`Formation` (sides & groups), and the logic hooks `MissionBehavior` / `MissionLogic` where you write combat code. Missions are spun up by the Campaign (e.g. a battle) and report results back via `MissionResult`.

## Hub entries

| Group | Key types | Notes |
|-------|-----------|-------|
| Encounter | `Mission`, `MissionState`, `MissionResult` | `Mission.Current` during a mission |
| Participants | `Agent`, `AgentDeveloperData` | one fighter; short-lived |
| Sides | `Team`, `Formation` | who fights whom |
| Logic | `MissionBehavior`, `MissionLogic`, `MissionBehaviorManager` | your combat code |
| Spawn/Setup | `MissionInitializer`, `MissionAgentSpawnLogic` | how agents appear |

## Dependency graph

```
Campaign → (starts) → Mission
Mission → Agents / Teams / Formations
Mission → MissionBehavior (your logic)
Mission → MissionResult → Campaign (applies world changes)
```

## Recommended reading order

1. `Mission` — lifecycle & `Mission.Current`.
2. `MissionBehavior` — where to put logic.
3. `Agent` / `Team` / `Formation` — what you act on.
4. `MissionResult` — how outcomes return to Campaign.

## Risk overview

- Never hold an `Agent` after it leaves the mission (crash §4).
- Don't call `Mission.Current` outside a mission.
- World changes from a battle go through `MissionResult`, not direct entity writes (crash §3).

## See also

- [Architecture index](../../architecture/)
- [Foundation module](../core/)
- [Campaign module](../campaign/)
- [Crash boundaries](../../architecture/crash-boundary)
