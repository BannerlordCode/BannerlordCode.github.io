---
title: "CampaignSceneNotificationHelper"
description: "CampaignSceneNotificationHelper：TaleWorlds.CampaignSystem.SceneInformationPopupTypes 的 public 类；公开成员 12 个（方法 12、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignSceneNotificationHelper

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class CampaignSceneNotificationHelper`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

CampaignSceneNotificationHelper 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs。它是一个 public 类，继承链为 CampaignSceneNotificationHelper。public/protected 成员共 12 个：12 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignSceneNotificationHelper 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`，继承链 CampaignSceneNotificationHelper。成员构成以方法为主（方法 12/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetBodyguardOfCulture` | `public static SceneNotificationData.SceneNotificationCharacter GetBodyguardOfCulture(CultureObject culture)` | 方法 |
| `RemoveWeaponsFromEquipment` | `public static void RemoveWeaponsFromEquipment(ref Equipment equipment, bool removeHelmet = false, bool removeShoulder = false)` | 方法 |
| `GetChildStageEquipmentIDFromCulture` | `public static string GetChildStageEquipmentIDFromCulture(CultureObject childCulture)` | 方法 |
| `GetRandomTroopForCulture` | `public static CharacterObject GetRandomTroopForCulture(CultureObject culture)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Hero>GetMilitaryAudienceForHero(Hero hero, bool includeClanLeader = true, bool onlyClanMembers = false)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Hero>GetMilitaryAudienceForKingdom(Kingdom kingdom, bool includeKingdomLeader = true)` | 方法 |
| `GetFormalDayAndSeasonText` | `public static TextObject GetFormalDayAndSeasonText(CampaignTime time)` | 方法 |
| `GetFormalNameForKingdom` | `public static TextObject GetFormalNameForKingdom(Kingdom kingdom)` | 方法 |
| `CreateNotificationCharacterFromHero` | `public static SceneNotificationData.SceneNotificationCharacter CreateNotificationCharacterFromHero(Hero hero, Equipment overridenEquipment = null, bool useCivilian = false, BodyProperties overriddenBodyProperties = default(BodyProperties), uint overriddenColor1 = 4294967295U, uint overriddenColor2 = 4294967295U, bool useHorse = false)` | 方法 |
| `CreateNotificationShipFromShip` | `public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship)` | 方法 |
| `CreateNotificationShipFromShip` | `public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship, float hitPointRatio)` | 方法 |
| `GetDefaultHorseItem` | `public static ItemObject GetDefaultHorseItem()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem/)
- [同命名空间 BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem/)
- [同命名空间 ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem/)
- [同命名空间 ClanMemberWarDeathSceneNotificationItem](../ClanMemberWarDeathSceneNotificationItem/)
