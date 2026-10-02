---
title: "TestScript"
description: "TestScript: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 10 exposed members (5 methods, 0 properties, 5 fields). Source: TaleWorlds.MountAndBlade/TestScript.cs."
---
# TestScript

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TestScript : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/TestScript.cs`

## Overview

TestScript lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TestScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is TestScript → ScriptComponentBehavior. It exposes 10 public/protected members: 5 methods, 5 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TestScript is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain TestScript → ScriptComponentBehavior. The surface is method-led (methods 5/10, properties 0/10), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TestScript.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
