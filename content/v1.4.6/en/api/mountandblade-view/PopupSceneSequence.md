---
title: "PopupSceneSequence"
description: "PopupSceneSequence: a public class in TaleWorlds.MountAndBlade.View, inheriting ScriptComponentBehavior; 10 exposed members (10 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSequence.cs."
---
# PopupSceneSequence

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneSequence : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSequence.cs`

## Overview

PopupSceneSequence lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSequence.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is PopupSceneSequence → ScriptComponentBehavior. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PopupSceneSequence is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Scripts) the module directory; inheritance chain PopupSceneSequence → ScriptComponentBehavior. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneSequence.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitializeWithAgentVisuals` | `public void InitializeWithAgentVisuals(AgentVisuals visuals)` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnInitialState` | `public virtual void OnInitialState()` | method |
| `OnPositiveState` | `public virtual void OnPositiveState()` | method |
| `OnNegativeState` | `public virtual void OnNegativeState()` | method |
| `SetInitialState` | `public void SetInitialState()` | method |
| `SetPositiveState` | `public void SetPositiveState()` | method |
| `SetNegativeState` | `public void SetNegativeState()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterDebugSpawner](../CharacterDebugSpawner)
- [same namespace CharacterSpawner](../CharacterSpawner)
- [same namespace HandMorphTest](../HandMorphTest)
- [same namespace HandPose](../HandPose)
