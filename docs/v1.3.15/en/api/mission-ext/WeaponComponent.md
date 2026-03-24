# WeaponComponent

## Class Overview

| Item | Description |
|------|-------------|
| **Namespace** | TaleWorlds.Core |
| **File Path** | TaleWorlds.Core/WeaponComponent.cs |
| **Base Class** | ItemComponent |
| **Type** | Public class |

## Description

`WeaponComponent` is the weapon component of an item, storing weapon data and properties. Every weapon item contains a WeaponComponent.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Weapons | MBReadOnlyList | List of weapon data |
| PrimaryWeapon | WeaponComponentData | Primary weapon data |

## Key Methods

| Method | Return Value | Description |
|--------|--------------|-------------|
| AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup) | void | Adds a weapon |
| GetCopy() | ItemComponent | Creates a copy |
| GetItemType() | ItemObject.ItemTypeEnum | Gets item type |

## Usage Example

```csharp
// Get weapon component from item
ItemObject sword = // Get sword item;
WeaponComponent weaponComp = sword.GetComponent<WeaponComponent>();

if (weaponComp != null)
{
    WeaponComponentData primaryWeapon = weaponComp.PrimaryWeapon;
    WeaponClass weaponClass = primaryWeapon.WeaponClass;
    
    // Check weapon type
    if (weaponClass == WeaponClass.OneHandedSword)
    {
        // One-handed sword logic
    }
}
```

## Enumerations

### WeaponClass

Weapon class enumeration, including but not limited to:
- Undefined
- OneHandedSword
- TwoHandedSword
- OneHandedAxe
- TwoHandedAxe
- OneHandedPolearm
- TwoHandedPolearm
- Dagger
- Pick
- TwoHandedPick
- Hammer
- TwoHandedHammer
- Lance
- TwoHandedLance
- Crossbow
- Throwing
- Bow
- Stone
