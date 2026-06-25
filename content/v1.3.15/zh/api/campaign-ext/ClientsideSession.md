---
title: "ClientsideSession"
description: "ClientsideSession 的自动生成类参考。"
---
# ClientsideSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ClientsideSession : NetworkSession`
**Base:** `NetworkSession`
**File:** `TaleWorlds.Network/ClientsideSession.cs`

## 概述

`ClientsideSession` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Port` | `public int Port { get; set; }` |

## 主要方法

### Connect
`public virtual void Connect(string ip, int port, bool useSessionThread = true)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClientsideSession 实例
ClientsideSession clientsideSession = ...;
clientsideSession.Connect("example", 0, false);
```

### Process
`public void Process()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClientsideSession 实例
ClientsideSession clientsideSession = ...;
clientsideSession.Process();
```

### Tick
`public override void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ClientsideSession 实例
ClientsideSession clientsideSession = ...;
clientsideSession.Tick();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ClientsideSession instance = ...;
```

## 参见

- [本区域目录](../)