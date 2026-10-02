---
title: "MBEditor"
description: "MBEditor: a public class in TaleWorlds.MountAndBlade; 31 exposed members (29 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MBEditor.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBEditor

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBEditor`
**File:** `TaleWorlds.MountAndBlade/MBEditor.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MBEditor lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBEditor.cs. It is a public class; the inheritance chain is MBEditor. It exposes 31 public/protected members: 29 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBEditor lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MBEditor. The surface is method-led (methods 29/31, properties 2/31), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBEditor.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsEditModeOn` | `public static bool IsEditModeOn` | property |
| `EditModeEnabled` | `public static bool EditModeEnabled` | property |
| `UpdateSceneTree` | `public static void UpdateSceneTree(bool doNextFrame)` | method |
| `IsEntitySelected` | `public static bool IsEntitySelected(GameEntity entity)` | method |
| `IsEntitySelected` | `public static bool IsEntitySelected(WeakGameEntity entity)` | method |
| `RenderEditorMesh` | `public static void RenderEditorMesh(MetaMesh mesh, MatrixFrame frame)` | method |
| `ApplyDeltaToEditorCamera` | `public static void ApplyDeltaToEditorCamera(Vec3 delta)` | method |
| `EnterEditMode` | `public static void EnterEditMode(SceneView sceneView, MatrixFrame initialCameraFrame, float initialCameraElevation, float initialCameraBearing)` | method |
| `TickEditMode` | `public static void TickEditMode(float dt)` | method |
| `LeaveEditMode` | `public static void LeaveEditMode()` | method |
| `EnterEditMissionMode` | `public static void EnterEditMissionMode(Mission mission)` | method |
| `LeaveEditMissionMode` | `public static void LeaveEditMissionMode()` | method |
| `IsEditorMissionOn` | `public static bool IsEditorMissionOn()` | method |
| `ActivateSceneEditorPresentation` | `public static void ActivateSceneEditorPresentation()` | method |
| `DeactivateSceneEditorPresentation` | `public static void DeactivateSceneEditorPresentation()` | method |
| `TickSceneEditorPresentation` | `public static void TickSceneEditorPresentation(float dt)` | method |
| `GetEditorSceneView` | `public static SceneView GetEditorSceneView()` | method |
| `HelpersEnabled` | `public static bool HelpersEnabled()` | method |
| `BorderHelpersEnabled` | `public static bool BorderHelpersEnabled()` | method |
| `ZoomToPosition` | `public static void ZoomToPosition(Vec3 pos)` | method |
| `IsReplayManagerReplaying` | `public static bool IsReplayManagerReplaying()` | method |
| `IsReplayManagerRendering` | `public static bool IsReplayManagerRendering()` | method |
| `IsReplayManagerRecording` | `public static bool IsReplayManagerRecording()` | method |
| `AddEditorWarning` | `public static void AddEditorWarning(string msg)` | method |
| `AddEntityWarning` | `public static void AddEntityWarning(WeakGameEntity entityId, string msg)` | method |
| `AddNavMeshWarning` | `public static void AddNavMeshWarning(Scene scene, PathFaceRecord record, string msg)` | method |
| `GetAllPrefabsAndChildWithTag` | `public static string GetAllPrefabsAndChildWithTag(string tag)` | method |
| `ExitEditMode` | `public static void ExitEditMode()` | method |
| `SetUpgradeLevelVisibility` | `public static void SetUpgradeLevelVisibility(List<string>levels)` | method |
| `SetLevelVisibility` | `public static void SetLevelVisibility(List<string>levels)` | method |
| `ToggleEnableEditorPhysics` | `public static void ToggleEnableEditorPhysics()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
