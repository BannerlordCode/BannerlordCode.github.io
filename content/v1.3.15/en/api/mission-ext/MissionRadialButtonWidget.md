---
title: "MissionRadialButtonWidget"
description: "Auto-generated class reference for MissionRadialButtonWidget."
---
# MissionRadialButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Radial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRadialButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Radial/MissionRadialButtonWidget.cs`

## Overview

`MissionRadialButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MissionRadialButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ExecuteFocused
`public void ExecuteFocused()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with focused.

```csharp
// Obtain an instance of MissionRadialButtonWidget from the subsystem API first
MissionRadialButtonWidget missionRadialButtonWidget = ...;
missionRadialButtonWidget.ExecuteFocused();
```

### ExecuteUnfocused
`public void ExecuteUnfocused()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with unfocused.

```csharp
// Obtain an instance of MissionRadialButtonWidget from the subsystem API first
MissionRadialButtonWidget missionRadialButtonWidget = ...;
missionRadialButtonWidget.ExecuteUnfocused();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MissionRadialButtonWidget widget = ...;
```

## See Also

- [Area Index](../)