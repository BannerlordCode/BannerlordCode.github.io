---
title: "PlayerId"
description: "Auto-generated class reference for PlayerId."
---
# PlayerId

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public struct PlayerId : IComparable<PlayerId>, IEquatable<PlayerId>`
**Base:** `IComparable<PlayerId>`
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices/PlayerId.cs`

## Overview

`PlayerId` lives in `TaleWorlds.PlayerServices` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Executes the ToByteArray logic.

```csharp
// Obtain an instance of PlayerId from the subsystem API first
PlayerId playerId = ...;
var result = playerId.ToByteArray();
```

### Serialize
`public void Serialize(IWriter writer)`

**Purpose:** Serializes the this instance into a storable or transmittable format.

```csharp
// Obtain an instance of PlayerId from the subsystem API first
PlayerId playerId = ...;
playerId.Serialize(writer);
```

### Deserialize
`public void Deserialize(IReader reader)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of PlayerId from the subsystem API first
PlayerId playerId = ...;
playerId.Deserialize(reader);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PlayerId from the subsystem API first
PlayerId playerId = ...;
var result = playerId.ToString();
```

### Equals
`public override bool Equals(object o)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of PlayerId from the subsystem API first
PlayerId playerId = ...;
var result = playerId.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of PlayerId from the subsystem API first
PlayerId playerId = ...;
var result = playerId.GetHashCode();
```

### FromString
`public static PlayerId FromString(string id)`

**Purpose:** Executes the FromString logic.

```csharp
// Static call; no instance required
PlayerId.FromString("example");
```

### CompareTo
`public int CompareTo(PlayerId other)`

**Purpose:** Compares the this instance with the supplied instance for ordering.

```csharp
// Obtain an instance of PlayerId from the subsystem API first
PlayerId playerId = ...;
var result = playerId.CompareTo(other);
```

### Equals
`public bool Equals(PlayerId other)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of PlayerId from the subsystem API first
PlayerId playerId = ...;
var result = playerId.Equals(other);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerId playerId = ...;
playerId.ToByteArray();
```

## See Also

- [Area Index](../)