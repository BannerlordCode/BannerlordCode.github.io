---
title: "MBEditor"
description: "MBEditor：TaleWorlds.MountAndBlade 的 public 类；公开成员 31 个（方法 29、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MBEditor.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBEditor

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBEditor`
**File:** `TaleWorlds.MountAndBlade/MBEditor.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MBEditor 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBEditor.cs。它是一个 public 类，继承链为 MBEditor。public/protected 成员共 31 个：29 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBEditor 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MBEditor。成员构成以方法为主（方法 29/31，属性 2/31），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBEditor.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEditModeOn` | `public static bool IsEditModeOn` | 属性 |
| `EditModeEnabled` | `public static bool EditModeEnabled` | 属性 |
| `UpdateSceneTree` | `public static void UpdateSceneTree(bool doNextFrame)` | 方法 |
| `IsEntitySelected` | `public static bool IsEntitySelected(GameEntity entity)` | 方法 |
| `IsEntitySelected` | `public static bool IsEntitySelected(WeakGameEntity entity)` | 方法 |
| `RenderEditorMesh` | `public static void RenderEditorMesh(MetaMesh mesh, MatrixFrame frame)` | 方法 |
| `ApplyDeltaToEditorCamera` | `public static void ApplyDeltaToEditorCamera(Vec3 delta)` | 方法 |
| `EnterEditMode` | `public static void EnterEditMode(SceneView sceneView, MatrixFrame initialCameraFrame, float initialCameraElevation, float initialCameraBearing)` | 方法 |
| `TickEditMode` | `public static void TickEditMode(float dt)` | 方法 |
| `LeaveEditMode` | `public static void LeaveEditMode()` | 方法 |
| `EnterEditMissionMode` | `public static void EnterEditMissionMode(Mission mission)` | 方法 |
| `LeaveEditMissionMode` | `public static void LeaveEditMissionMode()` | 方法 |
| `IsEditorMissionOn` | `public static bool IsEditorMissionOn()` | 方法 |
| `ActivateSceneEditorPresentation` | `public static void ActivateSceneEditorPresentation()` | 方法 |
| `DeactivateSceneEditorPresentation` | `public static void DeactivateSceneEditorPresentation()` | 方法 |
| `TickSceneEditorPresentation` | `public static void TickSceneEditorPresentation(float dt)` | 方法 |
| `GetEditorSceneView` | `public static SceneView GetEditorSceneView()` | 方法 |
| `HelpersEnabled` | `public static bool HelpersEnabled()` | 方法 |
| `BorderHelpersEnabled` | `public static bool BorderHelpersEnabled()` | 方法 |
| `ZoomToPosition` | `public static void ZoomToPosition(Vec3 pos)` | 方法 |
| `IsReplayManagerReplaying` | `public static bool IsReplayManagerReplaying()` | 方法 |
| `IsReplayManagerRendering` | `public static bool IsReplayManagerRendering()` | 方法 |
| `IsReplayManagerRecording` | `public static bool IsReplayManagerRecording()` | 方法 |
| `AddEditorWarning` | `public static void AddEditorWarning(string msg)` | 方法 |
| `AddEntityWarning` | `public static void AddEntityWarning(WeakGameEntity entityId, string msg)` | 方法 |
| `AddNavMeshWarning` | `public static void AddNavMeshWarning(Scene scene, PathFaceRecord record, string msg)` | 方法 |
| `GetAllPrefabsAndChildWithTag` | `public static string GetAllPrefabsAndChildWithTag(string tag)` | 方法 |
| `ExitEditMode` | `public static void ExitEditMode()` | 方法 |
| `SetUpgradeLevelVisibility` | `public static void SetUpgradeLevelVisibility(List<string>levels)` | 方法 |
| `SetLevelVisibility` | `public static void SetLevelVisibility(List<string>levels)` | 方法 |
| `ToggleEnableEditorPhysics` | `public static void ToggleEnableEditorPhysics()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
