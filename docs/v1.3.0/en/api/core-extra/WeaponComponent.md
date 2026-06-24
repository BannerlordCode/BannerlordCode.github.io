<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Adds `weapon` to the current collection or state.

### GetCopy
`public override ItemComponent GetCopy()`

**Purpose:** Gets the current value of `copy`.

### GetItemType
`public ItemObject.ItemTypeEnum GetItemType()`

**Purpose:** Gets the current value of `item type`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var component = agent.GetComponent<WeaponComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)