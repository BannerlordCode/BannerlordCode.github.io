---
title: "CampaignSceneNotificationHelper"
description: "CampaignSceneNotificationHelper 的自动生成类参考。"
---
# CampaignSceneNotificationHelper

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignSceneNotificationHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`

## 概述

`CampaignSceneNotificationHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CampaignSceneNotificationHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBodyguardOfCulture
`public static SceneNotificationData.SceneNotificationCharacter GetBodyguardOfCulture(CultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 bodyguard of culture 的结果。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.GetBodyguardOfCulture(culture);
```

### RemoveWeaponsFromEquipment
`public static void RemoveWeaponsFromEquipment(ref Equipment equipment, bool removeHelmet = false, bool removeShoulder = false)`

**用途 / Purpose:** 从当前容器或状态中移除 weapons from equipment。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.RemoveWeaponsFromEquipment(equipment, false, false);
```

### GetChildStageEquipmentIDFromCulture
`public static string GetChildStageEquipmentIDFromCulture(CultureObject childCulture)`

**用途 / Purpose:** 读取并返回当前对象中 child stage equipment i d from culture 的结果。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.GetChildStageEquipmentIDFromCulture(childCulture);
```

### GetRandomTroopForCulture
`public static CharacterObject GetRandomTroopForCulture(CultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 random troop for culture 的结果。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.GetRandomTroopForCulture(culture);
```

### GetMilitaryAudienceForHero
`public static IEnumerable<Hero> GetMilitaryAudienceForHero(Hero hero, bool includeClanLeader = true, bool onlyClanMembers = false)`

**用途 / Purpose:** 读取并返回当前对象中 military audience for hero 的结果。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.GetMilitaryAudienceForHero(hero, false, false);
```

### GetMilitaryAudienceForKingdom
`public static IEnumerable<Hero> GetMilitaryAudienceForKingdom(Kingdom kingdom, bool includeKingdomLeader = true)`

**用途 / Purpose:** 读取并返回当前对象中 military audience for kingdom 的结果。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.GetMilitaryAudienceForKingdom(kingdom, false);
```

### GetFormalDayAndSeasonText
`public static TextObject GetFormalDayAndSeasonText(CampaignTime time)`

**用途 / Purpose:** 读取并返回当前对象中 formal day and season text 的结果。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.GetFormalDayAndSeasonText(time);
```

### GetFormalNameForKingdom
`public static TextObject GetFormalNameForKingdom(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 formal name for kingdom 的结果。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.GetFormalNameForKingdom(kingdom);
```

### CreateNotificationCharacterFromHero
`public static SceneNotificationData.SceneNotificationCharacter CreateNotificationCharacterFromHero(Hero hero, Equipment overridenEquipment = null, bool useCivilian = false, BodyProperties overriddenBodyProperties = default(BodyProperties), uint overriddenColor1 = uint.MaxValue, uint overriddenColor2 = uint.MaxValue, bool useHorse = false)`

**用途 / Purpose:** 构建一个新的 notification character from hero 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.CreateNotificationCharacterFromHero(hero, null, false, default(BodyProperties), 0, 0, false);
```

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship)`

**用途 / Purpose:** 构建一个新的 notification ship from ship 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.CreateNotificationShipFromShip(ship);
```

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship, float hitPointRatio)`

**用途 / Purpose:** 构建一个新的 notification ship from ship 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.CreateNotificationShipFromShip(ship, 0);
```

### GetDefaultHorseItem
`public static ItemObject GetDefaultHorseItem()`

**用途 / Purpose:** 读取并返回当前对象中 default horse item 的结果。

```csharp
// 静态调用，不需要实例
CampaignSceneNotificationHelper.GetDefaultHorseItem();
```

## 使用示例

```csharp
CampaignSceneNotificationHelper.Initialize();
```

## 参见

- [本区域目录](../)