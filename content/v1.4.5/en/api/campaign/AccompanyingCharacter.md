---
title: "AccompanyingCharacter"
description: "AccompanyingCharacter is the encounter-scoped wrapper that decides which locations a companion may enter while accompanying the player."
---
# AccompanyingCharacter

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class AccompanyingCharacter`  
**Base:** none  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/AccompanyingCharacter.cs`

## One-sentence responsibility

It keeps a `LocationCharacter` attached to the current `LocationEncounter`, records whether that character should follow the player when the Mission starts, and filters the locations the character may enter.

## Mental Model

`AccompanyingCharacter` is encounter state, not a second Agent and not a campaign-wide companion record. `LocationEncounter.AddAccompanyingCharacter` creates it from an existing [LocationCharacter](../LocationCharacter), stores it in `CharactersAccompanyingPlayer`, and later mission logic uses the wrapper when moving that character into the active [Location](../Location).

The wrapper owns two different kinds of state. `LocationCharacter` identifies the intended character and its Agent-spawn recipe; `IsFollowingPlayerAtMissionStart` tells `MissionLocationLogic` whether to spawn the character beside the player and install follow behavior. The private disallowed-location list is a saved filter that is consulted by `CanEnterLocation` and by the predicate-based allow/disallow methods.

This means the object only makes sense while the same `PlayerEncounter.LocationEncounter` and settlement [LocationComplex](../LocationComplex) are alive. Removing the character from the encounter is the lifecycle operation; clearing a location list or keeping this wrapper after leaving the settlement does not replace that cleanup.

## When to use and when not to use

- Use `PlayerEncounter.LocationEncounter.AddAccompanyingCharacter` to create the wrapper for a character that has already been resolved to a `LocationCharacter`.
- Use `CanEnterLocation` before a location-transition flow decides whether to add the character to a destination. Use `AllowEntranceToLocations` or `DisallowEntranceToLocations` when a quest changes the allowed subset of the current location graph.
- Use `IsFollowingPlayerAtMissionStart` as mission-entry policy, not as a live Agent-follow query. The actual Agent and follow behavior are created later by mission logic.
- Do not construct one for a campaign save slot without a live `LocationCharacter`; it does not create an Agent, a `Hero`, or a `Location` membership.
- Do not call the predicate methods during campaign startup or after encounter teardown. They dereference `LocationComplex.Current` and assume an active location encounter.

## Dependencies

```text
PlayerEncounter.LocationEncounter
  -> LocationEncounter.AddAccompanyingCharacter(LocationCharacter, bool)
  -> AccompanyingCharacter
  -> MissionLocationLogic checks CanEnterLocation / IsFollowingPlayerAtMissionStart
  -> CampaignMission.Current and LocationComplex move the character in the Mission
```

- Owner: [LocationEncounter](../LocationEncounter) stores and removes the wrapper.
- Character recipe: [LocationCharacter](../LocationCharacter) supplies the character, origin, spawn tag, and behavior delegates.
- Location graph: [LocationComplex](../LocationComplex) supplies the locations traversed by the predicates.
- Mission bridge: [CampaignMission](../CampaignMission) and [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) expose the active Mission during location changes.
- Persistence: the wrapper's `IsFollowingPlayerAtMissionStart` and disallowed-location list participate in the campaign save schema; the live Agent does not become save data through this class.

## State and operations

| Member | Meaning and timing |
|---|---|
| `LocationCharacter` | The location character being accompanied. It is a public field assigned by the constructor; it does not move the character by itself. |
| `IsFollowingPlayerAtMissionStart` | Saveable read-only flag consumed when a location Mission spawns accompanying characters. `true` means the Mission may set up following at entry. |
| `CanEnterLocation(Location)` | Returns `false` only when the exact `Location` instance is in the disallowed list. It does not check scene readiness, player access, or Agent state. |
| `AllowEntranceToLocations(Func<Location, bool>)` | Removes matching locations from the current complex's disallowed list. The predicate is evaluated against every location in `LocationComplex.Current`. |
| `DisallowEntranceToLocations(Func<Location, bool>)` | Adds matching locations, without duplicates, to the current complex's disallowed list. |
| `AllowEntranceToAllLocations()` | Clears every location restriction for this wrapper. |
| `DisallowEntranceToAllLocations()` | Clears old restrictions and then adds every location in the current complex. It is an allow-list reset, not a permanent global lock. |

## Real example

This follows the same acquisition boundary used by SandBox campaign behavior: resolve a live hero to its existing location character, add that character to the current encounter, then restrict the wrapper to locations selected by the quest.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.Settlements.Locations;

LocationEncounter encounter = PlayerEncounter.LocationEncounter;
LocationComplex complex = LocationComplex.Current;
LocationCharacter member = complex?.GetLocationCharacterOfHero(Hero.MainHero);

if (encounter != null && complex != null && member != null)
{
    encounter.AddAccompanyingCharacter(member, isFollowing: true);
    AccompanyingCharacter accompanying = encounter.GetAccompanyingCharacter(member);
    accompanying?.DisallowEntranceToLocations(
        location => location.StringId == "prison");
}
```

The source campaign flow uses the same order when adding clan members: `AddAccompanyingCharacter` first creates the wrapper, then the behavior calls `DisallowEntranceToAllLocations` and selectively allows `center`, `village_center`, and `tavern`. The wrapper does not itself call `LocationComplex.ChangeLocation`; `MissionLocationLogic` performs that work when the Mission starts.

## Risks and save boundaries

- `AllowEntranceToLocations` and `DisallowEntranceToLocations` call `LocationComplex.Current.GetListOfLocations()` without a null guard. Calling them outside an active location encounter can fail before the predicate runs.
- Location checks use object identity. A `Location` from another settlement's complex is not interchangeable with the current complex's node even if both have the same `StringId`.
- `CanEnterLocation` is only this wrapper's restriction. It does not replace `Location.CanAIEnter`, `Location.CanPlayerEnter`, passage capacity, or Mission spawn-tag validation.
- Removing a `LocationCharacter` from a `Location` does not remove its `AccompanyingCharacter`. Use `LocationEncounter.RemoveAccompanyingCharacter` or its hero overload when the encounter no longer owns the companion.
- The wrapper contains saveable encounter policy, but `LocationCharacter`, Agent, scene, and navigation objects remain lifetime-bound. Do not store an engine Agent or a stale Mission reference in a campaign behavior.

## Version note

This page follows v1.4.5 `AccompanyingCharacter`, `LocationEncounter`, and `MissionLocationLogic`. The saveable field IDs, location allow-list behavior, and mission-entry follow policy should be rechecked when targeting another version.

## Navigation

- Parent: [Campaign API](../)
- Siblings: [Location](../Location) · [LocationCharacter](../LocationCharacter) · [LocationComplex](../LocationComplex)
- Related: [LocationEncounter](../LocationEncounter) · [CampaignMission](../CampaignMission) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)
