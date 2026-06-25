---
title: "Equipment"
description: "Equipment 的自动生成类参考。"
---
# Equipment

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Equipment`
**Base:** 无
**File:** `TaleWorlds.Core/Equipment.cs`

## 概述

`Equipment` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCivilian` | `public bool IsCivilian { get; }` |
| `IsBattle` | `public bool IsBattle { get; }` |
| `IsStealth` | `public bool IsStealth { get; }` |
| `this` | `public EquipmentElement this { get; set; }` |
| `this` | `public EquipmentElement this { get; set; }` |
| `Horse` | `public EquipmentElement Horse { get; }` |
| `HairCoverType` | `public ArmorComponent.HairCoverTypes HairCoverType { get; }` |
| `BeardCoverType` | `public ArmorComponent.BeardCoverTypes BeardCoverType { get; }` |
| `ManeCoverType` | `public ArmorComponent.HorseHarnessCoverTypes ManeCoverType { get; }` |
| `ReinsMeshName` | `public string ReinsMeshName { get; }` |
| `EarsAreHidden` | `public bool EarsAreHidden { get; }` |
| `MouthIsHidden` | `public bool MouthIsHidden { get; }` |
| `BodyMeshType` | `public ArmorComponent.BodyMeshTypes BodyMeshType { get; }` |
| `BodyDeformType` | `public ArmorComponent.BodyDeformTypes BodyDeformType { get; }` |

## 主要方法

### Clone
`public Equipment Clone(bool cloneWithoutWeapons = false)`

**用途 / Purpose:** **用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.Clone(false);
```

### FillFrom
`public void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
equipment.FillFrom(sourceEquipment, false);
```

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
equipment.Deserialize(objectManager, node);
```

### DeserializeNode
`public void DeserializeNode(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原出node。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
equipment.DeserializeNode(objectManager, node);
```

### GetEquipmentIndexFromOldEquipmentIndexName
`public static EquipmentIndex GetEquipmentIndexFromOldEquipmentIndexName(string oldEquipmentIndexName)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment index from old equipment index name 的结果。

```csharp
// 静态调用，不需要实例
Equipment.GetEquipmentIndexFromOldEquipmentIndexName("example");
```

### IsEmpty
`public bool IsEmpty()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 empty 状态或条件。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.IsEmpty();
```

### GetTotalWeightOfArmor
`public float GetTotalWeightOfArmor(bool forHuman)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 total weight of armor 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetTotalWeightOfArmor(false);
```

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 total weight of weapons 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetTotalWeightOfWeapons();
```

### GetHeadArmorSum
`public float GetHeadArmorSum()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 head armor sum 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetHeadArmorSum();
```

### GetHumanBodyArmorSum
`public float GetHumanBodyArmorSum()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 human body armor sum 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetHumanBodyArmorSum();
```

### GetLegArmorSum
`public float GetLegArmorSum()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 leg armor sum 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetLegArmorSum();
```

### GetArmArmorSum
`public float GetArmArmorSum()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 arm armor sum 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetArmArmorSum();
```

### GetHorseArmorSum
`public float GetHorseArmorSum()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 horse armor sum 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetHorseArmorSum();
```

### GetUnderwearType
`public Equipment.UnderwearTypes GetUnderwearType(bool isFemale)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 underwear type 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetUnderwearType(false);
```

### HasWeapon
`public bool HasWeapon()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 weapon。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.HasWeapon();
```

### HasWeaponOfClass
`public bool HasWeaponOfClass(WeaponClass weaponClass)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 weapon of class。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.HasWeaponOfClass(weaponClass);
```

### CreateFromEquipmentCode
`public static Equipment CreateFromEquipmentCode(string equipmentCode)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 from equipment code 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Equipment.CreateFromEquipmentCode("example");
```

### CalculateEquipmentCode
`public string CalculateEquipmentCode()`

**用途 / Purpose:** **用途 / Purpose:** 计算equipment code的当前值或结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.CalculateEquipmentCode();
```

### AddEquipmentToSlotWithoutAgent
`public void AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)`

**用途 / Purpose:** **用途 / Purpose:** 将 equipment to slot without agent 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
equipment.AddEquipmentToSlotWithoutAgent(equipmentIndex, itemRosterElement);
```

### GetEquipmentFromSlot
`public EquipmentElement GetEquipmentFromSlot(EquipmentIndex equipmentIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment from slot 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetEquipmentFromSlot(equipmentIndex);
```

### IsItemFitsToSlot
`public static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 item fits to slot 状态或条件。

```csharp
// 静态调用，不需要实例
Equipment.IsItemFitsToSlot(slotIndex, item);
```

### GetWeaponPickUpSlotIndex
`public EquipmentIndex GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 weapon pick up slot index 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.GetWeaponPickUpSlotIndex(itemRosterElement, false);
```

### IsEquipmentEqualTo
`public bool IsEquipmentEqualTo(Equipment other)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 equipment equal to 状态或条件。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
var result = equipment.IsEquipmentEqualTo(other);
```

### GetRandomEquipmentElements
`public static Equipment GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, Equipment.EquipmentType equipmentType, int seed = -1)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 random equipment elements 的结果。

```csharp
// 静态调用，不需要实例
Equipment.GetRandomEquipmentElements(character, false, equipmentType, 0);
```

### SwapWeapons
`public static void SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SwapWeapons 对应的操作。

```csharp
// 静态调用，不需要实例
Equipment.SwapWeapons(equipment, index1, index2);
```

### GetInitialWeaponIndicesToEquip
`public void GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = Equipment.InitialWeaponEquipPreference.Any)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 initial weapon indices to equip 的结果。

```csharp
// 先通过子系统 API 拿到 Equipment 实例
Equipment equipment = ...;
equipment.GetInitialWeaponIndicesToEquip(mainHandWeaponIndex, offHandWeaponIndex, isMainHandNotUsableWithOneHand, equipment.InitialWeaponEquipPreference.Any);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Equipment equipment = ...;
equipment.Clone(false);
```

## 参见

- [本区域目录](../)