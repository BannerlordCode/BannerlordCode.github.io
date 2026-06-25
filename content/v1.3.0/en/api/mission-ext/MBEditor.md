---
title: "MBEditor"
description: "Auto-generated class reference for MBEditor."
---
# MBEditor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBEditor`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBEditor.cs`

## Overview

`MBEditor` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEditModeOn` | `public static bool IsEditModeOn { get; }` |
| `EditModeEnabled` | `public static bool EditModeEnabled { get; }` |

## Key Methods

### UpdateSceneTree
`public static void UpdateSceneTree(bool doNextFrame)`

**Purpose:** Recalculates and stores the latest representation of `scene tree`.

```csharp
// Static call; no instance required
MBEditor.UpdateSceneTree(false);
```

### IsEntitySelected
`public static bool IsEntitySelected(GameEntity entity)`

**Purpose:** Determines whether the current object is in the `entity selected` state or condition.

```csharp
// Static call; no instance required
MBEditor.IsEntitySelected(entity);
```

### IsEntitySelected
`public static bool IsEntitySelected(WeakGameEntity entity)`

**Purpose:** Determines whether the current object is in the `entity selected` state or condition.

```csharp
// Static call; no instance required
MBEditor.IsEntitySelected(entity);
```

### RenderEditorMesh
`public static void RenderEditorMesh(MetaMesh mesh, MatrixFrame frame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.RenderEditorMesh(mesh, frame);
```

### ApplyDeltaToEditorCamera
`public static void ApplyDeltaToEditorCamera(Vec3 delta)`

**Purpose:** Applies the effect of `delta to editor camera` to the current object.

```csharp
// Static call; no instance required
MBEditor.ApplyDeltaToEditorCamera(delta);
```

### EnterEditMode
`public static void EnterEditMode(SceneView sceneView, MatrixFrame initialCameraFrame, float initialCameraElevation, float initialCameraBearing)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.EnterEditMode(sceneView, initialCameraFrame, 0, 0);
```

### TickEditMode
`public static void TickEditMode(float dt)`

**Purpose:** Advances the `edit mode` state each frame or update cycle.

```csharp
// Static call; no instance required
MBEditor.TickEditMode(0);
```

### LeaveEditMode
`public static void LeaveEditMode()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.LeaveEditMode();
```

### EnterEditMissionMode
`public static void EnterEditMissionMode(Mission mission)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.EnterEditMissionMode(mission);
```

### LeaveEditMissionMode
`public static void LeaveEditMissionMode()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.LeaveEditMissionMode();
```

### IsEditorMissionOn
`public static bool IsEditorMissionOn()`

**Purpose:** Determines whether the current object is in the `editor mission on` state or condition.

```csharp
// Static call; no instance required
MBEditor.IsEditorMissionOn();
```

### ActivateSceneEditorPresentation
`public static void ActivateSceneEditorPresentation()`

**Purpose:** Activates the resource, state, or feature associated with `scene editor presentation`.

```csharp
// Static call; no instance required
MBEditor.ActivateSceneEditorPresentation();
```

### DeactivateSceneEditorPresentation
`public static void DeactivateSceneEditorPresentation()`

**Purpose:** Deactivates the resource, state, or feature associated with `scene editor presentation`.

```csharp
// Static call; no instance required
MBEditor.DeactivateSceneEditorPresentation();
```

### TickSceneEditorPresentation
`public static void TickSceneEditorPresentation(float dt)`

**Purpose:** Advances the `scene editor presentation` state each frame or update cycle.

```csharp
// Static call; no instance required
MBEditor.TickSceneEditorPresentation(0);
```

### GetEditorSceneView
`public static SceneView GetEditorSceneView()`

**Purpose:** Reads and returns the `editor scene view` value held by the current object.

```csharp
// Static call; no instance required
MBEditor.GetEditorSceneView();
```

### HelpersEnabled
`public static bool HelpersEnabled()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.HelpersEnabled();
```

### BorderHelpersEnabled
`public static bool BorderHelpersEnabled()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.BorderHelpersEnabled();
```

### ZoomToPosition
`public static void ZoomToPosition(Vec3 pos)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.ZoomToPosition(pos);
```

### IsReplayManagerReplaying
`public static bool IsReplayManagerReplaying()`

**Purpose:** Determines whether the current object is in the `replay manager replaying` state or condition.

```csharp
// Static call; no instance required
MBEditor.IsReplayManagerReplaying();
```

### IsReplayManagerRendering
`public static bool IsReplayManagerRendering()`

**Purpose:** Determines whether the current object is in the `replay manager rendering` state or condition.

```csharp
// Static call; no instance required
MBEditor.IsReplayManagerRendering();
```

### IsReplayManagerRecording
`public static bool IsReplayManagerRecording()`

**Purpose:** Determines whether the current object is in the `replay manager recording` state or condition.

```csharp
// Static call; no instance required
MBEditor.IsReplayManagerRecording();
```

### AddEditorWarning
`public static void AddEditorWarning(string msg)`

**Purpose:** Adds `editor warning` to the current collection or state.

```csharp
// Static call; no instance required
MBEditor.AddEditorWarning("example");
```

### AddEntityWarning
`public static void AddEntityWarning(WeakGameEntity entityId, string msg)`

**Purpose:** Adds `entity warning` to the current collection or state.

```csharp
// Static call; no instance required
MBEditor.AddEntityWarning(entityId, "example");
```

### AddNavMeshWarning
`public static void AddNavMeshWarning(Scene scene, PathFaceRecord record, string msg)`

**Purpose:** Adds `nav mesh warning` to the current collection or state.

```csharp
// Static call; no instance required
MBEditor.AddNavMeshWarning(scene, record, "example");
```

### GetAllPrefabsAndChildWithTag
`public static string GetAllPrefabsAndChildWithTag(string tag)`

**Purpose:** Reads and returns the `all prefabs and child with tag` value held by the current object.

```csharp
// Static call; no instance required
MBEditor.GetAllPrefabsAndChildWithTag("example");
```

### ExitEditMode
`public static void ExitEditMode()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.ExitEditMode();
```

### SetUpgradeLevelVisibility
`public static void SetUpgradeLevelVisibility(List<string> levels)`

**Purpose:** Assigns a new value to `upgrade level visibility` and updates the object's internal state.

```csharp
// Static call; no instance required
MBEditor.SetUpgradeLevelVisibility(levels);
```

### SetLevelVisibility
`public static void SetLevelVisibility(List<string> levels)`

**Purpose:** Assigns a new value to `level visibility` and updates the object's internal state.

```csharp
// Static call; no instance required
MBEditor.SetLevelVisibility(levels);
```

### ToggleEnableEditorPhysics
`public static void ToggleEnableEditorPhysics()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBEditor.ToggleEnableEditorPhysics();
```

## Usage Example

```csharp
MBEditor.UpdateSceneTree(false);
```

## See Also

- [Area Index](../)