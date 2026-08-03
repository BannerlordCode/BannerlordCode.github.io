---
title: "MapEvents Family"
description: "World-map encounter state, participants, siege transitions, and the boundary into Mission combat."
---

# MapEvents Family

**One-sentence role:** A map event represents an encounter or battle on the campaign map and coordinates its parties until it becomes a mission or resolves.

## Mental model and reading order

Start with [MapEvent](../MapEvent), then [SiegeEvent](../SiegeEvent). Trace parties from [Party](../party) and settlements from [Settlements](../settlements) before reading [StartBattleAction](../StartBattleAction).

## When to use

Use map events to inspect participants, sides, and campaign-level battle state. Use a mission API after the encounter crosses into Mission. Do not force a map event to advance from a UI callback or keep references after resolution.

## Dependency map

- Upstream: parties, settlements, encounter actions, and campaign time.
- Downstream: Mission, agents, battle rewards, morale, and save state.
- Siblings: [Actions](../actions), [Party](../party), and [Settlements](../settlements).

## Real entry points

```csharp
MapEvent mapEvent = MapEvent.PlayerMapEvent;
if (mapEvent != null) { /* inspect sides and parties */ }
```

Check lifecycle state before querying participants; the event may be null outside an encounter.

## Risk boundaries

Map-event resolution can create or destroy parties and hand control to Mission. Use the provided action/event boundary and avoid mutating participant rosters during resolution callbacks.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Party](../party) · [Settlements](../settlements)
- [Related: Mission](../../mission)
