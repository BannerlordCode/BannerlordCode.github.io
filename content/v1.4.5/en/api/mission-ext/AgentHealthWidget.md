---
title: "AgentHealthWidget"
description: "Auto-generated class reference for AgentHealthWidget."
---
# AgentHealthWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHealthWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/AgentHealthWidget.cs`

## Overview

`AgentHealthWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AgentHealthWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Health` | `public int Health { get; set; }` |
| `MaxHealth` | `public int MaxHealth { get; set; }` |
| `HealthBar` | `public FillBarWidget HealthBar { get; set; }` |
| `HealthDropContainer` | `public Widget HealthDropContainer { get; set; }` |
| `HealthDropBrush` | `public Brush HealthDropBrush { get; set; }` |
| `ShowHealthBar` | `public bool ShowHealthBar { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AgentHealthWidget widget = ...;
```

## See Also

- [Area Index](../)