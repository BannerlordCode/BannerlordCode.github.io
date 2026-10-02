---
title: "UdpNetworkComponent"
description: "UdpNetworkComponent：TaleWorlds.MountAndBlade 的 public 类，继承 IUdpNetworkHandler；公开成员 15 个（方法 14、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/UdpNetworkComponent.cs。"
---
# UdpNetworkComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`

## 概述

UdpNetworkComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/UdpNetworkComponent.cs。它是一个 public 类（abstract），实现/继承 IUdpNetworkHandler，继承链为 UdpNetworkComponent → IUdpNetworkHandler。public/protected 成员共 15 个：14 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：UdpNetworkComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 UdpNetworkComponent → IUdpNetworkHandler。成员构成以方法为主（方法 14/15，属性 0/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/UdpNetworkComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UdpNetworkComponent` | `protected UdpNetworkComponent()` | 构造函数 |
| `AddRemoveMessageHandlers` | `protected virtual void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `OnUdpNetworkHandlerClose` | `public virtual void OnUdpNetworkHandlerClose()` | 方法 |
| `OnUdpNetworkHandlerTick` | `public virtual void OnUdpNetworkHandlerTick(float dt)` | 方法 |
| `HandleNewClientConnect` | `public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)` | 方法 |
| `HandleEarlyNewClientAfterLoadingFinished` | `public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `HandleNewClientAfterLoadingFinished` | `public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `HandleLateNewClientAfterLoadingFinished` | `public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `HandleNewClientAfterSynchronized` | `public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |
| `HandleLateNewClientAfterSynchronized` | `public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |
| `OnEveryoneUnSynchronized` | `public virtual void OnEveryoneUnSynchronized()` | 方法 |
| `HandleEarlyPlayerDisconnect` | `public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` | 方法 |
| `HandlePlayerDisconnect` | `public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | 方法 |
| `OnPlayerDisconnectedFromServer` | `public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` | 方法 |
| `OnDisconnectedFromServer` | `public virtual void OnDisconnectedFromServer()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IUdpNetworkHandler](../IUdpNetworkHandler)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
