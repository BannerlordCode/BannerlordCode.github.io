---
title: "ArcherPosition"
description: "ArcherPosition: a public class in TaleWorlds.MountAndBlade; 9 exposed members (5 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ArcherPosition.cs."
---
# ArcherPosition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ArcherPosition`
**File:** `TaleWorlds.MountAndBlade/ArcherPosition.cs`

## Overview

ArcherPosition lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ArcherPosition.cs. It is a public class; the inheritance chain is ArcherPosition. It exposes 9 public/protected members: 5 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArcherPosition is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ArcherPosition. The surface is method-led (methods 5/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ArcherPosition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Entity` | `public GameEntity Entity` | property |
| `TacticalArcherPosition` | `public TacticalPosition TacticalArcherPosition` | property |
| `ConnectedSides` | `public int ConnectedSides` | property |
| `GetLastAssignedFormation` | `public Formation GetLastAssignedFormation(int teamIndex)` | method |
| `ArcherPosition` | `public ArcherPosition(GameEntity _entity, SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)` | constructor |
| `IsArcherPositionRelatedToSide` | `public bool IsArcherPositionRelatedToSide(FormationAI.BehaviorSide side)` | method |
| `GetArcherPositionClosestSide` | `public FormationAI.BehaviorSide GetArcherPositionClosestSide()` | method |
| `OnDeploymentFinished` | `public void OnDeploymentFinished(SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)` | method |
| `SetLastAssignedFormation` | `public void SetLastAssignedFormation(int teamIndex, Formation formation)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
