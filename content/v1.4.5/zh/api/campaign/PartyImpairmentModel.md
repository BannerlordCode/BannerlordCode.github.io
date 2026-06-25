---
title: "PartyImpairmentModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyImpairmentModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`
**Base:** `MBGameModel<PartyImpairmentModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyImpairmentModel.cs`

## 概述

`PartyImpairmentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyImpairmentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDisorganizedStateDuration
`public abstract ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**用途 / Purpose:** 获取 `disorganized state duration` 的当前值。

### GetVulnerabilityStateDuration
`public abstract float GetVulnerabilityStateDuration(PartyBase party)`

**用途 / Purpose:** 获取 `vulnerability state duration` 的当前值。

### GetSiegeExpectedVulnerabilityTime
`public abstract float GetSiegeExpectedVulnerabilityTime()`

**用途 / Purpose:** 获取 `siege expected vulnerability time` 的当前值。

### CanGetDisorganized
`public abstract bool CanGetDisorganized(PartyBase partyBase)`

**用途 / Purpose:** 判断当前对象是否可以执行 `get disorganized`。

## 使用示例

```csharp
var implementation = new CustomPartyImpairmentModel();
```

## 参见

- [完整类目录](../catalog)