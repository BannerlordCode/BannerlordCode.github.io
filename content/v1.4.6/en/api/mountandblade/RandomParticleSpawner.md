---
title: "RandomParticleSpawner"
description: "RandomParticleSpawner: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 7 exposed members (6 methods, 0 properties, 1 fields). Source: TaleWorlds.MountAndBlade/RandomParticleSpawner.cs."
---
# RandomParticleSpawner

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class RandomParticleSpawner : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/RandomParticleSpawner.cs`

## Overview

RandomParticleSpawner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/RandomParticleSpawner.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is RandomParticleSpawner → ScriptComponentBehavior. It exposes 7 public/protected members: 6 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RandomParticleSpawner is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain RandomParticleSpawner → ScriptComponentBehavior. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/RandomParticleSpawner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |
| `spawnInterval` | `public float spawnInterval` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
