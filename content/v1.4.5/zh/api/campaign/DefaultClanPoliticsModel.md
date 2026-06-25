---
title: "DefaultClanPoliticsModel"
description: "DefaultClanPoliticsModel 的自动生成类参考。"
---
# DefaultClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**Base:** `ClanPoliticsModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanPoliticsModel.cs`

## 概述

`DefaultClanPoliticsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultClanPoliticsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateInfluenceChange
`public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)`

**用途 / Purpose:** 计算influence change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanPoliticsModel 实例
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateInfluenceChange(clan, false);
```

### CalculateSupportForPolicyInClan
`public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**用途 / Purpose:** 计算support for policy in clan的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanPoliticsModel 实例
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateSupportForPolicyInClan(clan, policy);
```

### CalculateRelationshipChangeWithSponsor
`public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**用途 / Purpose:** 计算relationship change with sponsor的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanPoliticsModel 实例
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateRelationshipChangeWithSponsor(clan, sponsorClan);
```

### GetInfluenceRequiredToOverrideKingdomDecision
`public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**用途 / Purpose:** 读取并返回当前对象中 influence required to override kingdom decision 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanPoliticsModel 实例
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.GetInfluenceRequiredToOverrideKingdomDecision(popularOption, overridingOption, decision);
```

### CanHeroBeGovernor
`public override bool CanHeroBeGovernor(Hero hero)`

**用途 / Purpose:** 检查当前对象是否满足 hero be governor 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultClanPoliticsModel 实例
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CanHeroBeGovernor(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultClanPoliticsModel>(new MyDefaultClanPoliticsModel());
```

## 参见

- [本区域目录](../)