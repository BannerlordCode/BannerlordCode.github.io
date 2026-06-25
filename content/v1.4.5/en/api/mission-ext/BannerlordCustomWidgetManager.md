---
title: "BannerlordCustomWidgetManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordCustomWidgetManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerlordCustomWidgetManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordCustomWidgetManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerlordCustomWidgetManager.cs`

## Overview

`BannerlordCustomWidgetManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `BannerlordCustomWidgetManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TouchAssembly
`public static void TouchAssembly()`

**Purpose:** Handles logic related to `touch assembly`.

## Usage Example

```csharp
var manager = BannerlordCustomWidgetManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)