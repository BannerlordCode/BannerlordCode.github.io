---
title: "CampaignSceneNotificationHelper"
description: "CampaignSceneNotificationHelper — class in TaleWorlds.CampaignSystem.SceneInformationPopupTypes. 12 public members (12 static)."
---

<!-- v147-skeleton -->
# CampaignSceneNotificationHelper

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class CampaignSceneNotificationHelper`  
**Source:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`

## Overview

`CampaignSceneNotificationHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (12): `GetBodyguardOfCulture`, `RemoveWeaponsFromEquipment`, `GetChildStageEquipmentIDFromCulture`, `GetRandomTroopForCulture`, `GetMilitaryAudienceForHero`, `GetMilitaryAudienceForKingdom`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateNotificationCharacterFromHero` | method (static) | Static entry point. Takes 4 arguments: `Hero hero`, `Equipment overridenEquipment`, `bool useCivilian`, `BodyProperties overriddenBodyProperties`. Returns `SceneNotificationData.SceneNotificationCharacter`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateNotificationShipFromShip` | method (static) | Static entry point. Takes 1 argument: `Ship ship`. Returns `SceneNotificationData.SceneNotificationShip`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateNotificationShipFromShip` | method (static) | Static entry point. Takes 2 arguments: `Ship ship`, `float hitPointRatio`. Returns `SceneNotificationData.SceneNotificationShip`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetBodyguardOfCulture` | method (static) | Static entry point. Takes 1 argument: `CultureObject culture`. Returns `SceneNotificationData.SceneNotificationCharacter`. Read path: prefer it over reaching for the backing store. |
| `GetChildStageEquipmentIDFromCulture` | method (static) | Static entry point. Takes 1 argument: `CultureObject childCulture`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetDefaultHorseItem` | method (static) | Static entry point. Takes no arguments. Returns `ItemObject`. Read path: prefer it over reaching for the backing store. |
| `GetFormalDayAndSeasonText` | method (static) | Static entry point. Takes 1 argument: `CampaignTime time`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetFormalNameForKingdom` | method (static) | Static entry point. Takes 1 argument: `Kingdom kingdom`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetMilitaryAudienceForHero` | method (static) | Static entry point. Takes 3 arguments: `Hero hero`, `bool includeClanLeader`, `bool onlyClanMembers`. Returns `IEnumerable<Hero>`. Read path: prefer it over reaching for the backing store. |
| `GetMilitaryAudienceForKingdom` | method (static) | Static entry point. Takes 2 arguments: `Kingdom kingdom`, `bool includeKingdomLeader`. Returns `IEnumerable<Hero>`. Read path: prefer it over reaching for the backing store. |
| `GetRandomTroopForCulture` | method (static) | Static entry point. Takes 1 argument: `CultureObject culture`. Returns `CharacterObject`. Read path: prefer it over reaching for the backing store. |
| `RemoveWeaponsFromEquipment` | method (static) | Static entry point. Takes 3 arguments: `ref Equipment equipment`, `bool removeHelmet`, `bool removeShoulder`. Removes from or clears the collection this type owns. |

## Usage Example

```csharp
// Static entry points on CampaignSceneNotificationHelper:
CampaignSceneNotificationHelper.GetBodyguardOfCulture(culture);
CampaignSceneNotificationHelper.RemoveWeaponsFromEquipment(theTarget, removeHelmet, removeShoulder);
CampaignSceneNotificationHelper.GetChildStageEquipmentIDFromCulture(childCulture);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [SceneNotificationData](../../core-extra/SceneNotificationData/) — `TaleWorlds.Core`.
- [CharacterRelationManager](../CharacterRelationManager/) — `TaleWorlds.CampaignSystem`.
- [Ship](../Ship/) — `TaleWorlds.CampaignSystem.Naval`.

Section: [api/campaign/](../) — the other types in this bucket.
