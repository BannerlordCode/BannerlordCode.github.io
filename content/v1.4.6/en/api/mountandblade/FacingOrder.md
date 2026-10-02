---
title: "FacingOrder"
description: "FacingOrder: a public struct in TaleWorlds.MountAndBlade; 10 exposed members (6 methods, 2 properties, 1 fields). Source: TaleWorlds.MountAndBlade/FacingOrder.cs."
---
# FacingOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct FacingOrder`
**File:** `TaleWorlds.MountAndBlade/FacingOrder.cs`

## Overview

FacingOrder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FacingOrder.cs. It is a public struct; the inheritance chain is FacingOrder. It exposes 10 public/protected members: 6 methods, 2 properties, 1 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FacingOrder is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain FacingOrder. The surface is method-led (methods 6/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FacingOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FacingOrderLookAtDirection` | `public static FacingOrder FacingOrderLookAtDirection(Vec2 direction)` | method |
| `OrderType` | `public OrderType OrderType` | property |
| `GetDirection` | `public Vec2 GetDirection(Formation f, Agent targetAgent = null)` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `!` | `public static bool operator !` | operator |
| `operator` | `public static bool operator` | operator |
| `FacingOrderLookAtEnemy` | `public static readonly FacingOrder FacingOrderLookAtEnemy` | field |
| `FacingOrderEnum` | `public enum FacingOrderEnum` | property |
| `FacingOrderEnum` | `public enum FacingOrderEnum` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
