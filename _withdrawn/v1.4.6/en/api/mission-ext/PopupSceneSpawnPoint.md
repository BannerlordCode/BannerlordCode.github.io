---
title: "PopupSceneSpawnPoint"
description: "PopupSceneSpawnPoint: a public class in TaleWorlds.MountAndBlade.View, inheriting ScriptComponentBehavior; 21 exposed members (8 methods, 1 properties, 12 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PopupSceneSpawnPoint

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneSpawnPoint : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PopupSceneSpawnPoint lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is PopupSceneSpawnPoint → ScriptComponentBehavior → DotNetObject. It exposes 21 public/protected members: 8 methods, 1 properties, 12 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PopupSceneSpawnPoint lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View`, inheritance chain PopupSceneSpawnPoint → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 8/21, properties 1/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace AgentVisuals](../AgentVisuals/)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator/)
- [same namespace BannerVisual](../BannerVisual/)
- [same namespace BannerVisualCreator](../BannerVisualCreator/)
