---
title: "ChangeLocationBehavior"
description: "ChangeLocationBehavior 的自动生成类参考。"
---
# ChangeLocationBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class ChangeLocationBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/ChangeLocationBehavior.cs`

## 概述

`ChangeLocationBehavior` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ChangeLocationBehavior 实例
ChangeLocationBehavior changeLocationBehavior = ...;
changeLocationBehavior.Tick(0, false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 debug info 的结果。

```csharp
// 先通过子系统 API 拿到 ChangeLocationBehavior 实例
ChangeLocationBehavior changeLocationBehavior = ...;
var result = changeLocationBehavior.GetDebugInfo();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 availability 的结果。

```csharp
// 先通过子系统 API 拿到 ChangeLocationBehavior 实例
ChangeLocationBehavior changeLocationBehavior = ...;
var result = changeLocationBehavior.GetAvailability(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ChangeLocationBehavior changeLocationBehavior = ...;
changeLocationBehavior.Tick(0, false);
```

## 参见

- [本区域目录](../)