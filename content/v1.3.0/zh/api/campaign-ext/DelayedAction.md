---
title: "DelayedAction"
description: "DelayedAction 的自动生成类参考。"
---
# DelayedAction

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public struct DelayedAction`
**Base:** 无
**File:** `StoryMode/Missions/TrainingFieldMissionController.cs`

## 概述

`DelayedAction` 位于 `StoryMode.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Update
`public bool Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 DelayedAction 实例
DelayedAction delayedAction = ...;
var result = delayedAction.Update();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DelayedAction delayedAction = ...;
delayedAction.Update();
```

## 参见

- [本区域目录](../)