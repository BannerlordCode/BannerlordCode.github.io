---
title: "ItemObject"
description: "ItemObject 的自动生成类参考。"
---
# ItemObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ItemObject.cs`

## 概述

`ItemObject` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### InitializeTradeGood
`public static ItemObject InitializeTradeGood(ItemObject item, TextObject name, string meshName, ItemCategory category, int value, float weight, ItemObject.ItemTypeEnum itemType, bool isFood = false)`

**用途 / Purpose:** 为 「trade good」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ItemObject.InitializeTradeGood(item, name, "example", category, 0, 0, itemType, false);
```

### InitAsPlayerCraftedItem
`public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)`

**用途 / Purpose:** 为 「as player crafted item」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ItemObject.InitAsPlayerCraftedItem(itemObject);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 ItemObject 实例
ItemObject itemObject = ...;
var result = itemObject.GetHashCode();
```

### SetItemFlagsForCosmetics
`public void SetItemFlagsForCosmetics(ItemFlags newFlags)`

**用途 / Purpose:** 为 「item flags for cosmetics」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ItemObject 实例
ItemObject itemObject = ...;
itemObject.SetItemFlagsForCosmetics(newFlags);
```

### DetermineItemCategoryForItem
`public void DetermineItemCategoryForItem()`

**用途 / Purpose:** 根据当前状态判定「item category for item」的结果。

```csharp
// 先通过子系统 API 拿到 ItemObject 实例
ItemObject itemObject = ...;
itemObject.DetermineItemCategoryForItem();
```

### GetCraftedItemObjectFromHashedCode
`public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)`

**用途 / Purpose:** 读取并返回当前对象中 「crafted item object from hashed code」 的结果。

```csharp
// 静态调用，不需要实例
ItemObject.GetCraftedItemObjectFromHashedCode("example");
```

### AddWeapon
`public void AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)`

**用途 / Purpose:** 将 「weapon」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ItemObject 实例
ItemObject itemObject = ...;
itemObject.AddWeapon(weapon, itemModifierGroup);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ItemObject 实例
ItemObject itemObject = ...;
itemObject.Deserialize(objectManager, node);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 ItemObject 实例
ItemObject itemObject = ...;
var result = itemObject.ToString();
```

### GetItemFromWeaponKind
`public static ItemObject GetItemFromWeaponKind(int weaponKind)`

**用途 / Purpose:** 读取并返回当前对象中 「item from weapon kind」 的结果。

```csharp
// 静态调用，不需要实例
ItemObject.GetItemFromWeaponKind(0);
```

### GetAmmoTypeForItemType
`public static ItemObject.ItemTypeEnum GetAmmoTypeForItemType(ItemObject.ItemTypeEnum itemType)`

**用途 / Purpose:** 读取并返回当前对象中 「ammo type for item type」 的结果。

```csharp
// 静态调用，不需要实例
ItemObject.GetAmmoTypeForItemType(itemType);
```

### GetAirFrictionConstant
`public static float GetAirFrictionConstant(WeaponClass weaponClass, WeaponFlags weaponFlags)`

**用途 / Purpose:** 读取并返回当前对象中 「air friction constant」 的结果。

```csharp
// 静态调用，不需要实例
ItemObject.GetAirFrictionConstant(weaponClass, weaponFlags);
```

### GetWeaponWithUsageIndex
`public WeaponComponentData GetWeaponWithUsageIndex(int usageIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon with usage index」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemObject 实例
ItemObject itemObject = ...;
var result = itemObject.GetWeaponWithUsageIndex(0);
```

## 使用示例

```csharp
ItemObject.InitializeTradeGood(item, name, "example", category, 0, 0, itemType, false);
```

## 参见

- [本区域目录](../)