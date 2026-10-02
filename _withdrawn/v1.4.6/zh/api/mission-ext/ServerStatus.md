---
title: "ServerStatus"
description: "ServerStatus：TaleWorlds.MountAndBlade.Diamond 的 public 类；公开成员 10 个（方法 0、属性 8、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ServerStatus

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ServerStatus`
**File:** `TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ServerStatus 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs。它是一个 public 类，继承链为 ServerStatus。public/protected 成员共 10 个：8 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ServerStatus 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 ServerStatus。成员构成以属性为主（属性 8/10，方法 0/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMatchmakingEnabled` | `public bool IsMatchmakingEnabled` | 属性 |
| `IsCustomBattleEnabled` | `public bool IsCustomBattleEnabled` | 属性 |
| `IsPlayerBasedCustomBattleEnabled` | `public bool IsPlayerBasedCustomBattleEnabled` | 属性 |
| `IsPremadeGameEnabled` | `public bool IsPremadeGameEnabled` | 属性 |
| `IsTestRegionEnabled` | `public bool IsTestRegionEnabled` | 属性 |
| `Announcement` | `public Announcement Announcement` | 属性 |
| `ServerNotification[]ServerNotifications` | `public ServerNotification[]ServerNotifications` | 属性 |
| `FriendListUpdatePeriod` | `public int FriendListUpdatePeriod` | 属性 |
| `ServerStatus` | `public ServerStatus()` | 构造函数 |
| `ServerStatus` | `public ServerStatus(bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPlayerBasedCustomBattleEnabled, bool isPremadeGameEnabled, bool isTestRegionEnabled, Announcement announcement, ServerNotification[]serverNotifications, int friendListUpdatePeriod)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
