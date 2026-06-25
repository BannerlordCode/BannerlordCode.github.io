---
title: "MPArmoryClothingCosmeticCategoryVM"
description: "MPArmoryClothingCosmeticCategoryVM 的自动生成类参考。"
---
# MPArmoryClothingCosmeticCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryClothingCosmeticCategoryVM : MPArmoryCosmeticCategoryBaseVM`
**Base:** `MPArmoryCosmeticCategoryBaseVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory/MPArmoryClothingCosmeticCategoryVM.cs`

## 概述

`MPArmoryClothingCosmeticCategoryVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory.CosmeticCategory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryClothingCosmeticCategoryVM 实例
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.RefreshValues();
```

### SetDefaultEquipments
`public void SetDefaultEquipments(Equipment equipment)`

**用途 / Purpose:** **用途 / Purpose:** 为 default equipments 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPArmoryClothingCosmeticCategoryVM 实例
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.SetDefaultEquipments(equipment);
```

### ReplaceCosmeticWithDefaultItem
`public void ReplaceCosmeticWithDefaultItem(MPArmoryCosmeticClothingItemVM cosmetic, MPArmoryCosmeticsVM.ClothingCategory clothingCategory, MPHeroClass selectedClass, List<string> ownedCosmetics)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReplaceCosmeticWithDefaultItem 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPArmoryClothingCosmeticCategoryVM 实例
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.ReplaceCosmeticWithDefaultItem(cosmetic, clothingCategory, selectedClass, ownedCosmetics);
```

### OnEquipmentRefreshed
`public void OnEquipmentRefreshed(EquipmentIndex equipmentIndex)`

**用途 / Purpose:** **用途 / Purpose:** 在 equipment refreshed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryClothingCosmeticCategoryVM 实例
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.OnEquipmentRefreshed(equipmentIndex);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPArmoryClothingCosmeticCategoryVM mPArmoryClothingCosmeticCategoryVM = ...;
mPArmoryClothingCosmeticCategoryVM.RefreshValues();
```

## 参见

- [本区域目录](../)