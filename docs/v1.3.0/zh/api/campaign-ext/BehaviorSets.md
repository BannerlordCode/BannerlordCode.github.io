<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BehaviorSets`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BehaviorSets

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class BehaviorSets`
**Base:** 无
**File:** `SandBox/Missions/AgentBehaviors/BehaviorSets.cs`

## 概述

`BehaviorSets` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddQuestCharacterBehaviors
`public static void AddQuestCharacterBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `quest character behaviors`。

### AddWandererBehaviors
`public static void AddWandererBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `wanderer behaviors`。

### AddOutdoorWandererBehaviors
`public static void AddOutdoorWandererBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `outdoor wanderer behaviors`。

### AddIndoorWandererBehaviors
`public static void AddIndoorWandererBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `indoor wanderer behaviors`。

### AddFixedCharacterBehaviors
`public static void AddFixedCharacterBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `fixed character behaviors`。

### AddPatrollingThugBehaviors
`public static void AddPatrollingThugBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `patrolling thug behaviors`。

### AddStandGuardBehaviors
`public static void AddStandGuardBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `stand guard behaviors`。

### AddFixedGuardBehaviors
`public static void AddFixedGuardBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `fixed guard behaviors`。

### StealthAgentBehaviors
`public static void StealthAgentBehaviors(IAgent agent)`

**用途 / Purpose:** 处理 `stealth agent behaviors` 相关逻辑。

### AddPatrollingGuardBehaviors
`public static void AddPatrollingGuardBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `patrolling guard behaviors`。

### AddCompanionBehaviors
`public static void AddCompanionBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `companion behaviors`。

### AddBodyguardBehaviors
`public static void AddBodyguardBehaviors(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `bodyguard behaviors`。

### AddFirstCompanionBehavior
`public static void AddFirstCompanionBehavior(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `first companion behavior`。

## 使用示例

```csharp
BehaviorSets.AddQuestCharacterBehaviors(agent);
```

## 参见

- [完整类目录](../catalog)