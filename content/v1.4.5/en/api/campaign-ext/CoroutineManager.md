---
title: "CoroutineManager"
description: "Auto-generated class reference for CoroutineManager."
---
# CoroutineManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class CoroutineManager`
**Base:** none
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/CoroutineManager.cs`

## Overview

`CoroutineManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CoroutineManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentTick` | `public int CurrentTick { get; }` |

## Key Methods

### AddCoroutine
`public void AddCoroutine(CoroutineDelegate coroutineMethod)`

**Purpose:** Adds coroutine to the current collection or state.

```csharp
// Obtain an instance of CoroutineManager from the subsystem API first
CoroutineManager coroutineManager = ...;
coroutineManager.AddCoroutine(coroutineMethod);
```

### Tick
`public void Tick()`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CoroutineManager from the subsystem API first
CoroutineManager coroutineManager = ...;
coroutineManager.Tick();
```

## Usage Example

```csharp
var manager = CoroutineManager.Current;
```

## See Also

- [Area Index](../)