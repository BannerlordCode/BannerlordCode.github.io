---
title: "SessionKey"
description: "Auto-generated class reference for SessionKey."
---
# SessionKey

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public struct SessionKey`
**Base:** none
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/SessionKey.cs`

## Overview

`SessionKey` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### NewGuid
`public static SessionKey NewGuid()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
SessionKey.NewGuid();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of SessionKey from the subsystem API first
SessionKey sessionKey = ...;
var result = sessionKey.ToString();
```

### ToByteArray
`public byte ToByteArray()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SessionKey from the subsystem API first
SessionKey sessionKey = ...;
var result = sessionKey.ToByteArray();
```

### Equals
`public override bool Equals(object o)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of SessionKey from the subsystem API first
SessionKey sessionKey = ...;
var result = sessionKey.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

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