---
title: "MessageServiceConnection"
description: "MessageServiceConnection 的自动生成类参考。"
---
# MessageServiceConnection

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageServiceConnection`
**Base:** 无
**File:** `TaleWorlds.Network/MessageServiceConnection.cs`

## 概述

`MessageServiceConnection` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |

## 主要方法

### SendAsync
`public abstract Task SendAsync(string text)`

**用途 / Purpose:** 调用 SendAsync 对应的操作。

```csharp
// 先通过子系统 API 拿到 MessageServiceConnection 实例
MessageServiceConnection messageServiceConnection = ...;
var result = messageServiceConnection.SendAsync("example");
```

### Init
`public abstract void Init(string address, string token)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MessageServiceConnection 实例
MessageServiceConnection messageServiceConnection = ...;
messageServiceConnection.Init("example", "example");
```

### RegisterProxyClient
`public abstract void RegisterProxyClient(string name, IMessageProxyClient playerClient)`

**用途 / Purpose:** 将proxy client注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MessageServiceConnection 实例
MessageServiceConnection messageServiceConnection = ...;
messageServiceConnection.RegisterProxyClient("example", playerClient);
```

### StartAsync
`public abstract Task StartAsync()`

**用途 / Purpose:** 启动async流程或状态机。

```csharp
// 先通过子系统 API 拿到 MessageServiceConnection 实例
MessageServiceConnection messageServiceConnection = ...;
var result = messageServiceConnection.StartAsync();
```

### StopAsync
`public abstract Task StopAsync()`

**用途 / Purpose:** 停止async流程或状态机。

```csharp
// 先通过子系统 API 拿到 MessageServiceConnection 实例
MessageServiceConnection messageServiceConnection = ...;
var result = messageServiceConnection.StopAsync();
```

### ClosedDelegate
`public delegate Task ClosedDelegate()`

**用途 / Purpose:** 关闭d delegate对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MessageServiceConnection 实例
MessageServiceConnection messageServiceConnection = ...;
var result = messageServiceConnection.ClosedDelegate();
```

### StateChangedDelegate
`public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState)`

**用途 / Purpose:** 调用 StateChangedDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 MessageServiceConnection 实例
MessageServiceConnection messageServiceConnection = ...;
messageServiceConnection.StateChangedDelegate(oldState, newState);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MessageServiceConnection instance = ...;
```

## 参见

- [本区域目录](../)