---
title: "EngineScreenManager"
description: "Auto-generated class reference for EngineScreenManager."
---
# EngineScreenManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal class EngineScreenManager`
**Base:** none
**File:** `TaleWorlds.Engine/EngineScreenManager.cs`

## Overview

`EngineScreenManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EngineScreenManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Tick
`public static void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Static call; no instance required
EngineScreenManager.Tick(0);
```

## Usage Example

```csharp
var manager = EngineScreenManager.Current;
```

## See Also

- [Area Index](../)