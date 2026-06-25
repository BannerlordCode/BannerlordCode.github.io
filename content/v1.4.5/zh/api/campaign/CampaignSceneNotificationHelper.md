---
title: "CampaignSceneNotificationHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignSceneNotificationHelper`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignSceneNotificationHelper

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignSceneNotificationHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`

## 概述

`CampaignSceneNotificationHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CampaignSceneNotificationHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBodyguardOfCulture
`public static SceneNotificationData.SceneNotificationCharacter GetBodyguardOfCulture(CultureObject culture)`

**用途 / Purpose:** 获取 `bodyguard of culture` 的当前值。

### RemoveWeaponsFromEquipment
`public static void RemoveWeaponsFromEquipment(ref Equipment equipment, bool removeHelmet = false, bool removeShoulder = false)`

**用途 / Purpose:** 从当前集合/状态中移除 `weapons from equipment`。

### GetChildStageEquipmentIDFromCulture
`public static string GetChildStageEquipmentIDFromCulture(CultureObject childCulture)`

**用途 / Purpose:** 获取 `child stage equipment i d from culture` 的当前值。

### GetRandomTroopForCulture
`public static CharacterObject GetRandomTroopForCulture(CultureObject culture)`

**用途 / Purpose:** 获取 `random troop for culture` 的当前值。

### GetMilitaryAudienceForHero
`public static IEnumerable<Hero> GetMilitaryAudienceForHero(Hero hero, bool includeClanLeader = true, bool onlyClanMembers = false)`

**用途 / Purpose:** 获取 `military audience for hero` 的当前值。

### GetMilitaryAudienceForKingdom
`public static IEnumerable<Hero> GetMilitaryAudienceForKingdom(Kingdom kingdom, bool includeKingdomLeader = true)`

**用途 / Purpose:** 获取 `military audience for kingdom` 的当前值。

### GetFormalDayAndSeasonText
`public static TextObject GetFormalDayAndSeasonText(CampaignTime time)`

**用途 / Purpose:** 获取 `formal day and season text` 的当前值。

### GetFormalNameForKingdom
`public static TextObject GetFormalNameForKingdom(Kingdom kingdom)`

**用途 / Purpose:** 获取 `formal name for kingdom` 的当前值。

### CreateNotificationCharacterFromHero
`public static SceneNotificationData.SceneNotificationCharacter CreateNotificationCharacterFromHero(Hero hero, Equipment overridenEquipment = null, bool useCivilian = false, BodyProperties overriddenBodyProperties = default(BodyProperties), uint overriddenColor1 = uint.MaxValue, uint overriddenColor2 = uint.MaxValue, bool useHorse = false)`

**用途 / Purpose:** 创建一个 `notification character from hero` 实例或对象。

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship)`

**用途 / Purpose:** 创建一个 `notification ship from ship` 实例或对象。

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship, float hitPointRatio)`

**用途 / Purpose:** 创建一个 `notification ship from ship` 实例或对象。

### GetDefaultHorseItem
`public static ItemObject GetDefaultHorseItem()`

**用途 / Purpose:** 获取 `default horse item` 的当前值。

## 使用示例

```csharp
CampaignSceneNotificationHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)