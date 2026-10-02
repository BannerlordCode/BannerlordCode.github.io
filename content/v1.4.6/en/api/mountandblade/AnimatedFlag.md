---
title: "AnimatedFlag"
description: "AnimatedFlag: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/AnimatedFlag.cs."
---
# AnimatedFlag

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AnimatedFlag : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/AnimatedFlag.cs`

## Overview

AnimatedFlag lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AnimatedFlag.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is AnimatedFlag → ScriptComponentBehavior. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AnimatedFlag is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain AnimatedFlag → ScriptComponentBehavior. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AnimatedFlag.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AnimatedFlag` | `public AnimatedFlag()` | constructor |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `IsOnlyVisual` | `protected internal override bool IsOnlyVisual()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
