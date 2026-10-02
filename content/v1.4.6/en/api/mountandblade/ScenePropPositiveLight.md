---
title: "ScenePropPositiveLight"
description: "ScenePropPositiveLight: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 9 exposed members (3 methods, 0 properties, 6 fields). Source: TaleWorlds.MountAndBlade/ScenePropPositiveLight.cs."
---
# ScenePropPositiveLight

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ScenePropPositiveLight : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/ScenePropPositiveLight.cs`

## Overview

ScenePropPositiveLight lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ScenePropPositiveLight.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is ScenePropPositiveLight → ScriptComponentBehavior. It exposes 9 public/protected members: 3 methods, 6 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScenePropPositiveLight is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ScenePropPositiveLight → ScriptComponentBehavior. The surface is method-led (methods 3/9, properties 0/9), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ScenePropPositiveLight.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `IsOnlyVisual` | `protected internal override bool IsOnlyVisual()` | method |
| `DirectLightRed` | `public float DirectLightRed` | field |
| `DirectLightGreen` | `public float DirectLightGreen` | field |
| `DirectLightBlue` | `public float DirectLightBlue` | field |
| `DirectLightIntensity` | `public float DirectLightIntensity` | field |
| `AmbientLightBlue` | `public float AmbientLightBlue` | field |
| `AmbientLightIntensity` | `public float AmbientLightIntensity` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
