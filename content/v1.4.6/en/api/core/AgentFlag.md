---
title: "AgentFlag"
description: "AgentFlag: a public enum in TaleWorlds.Core, inheriting uint; 28 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/AgentFlag.cs."
---
# AgentFlag

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum AgentFlag : uint`
**File:** `TaleWorlds.Core/AgentFlag.cs`

## Overview

AgentFlag lives in the TaleWorlds.Core module, source file TaleWorlds.Core/AgentFlag.cs. It is a public enum, implementing/inheriting uint; the inheritance chain is AgentFlag → uint. It exposes 28 public/protected members: 28 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentFlag is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain AgentFlag → uint. The surface is method-led (methods 0/28, properties 0/28), so it mostly exposes operations. uint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/AgentFlag.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `0U` | `None == 0U` | enum value |
| `1U` | `Mountable == 1U` | enum value |
| `2U` | `CanJump == 2U` | enum value |
| `4U` | `CanRear == 4U` | enum value |
| `8U` | `CanAttack == 8U` | enum value |
| `16U` | `CanDefend == 16U` | enum value |
| `32U` | `RunsAwayWhenHit == 32U` | enum value |
| `64U` | `CanCharge == 64U` | enum value |
| `128U` | `CanBeCharged == 128U` | enum value |
| `256U` | `CanClimbLadders == 256U` | enum value |
| `512U` | `CanBeInGroup == 512U` | enum value |
| `1024U` | `CanSprint == 1024U` | enum value |
| `2048U` | `IsHumanoid == 2048U` | enum value |
| `4096U` | `CanGetScared == 4096U` | enum value |
| `8192U` | `CanRide == 8192U` | enum value |
| `16384U` | `CanWieldWeapon == 16384U` | enum value |
| `32768U` | `CanCrouch == 32768U` | enum value |
| `65536U` | `CanGetAlarmed == 65536U` | enum value |
| `131072U` | `CanWander == 131072U` | enum value |
| `524288U` | `CanKick == 524288U` | enum value |
| `1048576U` | `CanRetreat == 1048576U` | enum value |
| `2097152U` | `MoveAsHerd == 2097152U` | enum value |
| `4194304U` | `MoveForwardOnly == 4194304U` | enum value |
| `8388608U` | `IsUnique == 8388608U` | enum value |
| `16777216U` | `CanUseAllBowsMounted == 16777216U` | enum value |
| `33554432U` | `CanReloadAllXBowsMounted == 33554432U` | enum value |
| `67108864U` | `CanDeflectArrowsWith2HSword == 67108864U` | enum value |
| `134217728U` | `UnreachableViaNavMesh == 134217728U` | enum value |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
