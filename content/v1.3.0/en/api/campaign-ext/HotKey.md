---
title: "HotKey"
description: "Auto-generated class reference for HotKey."
---
# HotKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class HotKey`
**Base:** none
**File:** `TaleWorlds.InputSystem/HotKey.cs`

## Overview

`HotKey` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Keys` | `public List<Key> Keys { get; }` |
| `DefaultKeys` | `public List<Key> DefaultKeys { get; }` |

## Key Methods

### HasModifier
`public bool HasModifier(HotKey.Modifiers modifier)`

**Purpose:** Determines whether the current object already holds `modifier`.

```csharp
// Obtain an instance of HotKey from the subsystem API first
HotKey hotKey = ...;
var result = hotKey.HasModifier(modifier);
```

### HasSameModifiers
`public bool HasSameModifiers(HotKey other)`

**Purpose:** Determines whether the current object already holds `same modifiers`.

```csharp
// Obtain an instance of HotKey from the subsystem API first
HotKey hotKey = ...;
var result = hotKey.HasSameModifiers(other);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of HotKey from the subsystem API first
HotKey hotKey = ...;
var result = hotKey.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of HotKey from the subsystem API first
HotKey hotKey = ...;
var result = hotKey.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of HotKey from the subsystem API first
HotKey hotKey = ...;
var result = hotKey.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HotKey hotKey = ...;
hotKey.HasModifier(modifier);
```

## See Also

- [Area Index](../)