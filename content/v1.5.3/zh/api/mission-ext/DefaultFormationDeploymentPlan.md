---
title: "DefaultFormationDeploymentPlan"
description: "DefaultFormationDeploymentPlan 的自动生成类参考。"
---
# DefaultFormationDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationDeploymentPlan : IFormationDeploymentPlan `
**Base:** IFormationDeploymentPlan
**Source:** TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs

## 概述

`DefaultFormationDeploymentPlan` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### HasFrame
`public bool HasFrame() `

### GetDefaultFlank
`public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount,bool teamPlanHasAnyFootTroops,bool spawnWithHorses = false) `

### GetFlankDeploymentOrder
`public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0) `

### GetFrame
`public MatrixFrame GetFrame() `

### GetPosition
`public Vec3 GetPosition() `

### GetDirection
`public Vec2 GetDirection() `

### CreateNewDeploymentWorldPosition
`public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache) `

### Clear
`public void Clear() `

### SetPlannedTroopCount
`public void SetPlannedTroopCount(int footTroopCount,int mountedTroopCount) `

### SetPlannedDimensions
`public void SetPlannedDimensions(float width,float depth) `

### SetFrame
`public void SetFrame(in WorldFrame frame) `

### SetSpawnClass
`public void SetSpawnClass(FormationClass spawnClass) `

### GetFormationDefaultFlankAux
`public static FormationDeploymentFlank GetFormationDefaultFlankAux(FormationClass formationClass,int formationTroopCount,bool teamPlanHasAnyFootTroops,bool hasSignificantMountedTroops,bool canSpawnWithHorses) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
