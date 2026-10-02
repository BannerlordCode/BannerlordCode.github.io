---
title: "HideoutAmbushBossFightCinematicController"
description: "SandBox.Missions.MissionLogics.Hideout.HideoutAmbushBossFightCinematicController —— 命名空间 SandBox.Missions.MissionLogics.Hideout 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# HideoutAmbushBossFightCinematicController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`  
**Module:** `SandBox`  
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`

## 概述

`HideoutAmbushBossFightCinematicController` 是 bannerlord-1.4.7 源码中命名空间 `SandBox.Missions.MissionLogics.Hideout` 下的类，声明于模块目录 `SandBox` 的 `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`（第 12 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `MissionLogic`；解析到的成员共 78 项，其中 6 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public HideoutCinematicAgentInfo(Agent agent, HideoutAmbushBossFightCinematicController.HideoutAgentType type, in MatrixFrame initialFrame, in MatrixFrame targetFrame)` — 方法，4 个参数，返回 H
- `public bool HasReachedTarget(float proximityThreshold = 0.5f)` — 方法，1 个参数，返回 bool
- `public readonly Agent Agent;` — 字段，类型 Agent
- `public readonly MatrixFrame InitialFrame;` — 字段，类型 MatrixFrame
- `public readonly MatrixFrame TargetFrame;` — 字段，类型 MatrixFrame
- `public readonly HideoutAmbushBossFightCinematicController.HideoutAgentType Type;` — 字段，类型 HideoutAmbushBossFightCinematicController.HideoutAgentType


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 6 条成员记录全部来自 `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class HideoutAmbushBossFightCinematicController : MissionLogic` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [Agent（成员类型）](../../mission/Agent)
- [Add1000GoldCheat（同命名空间）](../Add1000GoldCheat)
- [Add100InfluenceCheat（同命名空间）](../Add100InfluenceCheat)
- [Add100RenownCheat（同命名空间）](../Add100RenownCheat)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
