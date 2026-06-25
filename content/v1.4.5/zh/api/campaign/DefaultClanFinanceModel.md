---
title: "DefaultClanFinanceModel"
description: "DefaultClanFinanceModel 的自动生成类参考。"
---
# DefaultClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel`
**Base:** `ClanFinanceModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanFinanceModel.cs`

## 概述

`DefaultClanFinanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultClanFinanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateClanGoldChange
`public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 计算clan gold change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateClanGoldChange(clan, false, false, false);
```

### CalculateClanIncome
`public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 计算clan income的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateClanIncome(clan, false, false, false);
```

### CalculateClanExpensesInternal
`public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 计算clan expenses internal的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
defaultClanFinanceModel.CalculateClanExpensesInternal(clan, goldChange, false, false);
```

### CalculateClanExpenses
`public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 计算clan expenses的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateClanExpenses(clan, false, false, false);
```

### CalculateTownIncomeFromTariffs
`public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`

**用途 / Purpose:** 计算town income from tariffs的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateTownIncomeFromTariffs(clan, town, false);
```

### CalculateTownIncomeFromProjects
`public override int CalculateTownIncomeFromProjects(Town town)`

**用途 / Purpose:** 计算town income from projects的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateTownIncomeFromProjects(town);
```

### CalculateVillageIncome
`public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`

**用途 / Purpose:** 计算village income的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateVillageIncome(clan, village, false);
```

### CalculateOwnerIncomeFromCaravan
`public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

**用途 / Purpose:** 计算owner income from caravan的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateOwnerIncomeFromCaravan(caravan);
```

### CalculateOwnerIncomeFromWorkshop
`public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

**用途 / Purpose:** 计算owner income from workshop的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateOwnerIncomeFromWorkshop(workshop);
```

### RevenueSmoothenFraction
`public override float RevenueSmoothenFraction()`

**用途 / Purpose:** 调用 RevenueSmoothenFraction 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.RevenueSmoothenFraction();
```

### CalculateNotableDailyGoldChange
`public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`

**用途 / Purpose:** 计算notable daily gold change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanFinanceModel 实例
DefaultClanFinanceModel defaultClanFinanceModel = ...;
var result = defaultClanFinanceModel.CalculateNotableDailyGoldChange(hero, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultClanFinanceModel>(new MyDefaultClanFinanceModel());
```

## 参见

- [本区域目录](../)