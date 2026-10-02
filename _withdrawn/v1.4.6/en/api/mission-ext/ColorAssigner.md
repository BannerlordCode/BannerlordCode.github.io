---
title: "ColorAssigner"
description: "ColorAssigner: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 6 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ColorAssigner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ColorAssigner

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ColorAssigner : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/ColorAssigner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ColorAssigner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ColorAssigner.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is ColorAssigner → ScriptComponentBehavior → DotNetObject. It exposes 6 public/protected members: 4 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ColorAssigner lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ColorAssigner → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ColorAssigner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ShipColor` | `public Color ShipColor` | property |
| `RamDebrisColor` | `public Color RamDebrisColor` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `SetColor` | `public void SetColor(WeakGameEntity entity)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
