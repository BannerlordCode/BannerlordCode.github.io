---
title: "DevelopmentNameTextWidget"
description: "Auto-generated class reference for DevelopmentNameTextWidget."
---
# DevelopmentNameTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentNameTextWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement/DevelopmentNameTextWidget.cs`

## Overview

`DevelopmentNameTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DevelopmentNameTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxText` | `public string MaxText { get; set; }` |
| `MaxTextStayTime` | `public float MaxTextStayTime { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |

## Key Methods

### DevelopmentNameTextWidget
`public class DevelopmentNameTextWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the DevelopmentNameTextWidget logic.

```csharp
// Obtain an instance of DevelopmentNameTextWidget from the subsystem API first
DevelopmentNameTextWidget developmentNameTextWidget = ...;
var result = developmentNameTextWidget.DevelopmentNameTextWidget(context);
```

### StartMaxTextAnimation
`public void StartMaxTextAnimation()`

**Purpose:** **Purpose:** Starts the max text animation flow or state machine.

```csharp
// Obtain an instance of DevelopmentNameTextWidget from the subsystem API first
DevelopmentNameTextWidget developmentNameTextWidget = ...;
developmentNameTextWidget.StartMaxTextAnimation();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DevelopmentNameTextWidget widget = ...;
```

## See Also

- [Area Index](../)