---
title: "MissionItemCalatogView"
description: "Auto-generated class reference for MissionItemCalatogView."
---
# MissionItemCalatogView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionItemCalatogView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionItemCalatogView.cs`

## Overview

`MissionItemCalatogView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionItemCalatogView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionItemCalatogView from the subsystem API first
MissionItemCalatogView missionItemCalatogView = ...;
missionItemCalatogView.AfterStart();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionItemCalatogView view = ...;
```

## See Also

- [Area Index](../)