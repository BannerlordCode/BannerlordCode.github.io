---
title: "DefaultClanPoliticsModel"
description: "DefaultClanPoliticsModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 ClanPoliticsModel；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultClanPoliticsModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultClanPoliticsModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs。它是一个 public 类，实现/继承 ClanPoliticsModel，继承链为 DefaultClanPoliticsModel → ClanPoliticsModel → MBGameModel → GameModel。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultClanPoliticsModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultClanPoliticsModel → ClanPoliticsModel → MBGameModel → GameModel。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateInfluenceChange` | `public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)` | 方法 |
| `CalculateSupportForPolicyInClan` | `public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)` | 方法 |
| `CalculateRelationshipChangeWithSponsor` | `public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)` | 方法 |
| `GetInfluenceRequiredToOverrideKingdomDecision` | `public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)` | 方法 |
| `CanHeroBeGovernor` | `public override bool CanHeroBeGovernor(Hero hero)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ClanPoliticsModel](../ClanPoliticsModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
