---
title: "RoadStart"
description: "RoadStart: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 7 exposed members (6 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/RoadStart.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RoadStart

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class RoadStart : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/RoadStart.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

RoadStart lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/RoadStart.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is RoadStart → ScriptComponentBehavior → DotNetObject. It exposes 7 public/protected members: 6 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RoadStart lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain RoadStart → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/RoadStart.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |
| `materialName` | `public string materialName` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
