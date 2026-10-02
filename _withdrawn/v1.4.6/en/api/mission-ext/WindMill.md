---
title: "WindMill"
description: "WindMill: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 8 exposed members (6 methods, 0 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/WindMill.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WindMill

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class WindMill : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/WindMill.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

WindMill lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/WindMill.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is WindMill → ScriptComponentBehavior → DotNetObject. It exposes 8 public/protected members: 6 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WindMill lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain WindMill → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/WindMill.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetIntegerFromStringEnd` | `public static int GetIntegerFromStringEnd(string str)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `rotationSpeed` | `public float rotationSpeed` | field |
| `waterSplashIntervalMultiplier` | `public float waterSplashIntervalMultiplier` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
