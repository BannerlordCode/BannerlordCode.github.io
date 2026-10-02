---
title: "RetrainOutlawPartyMembersBehavior"
description: "RetrainOutlawPartyMembersBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、IRetrainOutlawPartyMembersCampaignBehavior；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/RetrainOutlawPartyMembersBehavior.cs。"
---
# RetrainOutlawPartyMembersBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class RetrainOutlawPartyMembersBehavior : CampaignBehaviorBase, IRetrainOutlawPartyMembersCampaignBehavior, ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/RetrainOutlawPartyMembersBehavior.cs`

## 概述

RetrainOutlawPartyMembersBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/RetrainOutlawPartyMembersBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IRetrainOutlawPartyMembersCampaignBehavior、ICampaignBehavior，继承链为 RetrainOutlawPartyMembersBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RetrainOutlawPartyMembersBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 RetrainOutlawPartyMembersBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/RetrainOutlawPartyMembersBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `GetRetrainedNumber` | `public int GetRetrainedNumber(CharacterObject character)` | 方法 |
| `SetRetrainedNumber` | `public void SetRetrainedNumber(CharacterObject character, int number)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IRetrainOutlawPartyMembersCampaignBehavior](../IRetrainOutlawPartyMembersCampaignBehavior)
- [基类/接口 ICampaignBehavior](../ICampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
