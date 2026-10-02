---
title: "VirtualPlayer"
description: "VirtualPlayer：TaleWorlds.Core 的 public 类；公开成员 24 个（方法 13、属性 10、字段 0）。源文件 TaleWorlds.Core/VirtualPlayer.cs。"
---
# VirtualPlayer

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class VirtualPlayer`
**File:** `TaleWorlds.Core/VirtualPlayer.cs`

## 概述

VirtualPlayer 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/VirtualPlayer.cs。它是一个 public 类，继承链为 VirtualPlayer。public/protected 成员共 24 个：13 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VirtualPlayer 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 VirtualPlayer。成员构成以方法为主（方法 13/24，属性 10/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/VirtualPlayer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `object>PeerComponents` | `public static Dictionary<Type, object>PeerComponents` | 属性 |
| `List` | `public static List<T>Peers<T>() where T : PeerComponent` | 方法 |
| `Reset` | `public static void Reset()` | 方法 |
| `BannerCode` | `public string BannerCode` | 属性 |
| `BodyProperties` | `public BodyProperties BodyProperties` | 属性 |
| `Race` | `public int Race` | 属性 |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `Id` | `public PlayerId Id` | 属性 |
| `Index` | `public int Index` | 属性 |
| `IsMine` | `public bool IsMine` | 属性 |
| `UserName` | `public string UserName` | 属性 |
| `ChosenBadgeIndex` | `public int ChosenBadgeIndex` | 属性 |
| `VirtualPlayer` | `public VirtualPlayer(int index, string name, PlayerId playerID, ICommunicator communicator)` | 构造函数 |
| `AddComponent` | `public T AddComponent<T>() where T : PeerComponent, new()` | 方法 |
| `AddComponent` | `public PeerComponent AddComponent(Type peerComponentType)` | 方法 |
| `AddComponent` | `public PeerComponent AddComponent(uint componentId)` | 方法 |
| `GetComponent` | `public PeerComponent GetComponent(uint componentId)` | 方法 |
| `GetComponent` | `public T GetComponent<T>() where T : PeerComponent` | 方法 |
| `GetComponent` | `public PeerComponent GetComponent(Type peerComponentType)` | 方法 |
| `RemoveComponent` | `public void RemoveComponent<T>(bool synched = true) where T : PeerComponent` | 方法 |
| `RemoveComponent` | `public void RemoveComponent(PeerComponent component)` | 方法 |
| `OnDisconnect` | `public void OnDisconnect()` | 方法 |
| `SynchronizeComponentsTo` | `public void SynchronizeComponentsTo(VirtualPlayer peer)` | 方法 |
| `UpdateIndexForReconnectingPlayer` | `public void UpdateIndexForReconnectingPlayer(int playerIndex)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
