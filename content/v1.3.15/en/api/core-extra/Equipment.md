---
title: "Equipment"
description: "Auto-generated class reference for Equipment."
---
# Equipment

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Equipment`
**Base:** none
**File:** `TaleWorlds.Core/Equipment.cs`

## Overview

`Equipment` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### Clone
`public Equipment Clone(bool cloneWithoutWeapons = false)`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.Clone(false);
```

### FillFrom
`public void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
equipment.FillFrom(sourceEquipment, false);
```

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
equipment.Deserialize(objectManager, node);
```

### DeserializeNode
`public void DeserializeNode(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores `node` from serialized data.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
equipment.DeserializeNode(objectManager, node);
```

### GetEquipmentIndexFromOldEquipmentIndexName
`public static EquipmentIndex GetEquipmentIndexFromOldEquipmentIndexName(string oldEquipmentIndexName)`

**Purpose:** Reads and returns the `equipment index from old equipment index name` value held by the current object.

```csharp
// Static call; no instance required
Equipment.GetEquipmentIndexFromOldEquipmentIndexName("example");
```

### IsEmpty
`public bool IsEmpty()`

**Purpose:** Determines whether the current object is in the `empty` state or condition.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.IsEmpty();
```

### GetTotalWeightOfArmor
`public float GetTotalWeightOfArmor(bool forHuman)`

**Purpose:** Reads and returns the `total weight of armor` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetTotalWeightOfArmor(false);
```

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

**Purpose:** Reads and returns the `total weight of weapons` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetTotalWeightOfWeapons();
```

### GetHeadArmorSum
`public float GetHeadArmorSum()`

**Purpose:** Reads and returns the `head armor sum` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetHeadArmorSum();
```

### GetHumanBodyArmorSum
`public float GetHumanBodyArmorSum()`

**Purpose:** Reads and returns the `human body armor sum` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetHumanBodyArmorSum();
```

### GetLegArmorSum
`public float GetLegArmorSum()`

**Purpose:** Reads and returns the `leg armor sum` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetLegArmorSum();
```

### GetArmArmorSum
`public float GetArmArmorSum()`

**Purpose:** Reads and returns the `arm armor sum` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetArmArmorSum();
```

### GetHorseArmorSum
`public float GetHorseArmorSum()`

**Purpose:** Reads and returns the `horse armor sum` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetHorseArmorSum();
```

### GetUnderwearType
`public Equipment.UnderwearTypes GetUnderwearType(bool isFemale)`

**Purpose:** Reads and returns the `underwear type` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetUnderwearType(false);
```

### HasWeapon
`public bool HasWeapon()`

**Purpose:** Determines whether the current object already holds `weapon`.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.HasWeapon();
```

### HasWeaponOfClass
`public bool HasWeaponOfClass(WeaponClass weaponClass)`

**Purpose:** Determines whether the current object already holds `weapon of class`.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.HasWeaponOfClass(weaponClass);
```

### CreateFromEquipmentCode
`public static Equipment CreateFromEquipmentCode(string equipmentCode)`

**Purpose:** Constructs a new `from equipment code` entity and returns it to the caller.

```csharp
// Static call; no instance required
Equipment.CreateFromEquipmentCode("example");
```

### CalculateEquipmentCode
`public string CalculateEquipmentCode()`

**Purpose:** Calculates the current value or result of `equipment code`.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.CalculateEquipmentCode();
```

### AddEquipmentToSlotWithoutAgent
`public void AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)`

**Purpose:** Adds `equipment to slot without agent` to the current collection or state.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
equipment.AddEquipmentToSlotWithoutAgent(equipmentIndex, itemRosterElement);
```

### GetEquipmentFromSlot
`public EquipmentElement GetEquipmentFromSlot(EquipmentIndex equipmentIndex)`

**Purpose:** Reads and returns the `equipment from slot` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetEquipmentFromSlot(equipmentIndex);
```

### IsItemFitsToSlot
`public static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)`

**Purpose:** Determines whether the current object is in the `item fits to slot` state or condition.

```csharp
// Static call; no instance required
Equipment.IsItemFitsToSlot(slotIndex, item);
```

### GetWeaponPickUpSlotIndex
`public EquipmentIndex GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)`

**Purpose:** Reads and returns the `weapon pick up slot index` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.GetWeaponPickUpSlotIndex(itemRosterElement, false);
```

### IsEquipmentEqualTo
`public bool IsEquipmentEqualTo(Equipment other)`

**Purpose:** Determines whether the current object is in the `equipment equal to` state or condition.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
var result = equipment.IsEquipmentEqualTo(other);
```

### GetRandomEquipmentElements
`public static Equipment GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, Equipment.EquipmentType equipmentType, int seed = -1)`

**Purpose:** Reads and returns the `random equipment elements` value held by the current object.

```csharp
// Static call; no instance required
Equipment.GetRandomEquipmentElements(character, false, equipmentType, 0);
```

### SwapWeapons
`public static void SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Equipment.SwapWeapons(equipment, index1, index2);
```

### GetInitialWeaponIndicesToEquip
`public void GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = Equipment.InitialWeaponEquipPreference.Any)`

**Purpose:** Reads and returns the `initial weapon indices to equip` value held by the current object.

```csharp
// Obtain an instance of Equipment from the subsystem API first
Equipment equipment = ...;
equipment.GetInitialWeaponIndicesToEquip(mainHandWeaponIndex, offHandWeaponIndex, isMainHandNotUsableWithOneHand, equipment.InitialWeaponEquipPreference.Any);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Equipment equipment = ...;
equipment.Clone(false);
```

## See Also

- [Area Index](../)