---
title: "ActionIndexCache"
description: "Auto-generated class reference for ActionIndexCache."
---
# ActionIndexCache

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `struct ActionIndexCache : IEquatable<ActionIndexCache>`
**Base:** `IEquatable<ActionIndexCache>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ActionIndexCache.cs`

## Overview

`ActionIndexCache` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |

## Key Methods

### Create
`public static ActionIndexCache Create(string actName)`

**Purpose:** Creates a new instance or related entity for the current object.

```csharp
// Static call; no instance required
ActionIndexCache.Create("example");
```

### GetName
`public string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of ActionIndexCache from the subsystem API first
ActionIndexCache actionIndexCache = ...;
var result = actionIndexCache.GetName();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of ActionIndexCache from the subsystem API first
ActionIndexCache actionIndexCache = ...;
var result = actionIndexCache.Equals(obj);
```

### Equals
`public bool Equals(ActionIndexCache other)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of ActionIndexCache from the subsystem API first
ActionIndexCache actionIndexCache = ...;
var result = actionIndexCache.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of ActionIndexCache from the subsystem API first
ActionIndexCache actionIndexCache = ...;
var result = actionIndexCache.GetHashCode();
```

## Usage Example

```csharp
ActionIndexCache.Create("example");
```

## See Also

- [Area Index](../)