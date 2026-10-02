---
title: "CampaignSceneNotificationHelper"
description: "CampaignSceneNotificationHelper 的自动生成类参考。"
---
# CampaignSceneNotificationHelper

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignSceneNotificationHelper `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs

## 概述

`CampaignSceneNotificationHelper` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetBodyguardOfCulture
`public static SceneNotificationData.SceneNotificationCharacter GetBodyguardOfCulture(CultureObject culture) `

### RemoveWeaponsFromEquipment
`public static void RemoveWeaponsFromEquipment(ref Equipment equipment,bool removeHelmet = false,bool removeShoulder = false) `

### GetChildStageEquipmentIDFromCulture
`public static string GetChildStageEquipmentIDFromCulture(CultureObject childCulture) `

### GetRandomTroopForCulture
`public static CharacterObject GetRandomTroopForCulture(CultureObject culture) `

### GetMilitaryAudienceForHero
`public static IEnumerable<Hero> GetMilitaryAudienceForHero(Hero hero,bool includeClanLeader = true,bool onlyClanMembers = false) `

### GetMilitaryAudienceForKingdom
`public static IEnumerable<Hero> GetMilitaryAudienceForKingdom(Kingdom kingdom,bool includeKingdomLeader = true) `

### GetFormalDayAndSeasonText
`public static TextObject GetFormalDayAndSeasonText(CampaignTime time) `

### CreateNotificationCharacterFromHero
`public static SceneNotificationData.SceneNotificationCharacter CreateNotificationCharacterFromHero(Hero hero,Equipment overridenEquipment = null,bool useCivilian = false,BodyProperties overriddenBodyProperties = default(BodyProperties),uint overriddenColor1 = 4294967295U,uint overriddenColor2 = 4294967295U,bool useHorse = false) `

### CreateNotificationShipFromShip
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship) `
`public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship,float hitPointRatio) `

### GetDefaultHorseItem
`public static ItemObject GetDefaultHorseItem() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
