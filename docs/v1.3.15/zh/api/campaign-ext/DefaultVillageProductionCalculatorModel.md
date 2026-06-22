<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVillageProductionCalculatorModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageProductionCalculatorModel : VillageProductionCalculatorModel`
**Base:** `VillageProductionCalculatorModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVillageProductionCalculatorModel.cs`

## 概述

`DefaultVillageProductionCalculatorModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultVillageProductionCalculatorModel>(new MyDefaultVillageProductionCalculatorModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateDailyProductionAmount
```csharp
public override ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)
```

### CalculateDailyFoodProductionAmount
```csharp
public override float CalculateDailyFoodProductionAmount(Village village)
```

### CalculateProductionSpeedOfItemCategory
```csharp
public override float CalculateProductionSpeedOfItemCategory(ItemCategory item)
```

## 使用示例

```csharp
// DefaultVillageProductionCalculatorModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultVillageProductionCalculatorModel>(new MyDefaultVillageProductionCalculatorModel());
```

## 参见

- [完整类目录](../catalog)