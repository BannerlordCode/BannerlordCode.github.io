---
title: "CaptureTheFlagCapturePoint"
description: "CaptureTheFlagCapturePoint: a public class in TaleWorlds.MountAndBlade; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.MountAndBlade/CaptureTheFlagCapturePoint.cs."
---
# CaptureTheFlagCapturePoint

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CaptureTheFlagCapturePoint`
**File:** `TaleWorlds.MountAndBlade/CaptureTheFlagCapturePoint.cs`

## Overview

CaptureTheFlagCapturePoint lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CaptureTheFlagCapturePoint.cs. It is a public class; the inheritance chain is CaptureTheFlagCapturePoint. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CaptureTheFlagCapturePoint is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain CaptureTheFlagCapturePoint. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CaptureTheFlagCapturePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Progress` | `public float Progress` | property |
| `Direction` | `public CaptureTheFlagFlagDirection Direction` | property |
| `Speed` | `public float Speed` | property |
| `InitialFlagFrame` | `public MatrixFrame InitialFlagFrame` | property |
| `FlagEntity` | `public GameEntity FlagEntity` | property |
| `FlagHolder` | `public SynchedMissionObject FlagHolder` | property |
| `FlagBottomBoundary` | `public GameEntity FlagBottomBoundary` | property |
| `FlagTopBoundary` | `public GameEntity FlagTopBoundary` | property |
| `BattleSide` | `public BattleSideEnum BattleSide` | property |
| `Index` | `public int Index` | property |
| `UpdateFlag` | `public bool UpdateFlag` | property |
| `CaptureTheFlagCapturePoint` | `public CaptureTheFlagCapturePoint(GameEntity flagPole, BattleSideEnum battleSide, int index)` | constructor |
| `Reset` | `public void Reset()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
