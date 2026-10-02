---
title: "PeerExtensions"
description: "PeerExtensions：TaleWorlds.MountAndBlade 的 public 类；公开成员 11 个（方法 11、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/PeerExtensions.cs。"
---
# PeerExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class PeerExtensions`
**File:** `TaleWorlds.MountAndBlade/PeerExtensions.cs`

## 概述

PeerExtensions 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/PeerExtensions.cs。它是一个 public 类，继承链为 PeerExtensions。public/protected 成员共 11 个：11 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PeerExtensions 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 PeerExtensions。成员构成以方法为主（方法 11/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/PeerExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SendExistingObjects` | `public static void SendExistingObjects(this NetworkCommunicator peer, Mission mission)` | 方法 |
| `GetPeer` | `public static VirtualPlayer GetPeer(this PeerComponent peerComponent)` | 方法 |
| `GetNetworkPeer` | `public static NetworkCommunicator GetNetworkPeer(this PeerComponent peerComponent)` | 方法 |
| `GetComponent` | `public static T GetComponent<T>(this NetworkCommunicator networkPeer) where T : PeerComponent` | 方法 |
| `RemoveComponent` | `public static void RemoveComponent<T>(this NetworkCommunicator networkPeer, bool synched = true) where T : PeerComponent` | 方法 |
| `RemoveComponent` | `public static void RemoveComponent(this NetworkCommunicator networkPeer, PeerComponent component)` | 方法 |
| `GetComponent` | `public static PeerComponent GetComponent(this NetworkCommunicator networkPeer, uint componentId)` | 方法 |
| `AddComponent` | `public static void AddComponent(this NetworkCommunicator networkPeer, Type peerComponentType)` | 方法 |
| `AddComponent` | `public static void AddComponent(this NetworkCommunicator networkPeer, uint componentId)` | 方法 |
| `AddComponent` | `public static T AddComponent<T>(this NetworkCommunicator networkPeer) where T : PeerComponent, new()` | 方法 |
| `TellClientToAddComponent` | `public static T TellClientToAddComponent<T>(this NetworkCommunicator networkPeer) where T : PeerComponent, new()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
