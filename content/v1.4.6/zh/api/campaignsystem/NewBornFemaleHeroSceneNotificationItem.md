---
title: "NewBornFemaleHeroSceneNotificationItem"
description: "NewBornFemaleHeroSceneNotificationItem：TaleWorlds.CampaignSystem 的 public 类，继承 SceneNotificationData；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/NewBornFemaleHeroSceneNotificationItem.cs。"
---
# NewBornFemaleHeroSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NewBornFemaleHeroSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/NewBornFemaleHeroSceneNotificationItem.cs`

## 概述

NewBornFemaleHeroSceneNotificationItem 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/NewBornFemaleHeroSceneNotificationItem.cs。它是一个 public 类，实现/继承 SceneNotificationData，继承链为 NewBornFemaleHeroSceneNotificationItem → SceneNotificationData。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NewBornFemaleHeroSceneNotificationItem 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.SceneInformationPopupTypes），继承链 NewBornFemaleHeroSceneNotificationItem → SceneNotificationData。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 SceneNotificationData 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/NewBornFemaleHeroSceneNotificationItem.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaleHero` | `public Hero MaleHero` | 属性 |
| `FemaleHero` | `public Hero FemaleHero` | 属性 |
| `SceneID` | `public override string SceneID` | 属性 |
| `TitleText` | `public override TextObject TitleText` | 属性 |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | 方法 |
| `NewBornFemaleHeroSceneNotificationItem` | `public NewBornFemaleHeroSceneNotificationItem(Hero maleHero, Hero femaleHero, CampaignTime creationTime)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [同命名空间 BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [同命名空间 CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [同命名空间 ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
