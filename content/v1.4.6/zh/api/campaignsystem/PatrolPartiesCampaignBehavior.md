---
title: "PatrolPartiesCampaignBehavior"
description: "PatrolPartiesCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、IPatrolPartiesCampaignBehavior；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/PatrolPartiesCampaignBehavior.cs。"
---
# PatrolPartiesCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PatrolPartiesCampaignBehavior : CampaignBehaviorBase, IPatrolPartiesCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PatrolPartiesCampaignBehavior.cs`

## 概述

PatrolPartiesCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/PatrolPartiesCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、IPatrolPartiesCampaignBehavior，继承链为 PatrolPartiesCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PatrolPartiesCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 PatrolPartiesCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/PatrolPartiesCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `GetSettlementPatrolStatus` | `public TextObject GetSettlementPatrolStatus(Settlement settlement)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IPatrolPartiesCampaignBehavior](../IPatrolPartiesCampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
