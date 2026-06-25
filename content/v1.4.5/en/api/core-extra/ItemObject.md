---
title: "ItemObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemObject`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/ItemObject](/versions/ItemObject)
<!-- END BREADCRUMB -->
# ItemObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs`

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
| `UsingFacegenScaling` | `public bool UsingFacegenScaling { get; }` |
| `ArmBandMeshName` | `public string ArmBandMeshName { get; }` |
| `IsFood` | `public bool IsFood { get; }` |
| `IsUniqueItem` | `public bool IsUniqueItem { get; }` |
| `ScaleFactor` | `public float ScaleFactor { get; }` |
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `MultiplayerItem` | `public bool MultiplayerItem { get; }` |
| `NotMerchandise` | `public bool NotMerchandise { get; }` |
| `IsCraftedByPlayer` | `public bool IsCraftedByPlayer { get; }` |
| `LodAtlasIndex` | `public int LodAtlasIndex { get; }` |
| `Tierf` | `public float Tierf { get; }` |
| `Tier` | `public ItemTiers Tier { get; }` |
| `WeaponDesign` | `public WeaponDesign WeaponDesign { get; }` |
| `ItemType` | `public ItemTypeEnum ItemType { get; }` |
| `IsMountable` | `public bool IsMountable { get; }` |
| `IsAnimal` | `public bool IsAnimal { get; }` |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` |

## Key Methods

### InitializeTradeGood
`public static ItemObject InitializeTradeGood(ItemObject item, TextObject name, string meshName, ItemCategory category, int value, float weight, ItemTypeEnum itemType, bool isFood = false)`

**Purpose:** Initializes the state, resources, or bindings for `trade good`.

### InitAsPlayerCraftedItem
`public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)`

**Purpose:** Initializes the state, resources, or bindings for `as player crafted item`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### SetItemFlagsForCosmetics
`public void SetItemFlagsForCosmetics(ItemFlags newFlags)`

**Purpose:** Sets the value or state of `item flags for cosmetics`.

### DetermineItemCategoryForItem
`public void DetermineItemCategoryForItem()`

**Purpose:** Handles logic related to `determine item category for item`.

### GetCraftedItemObjectFromHashedCode
`public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)`

**Purpose:** Gets the current value of `crafted item object from hashed code`.

### AddWeapon
`public void AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)`

**Purpose:** Adds `weapon` to the current collection or state.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetItemFromWeaponKind
`public static ItemObject GetItemFromWeaponKind(int weaponKind)`

**Purpose:** Gets the current value of `item from weapon kind`.

### GetAmmoTypeForItemType
`public static ItemTypeEnum GetAmmoTypeForItemType(ItemTypeEnum itemType)`

**Purpose:** Gets the current value of `ammo type for item type`.

### GetAirFrictionConstant
`public static float GetAirFrictionConstant(WeaponClass weaponClass, WeaponFlags weaponFlags)`

**Purpose:** Gets the current value of `air friction constant`.

### GetWeaponWithUsageIndex
`public WeaponComponentData GetWeaponWithUsageIndex(int usageIndex)`

**Purpose:** Gets the current value of `weapon with usage index`.

## Usage Example

```csharp
ItemObject.InitializeTradeGood(item, name, "example", category, 0, 0, itemType, false);
```

## See Also

- [Complete Class Catalog](../catalog)