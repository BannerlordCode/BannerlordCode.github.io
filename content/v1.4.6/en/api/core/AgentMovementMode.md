---
title: "AgentMovementMode"
description: "AgentMovementMode: a public enum in TaleWorlds.Core, inheriting byte; 7 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/AgentMovementMode.cs."
---
# AgentMovementMode

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum AgentMovementMode : byte`
**File:** `TaleWorlds.Core/AgentMovementMode.cs`

## Overview

AgentMovementMode lives in the TaleWorlds.Core module, source file TaleWorlds.Core/AgentMovementMode.cs. It is a public enum, implementing/inheriting byte; the inheritance chain is AgentMovementMode → byte. It exposes 7 public/protected members: 7 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentMovementMode is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain AgentMovementMode → byte. The surface is method-led (methods 0/7, properties 0/7), so it mostly exposes operations. byte on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/AgentMovementMode.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `0` | `None == 0` | enum value |
| `1` | `Land == 1` | enum value |
| `2` | `WaterSurface == 2` | enum value |
| `3` | `WaterDiving == 3` | enum value |
| `4` | `PhysicsCheck == 4` | enum value |
| `8` | `NoPhysics == 8` | enum value |
| `3` | `MovementModeMask == 3` | enum value |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
