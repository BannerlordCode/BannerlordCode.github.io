---
title: "MapEvents Family"
description: "Campaign-map battles, their participants and components, save ownership, and the transition into Mission combat."
---

# MapEvents Family

**One-sentence role:** A `MapEvent` is the campaign-owned battle record that gathers parties into attacker and defender sides, advances the encounter, and survives long enough for Mission results to be committed back to the world.

## Mental Model

The event is neither a menu nor a Mission. `MapEventManager` owns the saved list and ticks it; `MapEvent` owns two `MapEventSide` objects, their `MapEventParty` members, battle state, and event component. `PlayerEncounter` is the bridge when the main party participates: it opens combat or simulation, then lets the map event finalize and detach participants.

Read existing state through `MapEvent.PlayerMapEvent` when reacting to a player battle. Create or resolve world conflicts through [Actions](../actions), `EncounterManager`, and the relevant model boundaries. Do not create a naked `MapEvent` from a menu callback or call `FinalizeEvent` while the mission/result pipeline is still consuming it.

## Dependency Map

- Upstream: `PartyBase`, `MobileParty`, settlements, [Encounters](../encounters), `StartBattleAction`, and campaign models.
- Ownership: `Campaign.Current.MapEventManager` saves and updates registered map events; each side owns party battle accounting.
- Downstream: Mission deployment/simulation, [MapEvents](../mapevents) result handling, rewards, morale, casualties, sieges, and player encounter menus.
- Related: [Party](../party), [Settlements](../settlements), [GameMenus](../gamemenus), and [Campaign events](../CampaignEvents).

## Real Inspection Entry Point

```csharp
MapEvent mapEvent = MapEvent.PlayerMapEvent;
if (mapEvent != null && !mapEvent.IsFinalized)
{
    MapEventSide playerSide = mapEvent.GetMapEventSide(mapEvent.PlayerSide);
    int involved = mapEvent.GetNumberOfInvolvedMen(playerSide.MissionSide);
}
```

`PlayerMapEvent` is null outside a player battle. The value can become finalized as mission completion returns to campaign, so read it in the event/behaviour callback that needs it and do not retain it for later ticks.

## Timing And Risk Boundaries

`MapEventManager.OnMapEventCreated` places a new event into its saveable list, and the manager removes finalized events during its reverse tick. `MapEvent` contains saveable sides, parties, state, and battle data; direct roster edits during result application bypass casualty, reward, and event dispatch bookkeeping. Mission agents are not map-event troops and become invalid after Mission end. For save compatibility, keep custom persistent consequences in a behaviour and react to campaign events or completed action boundaries rather than serializing references to a transient event component.

## Map-Event Entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.MapEvents | [MapEvent](../../campaign/MapEvent) | Owns battle type, sides, state, settlement context, and finalization for one campaign conflict. | From registered creation until finalization. |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventManager](../MapEventManager) | Saves, locates, starts special events, updates active events, and removes finalized ones. | Campaign tick and action-driven event creation. |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventSide](../MapEventSide) | Aggregates one attacker or defender side's parties, troop allocation, strength, and surrender state. | During setup, simulation, Mission reporting, and resolution. |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventParty](../MapEventParty) | Tracks one party's contribution, casualties, rewards, and roster allocation inside its side. | After the party joins until battle accounting completes. |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventComponent](../MapEventComponent) | Supplies behavior that differentiates a field battle, raid, hideout, or special encounter. | Chosen as the event is initialized. |
| TaleWorlds.CampaignSystem.MapEvents | [FieldBattleEventComponent](../FieldBattleEventComponent) | Supplies normal open-field battle behavior. | Field-battle initialization and completion. |
| TaleWorlds.CampaignSystem.MapEvents | [RaidEventComponent](../RaidEventComponent) | Applies the village raid progression and its distinct result path. | While a raid event is active. |
| TaleWorlds.CampaignSystem.MapEvents | [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) | Represents a hostile demand for village supplies rather than a full battle. | During the force-supplies encounter branch. |
| TaleWorlds.CampaignSystem.MapEvents | [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) | Represents forced volunteer recruitment from a village. | During the force-volunteers branch. |
| TaleWorlds.CampaignSystem.MapEvents | [HideoutEventComponent](../HideoutEventComponent) | Marks hideout combat and its specialized mission/result handling. | From hideout attack setup through its result. |
| TaleWorlds.CampaignSystem.MapEvents | [SiegeAmbushEventComponent](../SiegeAmbushEventComponent) | Marks the ambush phase inside an ongoing siege. | Only during siege ambush setup and resolution. |
| TaleWorlds.CampaignSystem.MapEvents | [BlockadeBattleMapEvent](../BlockadeBattleMapEvent) | Adds blockade-specific map-event behavior to the component hierarchy. | When a blockade battle is initialized. |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventState](../MapEventState) | Names the event's lifecycle states used by update and battle handling. | When event state advances. |
| TaleWorlds.CampaignSystem.MapEvents | [MapEventResultExplainer](../MapEventResultExplainer) | Produces explanatory outcome values for battle-result presentation. | After a result is available for UI or reward feedback. |
| TaleWorlds.CampaignSystem.MapEvents | [IMapEventVisual](../IMapEventVisual) | Defines the campaign-map visual contract for a map event. | While the map layer renders an active event. |
| TaleWorlds.CampaignSystem.MapEvents | [BattleTypes](../BattleTypes) | Names the campaign battle categories used to choose component and Mission behavior. | When a map event is created and classified. |
| TaleWorlds.CampaignSystem.MapEvents | [PowerCalculationContext](../PowerCalculationContext) | Carries the parties and modifiers supplied to battle-power calculation models. | During setup and simulation power evaluation. |

## Navigation

- [Parent: Campaign-Ext](..)
- [Siblings: Encounters](../encounters), [Party](../party), and [Settlements](../settlements)
- [Related: Actions](../actions), [GameMenus](../gamemenus), and [Mission](../../mission)
