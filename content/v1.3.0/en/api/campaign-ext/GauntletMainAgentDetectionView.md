---
title: "GauntletMainAgentDetectionView"
description: "Auto-generated class reference for GauntletMainAgentDetectionView."
---
# GauntletMainAgentDetectionView

**Namespace:** Sandobx.GauntletUI.Missions
**Module:** Sandobx.GauntletUI
**Type:** `public class GauntletMainAgentDetectionView : MissionMainAgentDetectionView`
**Base:** `MissionMainAgentDetectionView`
**File:** `SandBox.GauntletUI/Sandobx/GauntletUI/Missions/GauntletMainAgentDetectionView.cs`

## Overview

`GauntletMainAgentDetectionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMainAgentDetectionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of GauntletMainAgentDetectionView from the subsystem API first
GauntletMainAgentDetectionView gauntletMainAgentDetectionView = ...;
gauntletMainAgentDetectionView.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of GauntletMainAgentDetectionView from the subsystem API first
GauntletMainAgentDetectionView gauntletMainAgentDetectionView = ...;
gauntletMainAgentDetectionView.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of GauntletMainAgentDetectionView from the subsystem API first
GauntletMainAgentDetectionView gauntletMainAgentDetectionView = ...;
gauntletMainAgentDetectionView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of GauntletMainAgentDetectionView from the subsystem API first
GauntletMainAgentDetectionView gauntletMainAgentDetectionView = ...;
gauntletMainAgentDetectionView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMainAgentDetectionView view = ...;
```

## See Also

- [Area Index](../)