---
title: "MBBodyProperty"
description: "Auto-generated class reference for MBBodyProperty."
---
# MBBodyProperty

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBBodyProperty : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/MBBodyProperty.cs`

## Overview

`MBBodyProperty` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HairTags` | `public string HairTags { get; set; }` |
| `BeardTags` | `public string BeardTags { get; set; }` |
| `TattooTags` | `public string TattooTags { get; set; }` |
| `BodyPropertyMin` | `public BodyProperties BodyPropertyMin { get; }` |
| `BodyPropertyMax` | `public BodyProperties BodyPropertyMax { get; }` |

## Key Methods

### CreateFrom
`public static MBBodyProperty CreateFrom(MBBodyProperty bodyProperty)`

**Purpose:** **Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
MBBodyProperty.CreateFrom(bodyProperty);
```

### Init
`public void Init(BodyProperties bodyPropertyMin, BodyProperties bodyPropertyMax)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MBBodyProperty from the subsystem API first
MBBodyProperty mBBodyProperty = ...;
mBBodyProperty.Init(bodyPropertyMin, bodyPropertyMax);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of MBBodyProperty from the subsystem API first
MBBodyProperty mBBodyProperty = ...;
mBBodyProperty.Deserialize(objectManager, node);
```

## Usage Example

```csharp
MBBodyProperty.CreateFrom(bodyProperty);
```

## See Also

- [Area Index](../)