---
title: "TestCommonBase"
description: "TestCommonBase 的自动生成类参考。"
---
# TestCommonBase

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class TestCommonBase`
**Base:** 无
**File:** `TaleWorlds.Library/TestCommonBase.cs`

## 概述

`TestCommonBase` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BaseInstance` | `public static TestCommonBase BaseInstance { get; }` |

## 主要方法

### Tick
`public abstract void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
testCommonBase.Tick();
```

### StartTimeoutTimer
`public void StartTimeoutTimer()`

**用途 / Purpose:** 启动「timeout timer」流程或状态机。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
testCommonBase.StartTimeoutTimer();
```

### ToggleTimeoutTimer
`public void ToggleTimeoutTimer()`

**用途 / Purpose:** 处理与 「toggle timeout timer」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
testCommonBase.ToggleTimeoutTimer();
```

### CheckTimeoutTimer
`public bool CheckTimeoutTimer()`

**用途 / Purpose:** 检查「timeout timer」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
var result = testCommonBase.CheckTimeoutTimer();
```

### GetGameStatus
`public virtual string GetGameStatus()`

**用途 / Purpose:** 读取并返回当前对象中 「game status」 的结果。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
var result = testCommonBase.GetGameStatus();
```

### WaitFor
`public void WaitFor(double seconds)`

**用途 / Purpose:** 暂停当前流程，直到「for」条件满足。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
testCommonBase.WaitFor(0);
```

### WaitUntil
`public virtual async Task WaitUntil(Func<bool> func)`

**用途 / Purpose:** 暂停当前流程，直到「until」条件满足。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
var result = testCommonBase.WaitUntil(func);
```

### WaitForAsync
`public Task WaitForAsync(double seconds, Random random)`

**用途 / Purpose:** 暂停当前流程，直到「for async」条件满足。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
var result = testCommonBase.WaitForAsync(0, random);
```

### WaitForAsync
`public Task WaitForAsync(double seconds)`

**用途 / Purpose:** 暂停当前流程，直到「for async」条件满足。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
var result = testCommonBase.WaitForAsync(0);
```

### GetAttachmentsFolderPath
`public static string GetAttachmentsFolderPath()`

**用途 / Purpose:** 读取并返回当前对象中 「attachments folder path」 的结果。

```csharp
// 静态调用，不需要实例
TestCommonBase.GetAttachmentsFolderPath();
```

### OnFinalize
`public virtual void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TestCommonBase 实例
TestCommonBase testCommonBase = ...;
testCommonBase.OnFinalize();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TestCommonBase instance = ...;
```

## 参见

- [本区域目录](../)