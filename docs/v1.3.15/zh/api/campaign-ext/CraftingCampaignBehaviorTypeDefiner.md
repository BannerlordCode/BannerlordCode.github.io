<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingCampaignBehaviorTypeDefiner`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingCampaignBehaviorTypeDefiner

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CraftingCampaignBehaviorTypeDefiner` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CraftingOrders` | `public IReadOnlyDictionary<Town, CraftingCampaignBehavior.CraftingOrderSlots> CraftingOrders { get; }` |
| `CraftingHistory` | `public IReadOnlyCollection<WeaponDesign> CraftingHistory { get; }` |
| `CustomOrders` | `public MBReadOnlyList<CraftingOrder> CustomOrders { get; }` |


## 主要方法

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### IsOpened

```csharp
public bool IsOpened(CraftingPiece craftingPiece, CraftingTemplate craftingTemplate)
```

### GetCraftingDifficulty

```csharp
public int GetCraftingDifficulty(WeaponDesign weaponDesign)
```

### OnSessionLaunched

```csharp
public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)
```

### GetHeroCraftingStamina

```csharp
public int GetHeroCraftingStamina(Hero hero)
```

### SetHeroCraftingStamina

```csharp
public void SetHeroCraftingStamina(Hero hero, int value)
```

### SetCraftedWeaponName

```csharp
public void SetCraftedWeaponName(ItemObject craftedWeaponItem, TextObject name)
```

### GetMaxHeroCraftingStamina

```csharp
public int GetMaxHeroCraftingStamina(Hero hero)
```

### DoRefinement

```csharp
public void DoRefinement(Hero hero, Crafting.RefiningFormula refineFormula)
```

### DoSmelting

```csharp
public void DoSmelting(Hero currentCraftingHero, EquipmentElement equipmentElement)
```

### CreateCraftedWeaponInFreeBuildMode

```csharp
public ItemObject CreateCraftedWeaponInFreeBuildMode(Hero hero, WeaponDesign weaponDesign, ItemModifier weaponModifier = null)
```

### CreateCraftedWeaponInCraftingOrderMode

```csharp
public ItemObject CreateCraftedWeaponInCraftingOrderMode(Hero crafterHero, CraftingOrder craftingOrder, WeaponDesign weaponDesign)
```

### GetActiveCraftingHero

```csharp
public Hero GetActiveCraftingHero()
```

### SetActiveCraftingHero

```csharp
public void SetActiveCraftingHero(Hero hero)
```

### CreateTownOrder

```csharp
public void CreateTownOrder(Hero orderOwner, int orderSlot)
```

### CreateCustomOrderForHero

```csharp
public CraftingOrder CreateCustomOrderForHero(Hero orderOwner, float orderDifficulty = -1f, WeaponDesign weaponDesign = null, CraftingTemplate craftingTemplate = null)
```

### GetOrderResult

```csharp
public void GetOrderResult(CraftingOrder craftingOrder, ItemObject craftedItem, out bool isSucceed, out TextObject orderRemark, out TextObject orderResult, out int finalReward)
```

### CompleteOrder

```csharp
public void CompleteOrder(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)
```

### GetCurrentItemModifier

```csharp
public ItemModifier GetCurrentItemModifier()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)