---
title: "DeploymentView"
description: "Auto-generated class reference for DeploymentView."
---
# DeploymentView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/DeploymentView.cs`

## Overview

`DeploymentView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `DeploymentView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DeploymentView from the subsystem API first
DeploymentView deploymentView = ...;
deploymentView.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of DeploymentView from the subsystem API first
DeploymentView deploymentView = ...;
deploymentView.OnRemoveBehavior();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
DeploymentView view = ...;
```

## See Also

- [Area Index](../)