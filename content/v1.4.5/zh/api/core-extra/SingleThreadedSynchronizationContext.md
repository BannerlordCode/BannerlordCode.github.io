---
title: "SingleThreadedSynchronizationContext"
description: "SingleThreadedSynchronizationContext 的自动生成类参考。"
---
# SingleThreadedSynchronizationContext

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public sealed class SingleThreadedSynchronizationContext : SynchronizationContext`
**Base:** `SynchronizationContext`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/SingleThreadedSynchronizationContext.cs`

## 概述

`SingleThreadedSynchronizationContext` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Invoke
`public void Invoke()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Invoke 对应的操作。

```csharp
// 先通过子系统 API 拿到 SingleThreadedSynchronizationContext 实例
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Invoke();
```

### Send
`public override void Send(SendOrPostCallback callback, object state)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Send 对应的操作。

```csharp
// 先通过子系统 API 拿到 SingleThreadedSynchronizationContext 实例
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Send(callback, state);
```

### Post
`public override void Post(SendOrPostCallback callback, object state)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Post 对应的操作。

```csharp
// 先通过子系统 API 拿到 SingleThreadedSynchronizationContext 实例
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Post(callback, state);
```

### Tick
`public void Tick()`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 SingleThreadedSynchronizationContext 实例
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Tick();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SingleThreadedSynchronizationContext singleThreadedSynchronizationContext = ...;
singleThreadedSynchronizationContext.Invoke();
```

## 参见

- [本区域目录](../)