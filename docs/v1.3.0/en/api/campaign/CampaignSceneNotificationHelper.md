<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignSceneNotificationHelper`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignSceneNotificationHelper

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignSceneNotificationHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`

## Overview

`CampaignSceneNotificationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CampaignSceneNotificationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBodyguardOfCulture
`public static SceneNotificationData.SceneNotificationCharacter GetBodyguardOfCulture(CultureObject culture)`

**Purpose:** Gets the current value of `bodyguard of culture`.

### RemoveWeaponsFromEquipment
`public static void RemoveWeaponsFromEquipment(ref Equipment equipment, bool removeHelmet = false, bool removeShoulder = false)`

**Purpose:** Removes `weapons from equipment` from the current collection or state.

### GetChildStageEquipmentIDFromCulture
`public static string GetChildStageEquipmentIDFromCulture(CultureObject childCulture)`

**Purpose:** Gets the current value of `child stage equipment i d from culture`.

### GetRandomTroopForCulture
`public static CharacterObject GetRandomTroopForCulture(CultureObject culture)`

**Purpose:** Gets the current value of `random troop for culture`.

### GetMilitaryAudienceForHero
`public static IEnumerable<Hero> GetMilitaryAudienceForHero(Hero hero, bool includeClanLeader = true, bool onlyClanMembers = false)`

**Purpose:** Gets the current value of `military audience for hero`.

### GetMilitaryAudienceForKingdom
`public static IEnumerable<Hero> GetMilitaryAudienceForKingdom(Kingdom kingdom, bool includeKingdomLeader = true)`

**Purpose:** Gets the current value of `military audience for kingdom`.

### GetFormalDayAndSeasonText
`public static TextObject GetFormalDayAndSeasonText(CampaignTime time)`

**Purpose:** Gets the current value of `formal day and season text`.

### GetFormalNameForKingdom
`public static TextObject GetFormalNameForKingdom(Kingdom kingdom)`

**Purpose:** Gets the current value of `formal name for kingdom`.

### CreateNotificationCharacterFromHero
`public static SceneNotificationData.SceneNotificationCharacter CreateNotificationCharacterFromHero(Hero hero, Equipment overridenEquipment = null, bool useCivilian = false, BodyProperties overriddenBodyProperties = default(BodyProperties), uint overriddenColor1 = 4294967295U, uint overriddenColor2 = 4294967295U, bool useHorse = false)`

**Purpose:** Creates a new `notification character from hero` instance or object.

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship)`

**Purpose:** Creates a new `notification ship from ship` instance or object.

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship, float hitPointRatio)`

**Purpose:** Creates a new `notification ship from ship` instance or object.

### GetDefaultHorseItem
`public static ItemObject GetDefaultHorseItem()`

**Purpose:** Gets the current value of `default horse item`.

## Usage Example

```csharp
CampaignSceneNotificationHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)