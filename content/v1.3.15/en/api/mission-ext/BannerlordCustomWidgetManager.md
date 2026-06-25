---
title: "BannerlordCustomWidgetManager"
description: "Auto-generated class reference for BannerlordCustomWidgetManager."
---
# BannerlordCustomWidgetManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordCustomWidgetManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerlordCustomWidgetManager.cs`

## Overview

`BannerlordCustomWidgetManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `BannerlordCustomWidgetManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TouchAssembly
`public static void TouchAssembly()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
BannerlordCustomWidgetManager.TouchAssembly();
```

## Usage Example

```csharp
var manager = BannerlordCustomWidgetManager.Current;
```

## See Also

- [Area Index](../)