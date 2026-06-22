<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingOrder`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingOrder

**命名空间:** TaleWorlds.CampaignSystem.CraftingSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CraftingOrder` 是 `TaleWorlds.CampaignSystem.CraftingSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsLordOrder` | `public bool IsLordOrder { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `WeaponDesignTemplate` | `public WeaponDesign WeaponDesignTemplate { get; }` |


## 主要方法

### InitializeCraftingOrderOnLoad

```csharp
public void InitializeCraftingOrderOnLoad()
```

### IsPreCraftedWeaponDesignValid

```csharp
public bool IsPreCraftedWeaponDesignValid()
```

### GetStatWeapon

```csharp
public WeaponComponentData GetStatWeapon()
```

### IsOrderAvailableForHero

```csharp
public bool IsOrderAvailableForHero(Hero hero)
```

### CanHeroCompleteOrder

```csharp
public bool CanHeroCompleteOrder(Hero hero, ItemObject craftDesignItem)
```

### GetOrderExperience

```csharp
public float GetOrderExperience(ItemObject craftedItem, ItemModifier itemModifier)
```

### CheckForBonusesAndPenalties

```csharp
public void CheckForBonusesAndPenalties(ItemObject craftedItem, ItemModifier itemModifier, out float craftedStatsSum, out float requiredStatsSum, out bool thrustDamageCheck, out bool swingDamageCheck)
```

### GetStatDataForItem

```csharp
public List<CraftingStatData> GetStatDataForItem(ItemObject itemObject, out WeaponComponentData weapon)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)