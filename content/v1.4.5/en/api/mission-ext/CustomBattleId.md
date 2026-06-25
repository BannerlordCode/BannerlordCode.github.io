---
title: "CustomBattleId"
description: "Auto-generated class reference for CustomBattleId."
---
# CustomBattleId

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleId`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs`

## Overview

`CustomBattleId` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Guid` | `public Guid Guid { get; }` |

## Key Methods

### NewGuid
`public static CustomBattleId NewGuid()`

**Purpose:** Executes the NewGuid logic.

```csharp
// Static call; no instance required
CustomBattleId.NewGuid();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of CustomBattleId from the subsystem API first
CustomBattleId customBattleId = ...;
var result = customBattleId.ToString();
```

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Executes the ToByteArray logic.

```csharp
// Obtain an instance of CustomBattleId from the subsystem API first
CustomBattleId customBattleId = ...;
var result = customBattleId.ToByteArray();
```

### Equals
`public override bool Equals(object o)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of CustomBattleId from the subsystem API first
CustomBattleId customBattleId = ...;
var result = customBattleId.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of CustomBattleId from the subsystem API first
CustomBattleId customBattleId = ...;
var result = customBattleId.GetHashCode();
```

## Usage Example

```csharp
CustomBattleId.NewGuid();
```

## See Also

- [Area Index](../)