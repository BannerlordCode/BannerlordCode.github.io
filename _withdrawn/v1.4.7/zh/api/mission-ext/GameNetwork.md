---
title: "GameNetwork"
description: "TaleWorlds.MountAndBlade.GameNetwork —— 命名空间 TaleWorlds.MountAndBlade 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# GameNetwork

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class GameNetwork`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.MountAndBlade/GameNetwork.cs`

## 概述

`GameNetwork` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade` 的 `TaleWorlds.MountAndBlade/GameNetwork.cs`（第 17 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 287 项，其中 40 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public NetworkMessageHandlerRegisterer(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode definitionMode)` — 方法，1 个参数，返回 N
- `public NetworkMessageHandlerRegistererContainer()` — 方法，0 个参数，返回 N
- `public void RegisterMessages()` — 方法，0 个参数，返回 void
- `public void UnregisterMessages()` — 方法，0 个参数，返回 void
- `public int totalPositionUpload;` — 字段，类型 int
- `public int totalPositionPrecisionBitCount;` — 字段，类型 int
- `public int totalPositionCoarseBitCountX;` — 字段，类型 int
- `public int totalPositionCoarseBitCountY;` — 字段，类型 int
- `public int totalPositionCoarseBitCountZ;` — 字段，类型 int
- `public int TotalPackets;` — 字段，类型 int
- `public int TotalUpload;` — 字段，类型 int
- `public int TotalConstantsUpload;` — 字段，类型 int
- `public int TotalReliableEventUpload;` — 字段，类型 int
- `public int TotalReplicationUpload;` — 字段，类型 int
- `public int TotalUnreliableEventUpload;` — 字段，类型 int
- `public int TotalReplicationTableAdderCount;` — 字段，类型 int
- `public int TotalReplicationTableAdderBitCount;` — 字段，类型 int
- `public int TotalReplicationTableAdder;` — 字段，类型 int
- `public double TotalCellPriority;` — 字段，类型 double
- `public double TotalCellAgentPriority;` — 字段，类型 double
- `public double TotalCellCellPriority;` — 字段，类型 double
- `public int TotalCellPriorityChecks;` — 字段，类型 int
- `public int TotalSentCellCount;` — 字段，类型 int
- `public int TotalNotSentCellCount;` — 字段，类型 int
- `public int TotalReplicationWriteCount;` — 字段，类型 int
- `public int CurMaxPacketSizeInBytes;` — 字段，类型 int
- `public double AveragePingTime;` — 字段，类型 double
- `public double AverageDtToSendPacket;` — 字段，类型 double
- `public double TimeOutPeriod;` — 字段，类型 double
- `public double PacingRate;` — 字段，类型 double

- 其余 10 个 public/protected 成员未在此列出。

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 40 条成员记录全部来自 `TaleWorlds.MountAndBlade/GameNetwork.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class GameNetwork` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
