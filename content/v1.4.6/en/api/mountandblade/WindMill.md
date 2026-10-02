---
title: "WindMill"
description: "WindMill: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 8 exposed members (6 methods, 0 properties, 2 fields). Source: TaleWorlds.MountAndBlade/WindMill.cs."
---
# WindMill

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class WindMill : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/WindMill.cs`

## Overview

WindMill lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/WindMill.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is WindMill → ScriptComponentBehavior. It exposes 8 public/protected members: 6 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WindMill is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain WindMill → ScriptComponentBehavior. The surface is method-led (methods 6/8, properties 0/8), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/WindMill.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
