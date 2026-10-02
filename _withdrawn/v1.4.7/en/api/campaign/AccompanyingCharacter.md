---
title: "AccompanyingCharacter"
description: "AccompanyingCharacter — class in TaleWorlds.CampaignSystem.Settlements.Locations. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# AccompanyingCharacter

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class AccompanyingCharacter`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Locations/AccompanyingCharacter.cs`

## Overview

`AccompanyingCharacter` is a named type in the TaleWorlds.CampaignSystem.Settlements.Locations namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AccompanyingCharacter`.
- **Instance members** (5): `CanEnterLocation`, `AllowEntranceToLocations`, `DisallowEntranceToLocations`, `AllowEntranceToAllLocations`, `DisallowEntranceToAllLocations`.
- **Data and constants** (1): `LocationCharacter`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AllowEntranceToAllLocations` | method | Instance entry point. Takes no arguments. |
| `AllowEntranceToLocations` | method | Instance entry point. Takes 2 arguments: `Func<Location`, `bool> predicate`. |
| `CanEnterLocation` | method | Instance entry point. Takes 1 argument: `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DisallowEntranceToAllLocations` | method | Instance entry point. Takes no arguments. |
| `DisallowEntranceToLocations` | method | Instance entry point. Takes 2 arguments: `Func<Location`, `bool> predicate`. |
| `AccompanyingCharacter` | ctor | Instance entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `bool isFollowingPlayerAtMissionStart`. Returns ``. |
| `LocationCharacter` | field | Instance entry point `LocationCharacter` field — direct storage with no validation or notification. |

- Constructed as `public AccompanyingCharacter(LocationCharacter locationCharacter, bool isFollowingPlayerAtMissionStart)`.

## Usage Example

```csharp
var accompanyingCharacter = new AccompanyingCharacter(locationCharacter, isFollowingPlayerAtMissionStart);
accompanyingCharacter.CanEnterLocation(location);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Locations/AccompanyingCharacter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LocationCharacter](../LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Location](../Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationComplex](../LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.

Section: [api/campaign/](../) — the other types in this bucket.
