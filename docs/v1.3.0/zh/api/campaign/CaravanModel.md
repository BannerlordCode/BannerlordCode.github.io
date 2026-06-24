<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaravanModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CaravanModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel>`
**Base:** `MBGameModel<CaravanModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`

## 概述

`CaravanModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CaravanModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxNumberOfItemsToBuyFromSingleCategory` | `public abstract int MaxNumberOfItemsToBuyFromSingleCategory { get; }` |

## 主要方法

### GetMaxGoldToSpendOnOneItemCategory
`public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan, ItemCategory itemCategory)`

**用途 / Purpose:** 获取 `max gold to spend on one item category` 的当前值。

### GetInitialTradeGold
`public abstract int GetInitialTradeGold(Hero owner, bool isNavalCaravan, bool eliteCaravan)`

**用途 / Purpose:** 获取 `initial trade gold` 的当前值。

### GetCaravanFormingCost
`public abstract int GetCaravanFormingCost(bool eliteCaravan, bool navalCaravan)`

**用途 / Purpose:** 获取 `caravan forming cost` 的当前值。

### GetPowerChangeAfterCaravanCreation
`public abstract int GetPowerChangeAfterCaravanCreation(Hero hero, MobileParty caravanParty)`

**用途 / Purpose:** 获取 `power change after caravan creation` 的当前值。

### CanHeroCreateCaravan
`public abstract bool CanHeroCreateCaravan(Hero hero)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero create caravan`。

### GetEliteCaravanSpawnChance
`public abstract float GetEliteCaravanSpawnChance(Hero hero)`

**用途 / Purpose:** 获取 `elite caravan spawn chance` 的当前值。

## 使用示例

```csharp
var implementation = new CustomCaravanModel();
```

## 参见

- [完整类目录](../catalog)