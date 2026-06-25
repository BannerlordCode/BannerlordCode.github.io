---
title: "TauntCircleActionSelectorWidget"
description: "Auto-generated class reference for TauntCircleActionSelectorWidget."
---
# TauntCircleActionSelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntCircleActionSelectorWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/TauntCircleActionSelectorWidget.cs`

## Overview

`TauntCircleActionSelectorWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TauntCircleActionSelectorWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FallbackNavigationWidget` | `public Widget FallbackNavigationWidget { get; set; }` |

## Key Methods

### TauntCircleActionSelectorWidget
`public class TauntCircleActionSelectorWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the TauntCircleActionSelectorWidget logic.

```csharp
// Obtain an instance of TauntCircleActionSelectorWidget from the subsystem API first
TauntCircleActionSelectorWidget tauntCircleActionSelectorWidget = ...;
var result = tauntCircleActionSelectorWidget.TauntCircleActionSelectorWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
TauntCircleActionSelectorWidget widget = ...;
```

## See Also

- [Area Index](../)