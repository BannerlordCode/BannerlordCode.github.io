---
title: "TestScript"
description: "TestScript: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 10 exposed members (5 methods, 0 properties, 5 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TestScript.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TestScript

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TestScript : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/TestScript.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TestScript lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TestScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is TestScript → ScriptComponentBehavior → DotNetObject. It exposes 10 public/protected members: 5 methods, 5 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TestScript lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TestScript → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 5/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TestScript.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetIntegerFromStringEnd` | `public static int GetIntegerFromStringEnd(string str)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `waterSplashIntervalMultiplier` | `public float waterSplashIntervalMultiplier` | field |
| `MoveAxisX` | `public float MoveAxisX` | field |
| `MoveSpeed` | `public float MoveSpeed` | field |
| `MoveDistance` | `public float MoveDistance` | field |
| `MoveDirection` | `protected float MoveDirection` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
