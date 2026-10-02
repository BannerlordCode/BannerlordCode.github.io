---
title: "Client<T>"
description: "Client<T>：TaleWorlds.Diamond 的 public 类，继承 DiamondClientApplicationObject、IClient；公开成员 18 个（方法 14、属性 3、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Diamond/Client.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Client<T>

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public abstract class Client<T>: DiamondClientApplicationObject, IClient where T : Client<T>`
**File:** `TaleWorlds.Diamond/Client.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## 概述

Client<T> 位于 TaleWorlds.Diamond 模块，源文件 TaleWorlds.Diamond/Client.cs。它是一个 public 类（abstract），实现/继承 DiamondClientApplicationObject、IClient，继承链为 Client → DiamondClientApplicationObject。public/protected 成员共 18 个：14 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Client<T> 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Diamond`），命名空间 `TaleWorlds.Diamond`，继承链 Client → DiamondClientApplicationObject。成员构成以方法为主（方法 14/18，属性 3/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Diamond/Client.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInCriticalState` | `public bool IsInCriticalState` | 属性 |
| `AliveCheckTimeInMiliSeconds` | `public virtual long AliveCheckTimeInMiliSeconds` | 属性 |
| `Client` | `protected Client(DiamondClientApplication diamondClientApplication, IClientSessionProvider<T>sessionProvider, bool autoReconnect) : base(diamondClientApplication)` | 构造函数 |
| `Update` | `public void Update()` | 方法 |
| `OnTick` | `protected abstract void OnTick();` | 方法 |
| `SendMessage` | `protected void SendMessage(Message message)` | 方法 |
| `AccessProvider` | `public ILoginAccessProvider AccessProvider` | 属性 |
| `Task` | `protected async Task<LoginResult>Login(LoginMessage message)` | 方法 |
| `Task` | `protected async Task<TResult>CallFunction<TResult>(Message message) where TResult : FunctionResult` | 方法 |
| `AddMessageHandler` | `protected void AddMessageHandler<TMessage>(ClientMessageHandler<TMessage>messageHandler) where TMessage : Message` | 方法 |
| `HandleMessage` | `public void HandleMessage(Message message)` | 方法 |
| `OnConnected` | `public virtual void OnConnected()` | 方法 |
| `OnCantConnect` | `public virtual void OnCantConnect()` | 方法 |
| `OnDisconnected` | `public virtual void OnDisconnected()` | 方法 |
| `BeginConnect` | `protected void BeginConnect()` | 方法 |
| `BeginDisconnect` | `protected void BeginDisconnect()` | 方法 |
| `SetAliveCheckTime` | `protected void SetAliveCheckTime(long time)` | 方法 |
| `Task` | `public Task<bool>CheckConnection()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 DiamondClientApplicationObject](../DiamondClientApplicationObject/)
- [基类/接口 IClient](../IClient/)
- [同命名空间 AccessObject](../AccessObject/)
- [同命名空间 AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [同命名空间 AccessObjectResult](../AccessObjectResult/)
- [同命名空间 AesHelper](../AesHelper/)
