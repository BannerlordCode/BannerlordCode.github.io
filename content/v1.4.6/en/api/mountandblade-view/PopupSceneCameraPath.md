---
title: "PopupSceneCameraPath"
description: "PopupSceneCameraPath: a public class in TaleWorlds.MountAndBlade.View, inheriting ScriptComponentBehavior; 32 exposed members (13 methods, 2 properties, 15 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs."
---
# PopupSceneCameraPath

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneCameraPath : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs`

## Overview

PopupSceneCameraPath lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is PopupSceneCameraPath → ScriptComponentBehavior. It exposes 32 public/protected members: 13 methods, 2 properties, 15 fields, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PopupSceneCameraPath is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Scripts) the module directory; inheritance chain PopupSceneCameraPath → ScriptComponentBehavior. The surface is method-led (methods 13/32, properties 2/32), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `Initialize` | `public void Initialize()` | method |
| `SetInitialState` | `public void SetInitialState()` | method |
| `SetPositiveState` | `public void SetPositiveState()` | method |
| `SetNegativeState` | `public void SetNegativeState()` | method |
| `SetIsReady` | `public void SetIsReady(bool isReady)` | method |
| `GetCameraFade` | `public float GetCameraFade()` | method |
| `Destroy` | `public void Destroy()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `LookAtEntity` | `public string LookAtEntity` | field |
| `SkeletonName` | `public string SkeletonName` | field |
| `AttachmentOffset` | `public Vec3 AttachmentOffset` | field |
| `InitialPath` | `public string InitialPath` | field |
| `InitialAnimationClip` | `public string InitialAnimationClip` | field |
| `InitialSound` | `public string InitialSound` | field |
| `InitialPathDuration` | `public float InitialPathDuration` | field |
| `PositivePath` | `public string PositivePath` | field |
| `PositiveAnimationClip` | `public string PositiveAnimationClip` | field |
| `PositiveSound` | `public string PositiveSound` | field |
| `PositivePathDuration` | `public float PositivePathDuration` | field |
| `NegativePath` | `public string NegativePath` | field |
| `NegativeAnimationClip` | `public string NegativeAnimationClip` | field |
| `NegativeSound` | `public string NegativeSound` | field |
| `NegativePathDuration` | `public float NegativePathDuration` | field |
| `InterpolationType` | `public enum InterpolationType` | property |
| `PathAnimationState` | `public struct PathAnimationState` | property |
| `InterpolationType` | `public enum InterpolationType` | nested type |
| `PathAnimationState` | `public struct PathAnimationState` | nested type |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterDebugSpawner](../CharacterDebugSpawner)
- [same namespace CharacterSpawner](../CharacterSpawner)
- [same namespace HandMorphTest](../HandMorphTest)
- [same namespace HandPose](../HandPose)
