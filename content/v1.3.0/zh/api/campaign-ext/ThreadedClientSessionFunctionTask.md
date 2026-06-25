---
title: "ThreadedClientSessionFunctionTask"
description: "ThreadedClientSessionFunctionTask 的自动生成类参考。"
---
# ThreadedClientSessionFunctionTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientSessionFunctionTask : ThreadedClientSessionTask`
**Base:** `ThreadedClientSessionTask`
**File:** `TaleWorlds.Diamond/ThreadedClientSessionFunctionTask.cs`

## 概述

`ThreadedClientSessionFunctionTask` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FunctionResult` | `public FunctionResult FunctionResult { get; }` |

## 主要方法

### BeginJob
`public override void BeginJob()`

**用途 / Purpose:** 处理与 「begin job」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ThreadedClientSessionFunctionTask 实例
ThreadedClientSessionFunctionTask threadedClientSessionFunctionTask = ...;
threadedClientSessionFunctionTask.BeginJob();
```

### DoMainThreadJob
`public override void DoMainThreadJob()`

**用途 / Purpose:** 处理与 「do main thread job」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ThreadedClientSessionFunctionTask 实例
ThreadedClientSessionFunctionTask threadedClientSessionFunctionTask = ...;
threadedClientSessionFunctionTask.DoMainThreadJob();
```

### Wait
`public async Task Wait()`

**用途 / Purpose:** 暂停当前流程，直到「wait」条件满足。

```csharp
// 先通过子系统 API 拿到 ThreadedClientSessionFunctionTask 实例
ThreadedClientSessionFunctionTask threadedClientSessionFunctionTask = ...;
var result = threadedClientSessionFunctionTask.Wait();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ThreadedClientSessionFunctionTask threadedClientSessionFunctionTask = ...;
threadedClientSessionFunctionTask.BeginJob();
```

## 参见

- [本区域目录](../)