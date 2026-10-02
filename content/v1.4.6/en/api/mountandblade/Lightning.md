---
title: "Lightning"
description: "Lightning: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 11 exposed members (5 methods, 0 properties, 6 fields). Source: TaleWorlds.MountAndBlade/Lightning.cs."
---
# Lightning

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Lightning : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Lightning.cs`

## Overview

Lightning lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Lightning.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is Lightning → ScriptComponentBehavior. It exposes 11 public/protected members: 5 methods, 6 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Lightning is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain Lightning → ScriptComponentBehavior. The surface is method-led (methods 5/11, properties 0/11), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Lightning.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
