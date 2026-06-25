---
title: "ApplicationHealthChecker"
description: "ApplicationHealthChecker 的自动生成类参考。"
---
# ApplicationHealthChecker

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class ApplicationHealthChecker`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ApplicationHealthChecker.cs`

## 概述

`ApplicationHealthChecker` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Start
`public void Start()`

**用途 / Purpose:** 启动当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 ApplicationHealthChecker 实例
ApplicationHealthChecker applicationHealthChecker = ...;
applicationHealthChecker.Start();
```

### Stop
`public void Stop()`

**用途 / Purpose:** 停止当前对象的流程或状态机。

```csharp
// 先通过子系统 API 拿到 ApplicationHealthChecker 实例
ApplicationHealthChecker applicationHealthChecker = ...;
applicationHealthChecker.Stop();
```

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 ApplicationHealthChecker 实例
ApplicationHealthChecker applicationHealthChecker = ...;
applicationHealthChecker.Update();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ApplicationHealthChecker applicationHealthChecker = ...;
applicationHealthChecker.Start();
```

## 参见

- [本区域目录](../)