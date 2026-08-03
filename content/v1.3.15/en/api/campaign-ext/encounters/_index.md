---
title: "Encounters Family"
description: "Player encounter state, location encounters, campaign battle results, and handoff between map, menu, and Mission."
---

# Encounters Family

**One-sentence role:** Encounter APIs coordinate the player's temporary passage through a party conflict or settlement visit, converting map state into menus and missions and then returning the resolved result to campaign state.

## Mental Model

`PlayerEncounter.Current` is the player-facing state machine around a `MapEvent`, not a durable world entity. It owns the active player side, battle simulation, loot and capture progression, and transition to `End`; `LocationEncounter` separately represents an in-settlement visit and creates the correct town, village, castle, or hideout mission controller. `CampaignBattleResult` is the saveable summary used after a mission reports its winner.

Use an encounter boundary when the main party actually enters a party or settlement interaction. Use [MapEvents](../mapevents) for campaign battle data, [GameMenus](../gamemenus) for choices, and `CampaignMission` for mission creation. Do not retain `PlayerEncounter.Current`, `LocationEncounter`, or a Mission controller after `Finish`, `LeaveBattle`, or `LeaveSettlement` clears it.

## Dependency Map

- Upstream: `EncounterManager.StartPartyEncounter` / `StartSettlementEncounter`, `PartyBase.MainParty`, `MobileParty.MainParty`, settlement state, and [MapEvents](../mapevents).
- Runtime: `PlayerEncounter` selects menus, opens Mission or simulation, processes result states, loot, prisoners, and return paths.
- Downstream: `CampaignMission`, `GameMenu`, campaign actions, rosters, relation/reward models, and map-event finalization.
- Persistence: campaign battle results and encounter-owned campaign data use the save system; the live Mission and location controller are lifetime-bound runtime objects.

## Real Entry Point

```csharp
if (MobileParty.MainParty != null && Settlement.CurrentSettlement != null)
{
    EncounterManager.StartSettlementEncounter(MobileParty.MainParty, Settlement.CurrentSettlement);
}
```

This is the campaign entry point used by settlement interaction flow. It establishes the encounter/menu context; it is not a general-purpose way to teleport a party or create a detached town mission.

## Timing And Risk Boundaries

The manager may join an existing battle instead of creating a new one, and `PlayerEncounter` can revisit menu, battle, capture, loot, and end states after Mission return or load. A consequence that assumes `Current` is non-null after a Mission has ended will fail. Do not call `Finish` or `FinalizeBattle` from a dialogue condition: both clear or finalize campaign-owned state and can strand the active menu. Location encounter lists hold `LocationCharacter` references, so rebuild any mod-owned location state when the settlement scene changes rather than saving a mission-local reference.

## Encounter Entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.Encounters | [PlayerEncounter](../PlayerEncounter) | Drives the main-party battle or visit state machine, including mission, simulation, loot, and cleanup. | From encounter start until the player returns to campaign flow. |
| TaleWorlds.CampaignSystem.Encounters | [PlayerEncounterState](../PlayerEncounterState) | Names progress stages such as prepare results, capture heroes, loot, and end. | During `PlayerEncounter.Update` transitions. |
| TaleWorlds.CampaignSystem.Encounters | [CampaignBattleResult](../CampaignBattleResult) | Stores the player win, defeat, pull-back, and retreat outcome returned by battle resolution. | After Mission/simulation result is produced. |
| TaleWorlds.CampaignSystem.Encounters | [LocationEncounter](../LocationEncounter) | Holds the settlement visit, accompanying characters, and mission-controller creation contract. | While the player is inside a settlement encounter. |
| TaleWorlds.CampaignSystem.Encounters | [TownEncounter](../TownEncounter) | Opens town-center, arena, disguise, or indoor missions from a town location. | When moving between locations in a town. |
| TaleWorlds.CampaignSystem.Encounters | [VillageEncounter](../VillageEncounter) | Opens the village location mission controller and visit flow. | When entering or moving through a village. |
| TaleWorlds.CampaignSystem.Encounters | [CastleEncounter](../CastleEncounter) | Specializes a location encounter for castle scenes. | When a castle visit creates its location flow. |
| TaleWorlds.CampaignSystem.Encounters | [HideoutEncounter](../HideoutEncounter) | Marks a hideout as the active location encounter for its specialized combat/menu route. | At hideout entry and aftermath. |
| TaleWorlds.CampaignSystem.Encounters | [RetirementEncounter](../RetirementEncounter) | Represents the location-style encounter used by the retirement flow. | Only while the retirement interaction is active. |

## Navigation

- [Parent: Campaign-Ext](..)
- [Siblings: MapEvents](../mapevents), [GameMenus](../gamemenus), and [Dialogs](../dialogs)
- [Related: Actions](../actions), [Settlements](../settlements), and [Mission](../../mission)
