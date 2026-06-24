<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEditor`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBEditor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBEditor`
**Area:** mission-ext

## Overview

`MBEditor` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Updates the state or data of `scene tree`.

### IsEntitySelected
`public static bool IsEntitySelected(GameEntity entity)`

**Purpose:** Handles logic related to `is entity selected`.

### IsEntitySelected
`public static bool IsEntitySelected(WeakGameEntity entity)`

**Purpose:** Handles logic related to `is entity selected`.

### RenderEditorMesh
`public static void RenderEditorMesh(MetaMesh mesh, MatrixFrame frame)`

**Purpose:** Handles logic related to `render editor mesh`.

### ApplyDeltaToEditorCamera
`public static void ApplyDeltaToEditorCamera(Vec3 delta)`

**Purpose:** Applies `delta to editor camera` to the current object.

### EnterEditMode
`public static void EnterEditMode(SceneView sceneView, MatrixFrame initialCameraFrame, float initialCameraElevation, float initialCameraBearing)`

**Purpose:** Handles logic related to `enter edit mode`.

### TickEditMode
`public static void TickEditMode(float dt)`

**Purpose:** Handles logic related to `tick edit mode`.

### LeaveEditMode
`public static void LeaveEditMode()`

**Purpose:** Handles logic related to `leave edit mode`.

### EnterEditMissionMode
`public static void EnterEditMissionMode(Mission mission)`

**Purpose:** Handles logic related to `enter edit mission mode`.

### LeaveEditMissionMode
`public static void LeaveEditMissionMode()`

**Purpose:** Handles logic related to `leave edit mission mode`.

### IsEditorMissionOn
`public static bool IsEditorMissionOn()`

**Purpose:** Handles logic related to `is editor mission on`.

### ActivateSceneEditorPresentation
`public static void ActivateSceneEditorPresentation()`

**Purpose:** Handles logic related to `activate scene editor presentation`.

### DeactivateSceneEditorPresentation
`public static void DeactivateSceneEditorPresentation()`

**Purpose:** Handles logic related to `deactivate scene editor presentation`.

### TickSceneEditorPresentation
`public static void TickSceneEditorPresentation(float dt)`

**Purpose:** Handles logic related to `tick scene editor presentation`.

### GetEditorSceneView
`public static SceneView GetEditorSceneView()`

**Purpose:** Gets the current value of `editor scene view`.

### HelpersEnabled
`public static bool HelpersEnabled()`

**Purpose:** Handles logic related to `helpers enabled`.

### BorderHelpersEnabled
`public static bool BorderHelpersEnabled()`

**Purpose:** Handles logic related to `border helpers enabled`.

### ZoomToPosition
`public static void ZoomToPosition(Vec3 pos)`

**Purpose:** Handles logic related to `zoom to position`.

### IsReplayManagerReplaying
`public static bool IsReplayManagerReplaying()`

**Purpose:** Handles logic related to `is replay manager replaying`.

### IsReplayManagerRendering
`public static bool IsReplayManagerRendering()`

**Purpose:** Handles logic related to `is replay manager rendering`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBEditor.UpdateSceneTree(false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
