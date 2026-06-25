---
title: "ClanPoliticsModel"
description: "ClanPoliticsModel 的自动生成类参考。"
---
# ClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanPoliticsModel : MBGameModel<ClanPoliticsModel>`
**Base:** `MBGameModel<ClanPoliticsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs`

## 概述

`ClanPoliticsModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ClanPoliticsModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateInfluenceChange
`public abstract ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算influence change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanPoliticsModel 实例
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.CalculateInfluenceChange(clan, false);
```

### CalculateSupportForPolicyInClan
`public abstract float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**用途 / Purpose:** **用途 / Purpose:** 计算support for policy in clan的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanPoliticsModel 实例
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.CalculateSupportForPolicyInClan(clan, policy);
```

### CalculateRelationshipChangeWithSponsor
`public abstract float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**用途 / Purpose:** **用途 / Purpose:** 计算relationship change with sponsor的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanPoliticsModel 实例
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.CalculateRelationshipChangeWithSponsor(clan, sponsorClan);
```

### GetInfluenceRequiredToOverrideKingdomDecision
`public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence required to override kingdom decision 的结果。

```csharp
// 先通过子系统 API 拿到 ClanPoliticsModel 实例
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.GetInfluenceRequiredToOverrideKingdomDecision(popularOption, overridingOption, decision);
```

### CanHeroBeGovernor
`public abstract bool CanHeroBeGovernor(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero be governor 的前置条件。

```csharp
// 先通过子系统 API 拿到 ClanPoliticsModel 实例
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.CanHeroBeGovernor(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ClanPoliticsModel instance = ...;
```

## 参见

- [本区域目录](../)