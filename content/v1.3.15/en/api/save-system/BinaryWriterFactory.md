---
title: "BinaryWriterFactory"
description: "Auto-generated class reference for BinaryWriterFactory."
---
# BinaryWriterFactory

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `internal static class BinaryWriterFactory`
**Base:** none
**File:** `TaleWorlds.SaveSystem/BinaryWriterFactory.cs`

## Overview

`BinaryWriterFactory` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetBinaryWriter
`public static BinaryWriter GetBinaryWriter()`

**Purpose:** **Purpose:** Reads and returns the binary writer value held by the this instance.

```csharp
// Static call; no instance required
BinaryWriterFactory.GetBinaryWriter();
```

### ReleaseBinaryWriter
`public static void ReleaseBinaryWriter(BinaryWriter writer)`

**Purpose:** **Purpose:** Executes the ReleaseBinaryWriter logic.

```csharp
// Static call; no instance required
BinaryWriterFactory.ReleaseBinaryWriter(writer);
```

### Initialize
`public static void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
BinaryWriterFactory.Initialize();
```

### Release
`public static void Release()`

**Purpose:** **Purpose:** Executes the Release logic.

```csharp
// Static call; no instance required
BinaryWriterFactory.Release();
```

## Usage Example

```csharp
BinaryWriterFactory.GetBinaryWriter();
```

## See Also

- [Area Index](../)