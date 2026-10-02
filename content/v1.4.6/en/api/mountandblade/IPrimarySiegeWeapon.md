---
title: "IPrimarySiegeWeapon"
description: "IPrimarySiegeWeapon: a public interface in TaleWorlds.MountAndBlade; 8 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IPrimarySiegeWeapon.cs."
---
# IPrimarySiegeWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IPrimarySiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/IPrimarySiegeWeapon.cs`

## Overview

IPrimarySiegeWeapon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IPrimarySiegeWeapon.cs. It is a public interface; the inheritance chain is IPrimarySiegeWeapon. It exposes 8 public/protected members: 2 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IPrimarySiegeWeapon is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IPrimarySiegeWeapon. The surface is property-led (properties 6/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IPrimarySiegeWeapon.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasCompletedAction` | `bool HasCompletedAction();` | method |
| `SiegeWeaponPriority` | `float SiegeWeaponPriority` | property |
| `OverTheWallNavMeshID` | `int OverTheWallNavMeshID` | property |
| `HoldLadders` | `bool HoldLadders` | property |
| `SendLadders` | `bool SendLadders` | property |
| `TargetCastlePosition` | `MissionObject TargetCastlePosition` | property |
| `WeaponSide` | `FormationAI.BehaviorSide WeaponSide` | property |
| `GetNavmeshFaceIds` | `bool GetNavmeshFaceIds(out List<int>navmeshFaceIds);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
