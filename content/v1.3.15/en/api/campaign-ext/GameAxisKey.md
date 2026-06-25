---
title: "GameAxisKey"
description: "Auto-generated class reference for GameAxisKey."
---
# GameAxisKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class GameAxisKey`
**Base:** none
**File:** `TaleWorlds.InputSystem/GameAxisKey.cs`

## Overview

`GameAxisKey` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `AxisKey` | `public Key AxisKey { get; }` |
| `DefaultAxisKey` | `public Key DefaultAxisKey { get; }` |
| `PositiveKey` | `public GameKey PositiveKey { get; }` |
| `NegativeKey` | `public GameKey NegativeKey { get; }` |
| `Type` | `public GameAxisKey.AxisType Type { get; }` |

## Key Methods

### GetAxisState
`public float GetAxisState(bool isKeysAllowed, bool isMouseButtonAllowed, bool isMouseWheelAllowed, bool isControllerAllowed)`

**Purpose:** Reads and returns the axis state value held by the this instance.

```csharp
// Obtain an instance of GameAxisKey from the subsystem API first
GameAxisKey gameAxisKey = ...;
var result = gameAxisKey.GetAxisState(false, false, false, false);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of GameAxisKey from the subsystem API first
GameAxisKey gameAxisKey = ...;
var result = gameAxisKey.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameAxisKey gameAxisKey = ...;
gameAxisKey.GetAxisState(false, false, false, false);
```

## See Also

- [Area Index](../)