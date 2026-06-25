---
title: "ThreadedClientSessionLoginTask"
description: "ThreadedClientSessionLoginTask 的自动生成类参考。"
---
# ThreadedClientSessionLoginTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientSessionLoginTask : ThreadedClientSessionTask`
**Base:** `ThreadedClientSessionTask`
**File:** `TaleWorlds.Diamond/ThreadedClientSessionLoginTask.cs`

## 概述

`ThreadedClientSessionLoginTask` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LoginResult` | `public LoginResult LoginResult { get; }` |

## 主要方法

### BeginJob
`public override void BeginJob()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeginJob 对应的操作。

```csharp
// 先通过子系统 API 拿到 ThreadedClientSessionLoginTask 实例
ThreadedClientSessionLoginTask threadedClientSessionLoginTask = ...;
threadedClientSessionLoginTask.BeginJob();
```

### DoMainThreadJob
`public override void DoMainThreadJob()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoMainThreadJob 对应的操作。

```csharp
// 先通过子系统 API 拿到 ThreadedClientSessionLoginTask 实例
ThreadedClientSessionLoginTask threadedClientSessionLoginTask = ...;
threadedClientSessionLoginTask.DoMainThreadJob();
```

### Wait
`public async Task Wait()`

**用途 / Purpose:** **用途 / Purpose:** 暂停当前流程，直到wait条件满足。

```csharp
// 先通过子系统 API 拿到 ThreadedClientSessionLoginTask 实例
ThreadedClientSessionLoginTask threadedClientSessionLoginTask = ...;
var result = threadedClientSessionLoginTask.Wait();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ThreadedClientSessionLoginTask threadedClientSessionLoginTask = ...;
threadedClientSessionLoginTask.BeginJob();
```

## 参见

- [本区域目录](../)