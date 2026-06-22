<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanFinanceModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**Base:** `MBGameModel<ClanFinanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`

## 概述

`ClanFinanceModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ClanFinanceModel>(new MyClanFinanceModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyGoldLowerThreshold` | `public abstract int PartyGoldLowerThreshold { get; }` |

## 主要方法

### CalculateClanGoldChange
```csharp
public abstract ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanIncome
```csharp
public abstract ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateClanExpenses
```csharp
public abstract ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)
```

### CalculateTownIncomeFromTariffs
```csharp
public abstract ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)
```

### CalculateTownIncomeFromProjects
```csharp
public abstract int CalculateTownIncomeFromProjects(Town town)
```

### CalculateNotableDailyGoldChange
```csharp
public abstract int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)
```

### CalculateVillageIncome
```csharp
public abstract int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)
```

### CalculateOwnerIncomeFromCaravan
```csharp
public abstract int CalculateOwnerIncomeFromCaravan(MobileParty caravan)
```

### CalculateOwnerIncomeFromWorkshop
```csharp
public abstract int CalculateOwnerIncomeFromWorkshop(Workshop workshop)
```

### RevenueSmoothenFraction
```csharp
public abstract float RevenueSmoothenFraction()
```

## 使用示例

```csharp
// ClanFinanceModel (Model) 的典型用法
Game.Current.ReplaceModel<ClanFinanceModel>(new MyClanFinanceModel());
```

## 参见

- [完整类目录](../catalog)