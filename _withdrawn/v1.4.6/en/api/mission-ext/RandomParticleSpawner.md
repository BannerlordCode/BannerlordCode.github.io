---
title: "RandomParticleSpawner"
description: "RandomParticleSpawner: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 7 exposed members (6 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/RandomParticleSpawner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RandomParticleSpawner

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class RandomParticleSpawner : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/RandomParticleSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

RandomParticleSpawner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/RandomParticleSpawner.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is RandomParticleSpawner → ScriptComponentBehavior → DotNetObject. It exposes 7 public/protected members: 6 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RandomParticleSpawner lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain RandomParticleSpawner → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/RandomParticleSpawner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |
| `spawnInterval` | `public float spawnInterval` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
