---
title: "MBEquipmentRoster"
description: "Auto-generated class reference for MBEquipmentRoster."
---
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

**Purpose:** Determines whether the this instance already holds equipment flags.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
var result = mBEquipmentRoster.HasEquipmentFlags(flags);
```

### IsEquipmentTemplate
`public bool IsEquipmentTemplate()`

**Purpose:** Determines whether the this instance is in the equipment template state or condition.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
var result = mBEquipmentRoster.IsEquipmentTemplate();
```

### Init
`public void Init(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.Init(objectManager, node);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.Deserialize(objectManager, node);
```

### AddEquipmentRoster
`public void AddEquipmentRoster(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)`

**Purpose:** Adds equipment roster to the current collection or state.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.AddEquipmentRoster(equipmentRoster, equipmentType);
```

### AddOverridenEquipments
`public void AddOverridenEquipments(MBObjectManager objectManager, List<XmlNode> overridenEquipmentSlots)`

**Purpose:** Adds overriden equipments to the current collection or state.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.AddOverridenEquipments(objectManager, overridenEquipmentSlots);
```

### OrderEquipments
`public void OrderEquipments()`

**Purpose:** Executes the OrderEquipments logic.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.OrderEquipments();
```

### InitializeDefaultEquipment
`public void InitializeDefaultEquipment(string equipmentName)`

**Purpose:** Prepares the resources, state, or bindings required by default equipment.

```csharp
// Obtain an instance of MBEquipmentRoster from the subsystem API first
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.InitializeDefaultEquipment("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBEquipmentRoster mBEquipmentRoster = ...;
mBEquipmentRoster.HasEquipmentFlags(flags);
```

## See Also

- [Area Index](../)