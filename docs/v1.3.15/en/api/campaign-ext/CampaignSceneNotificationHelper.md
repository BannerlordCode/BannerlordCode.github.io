<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignSceneNotificationHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignSceneNotificationHelper

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignSceneNotificationHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`

## Overview

`CampaignSceneNotificationHelper` is a static utility class providing helper methods.

## Key Methods

### GetBodyguardOfCulture
```csharp
public static SceneNotificationData.SceneNotificationCharacter GetBodyguardOfCulture(CultureObject culture)
```

### RemoveWeaponsFromEquipment
```csharp
public static void RemoveWeaponsFromEquipment(ref Equipment equipment, bool removeHelmet = false, bool removeShoulder = false)
```

### GetChildStageEquipmentIDFromCulture
```csharp
public static string GetChildStageEquipmentIDFromCulture(CultureObject childCulture)
```

### GetRandomTroopForCulture
```csharp
public static CharacterObject GetRandomTroopForCulture(CultureObject culture)
```

### GetMilitaryAudienceForHero
```csharp
public static IEnumerable<Hero> GetMilitaryAudienceForHero(Hero hero, bool includeClanLeader = true, bool onlyClanMembers = false)
```

### GetMilitaryAudienceForKingdom
```csharp
public static IEnumerable<Hero> GetMilitaryAudienceForKingdom(Kingdom kingdom, bool includeKingdomLeader = true)
```

### GetFormalDayAndSeasonText
```csharp
public static TextObject GetFormalDayAndSeasonText(CampaignTime time)
```

### GetFormalNameForKingdom
```csharp
public static TextObject GetFormalNameForKingdom(Kingdom kingdom)
```

### CreateNotificationCharacterFromHero
```csharp
public static SceneNotificationData.SceneNotificationCharacter CreateNotificationCharacterFromHero(Hero hero, Equipment overridenEquipment = null, bool useCivilian = false, BodyProperties overriddenBodyProperties = default(BodyProperties), uint overriddenColor1 = 4294967295U, uint overriddenColor2 = 4294967295U, bool useHorse = false)
```

### CreateNotificationShipFromShip
```csharp
public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship)
```

### CreateNotificationShipFromShip
```csharp
public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship, float hitPointRatio)
```

### GetDefaultHorseItem
```csharp
public static ItemObject GetDefaultHorseItem()
```

## Usage Example

```csharp
// Typical usage of CampaignSceneNotificationHelper (Helper)
CampaignSceneNotificationHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)