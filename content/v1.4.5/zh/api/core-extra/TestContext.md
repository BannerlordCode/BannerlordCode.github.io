---
title: "TestContext"
description: "TestContext 的自动生成类参考。"
---
# TestContext

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TestContext`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/TestContext.cs`

## 概述

`TestContext` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RunTestAux
`public void RunTestAux(string commandLine)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TestContext 实例
TestContext testContext = ...;
testContext.RunTestAux("example");
```

### OnApplicationTick
`public void OnApplicationTick(float dt)`

**用途 / Purpose:** 在 「application tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TestContext 实例
TestContext testContext = ...;
testContext.OnApplicationTick(0);
```

### TickTest
`public void TickTest(float dt)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「test」的状态。

```csharp
// 先通过子系统 API 拿到 TestContext 实例
TestContext testContext = ...;
testContext.TickTest(0);
```

### FinalizeContext
`public void FinalizeContext()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TestContext 实例
TestContext testContext = ...;
testContext.FinalizeContext();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TestContext testContext = ...;
testContext.RunTestAux("example");
```

## 参见

- [本区域目录](../)