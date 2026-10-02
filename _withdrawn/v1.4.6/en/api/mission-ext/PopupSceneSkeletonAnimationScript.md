---
title: "PopupSceneSkeletonAnimationScript"
description: "PopupSceneSkeletonAnimationScript: a public class in TaleWorlds.MountAndBlade.View, inheriting ScriptComponentBehavior; 13 exposed members (5 methods, 0 properties, 8 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PopupSceneSkeletonAnimationScript

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneSkeletonAnimationScript : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PopupSceneSkeletonAnimationScript lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is PopupSceneSkeletonAnimationScript → ScriptComponentBehavior → DotNetObject. It exposes 13 public/protected members: 5 methods, 8 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PopupSceneSkeletonAnimationScript lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View`, inheritance chain PopupSceneSkeletonAnimationScript → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 5/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `Initialize` | `public void Initialize()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `SetState` | `public void SetState(int state)` | method |
| `SkeletonName` | `public string SkeletonName` | field |
| `AttachmentOffset` | `public Vec3 AttachmentOffset` | field |
| `InitialAnimationClip` | `public string InitialAnimationClip` | field |
| `PositiveAnimationClip` | `public string PositiveAnimationClip` | field |
| `NegativeAnimationClip` | `public string NegativeAnimationClip` | field |
| `InitialAnimationContinueClip` | `public string InitialAnimationContinueClip` | field |
| `PositiveAnimationContinueClip` | `public string PositiveAnimationContinueClip` | field |
| `NegativeAnimationContinueClip` | `public string NegativeAnimationContinueClip` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace AgentVisuals](../AgentVisuals/)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator/)
- [same namespace BannerVisual](../BannerVisual/)
- [same namespace BannerVisualCreator](../BannerVisualCreator/)
