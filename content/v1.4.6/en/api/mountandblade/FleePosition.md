---
title: "FleePosition"
description: "FleePosition: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 7 exposed members (6 methods, 0 properties, 1 fields). Source: TaleWorlds.MountAndBlade/FleePosition.cs."
---
# FleePosition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FleePosition : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/FleePosition.cs`

## Overview

FleePosition lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FleePosition.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is FleePosition → ScriptComponentBehavior. It exposes 7 public/protected members: 6 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FleePosition is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain FleePosition → ScriptComponentBehavior. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FleePosition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetSide` | `public BattleSideEnum GetSide()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `GetClosestPointToEscape` | `public Vec3 GetClosestPointToEscape(Vec2 position)` | method |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |
| `Side` | `public string Side` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
