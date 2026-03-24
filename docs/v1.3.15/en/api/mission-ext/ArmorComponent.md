# ArmorComponent

## Class Overview

| Item | Description |
|------|-------------|
| **Namespace** | TaleWorlds.Core |
| **File Path** | TaleWorlds.Core/ArmorComponent.cs |
| **Base Class** | ItemComponent |
| **Type** | Public class |

## Description

`ArmorComponent` is the armor component of an item, storing armor values and material type properties.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| HeadArmor | int | Head armor value |
| BodyArmor | int | Body armor value |
| LegArmor | int | Leg armor value |
| ArmArmor | int | Arm armor value |
| ManeuverBonus | int | Maneuver bonus |
| SpeedBonus | int | Speed bonus |
| ChargeBonus | int | Charge bonus |
| FamilyType | int | Family type |
| MultiMeshHasGenderVariations | bool | Has gender variations |
| MaterialType | ArmorMaterialTypes | Material type |
| MeshesMask | SkinMask | Meshes mask |
| BodyMeshType | BodyMeshTypes | Body mesh type |
| BodyDeformType | BodyDeformTypes | Body deform type |
| HairCoverType | HairCoverTypes | Hair cover type |
| BeardCoverType | BeardCoverTypes | Beard cover type |
| ManeCoverType | HorseHarnessCoverTypes | Mane cover type |
| TailCoverType | HorseTailCoverTypes | Tail cover type |
| StealthFactor | int | Stealth factor |
| ReinsMesh | string | Reins mesh |
| ReinsRopeMesh | string | Reins rope mesh |

## Enumeration Types

### ArmorMaterialTypes

| Value | Description |
|-------|-------------|
| None | None |
| Cloth | Cloth |
| Leather | Leather |
| Chainmail | Chainmail |
| Plate | Plate |

### HairCoverTypes

| Value | Description |
|-------|-------------|
| None | None |
| Type1 | Type 1 |
| Type2 | Type 2 |
| Type3 | Type 3 |
| Type4 | Type 4 |
| All | All |

### BeardCoverTypes

| Value | Description |
|-------|-------------|
| None | None |
| Type1 | Type 1 |
| Type2 | Type 2 |
| Type3 | Type 3 |
| Type4 | Type 4 |
| All | All |

## Usage Example

```csharp
// Get armor component from item
ItemObject armor = // Get armor item;
ArmorComponent armorComp = armor.GetComponent<ArmorComponent>();

if (armorComp != null)
{
    int totalArmor = armorComp.HeadArmor + armorComp.BodyArmor + 
                      armorComp.LegArmor + armorComp.ArmArmor;
    
    if (armorComp.MaterialType == ArmorComponent.ArmorMaterialTypes.Plate)
    {
        // Plate armor logic
    }
}
```
