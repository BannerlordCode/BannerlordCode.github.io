---
title: "NativeArray"
description: "Auto-generated class reference for NativeArray."
---
# NativeArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeArray : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.DotNet/NativeArray.cs`

## Overview

`NativeArray` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DataSize` | `public int DataSize { get; }` |

## Key Methods

### Create
`public static NativeArray Create()`

**Purpose:** **Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
NativeArray.Create();
```

### AddElement
`public void AddElement(int value)`

**Purpose:** **Purpose:** Adds element to the current collection or state.

```csharp
// Obtain an instance of NativeArray from the subsystem API first
NativeArray nativeArray = ...;
nativeArray.AddElement(0);
```

### AddElement
`public void AddElement(float value)`

**Purpose:** **Purpose:** Adds element to the current collection or state.

```csharp
// Obtain an instance of NativeArray from the subsystem API first
NativeArray nativeArray = ...;
nativeArray.AddElement(0);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of NativeArray from the subsystem API first
NativeArray nativeArray = ...;
nativeArray.Clear();
```

## Usage Example

```csharp
NativeArray.Create();
```

## See Also

- [Area Index](../)