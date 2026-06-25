---
title: "MBEditor"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBEditor`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBEditor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBEditor`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBEditor.cs`

## 概述

`MBEditor` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEditModeOn` | `public static bool IsEditModeOn { get; }` |
| `EditModeEnabled` | `public static bool EditModeEnabled { get; }` |

## 主要方法

### UpdateSceneTree
`public static void UpdateSceneTree(bool doNextFrame)`

**用途 / Purpose:** 更新 `scene tree` 的状态或数据。

### IsEntitySelected
`public static bool IsEntitySelected(GameEntity entity)`

**用途 / Purpose:** 处理 `is entity selected` 相关逻辑。

### IsEntitySelected
`public static bool IsEntitySelected(WeakGameEntity entity)`

**用途 / Purpose:** 处理 `is entity selected` 相关逻辑。

### RenderEditorMesh
`public static void RenderEditorMesh(MetaMesh mesh, MatrixFrame frame)`

**用途 / Purpose:** 处理 `render editor mesh` 相关逻辑。

### ApplyDeltaToEditorCamera
`public static void ApplyDeltaToEditorCamera(Vec3 delta)`

**用途 / Purpose:** 将 `delta to editor camera` 应用到当前对象。

### EnterEditMode
`public static void EnterEditMode(SceneView sceneView, MatrixFrame initialCameraFrame, float initialCameraElevation, float initialCameraBearing)`

**用途 / Purpose:** 处理 `enter edit mode` 相关逻辑。

### TickEditMode
`public static void TickEditMode(float dt)`

**用途 / Purpose:** 处理 `tick edit mode` 相关逻辑。

### LeaveEditMode
`public static void LeaveEditMode()`

**用途 / Purpose:** 处理 `leave edit mode` 相关逻辑。

### EnterEditMissionMode
`public static void EnterEditMissionMode(Mission mission)`

**用途 / Purpose:** 处理 `enter edit mission mode` 相关逻辑。

### LeaveEditMissionMode
`public static void LeaveEditMissionMode()`

**用途 / Purpose:** 处理 `leave edit mission mode` 相关逻辑。

### IsEditorMissionOn
`public static bool IsEditorMissionOn()`

**用途 / Purpose:** 处理 `is editor mission on` 相关逻辑。

### ActivateSceneEditorPresentation
`public static void ActivateSceneEditorPresentation()`

**用途 / Purpose:** 处理 `activate scene editor presentation` 相关逻辑。

### DeactivateSceneEditorPresentation
`public static void DeactivateSceneEditorPresentation()`

**用途 / Purpose:** 处理 `deactivate scene editor presentation` 相关逻辑。

### TickSceneEditorPresentation
`public static void TickSceneEditorPresentation(float dt)`

**用途 / Purpose:** 处理 `tick scene editor presentation` 相关逻辑。

### GetEditorSceneView
`public static SceneView GetEditorSceneView()`

**用途 / Purpose:** 获取 `editor scene view` 的当前值。

### HelpersEnabled
`public static bool HelpersEnabled()`

**用途 / Purpose:** 处理 `helpers enabled` 相关逻辑。

### BorderHelpersEnabled
`public static bool BorderHelpersEnabled()`

**用途 / Purpose:** 处理 `border helpers enabled` 相关逻辑。

### ZoomToPosition
`public static void ZoomToPosition(Vec3 pos)`

**用途 / Purpose:** 处理 `zoom to position` 相关逻辑。

### IsReplayManagerReplaying
`public static bool IsReplayManagerReplaying()`

**用途 / Purpose:** 处理 `is replay manager replaying` 相关逻辑。

### IsReplayManagerRendering
`public static bool IsReplayManagerRendering()`

**用途 / Purpose:** 处理 `is replay manager rendering` 相关逻辑。

### IsReplayManagerRecording
`public static bool IsReplayManagerRecording()`

**用途 / Purpose:** 处理 `is replay manager recording` 相关逻辑。

### AddEditorWarning
`public static void AddEditorWarning(string msg)`

**用途 / Purpose:** 向当前集合/状态中添加 `editor warning`。

### AddEntityWarning
`public static void AddEntityWarning(WeakGameEntity entityId, string msg)`

**用途 / Purpose:** 向当前集合/状态中添加 `entity warning`。

### AddNavMeshWarning
`public static void AddNavMeshWarning(Scene scene, PathFaceRecord record, string msg)`

**用途 / Purpose:** 向当前集合/状态中添加 `nav mesh warning`。

### GetAllPrefabsAndChildWithTag
`public static string GetAllPrefabsAndChildWithTag(string tag)`

**用途 / Purpose:** 获取 `all prefabs and child with tag` 的当前值。

### ExitEditMode
`public static void ExitEditMode()`

**用途 / Purpose:** 处理 `exit edit mode` 相关逻辑。

### SetUpgradeLevelVisibility
`public static void SetUpgradeLevelVisibility(List<string> levels)`

**用途 / Purpose:** 设置 `upgrade level visibility` 的值或状态。

### SetLevelVisibility
`public static void SetLevelVisibility(List<string> levels)`

**用途 / Purpose:** 设置 `level visibility` 的值或状态。

### ToggleEnableEditorPhysics
`public static void ToggleEnableEditorPhysics()`

**用途 / Purpose:** 处理 `toggle enable editor physics` 相关逻辑。

## 使用示例

```csharp
MBEditor.UpdateSceneTree(false);
```

## 参见

- [完整类目录](../catalog)