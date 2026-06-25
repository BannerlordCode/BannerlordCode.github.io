---
title: "WeaponComponent"
description: "Auto-generated class reference for WeaponComponent."
---
# WeaponComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/WeaponComponent.cs`

## Overview

`WeaponComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `WeaponComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Weapons` | `public MBReadOnlyList<WeaponComponentData> Weapons { get; }` |
| `PrimaryWeapon` | `public WeaponComponentData PrimaryWeapon { get; }` |

## Key Methods

### AddWeapon
`public void AddWeapon(WeaponComponentData weaponComponentData, ItemModifierGroup itemModifierGroup)`

**Purpose:** Adds weapon to the current collection or state.

```csharp
// Obtain an instance of WeaponComponent from the subsystem API first
WeaponComponent weaponComponent = ...;
weaponComponent.AddWeapon(weaponComponentData, itemModifierGroup);
```

### GetCopy
`public override ItemComponent GetCopy()`

**Purpose:** Reads and returns the copy value held by the this instance.

```csharp
// Obtain an instance of WeaponComponent from the subsystem API first
WeaponComponent weaponComponent = ...;
var result = weaponComponent.GetCopy();
```

### GetItemType
`public ItemObject.ItemTypeEnum GetItemType()`

**Purpose:** Reads and returns the item type value held by the this instance.

```csharp
// Obtain an instance of WeaponComponent from the subsystem API first
WeaponComponent weaponComponent = ...;
var result = weaponComponent.GetItemType();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of WeaponComponent from the subsystem API first
WeaponComponent weaponComponent = ...;
weaponComponent.Deserialize(objectManager, node);
```

## Usage Example

```csharp
var component = agent.GetComponent<WeaponComponent>();
```

## See Also

- [Area Index](../)