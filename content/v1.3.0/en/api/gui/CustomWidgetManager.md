---
title: "CustomWidgetManager"
description: "Auto-generated class reference for CustomWidgetManager."
---
# CustomWidgetManager

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class CustomWidgetManager`
**Base:** none
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/CustomWidgetManager.cs`

## Overview

`CustomWidgetManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CustomWidgetManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TouchAssembly
`public static void TouchAssembly()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
CustomWidgetManager.TouchAssembly();
```

## Usage Example

```csharp
var manager = CustomWidgetManager.Current;
```

## See Also

- [Area Index](../)