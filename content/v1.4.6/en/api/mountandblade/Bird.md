---
title: "Bird"
description: "Bird: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Bird.cs."
---
# Bird

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Bird : MissionObject`
**File:** `TaleWorlds.MountAndBlade/Bird.cs`

## Overview

Bird lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Bird.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is Bird → MissionObject → ScriptComponentBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Bird is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain Bird → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Bird.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionObject](../MissionObject)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
