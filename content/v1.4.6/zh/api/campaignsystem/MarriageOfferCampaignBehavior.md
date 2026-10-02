---
title: "MarriageOfferCampaignBehavior"
description: "MarriageOfferCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、IMarriageOfferCampaignBehavior；公开成员 9 个（方法 9、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs。"
---
# MarriageOfferCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MarriageOfferCampaignBehavior : CampaignBehaviorBase, IMarriageOfferCampaignBehavior, ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs`

## 概述

MarriageOfferCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IMarriageOfferCampaignBehavior、ICampaignBehavior，继承链为 MarriageOfferCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 9 个：9 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MarriageOfferCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 MarriageOfferCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 9/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/MarriageOfferCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `CreateMarriageOffer` | `public void CreateMarriageOffer(Hero currentOfferedPlayerClanHero, Hero currentOfferedOtherClanHero)` | 方法 |
| `MBBindingList` | `public MBBindingList<TextObject>GetMarriageAcceptedConsequences()` | 方法 |
| `OnMarriageOfferAcceptedOnPopUp` | `public void OnMarriageOfferAcceptedOnPopUp()` | 方法 |
| `OnMarriageOfferedToPlayer` | `public void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)` | 方法 |
| `OnMarriageOfferDeclinedOnPopUp` | `public void OnMarriageOfferDeclinedOnPopUp()` | 方法 |
| `OnMarriageOfferCanceled` | `public void OnMarriageOfferCanceled(Hero suitor, Hero maiden)` | 方法 |
| `IsHeroEngaged` | `public bool IsHeroEngaged(Hero hero)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMarriageOfferCampaignBehavior](../IMarriageOfferCampaignBehavior)
- [基类/接口 ICampaignBehavior](../ICampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
