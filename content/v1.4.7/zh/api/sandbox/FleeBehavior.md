---
title: "FleeBehavior"
description: "SandBox.Missions.AgentBehaviors.FleeBehavior —— 命名空间 SandBox.Missions.AgentBehaviors 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# FleeBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`  
**Module:** `SandBox`  
**Type:** `public class FleeBehavior : AgentBehavior`  
**Base:** `AgentBehavior`  
**Source:** `SandBox/Missions/AgentBehaviors/FleeBehavior.cs`

## 概述

`FleeBehavior` 是 bannerlord-1.4.7 源码中命名空间 `SandBox.Missions.AgentBehaviors` 下的类，声明于模块目录 `SandBox` 的 `SandBox/Missions/AgentBehaviors/FleeBehavior.cs`（第 15 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `AgentBehavior`；解析到的成员共 90 项，其中 30 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `protected FleeGoalBase(AgentNavigator navigator, Agent ownerAgent)` — 方法，2 个参数，返回 F
- `public abstract void TargetReached();` — 方法，0 个参数，返回 void
- `public abstract void GoToTarget();` — 方法，0 个参数，返回 void
- `public abstract bool IsGoalAchievable();` — 方法，0 个参数，返回 bool
- `public abstract bool IsGoalAchieved();` — 方法，0 个参数，返回 bool
- `protected readonly AgentNavigator _navigator;` — 字段，类型 AgentNavigator
- `protected readonly Agent _ownerAgent;` — 字段，类型 Agent
- `public Agent Savior { get; private set; }` — 属性，get/set，类型 Agent
- `public FleeAgentTarget(AgentNavigator navigator, Agent ownerAgent, Agent savior)` — 方法，3 个参数，返回 F
- `public override void GoToTarget()` — 方法，0 个参数，返回 void
- `public override bool IsGoalAchievable()` — 方法，0 个参数，返回 bool
- `public override bool IsGoalAchieved()` — 方法，0 个参数，返回 bool
- `public override void TargetReached()` — 方法，0 个参数，返回 void
- `public Passage EscapePortal { get; private set; }` — 属性，get/set，类型 Passage
- `public FleePassageTarget(AgentNavigator navigator, Agent ownerAgent, Passage escapePortal)` — 方法，3 个参数，返回 F
- `public override void GoToTarget()` — 方法，0 个参数，返回 void
- `public override bool IsGoalAchievable()` — 方法，0 个参数，返回 bool
- `public override bool IsGoalAchieved()` — 方法，0 个参数，返回 bool
- `public override void TargetReached()` — 方法，0 个参数，返回 void
- `public Vec3 Position { get; private set; }` — 属性，get/set，类型 Vec3
- `public FleePositionTarget(AgentNavigator navigator, Agent ownerAgent, Vec3 position)` — 方法，3 个参数，返回 F
- `public override void GoToTarget()` — 方法，0 个参数，返回 void
- `public override bool IsGoalAchievable()` — 方法，0 个参数，返回 bool
- `public override bool IsGoalAchieved()` — 方法，0 个参数，返回 bool
- `public override void TargetReached()` — 方法，0 个参数，返回 void
- `public FleeCoverTarget(AgentNavigator navigator, Agent ownerAgent)` — 方法，2 个参数，返回 F
- `public override void GoToTarget()` — 方法，0 个参数，返回 void
- `public override bool IsGoalAchievable()` — 方法，0 个参数，返回 bool
- `public override bool IsGoalAchieved()` — 方法，0 个参数，返回 bool
- `public override void TargetReached()` — 方法，0 个参数，返回 void


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 30 条成员记录全部来自 `SandBox/Missions/AgentBehaviors/FleeBehavior.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class FleeBehavior : AgentBehavior` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [AgentBehavior（基类）](../AgentBehavior)
- [Agent（成员类型）](../../mission/Agent)
- [Add1000GoldCheat（同命名空间）](../Add1000GoldCheat)
- [Add100InfluenceCheat（同命名空间）](../Add100InfluenceCheat)
- [Add100RenownCheat（同命名空间）](../Add100RenownCheat)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
