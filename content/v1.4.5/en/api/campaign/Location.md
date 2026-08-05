---
title: "Location"
description: "Location is one node in a settlement's campaign-location graph, owning scene data, passage links, location characters, reservations, and access rules."
---
# Location

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Location`  
**Base:** none  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/Location.cs`

## One-sentence responsibility

It represents a named settlement node such as `center`, `tavern`, `prison`, or `village_center`, and owns the characters, passages, scene variants, access delegates, reservation state, and special items for that node.

## Mental Model

`Location` is not a scene and not a Mission. It is the campaign-side node that [LocationComplex](../LocationComplex) builds from a [LocationComplexTemplate](../LocationComplexTemplate). The node keeps the data needed to decide whether a player or Agent may enter, which scene name corresponds to an upgrade level, and which `LocationCharacter` descriptors currently belong there. A Mission later consumes this graph through `CampaignMission.Current.Location` and SandBox mission logic.

The owner complex matters. `AddCharacter` uses it to remove an existing hero descriptor before adding the new one; `AddPassageToLocation` only adds one directed list entry, while `LocationComplex.AddPassage` is the safe symmetric operation. `Location` also lazy-loads access delegates from XML type/method strings, so its public methods are data-driven and only valid after the template and assemblies have been loaded.

## When to use and when not to use

- Read a location from `Settlement.CurrentSettlement.LocationComplex.GetLocationWithId("center")` or another source-defined ID; do not guess a node from a scene filename.
- Use `CanPlayerEnter`, `CanPlayerSee`, `CanAIEnter`, and `CanAIExit` before an encounter or passage flow commits to a transition.
- Use `GetSceneName` or the owning complex's `GetScene` when an existing encounter has already selected the correct upgrade level and mission mode.
- Use `LocationComplex.ChangeLocation` for movement and `LocationEncounter` for accompanying-player ownership. Call `AddCharacter` directly only when the behavior is deliberately adding a descriptor to this node.
- Do not treat `Location` as a general inventory container, Agent registry, or saveable scene object. `SpecialItems` is the location's special-item spawn list, not a party [ItemRoster](../ItemRoster).
- Do not call `RemoveCharacter(Hero)` unless the hero is known to be present; the source uses `First` and can throw when the descriptor is absent.

## Dependencies

```text
LocationComplexTemplate XML
  -> LocationComplex
  -> Location nodes and passage graph
  -> LocationCharacter descriptors
  -> MissionAgentHandler / CampaignMission.Current
  -> scene and Agent transitions
```

- Graph owner: [LocationComplex](../LocationComplex) creates, initializes, queries, and moves nodes.
- Template: [LocationComplexTemplate](../LocationComplexTemplate) supplies IDs, names, access expressions, and scene names.
- Characters: [LocationCharacter](../LocationCharacter) is the stored spawn descriptor.
- Mission bridge: [CampaignMission](../CampaignMission), [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent), and [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) consume the active location.
- Campaign owner: [Settlement](../Settlement) owns the complex used by the current settlement encounter.

## State and method groups

| Area | Members and source-backed behavior |
|---|---|
| Identity and display | `StringId`, `Name`, `DoorName`, `IsIndoor`, `ProsperityMax`. `Name` and `DoorName` prefer reservation overrides; the IDs are the stable lookup keys. |
| Access and reservation | `CanPlayerEnter`, `CanPlayerSee`, `CanAIEnter`, `CanAIExit` invoke lazily deserialized delegates. `ReserveLocation` only works when `CanBeReserved` is true and changes display names; `RemoveReservation` restores the template names. |
| Scene variants | `GetSceneName(upgradeLevel)` selects one of four names and falls back to index `0` when the selected entry is empty. `SetSceneName` and `GetSceneCount` are setup/inspection operations. |
| Characters | `AddCharacter`, `AddLocationCharacter`, `AddLocationCharacters`, `GetCharacterList`, `GetLocationCharacter`, `ContainsCharacter`, and removal methods manage descriptors, not live Agents. Adding a hero removes its previous descriptor through the owner complex. |
| Passages | `LocationsOfPassages`, `AddPassageToLocation`, and `GetPassageToLocation` describe adjacent nodes. Use `LocationComplex.AddPassage` to update both directions. |
| Special items | `SpecialItems` and `AddSpecialItem` hold location-specific spawn items. They do not mutate a party roster. |
| Lifecycle state | `IsInitialized` is set by `Initialize` for saved-campaign reconstruction; `IsReserved` and `SpecialItems` are save-visible fields, while access delegates and character caches are runtime concerns. |

## Real example

This reads a real settlement node and its scene data without inventing a `Location` or bypassing the encounter's ownership:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Locations;

Settlement settlement = Settlement.CurrentSettlement;
LocationComplex complex = settlement?.LocationComplex;
Location center = complex?.GetLocationWithId("center");

if (center != null && center.CanPlayerEnter())
{
    string scene = center.GetSceneName(0);
    int occupants = center.CharacterCount;
}
```

When an existing encounter has selected a wall or upgrade level, it uses the same node with that level, for example `settlement.LocationComplex.GetScene("center", upgradeLevel)` before handing the scene to `CampaignMission.OpenIndoorMission(nextLocation.GetSceneName(wallLevel), wallLevel, nextLocation, talkToChar)`. The `Location` lookup does not itself open the Mission or validate that the selected scene matches the encounter mode.

## Risks and save boundaries

- Access strings come from XML and are resolved with reflection on first use. Missing assemblies, malformed type/method text, or a null delegate can fail when `Can*` is called rather than when the object is constructed.
- `GetSceneName` indexes a four-element array without validating `upgradeLevel`. Use the upgrade range provided by the owning settlement flow.
- `AddPassageToLocation` is one-sided; a one-sided link makes AI passage and player door logic disagree. Prefer `LocationComplex.AddPassage(first, second)`.
- `AddCharacter` and `ChangeLocation` preserve hero uniqueness and mission callbacks. Manually editing `_characterList` is impossible from a mod and duplicating descriptors outside the owner graph is unsafe.
- A location's character descriptor is not a live Agent. After mission teardown, do not retain an Agent or scene reference just because the campaign node remains.
- `RemoveAllCharacters` and `RemoveAllHeroCharactersFromPrison` are destructive graph mutations. Use the owning campaign behavior's intended cleanup path, especially when a save or encounter may still refer to accompanying characters.

## Version note

This page follows v1.4.5 `Location.cs`, `Settlement.Deserialize`, and SandBox location/mission call sites. Location IDs, four-level scene fallback, access-expression names, and reservation behavior should be rechecked for another version.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [LocationComplex](../LocationComplex) · [LocationCharacter](../LocationCharacter) · [LocationComplexTemplate](../LocationComplexTemplate)
- Related: [Settlement](../Settlement) · [CampaignMission](../CampaignMission) · [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) · [LocationEncounter](../LocationEncounter)
