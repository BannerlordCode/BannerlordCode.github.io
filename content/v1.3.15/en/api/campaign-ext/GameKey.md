---
title: "GameKey"
description: "Auto-generated class reference for GameKey."
---
# GameKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class GameKey`
**Base:** none
**File:** `TaleWorlds.InputSystem/GameKey.cs`

## Overview

`GameKey` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `StringId` | `public string StringId { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `MainCategoryId` | `public string MainCategoryId { get; }` |
| `KeyboardKey` | `public Key KeyboardKey { get; }` |
| `DefaultKeyboardKey` | `public Key DefaultKeyboardKey { get; }` |
| `ControllerKey` | `public Key ControllerKey { get; set; }` |
| `DefaultControllerKey` | `public Key DefaultControllerKey { get; set; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of GameKey from the subsystem API first
GameKey gameKey = ...;
var result = gameKey.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of GameKey from the subsystem API first
GameKey gameKey = ...;
var result = gameKey.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of GameKey from the subsystem API first
GameKey gameKey = ...;
var result = gameKey.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameKey gameKey = ...;
gameKey.ToString();
```

## See Also

- [Area Index](../)