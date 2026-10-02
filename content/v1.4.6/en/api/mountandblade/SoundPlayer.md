---
title: "SoundPlayer"
description: "SoundPlayer: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 9 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SoundPlayer.cs."
---
# SoundPlayer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SoundPlayer : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/SoundPlayer.cs`

## Overview

SoundPlayer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SoundPlayer.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is SoundPlayer → ScriptComponentBehavior. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SoundPlayer is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SoundPlayer → ScriptComponentBehavior. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SoundPlayer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpdatePlaying` | `public void UpdatePlaying()` | method |
| `PlaySound` | `public void PlaySound()` | method |
| `ResumeSound` | `public void ResumeSound()` | method |
| `PauseSound` | `public void PauseSound()` | method |
| `StopSound` | `public void StopSound()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
