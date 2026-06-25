---
title: "TickManager"
description: "Auto-generated class reference for TickManager."
---
# TickManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class TickManager`
**Base:** none
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/TickManager.cs`

## Overview

`TickManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `TickManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TickDelegate
`public delegate void TickDelegate()`

**Purpose:** Advances the `delegate` state each frame or update cycle.

```csharp
// Obtain an instance of TickManager from the subsystem API first
TickManager tickManager = ...;
tickManager.TickDelegate();
```

### Tick
`public void Tick()`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of TickManager from the subsystem API first
TickManager tickManager = ...;
tickManager.Tick();
```

## Usage Example

```csharp
var manager = TickManager.Current;
```

## See Also

- [Area Index](../)