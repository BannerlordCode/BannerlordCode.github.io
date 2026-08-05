---
title: "LocationComplex"
description: "LocationComplex is the settlement location graph that owns nodes, passages, location characters, access policies, and active encounter movement."
---
# LocationComplex

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class LocationComplex`  
**Base:** none  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/LocationComplex.cs`

## One-sentence responsibility

It owns the settlement's `Location` graph, creates symmetric passages, finds and moves `LocationCharacter` descriptors, chooses scene names, and exposes the current settlement graph during a location encounter.

## Mental Model

Think of `LocationComplex` as a graph, not as one interior scene. Its private saved dictionary maps IDs such as `center`, `tavern`, `prison`, and `village_center` to [Location](../Location) nodes; each node owns characters and adjacent passage references. A [LocationComplexTemplate](../LocationComplexTemplate) creates the initial graph, while `Settlement.Deserialize` applies settlement-specific scene names and saved-campaign initialization.

`LocationComplex.Current` is a derived convenience property. It returns `PlayerEncounter.LocationEncounter.Settlement.LocationComplex` when an encounter exists and otherwise returns `null`. It is not a singleton store and it is not safe to use during campaign idle ticks. `ChangeLocation` is the important runtime boundary: it removes from the old node, adds to the new node, applies location-entry rules, and notifies the active `CampaignMission` when the change crosses the current mission location.

## When to use and when not to use

- Use `Settlement.CurrentSettlement.LocationComplex` when the settlement is known, and use `LocationComplex.Current` only inside an active location encounter.
- Use `GetLocationWithId`, `GetLocationOfCharacter`, and `GetLocationCharacterOfHero` to resolve existing graph objects before changing them.
- Use `ChangeLocation` for a character transition and `AddPassage` for graph construction. These methods preserve the owner graph and the encounter callback boundary.
- Use `GetScene` only after the caller has selected a real location ID and upgrade level for the current settlement; it is a lookup helper, not a mission factory.
- Do not call `AgentPassageUsageTick` from a generic campaign tick. The source assumes `CampaignMission.Current` and the current mission location exist.
- Do not create a new complex for an active settlement just to change one character. The settlement and encounter already own the graph, and replacing it can disconnect saved location state.

## Dependencies

```text
LocationComplexTemplate / Settlement XML
  -> LocationComplex._locations
  -> Location nodes + bidirectional passages
  -> LocationCharacter lists
  -> LocationComplex.Current from PlayerEncounter
  -> CampaignMission.Current / MissionLocationLogic / MissionAgentHandler
```

- Data source: [LocationComplexTemplate](../LocationComplexTemplate) and [Settlement](../Settlement) build or initialize the graph.
- Node state: [Location](../Location) stores access, scenes, passages, and character descriptors.
- Character state: [LocationCharacter](../LocationCharacter) and [AccompanyingCharacter](../AccompanyingCharacter) define who may enter or move.
- Mission bridge: [CampaignMission](../CampaignMission), [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent), and [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) consume movement during a Mission.
- Encounter owner: [LocationEncounter](../LocationEncounter) determines `Current` and receives location-change callbacks.

## Public surface

| Area | Members and timing |
|---|---|
| Current graph | `Current` resolves the complex through `PlayerEncounter.LocationEncounter`; it returns null outside an active encounter. |
| Access policies | `CanAlways`, `CanNever`, `CanIfHero`, `CanIfDay`, `CanIfPriceIsPaid`, `CanIfGrownUpMaleOrHero`, `CanIfMaleOrHero`, and `CanIfSettlementAccessModelLetsPlayer` are delegate targets referenced by location XML. They read campaign, settlement, age, bribe, and access models. |
| Construction | `LocationComplex(LocationComplexTemplate)`, the copy constructor, and `Initialize` create or rebuild nodes and passages. `Initialize` removes nodes that are not initialized in the saved-campaign path. |
| Graph mutation | `AddPassage` adds both directions. `ChangeLocation` moves a descriptor and invokes `LocationEncounter.OnCharacterLocationChanged` when the active mission boundary is crossed. |
| Enumeration and lookup | `GetListOfLocations`, `GetListOfCharacters`, `GetListOfCharactersInLocation`, `GetLocationWithId`, `FindAll`, `FindCharacter`, `GetLocationOfCharacter`, `GetLocationCharacterOfHero`, and `GetFirstLocationCharacterOfCharacter` query the graph. |
| Runtime movement | `AgentPassageUsageTick` randomly selects a non-fixed character and moves it through an allowed, non-full passage; it skips stealth mode and assumes a live campaign Mission. |
| Cleanup | `RemoveCharacterIfExists` overloads remove a hero or descriptor from its current node; `ClearTempCharacters` clears every node's character list. |
| Scene lookup | `GetScene(string, int)` delegates to the selected node's `GetSceneName`; a missing ID is a caller error and can produce a null dereference. |

## Real example

The source campaign behavior resolves an existing hero descriptor, finds its current node, and moves it through the same graph API:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;

LocationComplex complex = LocationComplex.Current;
LocationCharacter heroCharacter = complex?.GetLocationCharacterOfHero(Hero.MainHero);
Location tavern = complex?.GetLocationWithId("tavern");

if (complex != null && heroCharacter != null && tavern != null)
{
    Location from = complex.GetLocationOfCharacter(heroCharacter);
    if (from != tavern && tavern.CanAIEnter(heroCharacter))
    {
        complex.ChangeLocation(heroCharacter, from, tavern);
    }
}
```

For scene selection, a settlement encounter similarly uses `settlement.LocationComplex.GetScene("center", upgradeLevel)` and then passes the result to `CampaignMission.OpenIndoorMission(nextLocation.GetSceneName(wallLevel), wallLevel, nextLocation, talkToChar)`. The graph supplies the scene; it does not decide whether the requested mission type is a battle, conversation, or settlement interior.

## Risks and save boundaries

- `LocationComplex.Current` is null without a `PlayerEncounter.LocationEncounter`; `AgentPassageUsageTick` additionally dereferences `CampaignMission.Current` without checking it.
- `AddPassage` expects both locations to belong to this complex. Passing null or nodes from different complexes corrupts the graph or fails immediately.
- `ChangeLocation` can invoke `CampaignMission.Current.OnCharacterLocationChanged`; call it only on the game thread during the active encounter lifecycle, not from save-load or background work.
- `GetLocationWithId` returns null for an unknown ID, while `GetScene` immediately dereferences the result. Validate IDs before selecting a scene.
- `ClearTempCharacters` removes every location descriptor, including characters that later mission logic expects to spawn. It is a lifecycle cleanup operation, not a convenient reset button.
- The graph is part of settlement/campaign state, while Mission Agents and scene objects are transient. Do not save an engine Agent or replace the settlement complex to persist a campaign fact.

## Version note

This page follows v1.4.5 `LocationComplex.cs`, `Settlement.Deserialize`, and SandBox/CampaignSystem location movement call sites. Location IDs, access policy methods, save initialization, and mission callback timing should be rechecked for another version.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [Location](../Location) · [LocationCharacter](../LocationCharacter) · [LocationComplexTemplate](../LocationComplexTemplate)
- Related: [Settlement](../Settlement) · [LocationEncounter](../LocationEncounter) · [CampaignMission](../CampaignMission) · [MissionAgentHandler](../../campaign-ext/MissionAgentHandler)
