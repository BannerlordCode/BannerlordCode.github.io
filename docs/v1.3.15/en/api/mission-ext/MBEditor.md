<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBEditor`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBEditor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBEditor` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsEditModeOn` | `public static bool IsEditModeOn { get; }` |
| `EditModeEnabled` | `public static bool EditModeEnabled { get; }` |


## Key Methods

### UpdateSceneTree

```csharp
public static void UpdateSceneTree(bool doNextFrame)
```

### IsEntitySelected

```csharp
public static bool IsEntitySelected(GameEntity entity)
```

### IsEntitySelected

```csharp
public static bool IsEntitySelected(WeakGameEntity entity)
```

### RenderEditorMesh

```csharp
public static void RenderEditorMesh(MetaMesh mesh, MatrixFrame frame)
```

### ApplyDeltaToEditorCamera

```csharp
public static void ApplyDeltaToEditorCamera(Vec3 delta)
```

### EnterEditMode

```csharp
public static void EnterEditMode(SceneView sceneView, MatrixFrame initialCameraFrame, float initialCameraElevation, float initialCameraBearing)
```

### TickEditMode

```csharp
public static void TickEditMode(float dt)
```

### LeaveEditMode

```csharp
public static void LeaveEditMode()
```

### EnterEditMissionMode

```csharp
public static void EnterEditMissionMode(Mission mission)
```

### LeaveEditMissionMode

```csharp
public static void LeaveEditMissionMode()
```

### IsEditorMissionOn

```csharp
public static bool IsEditorMissionOn()
```

### ActivateSceneEditorPresentation

```csharp
public static void ActivateSceneEditorPresentation()
```

### DeactivateSceneEditorPresentation

```csharp
public static void DeactivateSceneEditorPresentation()
```

### TickSceneEditorPresentation

```csharp
public static void TickSceneEditorPresentation(float dt)
```

### GetEditorSceneView

```csharp
public static SceneView GetEditorSceneView()
```

### HelpersEnabled

```csharp
public static bool HelpersEnabled()
```

### BorderHelpersEnabled

```csharp
public static bool BorderHelpersEnabled()
```

### ZoomToPosition

```csharp
public static void ZoomToPosition(Vec3 pos)
```

### IsReplayManagerReplaying

```csharp
public static bool IsReplayManagerReplaying()
```

### IsReplayManagerRendering

```csharp
public static bool IsReplayManagerRendering()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)