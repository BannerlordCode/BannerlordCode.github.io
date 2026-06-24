<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StandingPoint`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StandingPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPoint.cs`

## 概述

`StandingPoint` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public StandingPoint this { get; }` |
| `FavoredUser` | `public Agent FavoredUser { get; set; }` |

## 主要方法

### OnParentMachinePhysicsStateChanged
`public void OnParentMachinePhysicsStateChanged()`

**用途 / Purpose:** 当 `parent machine physics state changed` 事件触发时调用此方法。

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 获取 `user frame for agent` 的当前值。

### HasAlternative
`public virtual bool HasAlternative()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `alternative`。

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(Agent agent)`

**用途 / Purpose:** 获取 `usage score for agent` 的当前值。

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent((Agent, float) agentPair)`

**用途 / Purpose:** 获取 `usage score for agent` 的当前值。

### SetupOnUsingStoppedBehavior
`public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool> action)`

**用途 / Purpose:** 设置 `up on using stopped behavior` 的值或状态。

### OnEndMission
`public override void OnEndMission()`

**用途 / Purpose:** 当 `end mission` 事件触发时调用此方法。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 处理 `is usable by agent` 相关逻辑。

### SetUsableByAIOnly
`public void SetUsableByAIOnly()`

**用途 / Purpose:** 设置 `usable by a i only` 的值或状态。

### SetUsableByPlayerOnly
`public void SetUsableByPlayerOnly()`

**用途 / Purpose:** 设置 `usable by player only` 的值或状态。

### SetUsableByPlayerOrAI
`public void SetUsableByPlayerOrAI()`

**用途 / Purpose:** 设置 `usable by player or a i` 的值或状态。

## 使用示例

```csharp
var value = new StandingPoint();
value.OnParentMachinePhysicsStateChanged();
```

## 参见

- [完整类目录](../catalog)