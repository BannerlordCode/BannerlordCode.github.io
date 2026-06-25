---
title: "CustomWidgetManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomWidgetManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `touch assembly`.

## Usage Example

```csharp
var manager = CustomWidgetManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)