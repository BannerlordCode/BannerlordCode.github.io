<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanPoliticsModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `calculate influence change` 相关逻辑。

### CalculateSupportForPolicyInClan
`public abstract float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**用途 / Purpose:** 处理 `calculate support for policy in clan` 相关逻辑。

### CalculateRelationshipChangeWithSponsor
`public abstract float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**用途 / Purpose:** 处理 `calculate relationship change with sponsor` 相关逻辑。

### GetInfluenceRequiredToOverrideKingdomDecision
`public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**用途 / Purpose:** 获取 `influence required to override kingdom decision` 的当前值。

### CanHeroBeGovernor
`public abstract bool CanHeroBeGovernor(Hero hero)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero be governor`。

## 使用示例

```csharp
var implementation = new CustomClanPoliticsModel();
```

## 参见

- [完整类目录](../catalog)