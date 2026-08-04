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

## H3-A/H3-B: Entering the Core Entities by Task

These waves cover the connected Campaign entity deep pages completed so far. They explain what to read and which Action changes it. Long-tail types that have not met the handwritten coverage standard, `Army`, `MapEvent`, `SiegeEvent`, and container types continue in later waves; an existing file is not evidence of handwritten coverage.

| Task | Start here | Key boundary |
|---|---|---|
| Query a person, relations, or lifecycle | [Hero](./Hero) | Read state; use the relevant Action for gold, relations, death, and party membership. |
| Read a clan and its fiefs | [Clan](./Clan) | A clan may have no kingdom; influence, leadership, kingdom, and fief changes have separate Actions. |
| Read kingdom politics | [Kingdom](./Kingdom) | Models calculate diplomatic scores; Actions declare war, make peace, and change the ruling clan. |
| Read a settlement and siege state | [Settlement](./Settlement) | `Town`, `Village`, and `Hideout` are different components; transfer ownership through an Action. |
| Read and drive a map party | [MobileParty](./MobileParty) | PartyBase, Hero, Army, AI, and location must remain bidirectionally synchronized. |

### H3-B: Settlement and Party Entities

| Task | Start here | Key boundary |
|---|---|---|
| Query character templates, upgrades, and roster sources | [CharacterObject](./CharacterObject) | It is a registered character/troop template; Hero and world-state changes use `Hero` and the relevant Action. |
| Read the settlement Party boundary and rosters | [PartyBase](./PartyBase) | It is hosted by a `Settlement` or `MobileParty`; do not construct an orphan PartyBase or bypass the host when changing world relationships. |
| Read town/castle economy and management state | [Town](./Town) | `Town` is the `Settlement` fief component; ownership and governor changes use the relevant Actions, while Models calculate values. |
| Read village production, hearths, and trade binding | [Village](./Village) | `Bound` and `TradeBound` are different relationships; state changes use `ChangeVillageStateAction`. |

## Entity object graph

```text
Campaign
  ├─ Hero ── Clan ── Kingdom
  ├─ MobileParty ── PartyBase ── roster / encounter
  └─ Settlement ── Town / Village / Hideout
        └─ OwnerClan / garrison / siege
```

Read state from the entity page first, then subscribe to changes through [CampaignEvents](./CampaignEvents), and finally choose a world-changing `*Action` from [campaign-ext](../campaign-ext/). Each entity page ends with Navigation links to its parent, siblings, and downstream dependencies.

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
