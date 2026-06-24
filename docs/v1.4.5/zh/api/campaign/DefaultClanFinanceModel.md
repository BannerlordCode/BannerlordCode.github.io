<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultClanFinanceModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel`
**Base:** `ClanFinanceModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanFinanceModel.cs`

## 概述

`DefaultClanFinanceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultClanFinanceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateClanGoldChange
`public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 处理 `calculate clan gold change` 相关逻辑。

### CalculateClanIncome
`public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 处理 `calculate clan income` 相关逻辑。

### CalculateClanExpensesInternal
`public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 处理 `calculate clan expenses internal` 相关逻辑。

### CalculateClanExpenses
`public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)`

**用途 / Purpose:** 处理 `calculate clan expenses` 相关逻辑。

### CalculateTownIncomeFromTariffs
`public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)`

**用途 / Purpose:** 处理 `calculate town income from tariffs` 相关逻辑。

### CalculateTownIncomeFromProjects
`public override int CalculateTownIncomeFromProjects(Town town)`

**用途 / Purpose:** 处理 `calculate town income from projects` 相关逻辑。

### CalculateVillageIncome
`public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)`

**用途 / Purpose:** 处理 `calculate village income` 相关逻辑。

### CalculateOwnerIncomeFromCaravan
`public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

**用途 / Purpose:** 处理 `calculate owner income from caravan` 相关逻辑。

### CalculateOwnerIncomeFromWorkshop
`public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

**用途 / Purpose:** 处理 `calculate owner income from workshop` 相关逻辑。

### RevenueSmoothenFraction
`public override float RevenueSmoothenFraction()`

**用途 / Purpose:** 处理 `revenue smoothen fraction` 相关逻辑。

### CalculateNotableDailyGoldChange
`public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)`

**用途 / Purpose:** 处理 `calculate notable daily gold change` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultClanFinanceModel>(new MyDefaultClanFinanceModel());
```

## 参见

- [完整类目录](../catalog)