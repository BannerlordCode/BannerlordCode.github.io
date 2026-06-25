---
title: "ThreadedClient"
description: "ThreadedClient 的自动生成类参考。"
---
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

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ThreadedClient 实例
ThreadedClient threadedClient = ...;
threadedClient.Tick();
```

### CheckConnection
`public Task<bool> CheckConnection()`

**用途 / Purpose:** 检查connection在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 ThreadedClient 实例
ThreadedClient threadedClient = ...;
var result = threadedClient.CheckConnection();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ThreadedClient threadedClient = ...;
threadedClient.Tick();
```

## 参见

- [本区域目录](../)