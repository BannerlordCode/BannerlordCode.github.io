---
title: "MBEditor"
description: "MBEditor 的自动生成类参考。"
---
# MBEditor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBEditor `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBEditor.cs

## 概述

`MBEditor` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBEditor.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### UpdateSceneTree
`public static void UpdateSceneTree(bool doNextFrame) `

### IsEntitySelected
`public static bool IsEntitySelected(GameEntity entity) `
`public static bool IsEntitySelected(WeakGameEntity entity) `

### RenderEditorMesh
`public static void RenderEditorMesh(MetaMesh mesh,MatrixFrame frame) `

### ApplyDeltaToEditorCamera
`public static void ApplyDeltaToEditorCamera(Vec3 delta) `

### EnterEditMode
`public static void EnterEditMode(SceneView sceneView,MatrixFrame initialCameraFrame,float initialCameraElevation,float initialCameraBearing) `

### TickEditMode
`public static void TickEditMode(float dt) `

### LeaveEditMode
`public static void LeaveEditMode() `

### EnterEditMissionMode
`public static void EnterEditMissionMode(Mission mission) `

### LeaveEditMissionMode
`public static void LeaveEditMissionMode() `

### IsEditorMissionOn
`public static bool IsEditorMissionOn() `

### ActivateSceneEditorPresentation
`public static void ActivateSceneEditorPresentation() `

### DeactivateSceneEditorPresentation
`public static void DeactivateSceneEditorPresentation() `

### TickSceneEditorPresentation
`public static void TickSceneEditorPresentation(float dt) `

### GetEditorSceneView
`public static SceneView GetEditorSceneView() `

### HelpersEnabled
`public static bool HelpersEnabled() `

### BorderHelpersEnabled
`public static bool BorderHelpersEnabled() `

### ZoomToPosition
`public static void ZoomToPosition(Vec3 pos) `

### IsReplayManagerReplaying
`public static bool IsReplayManagerReplaying() `

### IsReplayManagerRendering
`public static bool IsReplayManagerRendering() `

### IsReplayManagerRecording
`public static bool IsReplayManagerRecording() `

### AddEditorWarning
`public static void AddEditorWarning(string msg) `

### AddEntityWarning
`public static void AddEntityWarning(WeakGameEntity entityId,string msg) `

### AddNavMeshWarning
`public static void AddNavMeshWarning(Scene scene,PathFaceRecord record,string msg) `

### GetAllPrefabsAndChildWithTag
`public static string GetAllPrefabsAndChildWithTag(string tag) `

### ExitEditMode
`public static void ExitEditMode() `

### SetUpgradeLevelVisibility
`public static void SetUpgradeLevelVisibility(List<string> levels) `

### SetLevelVisibility
`public static void SetLevelVisibility(List<string> levels) `

### ToggleEnableEditorPhysics
`public static void ToggleEnableEditorPhysics() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
