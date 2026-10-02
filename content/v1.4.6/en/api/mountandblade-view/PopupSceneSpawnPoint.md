---
title: "PopupSceneSpawnPoint"
description: "PopupSceneSpawnPoint: a public class in TaleWorlds.MountAndBlade.View, inheriting ScriptComponentBehavior; 21 exposed members (8 methods, 1 properties, 12 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs."
---
# PopupSceneSpawnPoint

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneSpawnPoint : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs`

## Overview

PopupSceneSpawnPoint lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is PopupSceneSpawnPoint → ScriptComponentBehavior. It exposes 21 public/protected members: 8 methods, 1 properties, 12 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PopupSceneSpawnPoint is a top-level type in TaleWorlds.MountAndBlade.View, namespace matching the module directory; inheritance chain PopupSceneSpawnPoint → ScriptComponentBehavior. The surface is method-led (methods 8/21, properties 1/21), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddedPrefabComponent` | `public CompositeComponent AddedPrefabComponent` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `InitializeWithAgentVisuals` | `public void InitializeWithAgentVisuals(AgentVisuals humanVisuals, AgentVisuals mountVisuals = null)` | method |
| `SetInitialState` | `public void SetInitialState()` | method |
| `SetPositiveState` | `public void SetPositiveState()` | method |
| `SetNegativeState` | `public void SetNegativeState()` | method |
| `Destroy` | `public void Destroy()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `InitialAction` | `public string InitialAction` | field |
| `NegativeAction` | `public string NegativeAction` | field |
| `InitialFaceAnimCode` | `public string InitialFaceAnimCode` | field |
| `PositiveFaceAnimCode` | `public string PositiveFaceAnimCode` | field |
| `NegativeFaceAnimCode` | `public string NegativeFaceAnimCode` | field |
| `PositiveAction` | `public string PositiveAction` | field |
| `LeftHandWieldedItem` | `public string LeftHandWieldedItem` | field |
| `RightHandWieldedItem` | `public string RightHandWieldedItem` | field |
| `BannerTagToUseForAddedPrefab` | `public string BannerTagToUseForAddedPrefab` | field |
| `AttachedPrefabOffset` | `public Vec3 AttachedPrefabOffset` | field |
| `PrefabItem` | `public string PrefabItem` | field |
| `PrefabBone` | `public HumanBone PrefabBone` | field |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentVisuals](../AgentVisuals)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator)
- [same namespace BannerVisual](../BannerVisual)
- [same namespace BannerVisualCreator](../BannerVisualCreator)
