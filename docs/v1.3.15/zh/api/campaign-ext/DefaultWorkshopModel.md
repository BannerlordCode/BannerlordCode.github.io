<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultWorkshopModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultWorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWorkshopModel : WorkshopModel`
**Base:** `WorkshopModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWorkshopModel.cs`

## 概述

`DefaultWorkshopModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultWorkshopModel>(new MyDefaultWorkshopModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `WarehouseCapacity` | `public override int WarehouseCapacity { get; }` |
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public override int DaysForPlayerSaveWorkshopFromBankruptcy { get; }` |
| `CapitalLowLimit` | `public override int CapitalLowLimit { get; }` |
| `InitialCapital` | `public override int InitialCapital { get; }` |
| `DailyExpense` | `public override int DailyExpense { get; }` |
| `DefaultWorkshopCountInSettlement` | `public override int DefaultWorkshopCountInSettlement { get; }` |
| `MaximumWorkshopsPlayerCanHave` | `public override int MaximumWorkshopsPlayerCanHave { get; }` |

## 主要方法

### GetEffectiveConversionSpeedOfProduction
```csharp
public override ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescription)
```

### GetMaxWorkshopCountForClanTier
```csharp
public override int GetMaxWorkshopCountForClanTier(int tier)
```

### GetCostForPlayer
```csharp
public override int GetCostForPlayer(Workshop workshop)
```

### GetCostForNotable
```csharp
public override int GetCostForNotable(Workshop workshop)
```

### GetNotableOwnerForWorkshop
```csharp
public override Hero GetNotableOwnerForWorkshop(Workshop workshop)
```

### GetConvertProductionCost
```csharp
public override int GetConvertProductionCost(WorkshopType workshopType)
```

### CanPlayerSellWorkshop
```csharp
public override bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)
```

### GetTradeXpPerWarehouseProduction
```csharp
public override float GetTradeXpPerWarehouseProduction(EquipmentElement production)
```

## 使用示例

```csharp
// DefaultWorkshopModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultWorkshopModel>(new MyDefaultWorkshopModel());
```

## 参见

- [完整类目录](../catalog)