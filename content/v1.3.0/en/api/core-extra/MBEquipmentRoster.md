---
title: "MBEquipmentRoster"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEquipmentRoster`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBEquipmentRoster

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBEquipmentRoster : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/MBEquipmentRoster.cs`

## Overview

`MBEquipmentRoster` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentFlags` | `public EquipmentFlags EquipmentFlags { get; }` |
| `AllEquipments` | `public MBReadOnlyList<Equipment> AllEquipments { get; }` |
| `DefaultEquipment` | `public Equipment DefaultEquipment { get; }` |

## Key Methods

### HasEquipmentFlags
`public bool HasEquipmentFlags(EquipmentFlags flags)`

**Purpose:** Checks whether the current object has/contains `equipment flags`.

### IsEquipmentTemplate
`public bool IsEquipmentTemplate()`

**Purpose:** Handles logic related to `is equipment template`.

### Init
`public void Init(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### AddEquipmentRoster
`public void AddEquipmentRoster(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)`

**Purpose:** Adds `equipment roster` to the current collection or state.

### AddOverridenEquipments
`public void AddOverridenEquipments(MBObjectManager objectManager, List<XmlNode> overridenEquipmentSlots)`

**Purpose:** Adds `overriden equipments` to the current collection or state.

### OrderEquipments
`public void OrderEquipments()`

**Purpose:** Handles logic related to `order equipments`.

### InitializeDefaultEquipment
`public void InitializeDefaultEquipment(string equipmentName)`

**Purpose:** Initializes the state, resources, or bindings for `default equipment`.

## Usage Example

```csharp
var value = new MBEquipmentRoster();
value.HasEquipmentFlags(flags);
```

## See Also

- [Complete Class Catalog](../catalog)