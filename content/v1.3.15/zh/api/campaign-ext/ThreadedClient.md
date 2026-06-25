---
title: "ThreadedClient"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ThreadedClient`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ThreadedClient

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class ThreadedClient : IClient`
**Base:** `IClient`
**File:** `TaleWorlds.Diamond/ThreadedClient.cs`

## 概述

`ThreadedClient` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AccessProvider` | `public ILoginAccessProvider AccessProvider { get; }` |
| `IsInCriticalState` | `public bool IsInCriticalState { get; }` |
| `AliveCheckTimeInMiliSeconds` | `public long AliveCheckTimeInMiliSeconds { get; }` |

## 主要方法

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### CheckConnection
`public Task<bool> CheckConnection()`

**用途 / Purpose:** 处理 `check connection` 相关逻辑。

## 使用示例

```csharp
var value = new ThreadedClient();
value.Tick();
```

## 参见

- [完整类目录](../catalog)