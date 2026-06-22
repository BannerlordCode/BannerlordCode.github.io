<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCaravanModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCaravanModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCaravanModel : CaravanModel`
**Base:** `CaravanModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCaravanModel.cs`

## 概述

`DefaultCaravanModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCaravanModel>(new MyDefaultCaravanModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public override int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## 主要方法

### GetEliteCaravanSpawnChance
```csharp
public override float GetEliteCaravanSpawnChance(Hero hero)
```

### GetPowerChangeAfterCaravanCreation
```csharp
public override int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)
```

### CanHeroCreateCaravan
```csharp
public override bool CanHeroCreateCaravan(Hero hero)
```

### GetCaravanFormingCost
```csharp
public override int GetCaravanFormingCost(bool largerCaravan, bool navalCaravan)
```

### GetInitialTradeGold
```csharp
public override int GetInitialTradeGold(Hero owner, bool navalCaravan, bool largeCaravan)
```

### GetMaxGoldToSpendOnOneItemCategory
```csharp
public override int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)
```

## 使用示例

```csharp
// DefaultCaravanModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCaravanModel>(new MyDefaultCaravanModel());
```

## 参见

- [完整类目录](../catalog)