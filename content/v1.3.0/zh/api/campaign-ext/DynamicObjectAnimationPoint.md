---
title: "DynamicObjectAnimationPoint"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DynamicObjectAnimationPoint`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DynamicObjectAnimationPoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class DynamicObjectAnimationPoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/AnimationPoints/DynamicObjectAnimationPoint.cs`

## 概述

`DynamicObjectAnimationPoint` 位于 `SandBox.Objects.AnimationPoints`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AnimationPoints` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsArriveActionFinished` | `public bool IsArriveActionFinished { get; }` |
| `PlayerStopsUsingWhenInteractsWithOther` | `public override bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 处理 `is usable by agent` 相关逻辑。

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 获取 `user frame for agent` 的当前值。

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### SimulateTick
`public override void SimulateTick(float dt)`

**用途 / Purpose:** 处理 `simulate tick` 相关逻辑。

### HasAlternative
`public override bool HasAlternative()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `alternative`。

### OnUserConversationStart
`public override void OnUserConversationStart()`

**用途 / Purpose:** 当 `user conversation start` 事件触发时调用此方法。

### OnUserConversationEnd
`public override void OnUserConversationEnd()`

**用途 / Purpose:** 当 `user conversation end` 事件触发时调用此方法。

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### SetAgentItemsVisibility
`public void SetAgentItemsVisibility(bool isVisible)`

**用途 / Purpose:** 设置 `agent items visibility` 的值或状态。

### IsRotationCorrectDuringUsage
`public bool IsRotationCorrectDuringUsage()`

**用途 / Purpose:** 处理 `is rotation correct during usage` 相关逻辑。

## 使用示例

```csharp
var value = new DynamicObjectAnimationPoint();
value.GetTickRequirement();
```

## 参见

- [完整类目录](../catalog)