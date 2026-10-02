---
title: "ICommunicator"
description: "ICommunicator：TaleWorlds.Core 的 public 接口；公开成员 8 个（方法 3、属性 5、字段 0）。源文件 TaleWorlds.Core/ICommunicator.cs。"
---
# ICommunicator

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface ICommunicator`
**File:** `TaleWorlds.Core/ICommunicator.cs`

## 概述

ICommunicator 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/ICommunicator.cs。它是一个 public 接口，继承链为 ICommunicator。public/protected 成员共 8 个：3 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ICommunicator 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 ICommunicator。成员构成以属性为主（属性 5/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/ICommunicator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VirtualPlayer` | `VirtualPlayer VirtualPlayer` | 属性 |
| `OnSynchronizeComponentTo` | `void OnSynchronizeComponentTo(VirtualPlayer peer, PeerComponent component);` | 方法 |
| `OnAddComponent` | `void OnAddComponent(PeerComponent component);` | 方法 |
| `OnRemoveComponent` | `void OnRemoveComponent(PeerComponent component);` | 方法 |
| `IsNetworkActive` | `bool IsNetworkActive` | 属性 |
| `IsConnectionActive` | `bool IsConnectionActive` | 属性 |
| `IsServerPeer` | `bool IsServerPeer` | 属性 |
| `IsSynchronized` | `bool IsSynchronized` | 属性 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
