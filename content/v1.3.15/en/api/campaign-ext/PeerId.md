---
title: "PeerId"
description: "Auto-generated class reference for PeerId."
---
# PeerId

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public struct PeerId`
**Base:** none
**File:** `TaleWorlds.Diamond/PeerId.cs`

## Overview

`PeerId` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Empty` | `public static PeerId Empty { get; }` |

## Key Methods

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Executes the ToByteArray logic.

```csharp
// Obtain an instance of PeerId from the subsystem API first
PeerId peerId = ...;
var result = peerId.ToByteArray();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PeerId from the subsystem API first
PeerId peerId = ...;
var result = peerId.ToString();
```

### FromString
`public static PeerId FromString(string peerIdAsString)`

**Purpose:** Executes the FromString logic.

```csharp
// Static call; no instance required
PeerId.FromString("example");
```

### Equals
`public override bool Equals(object o)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of PeerId from the subsystem API first
PeerId peerId = ...;
var result = peerId.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of PeerId from the subsystem API first
PeerId peerId = ...;
var result = peerId.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PeerId peerId = ...;
peerId.ToByteArray();
```

## See Also

- [Area Index](../)