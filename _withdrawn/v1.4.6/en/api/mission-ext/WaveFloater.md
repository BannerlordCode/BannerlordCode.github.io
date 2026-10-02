---
title: "WaveFloater"
description: "WaveFloater: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 15 exposed members (7 methods, 0 properties, 8 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/WaveFloater.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WaveFloater

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class WaveFloater : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/WaveFloater.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

WaveFloater lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/WaveFloater.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is WaveFloater → ScriptComponentBehavior → DotNetObject. It exposes 15 public/protected members: 7 methods, 8 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WaveFloater lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain WaveFloater → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 7/15, properties 0/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/WaveFloater.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnSceneSave` | `protected internal override void OnSceneSave(string saveFolder)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `oscillationFrequency` | `public float oscillationFrequency` | field |
| `maxOscillationAngle` | `public float maxOscillationAngle` | field |
| `bounceXFrequency` | `public float bounceXFrequency` | field |
| `maxBounceXDistance` | `public float maxBounceXDistance` | field |
| `bounceYFrequency` | `public float bounceYFrequency` | field |
| `maxBounceYDistance` | `public float maxBounceYDistance` | field |
| `bounceZFrequency` | `public float bounceZFrequency` | field |
| `maxBounceZDistance` | `public float maxBounceZDistance` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
