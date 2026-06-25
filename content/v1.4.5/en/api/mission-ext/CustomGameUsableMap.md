---
title: "CustomGameUsableMap"
description: "Auto-generated class reference for CustomGameUsableMap."
---
# CustomGameUsableMap

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomGameUsableMap`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomGameUsableMap.cs`

## Overview

`CustomGameUsableMap` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Map` | `public string Map { get; }` |
| `IsCompatibleWithAllGameTypes` | `public bool IsCompatibleWithAllGameTypes { get; }` |
| `CompatibleGameTypes` | `public List<string> CompatibleGameTypes { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of CustomGameUsableMap from the subsystem API first
CustomGameUsableMap customGameUsableMap = ...;
var result = customGameUsableMap.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of CustomGameUsableMap from the subsystem API first
CustomGameUsableMap customGameUsableMap = ...;
var result = customGameUsableMap.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomGameUsableMap customGameUsableMap = ...;
customGameUsableMap.Equals(obj);
```

## See Also

- [Area Index](../)