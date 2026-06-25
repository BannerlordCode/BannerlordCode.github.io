---
title: "SessionKey"
description: "Auto-generated class reference for SessionKey."
---
# SessionKey

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public struct SessionKey`
**Base:** none
**File:** `TaleWorlds.Diamond/SessionKey.cs`

## Overview

`SessionKey` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Guid` | `public Guid Guid { get; }` |
| `Empty` | `public static SessionKey Empty { get; }` |

## Key Methods

### NewGuid
`public static SessionKey NewGuid()`

**Purpose:** Executes the NewGuid logic.

```csharp
// Static call; no instance required
SessionKey.NewGuid();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of SessionKey from the subsystem API first
SessionKey sessionKey = ...;
var result = sessionKey.ToString();
```

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Executes the ToByteArray logic.

```csharp
// Obtain an instance of SessionKey from the subsystem API first
SessionKey sessionKey = ...;
var result = sessionKey.ToByteArray();
```

### Equals
`public override bool Equals(object o)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of SessionKey from the subsystem API first
SessionKey sessionKey = ...;
var result = sessionKey.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of SessionKey from the subsystem API first
SessionKey sessionKey = ...;
var result = sessionKey.GetHashCode();
```

## Usage Example

```csharp
SessionKey.NewGuid();
```

## See Also

- [Area Index](../)