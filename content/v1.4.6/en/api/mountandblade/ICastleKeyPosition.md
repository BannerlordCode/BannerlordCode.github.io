---
title: "ICastleKeyPosition"
description: "ICastleKeyPosition: a public interface in TaleWorlds.MountAndBlade; 7 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ICastleKeyPosition.cs."
---
# ICastleKeyPosition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ICastleKeyPosition`
**File:** `TaleWorlds.MountAndBlade/ICastleKeyPosition.cs`

## Overview

ICastleKeyPosition lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ICastleKeyPosition.cs. It is a public interface; the inheritance chain is ICastleKeyPosition. It exposes 7 public/protected members: 1 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICastleKeyPosition is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ICastleKeyPosition. The surface is property-led (properties 6/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ICastleKeyPosition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AttackerSiegeWeapon` | `IPrimarySiegeWeapon AttackerSiegeWeapon` | property |
| `MiddlePosition` | `TacticalPosition MiddlePosition` | property |
| `WaitPosition` | `TacticalPosition WaitPosition` | property |
| `MiddleFrame` | `WorldFrame MiddleFrame` | property |
| `DefenseWaitFrame` | `WorldFrame DefenseWaitFrame` | property |
| `DefenseSide` | `FormationAI.BehaviorSide DefenseSide` | property |
| `GetPosition` | `Vec3 GetPosition();` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
