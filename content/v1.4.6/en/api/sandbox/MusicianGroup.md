---
title: "MusicianGroup"
description: "MusicianGroup: a public class in SandBox, inheriting UsableMachine; 9 exposed members (7 methods, 0 properties, 2 fields). Source: SandBox/Objects/Usables/MusicianGroup.cs."
---
# MusicianGroup

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class MusicianGroup : UsableMachine`
**File:** `SandBox/Objects/Usables/MusicianGroup.cs`

## Overview

MusicianGroup lives in the SandBox module, source file SandBox/Objects/Usables/MusicianGroup.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is MusicianGroup → UsableMachine. It exposes 9 public/protected members: 7 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MusicianGroup is a top-level type in SandBox, namespace differing from (SandBox.Objects.Usables) the module directory; inheritance chain MusicianGroup → UsableMachine. The surface is method-led (methods 7/9, properties 0/9), so it mostly exposes operations. UsableMachine on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/MusicianGroup.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `SetPlayList` | `public void SetPlayList(List<SettlementMusicData>playList)` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GapBetweenTracks` | `public const int GapBetweenTracks` | field |
| `DisableAmbientMusic` | `public const bool DisableAmbientMusic` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Chair](../Chair)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [same namespace Passage](../Passage)
