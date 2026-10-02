---
title: "EmpireConspiracyBeginsSceneNotificationItem"
description: "EmpireConspiracyBeginsSceneNotificationItem：TaleWorlds.CampaignSystem 的 public 类，继承 SceneNotificationData；公开成员 8 个（方法 2、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/EmpireConspiracyBeginsSceneNotificationItem.cs。"
---
# EmpireConspiracyBeginsSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class EmpireConspiracyBeginsSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/EmpireConspiracyBeginsSceneNotificationItem.cs`

## 概述

EmpireConspiracyBeginsSceneNotificationItem 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/EmpireConspiracyBeginsSceneNotificationItem.cs。它是一个 public 类，实现/继承 SceneNotificationData，继承链为 EmpireConspiracyBeginsSceneNotificationItem → SceneNotificationData。public/protected 成员共 8 个：2 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EmpireConspiracyBeginsSceneNotificationItem 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.SceneInformationPopupTypes），继承链 EmpireConspiracyBeginsSceneNotificationItem → SceneNotificationData。成员构成以属性为主（属性 5/8，方法 2/8），对外主要以状态读取接口暴露。继承链上的 SceneNotificationData 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SceneInformationPopupTypes/EmpireConspiracyBeginsSceneNotificationItem.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerHero` | `public Hero PlayerHero` | 属性 |
| `Empire` | `public Kingdom Empire` | 属性 |
| `IsConspiracyAgainstEmpire` | `public bool IsConspiracyAgainstEmpire` | 属性 |
| `SceneID` | `public override string SceneID` | 属性 |
| `TitleText` | `public override TextObject TitleText` | 属性 |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | 方法 |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | 方法 |
| `EmpireConspiracyBeginsSceneNotificationItem` | `public EmpireConspiracyBeginsSceneNotificationItem(Hero playerHero, Kingdom empire, bool isConspiracyAgainstEmpire)` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [同命名空间 BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [同命名空间 CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [同命名空间 ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
