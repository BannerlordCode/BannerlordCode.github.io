---
title: "VillageNeedsToolsIssueBehavior"
description: "VillageNeedsToolsIssueBehavior：TaleWorlds.CampaignSystem.Issues 的 public 类，继承 CampaignBehaviorBase；公开成员 8 个（方法 2、属性 3、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VillageNeedsToolsIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.Issues`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class VillageNeedsToolsIssueBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Issues)

## 概述

VillageNeedsToolsIssueBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 VillageNeedsToolsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 8 个：2 方法、3 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VillageNeedsToolsIssueBehavior 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.Issues`），命名空间 `TaleWorlds.CampaignSystem.Issues`，继承链 VillageNeedsToolsIssueBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以属性为主（属性 3/8，方法 2/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Issues/VillageNeedsToolsIssueBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `IssueBase` | `public class VillageNeedsToolsIssue : IssueBase` | 属性 |
| `QuestBase` | `public class VillageNeedsToolsIssueQuest : QuestBase` | 属性 |
| `SaveableTypeDefiner` | `public class VillageNeedsToolsIssueTypeDefiner : SaveableTypeDefiner` | 属性 |
| `IssueBase` | `public class VillageNeedsToolsIssue : IssueBase` | 嵌套类型 |
| `QuestBase` | `public class VillageNeedsToolsIssueQuest : QuestBase` | 嵌套类型 |
| `SaveableTypeDefiner` | `public class VillageNeedsToolsIssueTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/)
- [同命名空间 ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior/)
- [同命名空间 ArtisanCantSellProductsAtAFairPriceIssueBehavior](../ArtisanCantSellProductsAtAFairPriceIssueBehavior/)
- [同命名空间 ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior/)
- [同命名空间 BettingFraudIssueBehavior](../BettingFraudIssueBehavior/)
