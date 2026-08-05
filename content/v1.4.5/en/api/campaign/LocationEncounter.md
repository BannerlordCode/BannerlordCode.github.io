---
title: "LocationEncounter"
description: "LocationEncounter is the short-lived settlement-location context that connects Settlement, LocationComplex, accompanying characters, and location Missions."
---
# LocationEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class LocationEncounter`  
**Base:** `object`  
**Source file:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/LocationEncounter.cs`

## One-sentence responsibility

It holds the player’s current settlement-location context and connects location characters, accompanying characters, and location Mission transitions.

## Mental model

`LocationEncounter` is not a location database and not a Campaign service that can be cached indefinitely. It is the session object held by `PlayerEncounter` while the player is active inside a settlement: `EnterSettlement` creates a `TownEncounter`, `VillageEncounter`, `CastleEncounter`, or `HideoutEncounter`, all of which derive from this class; leaving the settlement or finishing the encounter clears `PlayerEncounter.LocationEncounter`.

Its `Settlement` identifies the settlement for the session, while `CharactersAccompanyingPlayer` contains wrappers for characters that may enter the location Mission with the player. The location graph itself belongs to the settlement’s [LocationComplex](../LocationComplex). When a character crosses the active Mission location boundary through `LocationComplex.ChangeLocation`, this class can forward the change to [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent). Read it inside a live encounter or Mission; do not persist it or bypass the location graph by editing its list directly.

## Ownership and lifetime

```text
PlayerEncounter.EnterSettlement
  -> create a concrete LocationEncounter for the Settlement type
  -> expose it as PlayerEncounter.LocationEncounter
  -> LocationComplex / MissionLocationLogic use its settlement and companions
  -> PlayerEncounter.LeaveSettlement or encounter completion
  -> LocationEncounter = null
```

- `PlayerEncounter` creates the instance; a CampaignBehavior does not.
- The protected constructor fixes the `Settlement`; mods should not construct this base type.
- `CharactersAccompanyingPlayer` is managed by this object, but the underlying location characters remain owned by a `Location` in `LocationComplex`.
- `IsInsideOfASettlement` is a transient flag used by the current location Mission, not permanent settlement state.

## When to use and when not to

Use it when:

- A live settlement encounter needs its current `Settlement` or the player’s location companions.
- You already have a real `LocationCharacter` and need to add an accompanying wrapper or remove one by location character or Hero.
- The active location flow is moving to another location Mission and the concrete `TownEncounter`, `VillageEncounter`, or `CastleEncounter` implementation must create the Mission.

Do not use it this way:

- Do not call `new LocationEncounter(...)`; the constructor is protected, and `PlayerEncounter` chooses the concrete runtime type and settlement.
- Do not read it without an active `Campaign.Current`, `PlayerEncounter.Current`, and location context. The static entry can be `null`, and location callbacks depend on `CampaignMission.Current`.
- Do not treat `CharactersAccompanyingPlayer` as a persistent roster, and do not bypass `LocationComplex.ChangeLocation` by calling `OnCharacterLocationChanged` yourself.
- Do not assume the base `CreateAndOpenMissionController` opens a Mission. The base implementation returns `null`; concrete encounter types override it.

## Dependencies

```text
PlayerEncounter.EnterSettlement
  -> LocationEncounter / TownEncounter / VillageEncounter / CastleEncounter / HideoutEncounter
  -> Settlement.LocationComplex -> Location -> LocationCharacter
  -> MissionLocationLogic + MissionAgentHandler
  -> CampaignMissionComponent.OnCharacterLocationChanged
```

- Creation and entry: [PlayerEncounter](../PlayerEncounter), [Settlement](../Settlement), and [LocationComplex](../LocationComplex).
- Location state: [Location](../Location), [LocationCharacter](../LocationCharacter), and [AccompanyingCharacter](../AccompanyingCharacter).
- Mission consumers: [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent), [MissionLocationLogic](../../campaign-ext/MissionLocationLogic), and [MissionAgentHandler](../../campaign-ext/MissionAgentHandler).
- Concrete Mission factories: [TownEncounter](../TownEncounter), [VillageEncounter](../VillageEncounter), [CastleEncounter](../CastleEncounter), and [HideoutEncounter](../HideoutEncounter).

## Public members and timing

| Member | Actual meaning and side effects | Timing |
|---|---|---|
| `Settlement` | The `Settlement` owned by this location session; fixed at construction. | Read only while the location encounter is active. |
| `CharactersAccompanyingPlayer` | The current `AccompanyingCharacter` wrappers; its contents change when companions are added or removed. | Before entering or while running the location Mission. |
| `IsInsideOfASettlement` | A transient flag set by the location Mission flow for settlement entry. | Do not treat it as permanent settlement state. |
| `AddAccompanyingCharacter(LocationCharacter, bool)` | Deduplicates by the underlying `Character`, then creates a wrapper and records whether it follows the player at Mission start. | With a real `LocationCharacter` and a valid active encounter. |
| `GetAccompanyingCharacter(LocationCharacter)` | Finds a wrapper by the same `LocationCharacter` instance; returns `null` when absent. | Before spawning or removing the corresponding character. |
| `GetAccompanyingCharacter(CharacterObject)` | Finds a wrapper by its underlying character object. | When the call site has a `CharacterObject` rather than the location wrapper. |
| `RemoveAccompanyingCharacter(LocationCharacter)` | Removes the matching wrapper; it does not move the underlying character in `LocationComplex`. | When that location character leaves the companion set. |
| `RemoveAccompanyingCharacter(Hero)` | Searches backward and removes one wrapper for the Hero. | When a Hero Agent is removed and its companion state must be cleaned. |
| `RemoveAllAccompanyingCharacters()` | Clears every wrapper without rebuilding the location graph. | Encounter teardown or an explicit reset of the companion flow. |
| `OnCharacterLocationChanged(...)` | Forwards only a boundary crossing into or out of the active `CampaignMission` location to `CampaignMissionComponent`. | Indirectly through `LocationComplex.ChangeLocation`. |
| `IsWorkshopLocation(Location)` | Returns `false` in the base class; a concrete encounter may override it. | Use only when the concrete encounter’s location semantics matter. |
| `IsTavern(Location)` | Returns `false` in the base class; a concrete encounter may override it. | Do not infer all location types from the base return value. |
| `CreateAndOpenMissionController(...)` | Returns `null` in the base class; a concrete encounter selects the Mission factory from the location, scene, and conversation context. | Normally called by the settlement/menu flow, not replayed manually. |

## Real acquisition and companion example

This follows the game’s actual acquisition path: get the live session from `PlayerEncounter.LocationEncounter`, then use the settlement’s location graph to find the Hero’s `LocationCharacter`. It does nothing when the location session or character is not ready.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;

public static void EnsureMainHeroFollowsIntoLocation()
{
    LocationEncounter encounter = PlayerEncounter.LocationEncounter;
    if (encounter == null || encounter.Settlement == null)
    {
        return;
    }

    LocationComplex complex = encounter.Settlement.LocationComplex;
    LocationCharacter mainHero = complex?.GetLocationCharacterOfHero(Hero.MainHero);
    if (mainHero != null && encounter.GetAccompanyingCharacter(mainHero) == null)
    {
        encounter.AddAccompanyingCharacter(mainHero, isFollowing: true);
    }
}
```

`isFollowing: true` affects the follow behavior that `MissionLocationLogic` installs after the player Agent spawns; it does not spawn an Agent immediately. The active Mission’s location logic and `MissionAgentHandler` perform the actual spawn.

## Location changes and Mission creation

Move a location character through `LocationComplex.ChangeLocation`, because it updates the old location, the new location, AI passage state, and the active-Mission boundary callback together:

```csharp
LocationComplex complex = LocationComplex.Current;
if (complex != null && locationCharacter != null)
{
    complex.ChangeLocation(locationCharacter, fromLocation, toLocation);
}
```

When the menu enters the next location, the game passes `Campaign.Current.GameMenuManager.NextLocation` and `PreviousLocation` to the current concrete encounter’s `CreateAndOpenMissionController`. Do not interpret the base class’s `null` as permission to assign `CampaignMission.Current` yourself; let the relevant `TownEncounter`, `VillageEncounter`, or `CastleEncounter` select the correct `CampaignMission.Open...` entry point.

## Risks and save boundaries

- **Null context:** `PlayerEncounter.LocationEncounter` is `null` outside the settlement, after leaving it, or after encounter cleanup. Check the live context before reading `Settlement`, the companion list, or a concrete encounter type.
- **Callback phase:** `OnCharacterLocationChanged` directly reads `CampaignMission.Current.Location`. Calling it outside an active location Mission can cause a null reference or update the wrong Mission context.
- **Identity mismatch:** adding deduplicates by the underlying `Character`, while the `LocationCharacter` overloads look up the wrapper instance. Do not replace the location-graph instance with a copied wrapper and expect lookups to match.
- **Agent lifetime:** `AccompanyingCharacter` is a pre-Mission location wrapper. Its Agent, navigation, and scene references must not be cached in a CampaignBehavior after the Mission ends.
- **Persistence boundary:** `Settlement.LocationComplex` is part of the settlement graph, but the current encounter, companion list, and `IsInsideOfASettlement` belong to the active flow. Do not store them as custom Saveable fields.
- **Mission factory:** the base `IsWorkshopLocation`, `IsTavern`, and `CreateAndOpenMissionController` implementations are deliberately empty defaults. Check the runtime concrete type and its source when location-specific behavior is required.

## Version note

This page follows v1.4.5 `LocationEncounter.cs`, `PlayerEncounter.cs`, `LocationComplex.cs`, and the four concrete encounter implementations. When upgrading, recheck the `CreateLocationEncounter` dispatch, the cleanup order on settlement exit, and whether the location graph still owns `OnCharacterLocationChanged` forwarding.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [PlayerEncounter](../PlayerEncounter) · [LocationComplex](../LocationComplex) · [LocationCharacter](../LocationCharacter)
- Related: [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [MissionLocationLogic](../../campaign-ext/MissionLocationLogic) · [MissionAgentHandler](../../campaign-ext/MissionAgentHandler)
- 中文：[LocationEncounter](../../../../zh/api/campaign/LocationEncounter)
