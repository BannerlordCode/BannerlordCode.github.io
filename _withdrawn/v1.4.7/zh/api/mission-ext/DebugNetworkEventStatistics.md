---
title: "DebugNetworkEventStatistics"
description: "TaleWorlds.MountAndBlade.Network.DebugNetworkEventStatistics —— 命名空间 TaleWorlds.MountAndBlade.Network 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# DebugNetworkEventStatistics

**Namespace:** `TaleWorlds.MountAndBlade.Network`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class DebugNetworkEventStatistics`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`

## 概述

`DebugNetworkEventStatistics` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.MountAndBlade.Network` 下的类，声明于模块目录 `TaleWorlds.MountAndBlade` 的 `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs`（第 11 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 99 项，其中 29 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `protected bool Equals(DebugNetworkEventStatistics.TotalEventData other)` — 方法，1 个参数，返回 bool
- `public override bool Equals(object obj)` — 方法，1 个参数，返回 bool
- `public override int GetHashCode()` — 方法，0 个参数，返回 int
- `public TotalEventData()` — 方法，0 个参数，返回 T
- `public TotalEventData(int totalPackets, int totalUpload, int totalConstants, int totalReliable, int totalReplication, int totalUnreliable)` — 方法，6 个参数，返回 T
- `public static bool operator ==(DebugNetworkEventStatistics.TotalEventData d1, DebugNetworkEventStatistics.TotalEventData d2)` — 字段，类型 bool
- `public readonly int TotalPackets;` — 字段，类型 int
- `public readonly int TotalUpload;` — 字段，类型 int
- `public readonly int TotalConstantsUpload;` — 字段，类型 int
- `public readonly int TotalReliableUpload;` — 字段，类型 int
- `public readonly int TotalReplicationUpload;` — 字段，类型 int
- `public readonly int TotalUnreliableUpload;` — 字段，类型 int
- `public readonly int TotalOtherUpload;` — 字段，类型 int
- `public int CompareTo(DebugNetworkEventStatistics.PerEventData other)` — 方法，1 个参数，返回 int
- `public string Name;` — 字段，类型 string
- `public int DataSize;` — 字段，类型 int
- `public int TotalDataSize;` — 字段，类型 int
- `public int Count;` — 字段，类型 int
- `public PerSecondEventData(int totalUploadPerSecond, int constantsUploadPerSecond, int reliableUploadPerSecond, int replicationUploadPerSecond, int unreliableUploadPerSecond, int otherUploadPerSecond)` — 方法，6 个参数，返回 P
- `public readonly int TotalUploadPerSecond;` — 字段，类型 int
- `public readonly int ConstantsUploadPerSecond;` — 字段，类型 int
- `public readonly int ReliableUploadPerSecond;` — 字段，类型 int
- `public readonly int ReplicationUploadPerSecond;` — 字段，类型 int
- `public readonly int UnreliableUploadPerSecond;` — 字段，类型 int
- `public readonly int OtherUploadPerSecond;` — 字段，类型 int
- `public float TotalTime;` — 字段，类型 float
- `public int TotalFrameCount;` — 字段，类型 int
- `public int TotalCount;` — 字段，类型 int
- `public int TotalDataSize;` — 字段，类型 int


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 29 条成员记录全部来自 `TaleWorlds.MountAndBlade/Network/DebugNetworkEventStatistics.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class DebugNetworkEventStatistics` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`mission-ext` API](../)
- [ActionOptionData（同命名空间）](../ActionOptionData)
- [AgentAlarmStateWidget（同命名空间）](../AgentAlarmStateWidget)
- [AgentAmmoTextWidget（同命名空间）](../AgentAmmoTextWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
