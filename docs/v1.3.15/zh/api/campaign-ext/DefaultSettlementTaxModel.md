<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementTaxModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**Base:** `SettlementTaxModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`

## 概述

`DefaultSettlementTaxModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementTaxModel>(new MyDefaultSettlementTaxModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public override float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public override float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public override int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public override int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## 主要方法

### GetTownTaxRatio
```csharp
public override float GetTownTaxRatio(Town town)
```

### GetVillageTaxRatio
```csharp
public override float GetVillageTaxRatio(Village village)
```

### GetTownCommissionChangeBasedOnSecurity
```csharp
public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)
```

### CalculateTownTax
```csharp
public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)
```

### CalculateVillageTaxFromIncome
```csharp
public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)
```

## 使用示例

```csharp
// DefaultSettlementTaxModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementTaxModel>(new MyDefaultSettlementTaxModel());
```

## 参见

- [完整类目录](../catalog)