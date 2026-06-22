<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultClanFinanceModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel`
**Base:** `ClanFinanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`

## 概述

`DefaultClanFinanceModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultClanFinanceModel>(new MyDefaultClanFinanceModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyGoldLowerThreshold` | `public override int PartyGoldLowerThreshold { get; }` |

## 主要方法

### CalculateClanGoldChange
```csharp
public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanIncome
```csharp
public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanExpensesInternal
```csharp
public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanExpenses
```csharp
public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateTownIncomeFromTariffs
```csharp
public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)
```

### CalculateTownIncomeFromProjects
```csharp
public override int CalculateTownIncomeFromProjects(Town town)
```

### CalculateVillageIncome
```csharp
public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)
```

### CalculateOwnerIncomeFromCaravan
```csharp
public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)
```

### CalculateOwnerIncomeFromWorkshop
```csharp
public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)
```

### RevenueSmoothenFraction
```csharp
public override float RevenueSmoothenFraction()
```

### CalculateNotableDailyGoldChange
```csharp
public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)
```

## 使用示例

```csharp
// DefaultClanFinanceModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultClanFinanceModel>(new MyDefaultClanFinanceModel());
```

## 参见

- [完整类目录](../catalog)