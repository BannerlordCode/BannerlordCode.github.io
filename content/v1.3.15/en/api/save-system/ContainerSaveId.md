---
title: "ContainerSaveId"
description: "Auto-generated class reference for ContainerSaveId."
---
# ContainerSaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerSaveId : SaveId`
**Base:** `SaveId`
**File:** `TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs`

## Overview

`ContainerSaveId` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ContainerType` | `public ContainerType ContainerType { get; set; }` |
| `KeyId` | `public SaveId KeyId { get; set; }` |
| `ValueId` | `public SaveId ValueId { get; set; }` |

## Key Methods

### GetStringId
`public override string GetStringId()`

**Purpose:** Reads and returns the `string id` value held by the current object.

```csharp
// Obtain an instance of ContainerSaveId from the subsystem API first
ContainerSaveId containerSaveId = ...;
var result = containerSaveId.GetStringId();
```

### WriteTo
`public override void WriteTo(IWriter writer)`

**Purpose:** Writes `to` to the target location.

```csharp
// Obtain an instance of ContainerSaveId from the subsystem API first
ContainerSaveId containerSaveId = ...;
containerSaveId.WriteTo(writer);
```

### ReadFrom
`public static ContainerSaveId ReadFrom(IReader reader)`

**Purpose:** Reads the data or state of `from`.

```csharp
// Static call; no instance required
ContainerSaveId.ReadFrom(reader);
```

### GetSizeInBytes
`public override int GetSizeInBytes()`

**Purpose:** Reads and returns the `size in bytes` value held by the current object.

```csharp
// Obtain an instance of ContainerSaveId from the subsystem API first
ContainerSaveId containerSaveId = ...;
var result = containerSaveId.GetSizeInBytes();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ContainerSaveId containerSaveId = ...;
containerSaveId.GetStringId();
```

## See Also

- [Area Index](../)