---
title: "ClanFriendListService"
description: "ClanFriendListService：TaleWorlds.MountAndBlade 的 public 类，继承 IFriendListService；公开成员 9 个（方法 4、属性 0、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/ClanFriendListService.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFriendListService

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ClanFriendListService : IFriendListService`
**File:** `TaleWorlds.MountAndBlade/ClanFriendListService.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ClanFriendListService 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ClanFriendListService.cs。它是一个 public 类，实现/继承 IFriendListService，继承链为 ClanFriendListService → IFriendListService。public/protected 成员共 9 个：4 方法、1 字段、3 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFriendListService 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 ClanFriendListService → IFriendListService。成员构成以方法为主（方法 4/9，属性 0/9），对外主要以操作入口暴露。继承链上的 IFriendListService 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ClanFriendListService.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanFriendListService` | `public ClanFriendListService()` | 构造函数 |
| `Action` | `public event Action<PlayerId>OnUserStatusChanged;` | 事件 |
| `Action` | `public event Action<PlayerId>OnFriendRemoved;` | 事件 |
| `Task` | `public async Task<PlayerId>GetUserWithName(string name)` | 方法 |
| `OnFriendListChanged;` | `public event Action OnFriendListChanged;` | 事件 |
| `IEnumerable` | `public IEnumerable<PlayerId>GetPendingRequests()` | 方法 |
| `IEnumerable` | `public IEnumerable<PlayerId>GetReceivedRequests()` | 方法 |
| `OnClanInfoChanged` | `public void OnClanInfoChanged(List<ClanPlayerInfo>playerInfosInClan)` | 方法 |
| `CodeName` | `public const string CodeName` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
