<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InterruptingBehaviorGroup`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InterruptingBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class InterruptingBehaviorGroup : AgentBehaviorGroup`
**Base:** `AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/InterruptingBehaviorGroup.cs`

## 概述

`InterruptingBehaviorGroup` 位于 `SandBox.Missions.AgentBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Missions.AgentBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Tick
`public override void Tick(float dt, bool isSimulation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GetScore
`public override float GetScore(bool isSimulation)`

**用途 / Purpose:** 获取 `score` 的当前值。

### ForceThink
`public override void ForceThink(float inSeconds)`

**用途 / Purpose:** 处理 `force think` 相关逻辑。

## 使用示例

```csharp
var value = new InterruptingBehaviorGroup();
value.Tick(0, false);
```

## 参见

- [完整类目录](../catalog)