---
title: "Client"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Client`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Client

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class Client<T> : DiamondClientApplicationObject, IClient where T : Client<T>`
**Base:** `DiamondClientApplicationObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond/Client.cs`

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

**用途 / Purpose:** 更新 `update` 的状态或数据。

### HandleMessage
`public void HandleMessage(Message message)`

**用途 / Purpose:** 处理 `message` 事件或回调。

### OnConnected
`public virtual void OnConnected()`

**用途 / Purpose:** 当 `connected` 事件触发时调用此方法。

### OnCantConnect
`public virtual void OnCantConnect()`

**用途 / Purpose:** 当 `cant connect` 事件触发时调用此方法。

### OnDisconnected
`public virtual void OnDisconnected()`

**用途 / Purpose:** 当 `disconnected` 事件触发时调用此方法。

### CheckConnection
`public Task<bool> CheckConnection()`

**用途 / Purpose:** 处理 `check connection` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomClient();
```

## 参见

- [完整类目录](../catalog)