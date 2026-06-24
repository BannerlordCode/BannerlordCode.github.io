<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementSecurityModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**Base:** `SettlementSecurityModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementSecurityModel.cs`

## 概述

`DefaultSettlementSecurityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementSecurityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateSecurityChange
`public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate security change` 相关逻辑。

### GetLootedNearbyPartySecurityEffect
`public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**用途 / Purpose:** 获取 `looted nearby party security effect` 的当前值。

### GetNearbyBanditPartyDefeatedSecurityEffect
`public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**用途 / Purpose:** 获取 `nearby bandit party defeated security effect` 的当前值。

### CalculateGoldGainDueToHighSecurity
`public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 处理 `calculate gold gain due to high security` 相关逻辑。

### CalculateGoldCutDueToLowSecurity
`public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 处理 `calculate gold cut due to low security` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementSecurityModel>(new MyDefaultSettlementSecurityModel());
```

## 参见

- [完整类目录](../catalog)