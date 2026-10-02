---
title: "NetworkSession"
description: "NetworkSession：TaleWorlds.Network 的 public 类；公开成员 18 个（方法 11、属性 4、字段 1）。canonical 桶 network。源文件 TaleWorlds.Network/NetworkSession.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NetworkSession

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class NetworkSession`
**File:** `TaleWorlds.Network/NetworkSession.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

NetworkSession 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/NetworkSession.cs。它是一个 public 类（abstract），继承链为 NetworkSession。public/protected 成员共 18 个：11 方法、4 属性、1 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NetworkSession 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 NetworkSession。成员构成以方法为主（方法 11/18，属性 4/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/NetworkSession.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NetworkSession` | `protected NetworkSession()` | 构造函数 |
| `SendDisconnectMessage` | `public void SendDisconnectMessage()` | 方法 |
| `OnConnected` | `protected internal virtual void OnConnected()` | 方法 |
| `OnSocketSet` | `protected internal virtual void OnSocketSet()` | 方法 |
| `OnDisconnected` | `protected internal virtual void OnDisconnected()` | 方法 |
| `OnCantConnect` | `protected internal virtual void OnCantConnect()` | 方法 |
| `OnMessageReceived` | `protected internal virtual void OnMessageReceived(INetworkMessageReader networkMessage)` | 方法 |
| `Tick` | `public virtual void Tick()` | 方法 |
| `AddMessageHandler` | `public void AddMessageHandler<T>(MessageContractHandlerDelegate<T>handler) where T : MessageContract` | 方法 |
| `SendMessage` | `public void SendMessage(MessageContract message)` | 方法 |
| `SendPlainMessage` | `protected void SendPlainMessage(MessageContract message)` | 方法 |
| `IsActive` | `public bool IsActive` | 属性 |
| `Address` | `public string Address` | 属性 |
| `LastMessageSentTime` | `public int LastMessageSentTime` | 属性 |
| `IsConnected` | `public bool IsConnected` | 属性 |
| `AliveMessageIntervalInSecs` | `public const double AliveMessageIntervalInSecs` | 字段 |
| `ComponentMessageHandlerDelegate` | `public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage);` | 方法 |
| `ComponentMessageHandlerDelegate` | `public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
