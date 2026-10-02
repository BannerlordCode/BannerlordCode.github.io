---
title: "AiVisitSettlementBehavior"
description: "AiVisitSettlementBehavior：TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors 的 public 类，继承 CampaignBehaviorBase；公开成员 5 个（方法 2、属性 0、字段 3）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AiVisitSettlementBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiVisitSettlementBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## 概述

AiVisitSettlementBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 AiVisitSettlementBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 5 个：2 方法、3 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AiVisitSettlementBehavior 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`），命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`，继承链 AiVisitSettlementBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 2/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `GoodEnoughScore` | `public const float GoodEnoughScore` | 字段 |
| `MeaningfulScoreThreshold` | `public const float MeaningfulScoreThreshold` | 字段 |
| `BaseVisitScore` | `public const float BaseVisitScore` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- [同命名空间 AiArmyMemberBehavior](../AiArmyMemberBehavior/)
- [同命名空间 AiEngagePartyBehavior](../AiEngagePartyBehavior/)
- [同命名空间 AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior/)
- [同命名空间 AiMilitaryBehavior](../AiMilitaryBehavior/)
