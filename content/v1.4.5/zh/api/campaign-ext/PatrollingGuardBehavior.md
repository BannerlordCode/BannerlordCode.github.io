---
title: "PatrollingGuardBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PatrollingGuardBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PatrollingGuardBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class PatrollingGuardBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/PatrollingGuardBehavior.cs`

## 概述

`PatrollingGuardBehavior` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**用途 / Purpose:** 获取 `availability` 的当前值。

### GetDebugInfo
`public override string GetDebugInfo()`

**用途 / Purpose:** 获取 `debug info` 的当前值。

## 使用示例

```csharp
var value = new PatrollingGuardBehavior();
value.Tick(0, false);
```

## 参见

- [完整类目录](../catalog)