---
title: "ItemObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemObject`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/ItemObject](/versions/ItemObject)
<!-- END BREADCRUMB -->
# ItemObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs`

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

## 主要方法

### InitializeTradeGood
`public static ItemObject InitializeTradeGood(ItemObject item, TextObject name, string meshName, ItemCategory category, int value, float weight, ItemTypeEnum itemType, bool isFood = false)`

**用途 / Purpose:** 初始化 `trade good` 的状态、资源或绑定。

### InitAsPlayerCraftedItem
`public static void InitAsPlayerCraftedItem(ref ItemObject itemObject)`

**用途 / Purpose:** 初始化 `as player crafted item` 的状态、资源或绑定。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### SetItemFlagsForCosmetics
`public void SetItemFlagsForCosmetics(ItemFlags newFlags)`

**用途 / Purpose:** 设置 `item flags for cosmetics` 的值或状态。

### DetermineItemCategoryForItem
`public void DetermineItemCategoryForItem()`

**用途 / Purpose:** 处理 `determine item category for item` 相关逻辑。

### GetCraftedItemObjectFromHashedCode
`public static ItemObject GetCraftedItemObjectFromHashedCode(string hashedCode)`

**用途 / Purpose:** 获取 `crafted item object from hashed code` 的当前值。

### AddWeapon
`public void AddWeapon(WeaponComponentData weapon, ItemModifierGroup itemModifierGroup)`

**用途 / Purpose:** 向当前集合/状态中添加 `weapon`。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetItemFromWeaponKind
`public static ItemObject GetItemFromWeaponKind(int weaponKind)`

**用途 / Purpose:** 获取 `item from weapon kind` 的当前值。

### GetAmmoTypeForItemType
`public static ItemTypeEnum GetAmmoTypeForItemType(ItemTypeEnum itemType)`

**用途 / Purpose:** 获取 `ammo type for item type` 的当前值。

### GetAirFrictionConstant
`public static float GetAirFrictionConstant(WeaponClass weaponClass, WeaponFlags weaponFlags)`

**用途 / Purpose:** 获取 `air friction constant` 的当前值。

### GetWeaponWithUsageIndex
`public WeaponComponentData GetWeaponWithUsageIndex(int usageIndex)`

**用途 / Purpose:** 获取 `weapon with usage index` 的当前值。

## 使用示例

```csharp
ItemObject.InitializeTradeGood(item, name, "example", category, 0, 0, itemType, false);
```

## 参见

- [完整类目录](../catalog)