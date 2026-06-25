---
title: "PlayerSessionId"
description: "Auto-generated class reference for PlayerSessionId."
---
# PlayerSessionId

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct PlayerSessionId`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerSessionId.cs`

## Overview

`PlayerSessionId` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Guid` | `public Guid Guid { get; }` |

## Key Methods

### NewGuid
`public static PlayerSessionId NewGuid()`

**Purpose:** **Purpose:** Executes the NewGuid logic.

```csharp
// Static call; no instance required
PlayerSessionId.NewGuid();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PlayerSessionId from the subsystem API first
PlayerSessionId playerSessionId = ...;
var result = playerSessionId.ToString();
```

### ToByteArray
`public byte ToByteArray()`

**Purpose:** **Purpose:** Executes the ToByteArray logic.

```csharp
// Obtain an instance of PlayerSessionId from the subsystem API first
PlayerSessionId playerSessionId = ...;
var result = playerSessionId.ToByteArray();
```

### Equals
`public override bool Equals(object o)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of PlayerSessionId from the subsystem API first
PlayerSessionId playerSessionId = ...;
var result = playerSessionId.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of PlayerSessionId from the subsystem API first
PlayerSessionId playerSessionId = ...;
var result = playerSessionId.GetHashCode();
```

## Usage Example

```csharp
PlayerSessionId.NewGuid();
```

## See Also

- [Area Index](../)