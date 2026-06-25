---
title: "ThreadedClientCantConnectTask"
description: "ThreadedClientCantConnectTask 的自动生成类参考。"
---
# ThreadedClientCantConnectTask

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `internal sealed class ThreadedClientCantConnectTask : ThreadedClientTask`
**Base:** `ThreadedClientTask`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientCantConnectTask.cs`

## 概述

`ThreadedClientCantConnectTask` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### DoJob
`public override void DoJob()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoJob 对应的操作。

```csharp
// 先通过子系统 API 拿到 ThreadedClientCantConnectTask 实例
ThreadedClientCantConnectTask threadedClientCantConnectTask = ...;
threadedClientCantConnectTask.DoJob();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ThreadedClientCantConnectTask threadedClientCantConnectTask = ...;
threadedClientCantConnectTask.DoJob();
```

## 参见

- [本区域目录](../)