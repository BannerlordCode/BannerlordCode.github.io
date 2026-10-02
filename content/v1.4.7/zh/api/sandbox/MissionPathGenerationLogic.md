---
title: "MissionPathGenerationLogic"
description: "SandBox.Missions.MissionLogics.MissionPathGenerationLogic —— 命名空间 SandBox.Missions.MissionLogics 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MissionPathGenerationLogic

**Namespace:** `SandBox.Missions.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class MissionPathGenerationLogic : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## 概述

`MissionPathGenerationLogic` 是 bannerlord-1.4.7 源码中命名空间 `SandBox.Missions.MissionLogics` 下的类，声明于模块目录 `SandBox` 的 `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`（第 21 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `MissionLogic`；解析到的成员共 233 项，其中 69 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public UsableMachineData(SynchedMissionObject missionObject, Vec2 closestPointToPath, float pathDistanceRatio)` — 方法，3 个参数，返回 U
- `public SynchedMissionObject MissionObject;` — 字段，类型 SynchedMissionObject
- `public Vec2 ClosestPointToPath;` — 字段，类型 Vec2
- `public float PathDistanceRatio;` — 字段，类型 float
- `public bool IsAlreadyAddedToPath;` — 字段，类型 bool
- `public NavigationPathData(List<UsableMachine> allUsablePoints, GameEntity startingEntity, GameEntity endingEntity, int disabledFaceId)` — 方法，4 个参数，返回 N
- `public MissionPathGenerationLogic.NavigationPathData ReverseClone()` — 方法，0 个参数，返回 MissionPathGenerationLogic.NavigationPathData
- `public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)` — 方法，1 个参数，返回 void
- `public GameEntity StartingGameEntity;` — 字段，类型 GameEntity
- `public GameEntity EndingGameEntity;` — 字段，类型 GameEntity
- `public NavigationPath Path;` — 字段，类型 NavigationPath
- `public Dictionary<Vec2, float> PathNodeAndDistances;` — 字段，类型 Dictionary<Vec2, float>
- `public List<MissionPathGenerationLogic.UsableMachineData> ValidUsableMachinesData;` — 字段，类型 List<MissionPathGenerationLogic.UsableMachineData>
- `public float TotalDistance;` — 字段，类型 float
- `public abstract MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType();` — 方法，0 个参数，返回 MissionPathGenerationLogic.PointOfInterests
- `public abstract List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs();` — 方法，0 个参数，返回 List<ValueTuple<Vec2, float>>
- `public abstract bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest);` — 方法，1 个参数，返回 bool
- `public abstract float GetLocationRatio();` — 方法，0 个参数，返回 float
- `public float Score;` — 字段，类型 float
- `public LookBackPointData(WorldPosition position, WorldPosition direction, float pathDistanceRatio)` — 方法，3 个参数，返回 L
- `public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()` — 方法，0 个参数，返回 MissionPathGenerationLogic.PointOfInterests
- `public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()` — 方法，0 个参数，返回 List<ValueTuple<Vec2, float>>
- `public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)` — 方法，1 个参数，返回 bool
- `public override float GetLocationRatio()` — 方法，0 个参数，返回 float
- `public WorldPosition WorldPosition;` — 字段，类型 WorldPosition
- `public WorldPosition DirectionWorldPosition;` — 字段，类型 WorldPosition
- `public float PathDistanceRatio;` — 字段，类型 float
- `public VisitPointNodeScoreData(MissionPathGenerationLogic.UsableMachineData visitPointData, WorldPosition possibleBlendPointPosition, WorldPosition visitPointPathStartPoint, float visitPointPathStartPointPathRatio, float score, float startingAngle, WorldPosition fWP, WorldPosition sWP, Vec2 pathToVisitPoint, WorldPosition closestPointToBlendPoint)` — 方法，10 个参数，返回 V
- `public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()` — 方法，0 个参数，返回 MissionPathGenerationLogic.PointOfInterests
- `public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()` — 方法，0 个参数，返回 List<ValueTuple<Vec2, float>>

- 其余 39 个 public/protected 成员未在此列出。

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 69 条成员记录全部来自 `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class MissionPathGenerationLogic : MissionLogic` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [Add1000GoldCheat（同命名空间）](../Add1000GoldCheat)
- [Add100InfluenceCheat（同命名空间）](../Add100InfluenceCheat)
- [Add100RenownCheat（同命名空间）](../Add100RenownCheat)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
