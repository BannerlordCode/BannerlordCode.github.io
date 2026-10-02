---
title: "PopupSceneSkeletonAnimationScript"
description: "PopupSceneSkeletonAnimationScript: a public class in TaleWorlds.MountAndBlade.View, inheriting ScriptComponentBehavior; 13 exposed members (5 methods, 0 properties, 8 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs."
---
# PopupSceneSkeletonAnimationScript

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneSkeletonAnimationScript : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs`

## Overview

PopupSceneSkeletonAnimationScript lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is PopupSceneSkeletonAnimationScript → ScriptComponentBehavior. It exposes 13 public/protected members: 5 methods, 8 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PopupSceneSkeletonAnimationScript is a top-level type in TaleWorlds.MountAndBlade.View, namespace matching the module directory; inheritance chain PopupSceneSkeletonAnimationScript → ScriptComponentBehavior. The surface is method-led (methods 5/13, properties 0/13), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentVisuals](../AgentVisuals)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator)
- [same namespace BannerVisual](../BannerVisual)
- [same namespace BannerVisualCreator](../BannerVisualCreator)
