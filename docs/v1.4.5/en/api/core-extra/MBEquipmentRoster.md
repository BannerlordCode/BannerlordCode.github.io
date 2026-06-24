<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEquipmentRoster`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBEquipmentRoster

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBEquipmentRoster : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBEquipmentRoster.cs`

## Overview

`MBEquipmentRoster` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentCulture` | `public BasicCultureObject EquipmentCulture { get; }` |
| `EquipmentCategories` | `public EquipmentCategories EquipmentCategories { get; }` |
| `AllEquipments` | `public MBReadOnlyList<Equipment> AllEquipments { get; }` |
| `DefaultEquipment` | `public Equipment DefaultEquipment { get; }` |

## Key Methods

### Init
`public void Init(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### AddEquipmentRoster
`public void AddEquipmentRoster(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)`

**Purpose:** Adds `equipment roster` to the current collection or state.

### AddOverriddenEquipments
`public void AddOverriddenEquipments(MBObjectManager objectManager, List<XmlNode> overridenEquipmentSlots)`

**Purpose:** Adds `overridden equipments` to the current collection or state.

### OrderEquipments
`public void OrderEquipments()`

**Purpose:** Handles logic related to `order equipments`.

### InitializeDefaultEquipment
`public void InitializeDefaultEquipment(string equipmentName)`

**Purpose:** Initializes the state, resources, or bindings for `default equipment`.

## Usage Example

```csharp
var value = new MBEquipmentRoster();
value.Init(objectManager, node);
```

## See Also

- [Complete Class Catalog](../catalog)