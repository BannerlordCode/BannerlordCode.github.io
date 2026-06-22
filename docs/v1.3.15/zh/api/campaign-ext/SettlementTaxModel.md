<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementTaxModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**Base:** `MBGameModel<SettlementTaxModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## 概述

`SettlementTaxModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementTaxModel>(new MySettlementTaxModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public abstract float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public abstract float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public abstract int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public abstract int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## 主要方法

### GetTownTaxRatio
```csharp
public abstract float GetTownTaxRatio(Town town)
```

### GetVillageTaxRatio
```csharp
public abstract float GetVillageTaxRatio(Village village)
```

### GetTownCommissionChangeBasedOnSecurity
```csharp
public abstract float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)
```

### CalculateTownTax
```csharp
public abstract ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)
```

### CalculateVillageTaxFromIncome
```csharp
public abstract int CalculateVillageTaxFromIncome(Village village, int marketIncome)
```

## 使用示例

```csharp
// SettlementTaxModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementTaxModel>(new MySettlementTaxModel());
```

## 参见

- [完整类目录](../catalog)