---
title: "Chair"
description: "Chair 的自动生成类参考。"
---
# Chair

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class Chair : UsableMachine`
**Base:** `UsableMachine`
**File:** `SandBox/Objects/Usables/Chair.cs`

## 概述

`Chair` 位于 `SandBox.Objects.Usables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.Usables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsAgentFullySitting
`public bool IsAgentFullySitting(Agent usingAgent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 agent fully sitting 状态或条件。

```csharp
// 先通过子系统 API 拿到 Chair 实例
Chair chair = ...;
var result = chair.IsAgentFullySitting(usingAgent);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 a i behavior object 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Chair 实例
Chair chair = ...;
var result = chair.CreateAIBehaviorObject();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 Chair 实例
Chair chair = ...;
var result = chair.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 Chair 实例
Chair chair = ...;
var result = chair.GetDescriptionText(gameEntity);
```

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 best point alternative to 的结果。

```csharp
// 先通过子系统 API 拿到 Chair 实例
Chair chair = ...;
var result = chair.GetBestPointAlternativeTo(standingPoint, agent);
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 order 的结果。

```csharp
// 先通过子系统 API 拿到 Chair 实例
Chair chair = ...;
var result = chair.GetOrder(side);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Chair chair = ...;
chair.IsAgentFullySitting(usingAgent);
```

## 参见

- [本区域目录](../)