---
title: "Job"
description: "Job 的自动生成类参考。"
---
# Job

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Job`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Job.cs`

## 概述

`Job` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Finished` | `public bool Finished { get; set; }` |

## 主要方法

### DoJob
`public virtual void DoJob(float dt)`

**用途 / Purpose:** 调用 DoJob 对应的操作。

```csharp
// 先通过子系统 API 拿到 Job 实例
Job job = ...;
job.DoJob(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Job job = ...;
job.DoJob(0);
```

## 参见

- [本区域目录](../)