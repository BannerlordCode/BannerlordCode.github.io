<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingOrderSlots`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingOrderSlots

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CraftingOrderSlots` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CraftingOrders` | `public IReadOnlyDictionary<Town, CraftingCampaignBehavior.CraftingOrderSlots> CraftingOrders { get; }` |
| `CraftingHistory` | `public IReadOnlyCollection<WeaponDesign> CraftingHistory { get; }` |
| `CustomOrders` | `public MBReadOnlyList<CraftingOrder> CustomOrders { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)