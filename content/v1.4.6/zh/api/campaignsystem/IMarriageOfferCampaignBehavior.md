---
title: "IMarriageOfferCampaignBehavior"
description: "IMarriageOfferCampaignBehavior：TaleWorlds.CampaignSystem 的 public 接口，继承 ICampaignBehavior；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IMarriageOfferCampaignBehavior.cs。"
---
# IMarriageOfferCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMarriageOfferCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IMarriageOfferCampaignBehavior.cs`

## 概述

IMarriageOfferCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/IMarriageOfferCampaignBehavior.cs。它是一个 public 接口，实现/继承 ICampaignBehavior，继承链为 IMarriageOfferCampaignBehavior → ICampaignBehavior。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMarriageOfferCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 IMarriageOfferCampaignBehavior → ICampaignBehavior。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/IMarriageOfferCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMarriageOfferedToPlayer` | `void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden);` | 方法 |
| `OnMarriageOfferCanceled` | `void OnMarriageOfferCanceled(Hero suitor, Hero maiden);` | 方法 |
| `MBBindingList` | `MBBindingList<TextObject>GetMarriageAcceptedConsequences();` | 方法 |
| `OnMarriageOfferAcceptedOnPopUp` | `void OnMarriageOfferAcceptedOnPopUp();` | 方法 |
| `OnMarriageOfferDeclinedOnPopUp` | `void OnMarriageOfferDeclinedOnPopUp();` | 方法 |
| `IsHeroEngaged` | `bool IsHeroEngaged(Hero hero);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ICampaignBehavior](../ICampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
