---
title: "Client"
description: "Client 的自动生成类参考。"
---
# Client

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class Client<T> : DiamondClientApplicationObject, IClient where T : Client<T>`
**Base:** `DiamondClientApplicationObject`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/Client.cs`

## 概述

`Client` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInCriticalState` | `public bool IsInCriticalState { get; set; }` |
| `AccessProvider` | `public ILoginAccessProvider AccessProvider { get; set; }` |

## 主要方法

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 Client 实例
Client client = ...;
client.Update();
```

### HandleMessage
`public void HandleMessage(Message message)`

**用途 / Purpose:** 响应 message 事件，执行对应的处理逻辑。

```csharp
// 先通过子系统 API 拿到 Client 实例
Client client = ...;
client.HandleMessage(message);
```

### OnConnected
`public virtual void OnConnected()`

**用途 / Purpose:** 在 connected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Client 实例
Client client = ...;
client.OnConnected();
```

### OnCantConnect
`public virtual void OnCantConnect()`

**用途 / Purpose:** 在 cant connect 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Client 实例
Client client = ...;
client.OnCantConnect();
```

### OnDisconnected
`public virtual void OnDisconnected()`

**用途 / Purpose:** 在 disconnected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Client 实例
Client client = ...;
client.OnDisconnected();
```

### CheckConnection
`public Task<bool> CheckConnection()`

**用途 / Purpose:** 检查connection在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Client 实例
Client client = ...;
var result = client.CheckConnection();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
Client instance = ...;
```

## 参见

- [本区域目录](../)