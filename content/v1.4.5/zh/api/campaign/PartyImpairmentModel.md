---
title: "PartyImpairmentModel"
description: "PartyImpairmentModel 的自动生成类参考。"
---
# PartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`
**Base:** `MBGameModel<PartyImpairmentModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyImpairmentModel.cs`

## 概述

`PartyImpairmentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyImpairmentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDisorganizedStateDuration
`public abstract ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 disorganized state duration 的结果。

```csharp
// 先通过子系统 API 拿到 PartyImpairmentModel 实例
PartyImpairmentModel partyImpairmentModel = ...;
var result = partyImpairmentModel.GetDisorganizedStateDuration(party);
```

### GetVulnerabilityStateDuration
`public abstract float GetVulnerabilityStateDuration(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 vulnerability state duration 的结果。

```csharp
// 先通过子系统 API 拿到 PartyImpairmentModel 实例
PartyImpairmentModel partyImpairmentModel = ...;
var result = partyImpairmentModel.GetVulnerabilityStateDuration(party);
```

### GetSiegeExpectedVulnerabilityTime
`public abstract float GetSiegeExpectedVulnerabilityTime()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 siege expected vulnerability time 的结果。

```csharp
// 先通过子系统 API 拿到 PartyImpairmentModel 实例
PartyImpairmentModel partyImpairmentModel = ...;
var result = partyImpairmentModel.GetSiegeExpectedVulnerabilityTime();
```

### CanGetDisorganized
`public abstract bool CanGetDisorganized(PartyBase partyBase)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 get disorganized 的前置条件。

```csharp
// 先通过子系统 API 拿到 PartyImpairmentModel 实例
PartyImpairmentModel partyImpairmentModel = ...;
var result = partyImpairmentModel.CanGetDisorganized(partyBase);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyImpairmentModel instance = ...;
```

## 参见

- [本区域目录](../)