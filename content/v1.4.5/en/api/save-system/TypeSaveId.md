---
title: "TypeSaveId"
description: "Auto-generated class reference for TypeSaveId."
---
# TypeSaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class TypeSaveId : SaveId`
**Base:** `SaveId`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/TypeSaveId.cs`

## Overview

`TypeSaveId` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |

## Key Methods

### GetStringId
`public override string GetStringId()`

**Purpose:** Reads and returns the string id value held by the this instance.

```csharp
// Obtain an instance of TypeSaveId from the subsystem API first
TypeSaveId typeSaveId = ...;
var result = typeSaveId.GetStringId();
```

### WriteTo
`public override void WriteTo(IWriter writer)`

**Purpose:** Writes to to the target location.

```csharp
// Obtain an instance of TypeSaveId from the subsystem API first
TypeSaveId typeSaveId = ...;
typeSaveId.WriteTo(writer);
```

### ReadFrom
`public static TypeSaveId ReadFrom(IReader reader)`

**Purpose:** Reads the data or state of from.

```csharp
// Static call; no instance required
TypeSaveId.ReadFrom(reader);
```

### GetSizeInBytes
`public override int GetSizeInBytes()`

**Purpose:** Reads and returns the size in bytes value held by the this instance.

```csharp
// Obtain an instance of TypeSaveId from the subsystem API first
TypeSaveId typeSaveId = ...;
var result = typeSaveId.GetSizeInBytes();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TypeSaveId typeSaveId = ...;
typeSaveId.GetStringId();
```

## See Also

- [Area Index](../)