---
title: "MBEquipmentRoster"
description: "Auto-generated class reference for MBEquipmentRoster."
---
# MBEquipmentRoster

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBEquipmentRoster : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBEquipmentRoster.cs`

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

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.Init(objectManager, node);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.Deserialize(objectManager, node);
```

### AddEquipmentRoster
`public void AddEquipmentRoster(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)`

**Purpose:** Adds `equipment roster` to the current collection or state.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.AddEquipmentRoster(equipmentRoster, equipmentType);
```

### AddOverriddenEquipments
`public void AddOverriddenEquipments(MBObjectManager objectManager, List<XmlNode> overridenEquipmentSlots)`

**Purpose:** Adds `overridden equipments` to the current collection or state.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.AddOverriddenEquipments(objectManager, overridenEquipmentSlots);
```

### OrderEquipments
`public void OrderEquipments()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.OrderEquipments();
```

### InitializeDefaultEquipment
`public void InitializeDefaultEquipment(string equipmentName)`

**Purpose:** Prepares the resources, state, or bindings required by `default equipment`.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.InitializeDefaultEquipment("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.Init(objectManager, node);
```

## See Also

- [Area Index](../)