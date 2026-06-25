---
title: "AsyncRunner"
description: "AsyncRunner 的自动生成类参考。"
---
# AsyncRunner

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class AsyncRunner`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AsyncRunner.cs`

## 概述

`AsyncRunner` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Run
`public abstract void Run()`

**用途 / Purpose:** 调用 Run 对应的操作。

```csharp
// 先通过子系统 API 拿到 AsyncRunner 实例
AsyncRunner asyncRunner = ...;
asyncRunner.Run();
```

### SyncTick
`public abstract void SyncTick()`

**用途 / Purpose:** 将tick同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 AsyncRunner 实例
AsyncRunner asyncRunner = ...;
asyncRunner.SyncTick();
```

### OnRemove
`public abstract void OnRemove()`

**用途 / Purpose:** 在 remove 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AsyncRunner 实例
AsyncRunner asyncRunner = ...;
asyncRunner.OnRemove();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AsyncRunner instance = ...;
```

## 参见

- [本区域目录](../)