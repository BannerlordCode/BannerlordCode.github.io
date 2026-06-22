<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaravanModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravanModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**Base:** `MBGameModel<CaravanModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`

## 概述

`CaravanModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CaravanModel>(new MyCaravanModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## 主要方法

### GetMaxGoldToSpendOnOneItemCategory
```csharp
public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)
```

### GetInitialTradeGold
```csharp
public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan)
```

### GetCaravanFormingCost
```csharp
public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan)
```

### GetPowerChangeAfterCaravanCreation
```csharp
public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)
```

### CanHeroCreateCaravan
```csharp
public abstract bool CanHeroCreateCaravan(Hero hero)
```

### GetEliteCaravanSpawnChance
```csharp
public abstract float GetEliteCaravanSpawnChance(Hero hero)
```

## 使用示例

```csharp
// CaravanModel (Model) 的典型用法
Game.Current.ReplaceModel<CaravanModel>(new MyCaravanModel());
```

## 参见

- [完整类目录](../catalog)