---
title: "Lightning"
description: "Lightning: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 11 exposed members (5 methods, 0 properties, 6 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Lightning.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Lightning

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Lightning : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Lightning.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

Lightning lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Lightning.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is Lightning → ScriptComponentBehavior → DotNetObject. It exposes 11 public/protected members: 5 methods, 6 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Lightning lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain Lightning → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 5/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Lightning.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `LightIntensity` | `public float LightIntensity` | field |
| `LightningRate` | `public float LightningRate` | field |
| `BoltSpeed` | `public float BoltSpeed` | field |
| `LightTravelRadius` | `public float LightTravelRadius` | field |
| `BoltLife` | `public float BoltLife` | field |
| `IsBoltEnabled` | `public bool IsBoltEnabled` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
