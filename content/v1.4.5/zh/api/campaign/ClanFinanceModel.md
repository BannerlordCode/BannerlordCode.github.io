---
title: "ClanFinanceModel"
description: "ClanFinanceModel 的自动生成类参考。"
---
# ClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**Base:** `MBGameModel<ClanFinanceModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanFinanceModel.cs`

## 概述

`ClanFinanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ClanFinanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyGoldLowerThreshold` | `public abstract int PartyGoldLowerThreshold { get; }` |

## 主要方法

### CalculateClanGoldChange
`public abstract ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算clan gold change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateClanGoldChange(clan, false, false, false);
```

### CalculateClanIncome
`public abstract ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算clan income的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateClanIncome(clan, false, false, false);
```

### CalculateClanExpenses
`public abstract ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算clan expenses的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateClanExpenses(clan, false, false, false);
```

### CalculateTownIncomeFromTariffs
`public abstract ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算town income from tariffs的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateTownIncomeFromTariffs(clan, town, false);
```

### CalculateTownIncomeFromProjects
`public abstract int CalculateTownIncomeFromProjects(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 计算town income from projects的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateTownIncomeFromProjects(town);
```

### CalculateNotableDailyGoldChange
`public abstract int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`

**用途 / Purpose:** **用途 / Purpose:** 计算notable daily gold change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateNotableDailyGoldChange(hero, false);
```

### CalculateVillageIncome
`public abstract int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算village income的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateVillageIncome(clan, village, false);
```

### CalculateOwnerIncomeFromCaravan
`public abstract int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

**用途 / Purpose:** **用途 / Purpose:** 计算owner income from caravan的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateOwnerIncomeFromCaravan(caravan);
```

### CalculateOwnerIncomeFromWorkshop
`public abstract int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 计算owner income from workshop的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.CalculateOwnerIncomeFromWorkshop(workshop);
```

### RevenueSmoothenFraction
`public abstract float RevenueSmoothenFraction()`

**用途 / Purpose:** **用途 / Purpose:** 调用 RevenueSmoothenFraction 对应的操作。

```csharp
// 先通过子系统 API 拿到 ClanFinanceModel 实例
ClanFinanceModel clanFinanceModel = ...;
var result = clanFinanceModel.RevenueSmoothenFraction();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ClanFinanceModel instance = ...;
```

## 参见

- [本区域目录](../)