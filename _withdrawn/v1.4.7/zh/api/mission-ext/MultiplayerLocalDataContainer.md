---
title: "MultiplayerLocalDataContainer"
description: "TaleWorlds.MountAndBlade.Diamond.Lobby.MultiplayerLocalDataContainer —— 命名空间 TaleWorlds.MountAndBlade.Diamond.Lobby 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MultiplayerLocalDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public abstract class MultiplayerLocalDataContainer<T> where T : MultiplayerLocalData`  
**Base:** `MultiplayerLocalData`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs`

## 概述

`MultiplayerLocalDataContainer` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade.Diamond` 的 `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs`（第 10 行声明）。该声明访问级别为public（公开），修饰为抽象，基类型是 `MultiplayerLocalData`；解析到的成员共 54 项，其中 7 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsAdd(T item)` — 方法，1 个参数，返回 MultiplayerLocalDataContainer<T>.ContainerOperation
- `public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsRemove(T item)` — 方法，1 个参数，返回 MultiplayerLocalDataContainer<T>.ContainerOperation
- `public static MultiplayerLocalDataContainer<T>.ContainerOperation CreateAsInsert(T item, int index)` — 方法，2 个参数，返回 MultiplayerLocalDataContainer<T>.ContainerOperation
- `public readonly MultiplayerLocalDataContainer<T>.OperationType OperationType;` — 字段，类型 MultiplayerLocalDataContainer<T>.OperationType
- `public readonly T Item;` — 字段，类型 T
- `public readonly int Index;` — 字段，类型 int
- `public int Compare(MultiplayerLocalDataContainer<T>.ContainerOperation x, MultiplayerLocalDataContainer<T>.ContainerOperation y)` — 方法，2 个参数，返回 int


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 7 条成员记录全部来自 `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public abstract class MultiplayerLocalDataContainer<T> where T : MultiplayerLocalData` 这一行的访问级别与修饰（当前为public（公开）、抽象）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [MultiplayerLocalData（基类）](../MultiplayerLocalData)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
