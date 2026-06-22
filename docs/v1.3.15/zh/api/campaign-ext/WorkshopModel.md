<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WorkshopModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WorkshopModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WorkshopModel : MBGameModel<WorkshopModel>`
**Base:** `MBGameModel<WorkshopModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WorkshopModel.cs`

## 概述

`WorkshopModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<WorkshopModel>(new MyWorkshopModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `DaysForPlayerSaveWorkshopFromBankruptcy` | `public abstract int DaysForPlayerSaveWorkshopFromBankruptcy { get; }` |
| `CapitalLowLimit` | `public abstract int CapitalLowLimit { get; }` |
| `InitialCapital` | `public abstract int InitialCapital { get; }` |
| `DailyExpense` | `public abstract int DailyExpense { get; }` |
| `WarehouseCapacity` | `public abstract int WarehouseCapacity { get; }` |
| `DefaultWorkshopCountInSettlement` | `public abstract int DefaultWorkshopCountInSettlement { get; }` |
| `MaximumWorkshopsPlayerCanHave` | `public abstract int MaximumWorkshopsPlayerCanHave { get; }` |

## 主要方法

### GetMaxWorkshopCountForClanTier
```csharp
public abstract int GetMaxWorkshopCountForClanTier(int tier)
```

### GetCostForPlayer
```csharp
public abstract int GetCostForPlayer(Workshop workshop)
```

### GetCostForNotable
```csharp
public abstract int GetCostForNotable(Workshop workshop)
```

### GetNotableOwnerForWorkshop
```csharp
public abstract Hero GetNotableOwnerForWorkshop(Workshop workshop)
```

### GetEffectiveConversionSpeedOfProduction
```csharp
public abstract ExplainedNumber GetEffectiveConversionSpeedOfProduction(Workshop workshop, float speed, bool includeDescriptions)
```

### GetConvertProductionCost
```csharp
public abstract int GetConvertProductionCost(WorkshopType workshopType)
```

### CanPlayerSellWorkshop
```csharp
public abstract bool CanPlayerSellWorkshop(Workshop workshop, out TextObject explanation)
```

### GetTradeXpPerWarehouseProduction
```csharp
public abstract float GetTradeXpPerWarehouseProduction(EquipmentElement production)
```

## 使用示例

```csharp
// WorkshopModel (Model) 的典型用法
Game.Current.ReplaceModel<WorkshopModel>(new MyWorkshopModel());
```

## 参见

- [完整类目录](../catalog)