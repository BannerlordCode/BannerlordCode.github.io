---
title: "BodyGeneratorView"
description: "Auto-generated class reference for BodyGeneratorView."
---
# BodyGeneratorView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`
**Base:** `IFaceGeneratorHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs`

## Overview

`BodyGeneratorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `BodyGeneratorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DataSource` | `public FaceGenVM DataSource { get; }` |
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; }` |
| `BodyGen` | `public BodyGenerator BodyGen { get; }` |

## Key Methods

### ResetFaceToDefault
`public void ResetFaceToDefault()`

**Purpose:** Returns face to default to its default or initial condition.

```csharp
// Obtain an instance of BodyGeneratorView from the subsystem API first
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.ResetFaceToDefault();
```

### FaceGenShowDebug
`public static string FaceGenShowDebug(List<string> strings)`

**Purpose:** Executes the FaceGenShowDebug logic.

```csharp
// Static call; no instance required
BodyGeneratorView.FaceGenShowDebug(strings);
```

### FaceGenUpdateDeformKeys
`public static string FaceGenUpdateDeformKeys(List<string> strings)`

**Purpose:** Executes the FaceGenUpdateDeformKeys logic.

```csharp
// Static call; no instance required
BodyGeneratorView.FaceGenUpdateDeformKeys(strings);
```

### ReadyToRender
`public bool ReadyToRender()`

**Purpose:** Reads the data or state of y to render.

```csharp
// Obtain an instance of BodyGeneratorView from the subsystem API first
BodyGeneratorView bodyGeneratorView = ...;
var result = bodyGeneratorView.ReadyToRender();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of BodyGeneratorView from the subsystem API first
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.OnTick(0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BodyGeneratorView from the subsystem API first
BodyGeneratorView bodyGeneratorView = ...;
bodyGeneratorView.OnFinalize();
```

### InitCamera
`public static MatrixFrame InitCamera(Camera camera, Vec3 cameraPosition)`

**Purpose:** Prepares the resources, state, or bindings required by camera.

```csharp
// Static call; no instance required
BodyGeneratorView.InitCamera(camera, cameraPosition);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BodyGeneratorView view = ...;
```

## See Also

- [Area Index](../)