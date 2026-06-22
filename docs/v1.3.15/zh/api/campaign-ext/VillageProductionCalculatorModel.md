<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageProductionCalculatorModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageProductionCalculatorModel : MBGameModel<VillageProductionCalculatorModel>`
**Base:** `MBGameModel<VillageProductionCalculatorModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VillageProductionCalculatorModel.cs`

## 概述

`VillageProductionCalculatorModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<VillageProductionCalculatorModel>(new MyVillageProductionCalculatorModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateProductionSpeedOfItemCategory
```csharp
public abstract float CalculateProductionSpeedOfItemCategory(ItemCategory item)
```

### CalculateDailyProductionAmount
```csharp
public abstract ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)
```

### CalculateDailyFoodProductionAmount
```csharp
public abstract float CalculateDailyFoodProductionAmount(Village village)
```

## 使用示例

```csharp
// VillageProductionCalculatorModel (Model) 的典型用法
Game.Current.ReplaceModel<VillageProductionCalculatorModel>(new MyVillageProductionCalculatorModel());
```

## 参见

- [完整类目录](../catalog)