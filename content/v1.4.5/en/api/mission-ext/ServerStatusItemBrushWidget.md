---
title: "ServerStatusItemBrushWidget"
description: "Auto-generated class reference for ServerStatusItemBrushWidget."
---
# ServerStatusItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ServerStatusItemBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD/ServerStatusItemBrushWidget.cs`

## Overview

`ServerStatusItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ServerStatusItemBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Status` | `public int Status { get; set; }` |

## Key Methods

### ServerStatusItemBrushWidget
`public class ServerStatusItemBrushWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the ServerStatusItemBrushWidget logic.

```csharp
// Obtain an instance of ServerStatusItemBrushWidget from the subsystem API first
ServerStatusItemBrushWidget serverStatusItemBrushWidget = ...;
var result = serverStatusItemBrushWidget.ServerStatusItemBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ServerStatusItemBrushWidget widget = ...;
```

## See Also

- [Area Index](../)