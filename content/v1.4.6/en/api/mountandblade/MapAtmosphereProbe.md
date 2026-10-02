---
title: "MapAtmosphereProbe"
description: "MapAtmosphereProbe: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 9 exposed members (3 methods, 0 properties, 5 fields). Source: TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs."
---
# MapAtmosphereProbe

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MapAtmosphereProbe : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs`

## Overview

MapAtmosphereProbe lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is MapAtmosphereProbe → ScriptComponentBehavior. It exposes 9 public/protected members: 3 methods, 5 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapAtmosphereProbe is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MapAtmosphereProbe → ScriptComponentBehavior. The surface is method-led (methods 3/9, properties 0/9), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MapAtmosphereProbe.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
