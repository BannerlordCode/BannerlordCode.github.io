<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnFrameBehaviorBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnFrameBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SpawnFrameBehaviorBase`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SpawnFrameBehaviorBase.cs`

## 概述

`SpawnFrameBehaviorBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetSpawnFrame
`public abstract MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**用途 / Purpose:** 获取 `spawn frame` 的当前值。

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### CreateDecreasingCache
`public static SpawnFrameBehaviorBase.WeightCache CreateDecreasingCache()`

**用途 / Purpose:** 创建一个 `decreasing cache` 实例或对象。

### CheckAndInsertNewValueIfLower
`public bool CheckAndInsertNewValueIfLower(float value, out float valueDifference)`

**用途 / Purpose:** 处理 `check and insert new value if lower` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSpawnFrameBehaviorBase();
```

## 参见

- [完整类目录](../catalog)