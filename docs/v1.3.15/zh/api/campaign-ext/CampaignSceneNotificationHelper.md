<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignSceneNotificationHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignSceneNotificationHelper

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignSceneNotificationHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`

## 概述

`CampaignSceneNotificationHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

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

## 使用示例

```csharp
// CampaignSceneNotificationHelper (Helper) 的典型用法
CampaignSceneNotificationHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)