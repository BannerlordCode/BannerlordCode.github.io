---
title: "JobManager"
description: "JobManager 的自动生成类参考。"
---
# JobManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class JobManager`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/JobManager.cs`

## 概述

`JobManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `JobManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddJob
`public void AddJob(Job job)`

**用途 / Purpose:** **用途 / Purpose:** 将 job 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 JobManager 实例
JobManager jobManager = ...;
jobManager.AddJob(job);
```

## 使用示例

```csharp
var manager = JobManager.Current;
```

## 参见

- [本区域目录](../)