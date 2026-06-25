---
title: "Equipment"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Equipment`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Equipment

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Equipment`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/Equipment.cs`

## Overview

`Equipment` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public EquipmentElement this { get; set; }` |
| `this` | `public EquipmentElement this { get; set; }` |
| `HairCoverType` | `public ArmorComponent.HairCoverTypes HairCoverType { get; }` |
| `EarsAreHidden` | `public bool EarsAreHidden { get; }` |

## Key Methods

### Clone
`public Equipment Clone(bool cloneWithoutWeapons = false)`

**Purpose:** Handles logic related to `clone`.

### FillFrom
`public void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)`

**Purpose:** Handles logic related to `fill from`.

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### DeserializeNode
`public void DeserializeNode(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize node`.

### GetEquipmentIndexFromOldEquipmentIndexName
`public static EquipmentIndex GetEquipmentIndexFromOldEquipmentIndexName(string oldEquipmentIndexName)`

**Purpose:** Gets the current value of `equipment index from old equipment index name`.

### IsEmpty
`public bool IsEmpty()`

**Purpose:** Handles logic related to `is empty`.

### GetTotalWeightOfArmor
`public float GetTotalWeightOfArmor(bool forHuman)`

**Purpose:** Gets the current value of `total weight of armor`.

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

**Purpose:** Gets the current value of `total weight of weapons`.

### GetHeadArmorSum
`public float GetHeadArmorSum()`

**Purpose:** Gets the current value of `head armor sum`.

### GetHumanBodyArmorSum
`public float GetHumanBodyArmorSum()`

**Purpose:** Gets the current value of `human body armor sum`.

### GetLegArmorSum
`public float GetLegArmorSum()`

**Purpose:** Gets the current value of `leg armor sum`.

### GetArmArmorSum
`public float GetArmArmorSum()`

**Purpose:** Gets the current value of `arm armor sum`.

### GetHorseArmorSum
`public float GetHorseArmorSum()`

**Purpose:** Gets the current value of `horse armor sum`.

### GetUnderwearType
`public UnderwearTypes GetUnderwearType(bool isFemale)`

**Purpose:** Gets the current value of `underwear type`.

### HasWeapon
`public bool HasWeapon()`

**Purpose:** Checks whether the current object has/contains `weapon`.

### HasWeaponOfClass
`public bool HasWeaponOfClass(WeaponClass weaponClass)`

**Purpose:** Checks whether the current object has/contains `weapon of class`.

### CreateFromEquipmentCode
`public static Equipment CreateFromEquipmentCode(string equipmentCode)`

**Purpose:** Creates a new `from equipment code` instance or object.

### CalculateEquipmentCode
`public string CalculateEquipmentCode()`

**Purpose:** Handles logic related to `calculate equipment code`.

### AddEquipmentToSlotWithoutAgent
`public void AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)`

**Purpose:** Adds `equipment to slot without agent` to the current collection or state.

### GetEquipmentFromSlot
`public EquipmentElement GetEquipmentFromSlot(EquipmentIndex equipmentIndex)`

**Purpose:** Gets the current value of `equipment from slot`.

### IsItemFitsToSlot
`public static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)`

**Purpose:** Handles logic related to `is item fits to slot`.

### GetWeaponPickUpSlotIndex
`public EquipmentIndex GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)`

**Purpose:** Gets the current value of `weapon pick up slot index`.

### IsEquipmentEqualTo
`public bool IsEquipmentEqualTo(Equipment other)`

**Purpose:** Handles logic related to `is equipment equal to`.

### GetRandomEquipmentElements
`public static Equipment GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, EquipmentType equipmentType, int seed = -1)`

**Purpose:** Gets the current value of `random equipment elements`.

### SwapWeapons
`public static void SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)`

**Purpose:** Handles logic related to `swap weapons`.

### GetInitialWeaponIndicesToEquip
`public void GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, InitialWeaponEquipPreference initialWeaponEquipPreference = InitialWeaponEquipPreference.Any)`

**Purpose:** Gets the current value of `initial weapon indices to equip`.

## Usage Example

```csharp
var value = new Equipment();
value.Clone(false);
```

## See Also

- [Complete Class Catalog](../catalog)