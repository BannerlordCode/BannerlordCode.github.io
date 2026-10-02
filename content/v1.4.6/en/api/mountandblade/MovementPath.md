---
title: "MovementPath"
description: "MovementPath: a public class in TaleWorlds.MountAndBlade; 6 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MovementPath.cs."
---
# MovementPath

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MovementPath`
**File:** `TaleWorlds.MountAndBlade/MovementPath.cs`

## Overview

MovementPath lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MovementPath.cs. It is a public class; the inheritance chain is MovementPath. It exposes 6 public/protected members: 1 methods, 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MovementPath is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MovementPath. The surface is property-led (properties 3/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MovementPath.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialDirection` | `public Vec2 InitialDirection` | property |
| `FinalDirection` | `public Vec2 FinalDirection` | property |
| `Destination` | `public Vec3 Destination` | property |
| `MovementPath` | `public MovementPath(NavigationData navigationData, Vec2 initialDirection, Vec2 finalDirection)` | constructor |
| `MovementPath` | `public MovementPath(Vec3 currentPosition, Vec3 orderPosition, float agentRadius, Vec2 previousDirection, Vec2 finalDirection) : this(new NavigationData(currentPosition, orderPosition, agentRadius), previousDirection, finalDirection)` | constructor |
| `TickDebug` | `public void TickDebug(Vec2 position)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
