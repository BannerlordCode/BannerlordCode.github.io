---
title: "NativeObjectArray"
description: "Auto-generated class reference for NativeObjectArray."
---
# NativeObjectArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable`
**Base:** `NativeObject`
**File:** `TaleWorlds.DotNet/NativeObjectArray.cs`

## Overview

`NativeObjectArray` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |

## Key Methods

### Create
`public static NativeObjectArray Create()`

**Purpose:** **Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
NativeObjectArray.Create();
```

### GetElementAt
`public NativeObject GetElementAt(int index)`

**Purpose:** **Purpose:** Reads and returns the element at value held by the this instance.

```csharp
// Obtain an instance of NativeObjectArray from the subsystem API first
NativeObjectArray nativeObjectArray = ...;
var result = nativeObjectArray.GetElementAt(0);
```

### AddElement
`public void AddElement(NativeObject nativeObject)`

**Purpose:** **Purpose:** Adds element to the current collection or state.

```csharp
// Obtain an instance of NativeObjectArray from the subsystem API first
NativeObjectArray nativeObjectArray = ...;
nativeObjectArray.AddElement(nativeObject);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of NativeObjectArray from the subsystem API first
NativeObjectArray nativeObjectArray = ...;
nativeObjectArray.Clear();
```

## Usage Example

```csharp
NativeObjectArray.Create();
```

## See Also

- [Area Index](../)