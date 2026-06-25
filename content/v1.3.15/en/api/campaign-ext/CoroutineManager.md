---
title: "CoroutineManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CoroutineManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CoroutineManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class CoroutineManager`
**Base:** none
**File:** `TaleWorlds.Network/CoroutineManager.cs`

## Overview

`CoroutineManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CoroutineManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentTick` | `public int CurrentTick { get; }` |
| `CoroutineCount` | `public int CoroutineCount { get; }` |

## Key Methods

### AddCoroutine
`public void AddCoroutine(CoroutineDelegate coroutineMethod)`

**Purpose:** Adds `coroutine` to the current collection or state.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var manager = CoroutineManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)