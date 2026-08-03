---
title: "Party Family"
description: "Party ownership, rosters, army composition, and campaign movement boundaries."
---

# Party Family

**One-sentence role:** Party types connect a campaign entity to troops, inventory, movement, and army membership on the world map.

## Mental model and reading order

Read [PartyBase](../../campaign/PartyBase), [MobileParty](../../campaign/MobileParty), and [Army](../Army). Then inspect [TroopRoster](../TroopRoster) and [ItemRoster](../ItemRoster) as the mutable data containers.

## When to use

Use party APIs to query or coordinate world-map participants. Use an action for ownership, recruitment, or destruction changes. Do not edit roster collections while iterating a live party or assume a party exists after its destruction event.

## Dependency map

- Upstream: [Settlement](../../campaign/Settlement), heroes, party components, and campaign behaviors.
- Downstream: [MapEvents](../mapevents), models, encounter menus, and save data.
- Siblings: [Settlements](../settlements) and [Actions](../actions).

## Real entry points

```csharp
MobileParty party = MobileParty.MainParty;
TroopRoster roster = party.MemberRoster;
```

Resolve the live party from campaign state; do not cache a destroyed instance.

## Risk boundaries

Roster mutations affect wages, speed, morale, and save size. Use the roster's supported methods and let party/army actions update derived caches.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Settlements](../settlements) · [MapEvents](../mapevents)
- [Related: Actions](../actions)
