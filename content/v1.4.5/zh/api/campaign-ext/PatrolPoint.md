---
title: "PatrolPoint"
description: "PatrolPoint 的自动生成类参考。"
---
# PatrolPoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class PatrolPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `Modules.SandBox/SandBox/SandBox.Objects/PatrolPoint.cs`

## 概述

`PatrolPoint` 位于 `SandBox.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**用途 / Purpose:** 为 「agent items visibility」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PatrolPoint 实例
PatrolPoint patrolPoint = ...;
patrolPoint.SetAgentItemsVisibility(false);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「use」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PatrolPoint 实例
PatrolPoint patrolPoint = ...;
patrolPoint.OnUse(userAgent, 0);
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 「use stopped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PatrolPoint 实例
PatrolPoint patrolPoint = ...;
patrolPoint.OnUseStopped(userAgent, false, 0);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 PatrolPoint 实例
PatrolPoint patrolPoint = ...;
var result = patrolPoint.GetDescriptionText(gameEntity);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PatrolPoint patrolPoint = ...;
patrolPoint.SetAgentItemsVisibility(false);
```

## 参见

- [本区域目录](../)