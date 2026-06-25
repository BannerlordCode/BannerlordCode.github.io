---
title: "MBEditor"
description: "MBEditor 的自动生成类参考。"
---
# MBEditor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBEditor`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBEditor.cs`

## 概述

`MBEditor` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### UpdateSceneTree
`public static void UpdateSceneTree(bool doNextFrame)`

**用途 / Purpose:** 重新计算并更新 「scene tree」 的最新表示。

```csharp
// 静态调用，不需要实例
MBEditor.UpdateSceneTree(false);
```

### IsEntitySelected
`public static bool IsEntitySelected(GameEntity entity)`

**用途 / Purpose:** 判断当前对象是否处于 「entity selected」 状态或条件。

```csharp
// 静态调用，不需要实例
MBEditor.IsEntitySelected(entity);
```

### IsEntitySelected
`public static bool IsEntitySelected(WeakGameEntity entity)`

**用途 / Purpose:** 判断当前对象是否处于 「entity selected」 状态或条件。

```csharp
// 静态调用，不需要实例
MBEditor.IsEntitySelected(entity);
```

### RenderEditorMesh
`public static void RenderEditorMesh(MetaMesh mesh, MatrixFrame frame)`

**用途 / Purpose:** 处理与 「render editor mesh」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBEditor.RenderEditorMesh(mesh, frame);
```

### ApplyDeltaToEditorCamera
`public static void ApplyDeltaToEditorCamera(Vec3 delta)`

**用途 / Purpose:** 将 「delta to editor camera」 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
MBEditor.ApplyDeltaToEditorCamera(delta);
```

### EnterEditMode
`public static void EnterEditMode(SceneView sceneView, MatrixFrame initialCameraFrame, float initialCameraElevation, float initialCameraBearing)`

**用途 / Purpose:** 获取或更新 「enter edit mode」 的状态。

```csharp
// 静态调用，不需要实例
MBEditor.EnterEditMode(sceneView, initialCameraFrame, 0, 0);
```

### TickEditMode
`public static void TickEditMode(float dt)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「edit mode」的状态。

```csharp
// 静态调用，不需要实例
MBEditor.TickEditMode(0);
```

### LeaveEditMode
`public static void LeaveEditMode()`

**用途 / Purpose:** 获取或更新 「leave edit mode」 的状态。

```csharp
// 静态调用，不需要实例
MBEditor.LeaveEditMode();
```

### EnterEditMissionMode
`public static void EnterEditMissionMode(Mission mission)`

**用途 / Purpose:** 获取或更新 「enter edit mission mode」 的状态。

```csharp
// 静态调用，不需要实例
MBEditor.EnterEditMissionMode(mission);
```

### LeaveEditMissionMode
`public static void LeaveEditMissionMode()`

**用途 / Purpose:** 获取或更新 「leave edit mission mode」 的状态。

```csharp
// 静态调用，不需要实例
MBEditor.LeaveEditMissionMode();
```

### IsEditorMissionOn
`public static bool IsEditorMissionOn()`

**用途 / Purpose:** 判断当前对象是否处于 「editor mission on」 状态或条件。

```csharp
// 静态调用，不需要实例
MBEditor.IsEditorMissionOn();
```

### ActivateSceneEditorPresentation
`public static void ActivateSceneEditorPresentation()`

**用途 / Purpose:** 激活「scene editor presentation」对应的资源、状态或功能。

```csharp
// 静态调用，不需要实例
MBEditor.ActivateSceneEditorPresentation();
```

### DeactivateSceneEditorPresentation
`public static void DeactivateSceneEditorPresentation()`

**用途 / Purpose:** 停用「scene editor presentation」对应的资源、状态或功能。

```csharp
// 静态调用，不需要实例
MBEditor.DeactivateSceneEditorPresentation();
```

### TickSceneEditorPresentation
`public static void TickSceneEditorPresentation(float dt)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「scene editor presentation」的状态。

```csharp
// 静态调用，不需要实例
MBEditor.TickSceneEditorPresentation(0);
```

### GetEditorSceneView
`public static SceneView GetEditorSceneView()`

**用途 / Purpose:** 读取并返回当前对象中 「editor scene view」 的结果。

```csharp
// 静态调用，不需要实例
MBEditor.GetEditorSceneView();
```

### HelpersEnabled
`public static bool HelpersEnabled()`

**用途 / Purpose:** 处理与 「helpers enabled」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBEditor.HelpersEnabled();
```

### BorderHelpersEnabled
`public static bool BorderHelpersEnabled()`

**用途 / Purpose:** 处理与 「border helpers enabled」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBEditor.BorderHelpersEnabled();
```

### ZoomToPosition
`public static void ZoomToPosition(Vec3 pos)`

**用途 / Purpose:** 处理与 「zoom to position」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBEditor.ZoomToPosition(pos);
```

### IsReplayManagerReplaying
`public static bool IsReplayManagerReplaying()`

**用途 / Purpose:** 判断当前对象是否处于 「replay manager replaying」 状态或条件。

```csharp
// 静态调用，不需要实例
MBEditor.IsReplayManagerReplaying();
```

### IsReplayManagerRendering
`public static bool IsReplayManagerRendering()`

**用途 / Purpose:** 判断当前对象是否处于 「replay manager rendering」 状态或条件。

```csharp
// 静态调用，不需要实例
MBEditor.IsReplayManagerRendering();
```

### IsReplayManagerRecording
`public static bool IsReplayManagerRecording()`

**用途 / Purpose:** 判断当前对象是否处于 「replay manager recording」 状态或条件。

```csharp
// 静态调用，不需要实例
MBEditor.IsReplayManagerRecording();
```

### AddEditorWarning
`public static void AddEditorWarning(string msg)`

**用途 / Purpose:** 将 「editor warning」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MBEditor.AddEditorWarning("example");
```

### AddEntityWarning
`public static void AddEntityWarning(WeakGameEntity entityId, string msg)`

**用途 / Purpose:** 将 「entity warning」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MBEditor.AddEntityWarning(entityId, "example");
```

### AddNavMeshWarning
`public static void AddNavMeshWarning(Scene scene, PathFaceRecord record, string msg)`

**用途 / Purpose:** 将 「nav mesh warning」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MBEditor.AddNavMeshWarning(scene, record, "example");
```

### GetAllPrefabsAndChildWithTag
`public static string GetAllPrefabsAndChildWithTag(string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「all prefabs and child with tag」 的结果。

```csharp
// 静态调用，不需要实例
MBEditor.GetAllPrefabsAndChildWithTag("example");
```

### ExitEditMode
`public static void ExitEditMode()`

**用途 / Purpose:** 获取或更新 「exit edit mode」 的状态。

```csharp
// 静态调用，不需要实例
MBEditor.ExitEditMode();
```

### SetUpgradeLevelVisibility
`public static void SetUpgradeLevelVisibility(List<string> levels)`

**用途 / Purpose:** 为 「upgrade level visibility」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBEditor.SetUpgradeLevelVisibility(levels);
```

### SetLevelVisibility
`public static void SetLevelVisibility(List<string> levels)`

**用途 / Purpose:** 为 「level visibility」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBEditor.SetLevelVisibility(levels);
```

### ToggleEnableEditorPhysics
`public static void ToggleEnableEditorPhysics()`

**用途 / Purpose:** 处理与 「toggle enable editor physics」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBEditor.ToggleEnableEditorPhysics();
```

## 使用示例

```csharp
MBEditor.UpdateSceneTree(false);
```

## 参见

- [本区域目录](../)