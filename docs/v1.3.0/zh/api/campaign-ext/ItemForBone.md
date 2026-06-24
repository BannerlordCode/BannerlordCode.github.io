<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemForBone`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemForBone

**命名空间:** SandBox.Objects.AnimationPoints
**模块:** SandBox.Objects
**类型:** `public struct ItemForBone`
**领域:** campaign-ext

## 概述

`ItemForBone` 位于 `SandBox.Objects.AnimationPoints`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.Objects.AnimationPoints` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerStopsUsingWhenInteractsWithOther` | `public override bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `IsArriveActionFinished` | `public bool IsArriveActionFinished { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; }` |

## 主要方法

### RequestResync
`public void RequestResync()`

**用途 / Purpose:** 处理 `request resync` 相关逻辑。

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 处理 `after mission start` 相关逻辑。

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 获取 `user frame for agent` 的当前值。

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 处理 `is usable by agent` 相关逻辑。

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### SimulateTick
`public override void SimulateTick(float dt)`

**用途 / Purpose:** 处理 `simulate tick` 相关逻辑。

### HasAlternative
`public override bool HasAlternative()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `alternative`。

### GetRandomWaitInSeconds
`public float GetRandomWaitInSeconds()`

**用途 / Purpose:** 获取 `random wait in seconds` 的当前值。

### GetAlternatives
`public List<AnimationPoint> GetAlternatives()`

**用途 / Purpose:** 获取 `alternatives` 的当前值。

### IsRotationCorrectDuringUsage
`public bool IsRotationCorrectDuringUsage()`

**用途 / Purpose:** 处理 `is rotation correct during usage` 相关逻辑。

### OnUserConversationStart
`public override void OnUserConversationStart()`

**用途 / Purpose:** 当 `user conversation start` 事件触发时调用此方法。

### OnUserConversationEnd
`public override void OnUserConversationEnd()`

**用途 / Purpose:** 当 `user conversation end` 事件触发时调用此方法。

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**用途 / Purpose:** 设置 `agent items visibility` 的值或状态。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ItemForBone 实例，再调用它的公开方法
var value = new ItemForBone();
value.RequestResync();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
