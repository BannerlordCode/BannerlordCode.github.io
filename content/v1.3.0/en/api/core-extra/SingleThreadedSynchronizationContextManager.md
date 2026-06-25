---
title: "SingleThreadedSynchronizationContextManager"
description: "Auto-generated class reference for SingleThreadedSynchronizationContextManager."
---
# SingleThreadedSynchronizationContextManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SingleThreadedSynchronizationContextManager`
**Base:** none
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContextManager.cs`

## Overview

`SingleThreadedSynchronizationContextManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SingleThreadedSynchronizationContextManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
SingleThreadedSynchronizationContextManager.Initialize();
```

### Tick
`public static void Tick()`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Static call; no instance required
SingleThreadedSynchronizationContextManager.Tick();
```

## Usage Example

```csharp
var manager = SingleThreadedSynchronizationContextManager.Current;
```

## See Also

- [Area Index](../)