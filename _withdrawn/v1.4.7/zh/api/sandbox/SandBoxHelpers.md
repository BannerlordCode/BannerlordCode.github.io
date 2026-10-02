---
title: "SandBoxHelpers"
description: "SandBox.SandBoxHelpers —— 命名空间 SandBox 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# SandBoxHelpers

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public static class SandBoxHelpers`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `SandBox/SandBoxHelpers.cs`

## 概述

`SandBoxHelpers` 是 bannerlord-1.4.7 源码中命名空间 `SandBox` 下的类，声明于模块目录 `SandBox` 的 `SandBox/SandBoxHelpers.cs`（第 20 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 14 项，其中 13 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public static void FollowAgent(Agent agent, Agent target)` — 方法，2 个参数，返回 void
- `public static void UnfollowAgent(Agent agent)` — 方法，1 个参数，返回 void
- `public static void FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)` — 方法，3 个参数，返回 void
- `public static void DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)` — 方法，2 个参数，返回 void
- `public static void SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")` — 方法，5 个参数，返回 void
- `public static void SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)` — 方法，5 个参数，返回 void
- `public static List<Agent> SpawnHorses()` — 方法，0 个参数，返回 List<Agent>
- `public static void SpawnSheeps()` — 方法，0 个参数，返回 void
- `public static void SpawnCows()` — 方法，0 个参数，返回 void
- `public static void SpawnGeese()` — 方法，0 个参数，返回 void
- `public static void SpawnChicken()` — 方法，0 个参数，返回 void
- `public static void SpawnHogs()` — 方法，0 个参数，返回 void
- `public static bool[] GetRegionMapping(PartyNavigationModel model)` — 方法，1 个参数，返回 bool[]


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 13 条成员记录全部来自 `SandBox/SandBoxHelpers.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class SandBoxHelpers` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [Agent（成员类型）](../../mission/Agent)
- [AgentBehavior（同命名空间）](../AgentBehavior)
- [AgentBehaviorGroup（同命名空间）](../AgentBehaviorGroup)
- [AgentBehaviorManager（同命名空间）](../AgentBehaviorManager)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
