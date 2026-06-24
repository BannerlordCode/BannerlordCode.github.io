<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEditor`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

### IsReplayManagerRecording
`public static bool IsReplayManagerRecording()`

**Purpose:** Handles logic related to `is replay manager recording`.

### AddEditorWarning
`public static void AddEditorWarning(string msg)`

**Purpose:** Adds `editor warning` to the current collection or state.

### AddEntityWarning
`public static void AddEntityWarning(WeakGameEntity entityId, string msg)`

**Purpose:** Adds `entity warning` to the current collection or state.

### AddNavMeshWarning
`public static void AddNavMeshWarning(Scene scene, PathFaceRecord record, string msg)`

**Purpose:** Adds `nav mesh warning` to the current collection or state.

### GetAllPrefabsAndChildWithTag
`public static string GetAllPrefabsAndChildWithTag(string tag)`

**Purpose:** Gets the current value of `all prefabs and child with tag`.

### ExitEditMode
`public static void ExitEditMode()`

**Purpose:** Handles logic related to `exit edit mode`.

### SetUpgradeLevelVisibility
`public static void SetUpgradeLevelVisibility(List<string> levels)`

**Purpose:** Sets the value or state of `upgrade level visibility`.

### SetLevelVisibility
`public static void SetLevelVisibility(List<string> levels)`

**Purpose:** Sets the value or state of `level visibility`.

### ToggleEnableEditorPhysics
`public static void ToggleEnableEditorPhysics()`

**Purpose:** Handles logic related to `toggle enable editor physics`.

## Usage Example

```csharp
MBEditor.UpdateSceneTree(false);
```

## See Also

- [Complete Class Catalog](../catalog)