---
title: "SoundPlayer"
description: "SoundPlayer: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 9 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SoundPlayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SoundPlayer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SoundPlayer : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/SoundPlayer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SoundPlayer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SoundPlayer.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is SoundPlayer → ScriptComponentBehavior → DotNetObject. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SoundPlayer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SoundPlayer → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SoundPlayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
