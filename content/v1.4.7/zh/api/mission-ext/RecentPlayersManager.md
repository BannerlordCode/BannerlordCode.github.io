---
title: "RecentPlayersManager"
description: "TaleWorlds.MountAndBlade.Diamond.RecentPlayersManager —— 命名空间 TaleWorlds.MountAndBlade.Diamond 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# RecentPlayersManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public static class RecentPlayersManager`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`

## 概述

`RecentPlayersManager` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade.Diamond` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade.Diamond` 的 `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`（第 13 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 17 项，其中 3 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public int Score { get; private set; }` — 属性，get/set，类型 int
- `public RecentPlayersManager.InteractionTypeInfo.InteractionProcessType ProcessType { get; private set; }` — 属性，get/set，类型 RecentPlayersManager.InteractionTypeInfo.InteractionProcessType
- `public InteractionTypeInfo(int score, RecentPlayersManager.InteractionTypeInfo.InteractionProcessType type)` — 方法，2 个参数，返回 I


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 3 条成员记录全部来自 `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class RecentPlayersManager` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
