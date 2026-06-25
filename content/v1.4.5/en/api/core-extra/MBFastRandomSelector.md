---
title: "MBFastRandomSelector"
description: "Auto-generated class reference for MBFastRandomSelector."
---
# MBFastRandomSelector

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBFastRandomSelector<T>`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBFastRandomSelector.cs`

## Overview

`MBFastRandomSelector` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public ushort RemainingCount { get; }` |

## Key Methods

### IndexEntry
`public struct IndexEntry(ushort index, ushort version)`

**Purpose:** **Purpose:** Executes the IndexEntry logic.

```csharp
// Obtain an instance of MBFastRandomSelector from the subsystem API first
MBFastRandomSelector mBFastRandomSelector = ...;
var result = mBFastRandomSelector.IndexEntry(0, 0);
```

### Initialize
`public void Initialize(MBReadOnlyList<T> list)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MBFastRandomSelector from the subsystem API first
MBFastRandomSelector mBFastRandomSelector = ...;
mBFastRandomSelector.Initialize(list);
```

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of MBFastRandomSelector from the subsystem API first
MBFastRandomSelector mBFastRandomSelector = ...;
mBFastRandomSelector.Reset();
```

### Pack
`public void Pack()`

**Purpose:** **Purpose:** Executes the Pack logic.

```csharp
// Obtain an instance of MBFastRandomSelector from the subsystem API first
MBFastRandomSelector mBFastRandomSelector = ...;
mBFastRandomSelector.Pack();
```

### SelectRandom
`public bool SelectRandom(out T selection, Predicate<T> conditions = null)`

**Purpose:** **Purpose:** Executes the SelectRandom logic.

```csharp
// Obtain an instance of MBFastRandomSelector from the subsystem API first
MBFastRandomSelector mBFastRandomSelector = ...;
var result = mBFastRandomSelector.SelectRandom(selection, null);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBFastRandomSelector mBFastRandomSelector = ...;
mBFastRandomSelector.IndexEntry(0, 0);
```

## See Also

- [Area Index](../)