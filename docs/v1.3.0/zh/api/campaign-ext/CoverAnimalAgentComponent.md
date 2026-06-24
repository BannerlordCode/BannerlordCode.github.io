<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CoverAnimalAgentComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CoverAnimalAgentComponent

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CoverAnimalAgentComponent : AgentComponent, IFocusable`
**Base:** `AgentComponent`
**File:** `SandBox/Missions/CoverAnimalAgentComponent.cs`

## 概述

`CoverAnimalAgentComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CoverAnimalAgentComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsMovementStarted` | `public bool IsMovementStarted { get; }` |
| `IsAtFinalPoint` | `public bool IsAtFinalPoint { get; }` |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType { get; }` |

## 主要方法

### SetDynamicPatrolArea
`public void SetDynamicPatrolArea(GameEntity parentPatrolPoint)`

**用途 / Purpose:** 设置 `dynamic patrol area` 的值或状态。

### StartMovement
`public void StartMovement()`

**用途 / Purpose:** 处理 `start movement` 相关逻辑。

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### IsTargetReached
`public bool IsTargetReached()`

**用途 / Purpose:** 处理 `is target reached` 相关逻辑。

### SetTargetFrame
`public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, Agent.AIScriptedFrameFlags flags = 0)`

**用途 / Purpose:** 设置 `target frame` 的值或状态。

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 当 `focus gain` 事件触发时调用此方法。

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 当 `focus lose` 事件触发时调用此方法。

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 获取 `info text for being not interactable` 的当前值。

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

## 使用示例

```csharp
var component = agent.GetComponent<CoverAnimalAgentComponent>();
```

## 参见

- [完整类目录](../catalog)