<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBEditor`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBEditor

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBEditor` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsEditModeOn` | `public static bool IsEditModeOn { get; }` |
| `EditModeEnabled` | `public static bool EditModeEnabled { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)