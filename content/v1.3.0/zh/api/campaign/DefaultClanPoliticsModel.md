---
title: "DefaultClanPoliticsModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultClanPoliticsModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**Base:** `ClanPoliticsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs`

## 概述

`DefaultClanPoliticsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultClanPoliticsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateInfluenceChange
`public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate influence change` 相关逻辑。

### CalculateSupportForPolicyInClan
`public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**用途 / Purpose:** 处理 `calculate support for policy in clan` 相关逻辑。

### CalculateRelationshipChangeWithSponsor
`public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**用途 / Purpose:** 处理 `calculate relationship change with sponsor` 相关逻辑。

### GetInfluenceRequiredToOverrideKingdomDecision
`public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**用途 / Purpose:** 获取 `influence required to override kingdom decision` 的当前值。

### CanHeroBeGovernor
`public override bool CanHeroBeGovernor(Hero hero)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero be governor`。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultClanPoliticsModel>(new MyDefaultClanPoliticsModel());
```

## 参见

- [完整类目录](../catalog)