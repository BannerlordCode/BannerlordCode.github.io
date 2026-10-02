---
title: "IFormationDeploymentPlan"
description: "IFormationDeploymentPlan: a public interface in TaleWorlds.MountAndBlade; 11 exposed members (5 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IFormationDeploymentPlan.cs."
---
# IFormationDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFormationDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/IFormationDeploymentPlan.cs`

## Overview

IFormationDeploymentPlan lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IFormationDeploymentPlan.cs. It is a public interface; the inheritance chain is IFormationDeploymentPlan. It exposes 11 public/protected members: 5 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IFormationDeploymentPlan is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IFormationDeploymentPlan. The surface is property-led (properties 6/11, methods 5/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IFormationDeploymentPlan.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Class` | `FormationClass Class` | property |
| `SpawnClass` | `FormationClass SpawnClass` | property |
| `PlannedWidth` | `float PlannedWidth` | property |
| `PlannedDepth` | `float PlannedDepth` | property |
| `PlannedTroopCount` | `int PlannedTroopCount` | property |
| `HasDimensions` | `bool HasDimensions` | property |
| `HasFrame` | `bool HasFrame();` | method |
| `GetFrame` | `MatrixFrame GetFrame();` | method |
| `GetPosition` | `Vec3 GetPosition();` | method |
| `GetDirection` | `Vec2 GetDirection();` | method |
| `CreateNewDeploymentWorldPosition` | `WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
