---
title: "Campaign API — v1.4.5"
description: "The Campaign simulation layer: the world state, its entities, the Actions that mutate it, the Models that compute, Behaviors that run each tick, and the Events that fire. Mental map and entry order."
---
# Campaign API

The Campaign layer is the **strategic simulation**: the map, factions, settlements, parties, and the rules that move them. This is where almost all gameplay mods live.

## ↑ Parent Navigation

- [API index](../)
- [Architecture index](../../architecture/)
- [Crash boundaries](../../architecture/crash-boundary)

## What this module is

`api/campaign` holds `Campaign` (the world singleton) and everything it owns: entities (`Hero`, `Clan`, `Kingdom`, `Settlement`, `MobileParty`…), the `*Action` family that **mutates** the world, the `*Model` family that **computes** per-tick values, `CampaignBehaviorBase` that runs logic each tick, and `CampaignEvents` that broadcast lifecycle changes.

## Hub entries

| Group | Key types | Notes |
|-------|-----------|-------|
| World | `Campaign` | `Campaign.Current` singleton |
| Entities | `Hero`, `CharacterObject`, `Clan`, `Kingdom`, `Settlement`, `Town`, `Village`, `MobileParty`, `PartyBase`, `Army`, `MapEvent`, `SiegeEvent` | individual deep pages (H3) |
| Containers | `TroopRoster`, `ItemRoster`, `Equipment`, `ItemObject`, `SkillObject`, `CultureObject`, `Banner`, `Workshop` | entities hold these |
| Mutators | `*Action` (e.g. `KillCharacterAction`, `GiveGoldAction`, `ChangeKingdomAction`) | **always mutate via Apply** |
| Computors | `*Model` (e.g. `PartySpeedModel`, `DiplomacyModel`, `ClanFinanceModel`) | read-only per tick |
| Logic | `CampaignBehaviorBase`, `CampaignGameStarter`, `CampaignBehaviorManager` | your per-tick code lives here |
| Events | `CampaignEvents` | subscribe for lifecycle hooks |

## Dependency graph

```
Campaign → Hero / Clan / Kingdom / Settlement / MobileParty (entities)
Campaign → CampaignBehaviorManager → CampaignBehaviorBase
Campaign → GameModels → *Model
*Action.Apply → mutates entities + raises CampaignEvents
CampaignEvents → CampaignBehaviorBase (subscribers)
```

## Recommended reading order

1. `Campaign` — the world handle.
2. `CampaignBehaviorBase` + `CampaignGameStarter` — how to run your code.
3. `*Action` family — how to change the world safely.
4. Entities (`Hero`, `Settlement`, `MobileParty`) — what you read/mutate.
5. `*Model` family — how values are computed.

## Risk overview

- Mutate the world only through `*Action.Apply` (crash §2).
- Don't mutate Campaign entities during a Mission (crash §3).
- Subscribe/unsubscribe `CampaignEvents` symmetrically in Behavior lifetime.

## See also

- [Architecture index](../../architecture/)
- [Foundation module](../core/)
- [Mission module](../mission/)
- [Crash boundaries](../../architecture/crash-boundary)
