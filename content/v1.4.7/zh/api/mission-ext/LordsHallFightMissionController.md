---
title: "LordsHallFightMissionController"
description: "TaleWorlds.MountAndBlade.Source.Missions.Handlers.LordsHallFightMissionController —— 命名空间 TaleWorlds.MountAndBlade.Source.Missions.Handlers 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# LordsHallFightMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`  
**Base:** `MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`  
**Source:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs`

## 概述

`LordsHallFightMissionController` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade.Source.Missions.Handlers` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade` 的 `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs`（第 12 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`；解析到的成员共 99 项，其中 14 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public MissionSide(BattleSideEnum side, IMissionTroopSupplier troopSupplier, bool isPlayerSide)` — 方法，3 个参数，返回 M
- `public void SpawnTroops(Dictionary<int, Dictionary<int, LordsHallFightMissionController.AreaData>> areaMarkerDictionary, int spawnCount)` — 方法，2 个参数，返回 void
- `public void SpawnTroops(int spawnCount, bool isReinforcement)` — 方法，2 个参数，返回 void
- `public void SetSpawnTroops(bool spawnTroops)` — 方法，1 个参数，返回 void
- `public IEnumerable<IAgentOriginBase> GetAllTroops()` — 方法，0 个参数，返回 IEnumerable<IAgentOriginBase>
- `public AreaData(List<FightAreaMarker> areaList)` — 方法，1 个参数，返回 A
- `public IEnumerable<LordsHallFightMissionController.AreaEntityData> GetAvailableMachines(bool isArcher)` — 方法，1 个参数，返回 IEnumerable<LordsHallFightMissionController.AreaEntityData>
- `public void AddAreaMarker(FightAreaMarker marker)` — 方法，1 个参数，返回 void
- `public LordsHallFightMissionController.AreaEntityData FindAgentMachine(Agent agent)` — 方法，1 个参数，返回 LordsHallFightMissionController.AreaEntityData
- `public Agent UserAgent { get; private set; }` — 属性，get/set，类型 Agent
- `public AreaEntityData(GameEntity entity)` — 方法，1 个参数，返回 A
- `public void AssignAgent(Agent agent)` — 方法，1 个参数，返回 void
- `public void StopUse()` — 方法，0 个参数，返回 void
- `public readonly GameEntity Entity;` — 字段，类型 GameEntity


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 14 条成员记录全部来自 `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [Agent（成员类型）](../../mission/Agent)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
