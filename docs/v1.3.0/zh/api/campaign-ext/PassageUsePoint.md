<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PassageUsePoint`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PassageUsePoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class PassageUsePoint : StandingPoint`
**Base:** `StandingPoint`
**File:** `SandBox/Objects/PassageUsePoint.cs`

## 概述

`PassageUsePoint` 位于 `SandBox.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MovingAgents` | `public MBReadOnlyList<Agent> MovingAgents { get; }` |
| `MovingAgent` | `public override Agent MovingAgent { get; }` |
| `ToLocation` | `public Location ToLocation { get; }` |
| `HasAIMovingTo` | `public override bool HasAIMovingTo { get; }` |
| `FocusableObjectType` | `public override FocusableObjectType FocusableObjectType { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; }` |

## 主要方法

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 处理 `after mission start` 相关逻辑。

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 处理 `is usable by agent` 相关逻辑。

### GetMovingAgentCount
`public override int GetMovingAgentCount()`

**用途 / Purpose:** 获取 `moving agent count` 的当前值。

### GetMovingAgentWithIndex
`public override Agent GetMovingAgentWithIndex(int index)`

**用途 / Purpose:** 获取 `moving agent with index` 的当前值。

### AddMovingAgent
`public override void AddMovingAgent(Agent movingAgent)`

**用途 / Purpose:** 向当前集合/状态中添加 `moving agent`。

### RemoveMovingAgent
`public override void RemoveMovingAgent(Agent movingAgent)`

**用途 / Purpose:** 从当前集合/状态中移除 `moving agent`。

### IsAIMovingTo
`public override bool IsAIMovingTo(Agent agent)`

**用途 / Purpose:** 处理 `is a i moving to` 相关逻辑。

## 使用示例

```csharp
var value = new PassageUsePoint();
value.IsDisabledForAgent(agent);
```

## 参见

- [完整类目录](../catalog)