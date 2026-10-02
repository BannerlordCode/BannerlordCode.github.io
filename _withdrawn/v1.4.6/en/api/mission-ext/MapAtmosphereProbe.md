---
title: "MapAtmosphereProbe"
description: "MapAtmosphereProbe: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 9 exposed members (3 methods, 0 properties, 5 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapAtmosphereProbe

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MapAtmosphereProbe : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MapAtmosphereProbe lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is MapAtmosphereProbe → ScriptComponentBehavior → DotNetObject. It exposes 9 public/protected members: 3 methods, 5 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapAtmosphereProbe lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MapAtmosphereProbe → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 3/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetInfluenceAmount` | `public float GetInfluenceAmount(Vec3 worldPosition)` | method |
| `MapAtmosphereProbe` | `public MapAtmosphereProbe()` | constructor |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `visualizeRadius` | `public bool visualizeRadius` | field |
| `hideAllProbes` | `public bool hideAllProbes` | field |
| `hideAllProbesStatic` | `public static bool hideAllProbesStatic` | field |
| `minRadius` | `public float minRadius` | field |
| `maxRadius` | `public float maxRadius` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
