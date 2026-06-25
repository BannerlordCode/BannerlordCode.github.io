---
title: "DefaultPartyImpairmentModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyImpairmentModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**Base:** `PartyImpairmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`

## 概述

`DefaultPartyImpairmentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyImpairmentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSiegeExpectedVulnerabilityTime
`public override float GetSiegeExpectedVulnerabilityTime()`

**用途 / Purpose:** 获取 `siege expected vulnerability time` 的当前值。

### GetDisorganizedStateDuration
`public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**用途 / Purpose:** 获取 `disorganized state duration` 的当前值。

### CanGetDisorganized
`public override bool CanGetDisorganized(PartyBase party)`

**用途 / Purpose:** 判断当前对象是否可以执行 `get disorganized`。

### GetVulnerabilityStateDuration
`public override float GetVulnerabilityStateDuration(PartyBase party)`

**用途 / Purpose:** 获取 `vulnerability state duration` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyImpairmentModel>(new MyDefaultPartyImpairmentModel());
```

## 参见

- [完整类目录](../catalog)