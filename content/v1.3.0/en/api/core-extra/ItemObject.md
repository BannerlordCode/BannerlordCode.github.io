---
title: "ItemObject"
description: "Auto-generated class reference for ItemObject."
---
# ItemObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemObject.cs`

## Overview

`ItemObject` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemComponent` | `public ItemComponent ItemComponent { get; }` |
| `MultiMeshName` | `public string MultiMeshName { get; }` |
| `HolsterMeshName` | `public string HolsterMeshName { get; }` |
| `HolsterWithWeaponMeshName` | `public string HolsterWithWeaponMeshName { get; }` |
| `ItemHolsters` | `public string ItemHolsters { get; }` |
| `HolsterPositionShift` | `public Vec3 HolsterPositionShift { get; }` |
| `HasLowerHolsterPriority` | `public bool HasLowerHolsterPriority { get; }` |
| `FlyingMeshName` | `public string FlyingMeshName { get; }` |
| `BodyName` | `public string BodyName { get; }` |
| `SkeletonName` | `public string SkeletonName { get; }` |
| `StaticAnimationName` | `public string StaticAnimationName { get; }` |
| `HolsterBodyName` | `public string HolsterBodyName { get; }` |
| `CollisionBodyName` | `public string CollisionBodyName { get; }` |
| `RecalculateBody` | `public bool RecalculateBody { get; }` |
| `PrefabName` | `public string PrefabName { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `ItemFlags` | `public ItemFlags ItemFlags { get; }` |
| `ItemCategory` | `public ItemCategory ItemCategory { get; }` |
| `Value` | `public int Value { get; }` |
| `Effectiveness` | `public float Effectiveness { get; }` |
| `Weight` | `public float Weight { get; }` |
| `Difficulty` | `public int Difficulty { get; }` |
| `Appearance` | `public float Appearance { get; }` |
| `IsUsingTableau` | `public bool IsUsingTableau { get; }` |
| `IsUsingTeamColor` | `public bool IsUsingTeamColor { get; }` |
| `DoesNotHideChest` | `public bool DoesNotHideChest { get; }` |
| `IsCivilian` | `public bool IsCivilian { get; }` |
| `IsStealthItem` | `public bool IsStealthItem { get; }` |
| `UsingFacegenScaling` | `public bool UsingFacegenScaling { get; }` |
| `ArmBandMeshName` | `public string ArmBandMeshName { get; }` |
| `IsFood` | `public bool IsFood { get; }` |
| `ScaleFactor` | `public float ScaleFactor { get; }` |
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `MultiplayerItem` | `public bool MultiplayerItem { get; }` |
| `NotMerchandise` | `public bool NotMerchandise { get; }` |
| `IsCraftedByPlayer` | `public bool IsCraftedByPlayer { get; }` |
| `LodAtlasIndex` | `public int LodAtlasIndex { get; }` |
| `Tierf` | `public float Tierf { get; }` |
| `IsCraftedWeapon` | `public bool IsCraftedWeapon { get; }` |
| `Tier` | `public ItemObject.ItemTiers Tier { get; }` |
| `WeaponDesign` | `public WeaponDesign WeaponDesign { get; }` |
| `PrimaryWeapon` | `public WeaponComponentData PrimaryWeapon { get; }` |
| `WeaponComponent` | `public WeaponComponent WeaponComponent { get; }` |
| `HasWeaponComponent` | `public bool HasWeaponComponent { get; }` |
| `HorseComponent` | `public HorseComponent HorseComponent { get; }` |
| `HasHorseComponent` | `public bool HasHorseComponent { get; }` |
| `ArmorComponent` | `public ArmorComponent ArmorComponent { get; }` |
| `HasArmorComponent` | `public bool HasArmorComponent { get; }` |
| `BannerComponent` | `public BannerComponent BannerComponent { get; }` |
| `HasBannerComponent` | `public bool HasBannerComponent { get; }` |
| `SaddleComponent` | `public SaddleComponent SaddleComponent { get; }` |
| `HasSaddleComponent` | `public bool HasSaddleComponent { get; }` |
| `FoodComponent` | `public TradeItemComponent FoodComponent { get; }` |
| `HasFoodComponent` | `public bool HasFoodComponent { get; }` |
| `Weapons` | `public MBReadOnlyList<WeaponComponentData> Weapons { get; }` |
| `ItemType` | `public ItemObject.ItemTypeEnum ItemType { get; }` |
| `IsMountable` | `public bool IsMountable { get; }` |
| `IsTradeGood` | `public bool IsTradeGood { get; }` |
| `IsBannerItem` | `public bool IsBannerItem { get; }` |
| `IsAnimal` | `public bool IsAnimal { get; }` |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` |

## Key Methods

### InitializeTradeGood
`public static ItemObject InitializeTradeGood(ItemObject item, TextObject name, string meshName, ItemCategory category, int value, float weight, ItemObject.ItemTypeEnum itemType, bool isFood = false)`

**Purpose:** Prepares the resources, state, or bindings required by trade good.

```csharp
// Static call; no instance required
ItemObject.InitializeTradeGood(item, name, "example", category, 0, 0, itemType, false);
```

### InitAsPlayerCraftedItem
`public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)`

**Purpose:** Prepares the resources, state, or bindings required by as player crafted item.

```csharp
// Static call; no instance required
ItemObject.InitAsPlayerCraftedItem(itemObject);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of ItemObject from the subsystem API first
ItemObject itemObject = ...;
var result = itemObject.GetHashCode();
```

### SetItemFlagsForCosmetics
`public void SetItemFlagsForCosmetics(ItemFlags newFlags)`

**Purpose:** Assigns a new value to item flags for cosmetics and updates the object's internal state.

```csharp
// Obtain an instance of ItemObject from the subsystem API first
ItemObject itemObject = ...;
itemObject.SetItemFlagsForCosmetics(newFlags);
```

### DetermineItemCategoryForItem
`public void DetermineItemCategoryForItem()`

**Purpose:** Determines the result of item category for item based on the current state.

```csharp
// Obtain an instance of ItemObject from the subsystem API first
ItemObject itemObject = ...;
itemObject.DetermineItemCategoryForItem();
```

### GetCraftedItemObjectFromHashedCode
`public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)`

**Purpose:** Reads and returns the crafted item object from hashed code value held by the this instance.

```csharp
// Static call; no instance required
ItemObject.GetCraftedItemObjectFromHashedCode("example");
```

### AddWeapon
`public void AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)`

**Purpose:** Adds weapon to the current collection or state.

```csharp
// Obtain an instance of ItemObject from the subsystem API first
ItemObject itemObject = ...;
itemObject.AddWeapon(weapon, itemModifierGroup);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ItemObject from the subsystem API first
ItemObject itemObject = ...;
itemObject.Deserialize(objectManager, node);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ItemObject from the subsystem API first
ItemObject itemObject = ...;
var result = itemObject.ToString();
```

### GetItemFromWeaponKind
`public static ItemObject GetItemFromWeaponKind(int weaponKind)`

**Purpose:** Reads and returns the item from weapon kind value held by the this instance.

```csharp
// Static call; no instance required
ItemObject.GetItemFromWeaponKind(0);
```

### GetAmmoTypeForItemType
`public static ItemObject.ItemTypeEnum GetAmmoTypeForItemType(ItemObject.ItemTypeEnum itemType)`

**Purpose:** Reads and returns the ammo type for item type value held by the this instance.

```csharp
// Static call; no instance required
ItemObject.GetAmmoTypeForItemType(itemType);
```

### GetAirFrictionConstant
`public static float GetAirFrictionConstant(WeaponClass weaponClass, WeaponFlags weaponFlags)`

**Purpose:** Reads and returns the air friction constant value held by the this instance.

```csharp
// Static call; no instance required
ItemObject.GetAirFrictionConstant(weaponClass, weaponFlags);
```

### GetWeaponWithUsageIndex
`public WeaponComponentData GetWeaponWithUsageIndex(int usageIndex)`

**Purpose:** Reads and returns the weapon with usage index value held by the this instance.

```csharp
// Obtain an instance of ItemObject from the subsystem API first
ItemObject itemObject = ...;
var result = itemObject.GetWeaponWithUsageIndex(0);
```

## Usage Example

```csharp
ItemObject.InitializeTradeGood(item, name, "example", category, 0, 0, itemType, false);
```

## See Also

- [Area Index](../)