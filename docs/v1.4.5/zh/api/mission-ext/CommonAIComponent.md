<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CommonAIComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CommonAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommonAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CommonAIComponent.cs`

## 概述

`CommonAIComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CommonAIComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPanicked` | `public bool IsPanicked { get; }` |
| `IsRetreating` | `public bool IsRetreating { get; }` |
| `ReservedRiderAgentIndex` | `public int ReservedRiderAgentIndex { get; }` |
| `Morale` | `public float Morale { get; set; }` |

## 主要方法

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnTickParallel
`public override void OnTickParallel(float dt)`

**用途 / Purpose:** 当 `tick parallel` 事件触发时调用此方法。

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### Panic
`public void Panic()`

**用途 / Purpose:** 处理 `panic` 相关逻辑。

### Retreat
`public void Retreat(bool useCachingSystem = false)`

**用途 / Purpose:** 处理 `retreat` 相关逻辑。

### StopRetreating
`public void StopRetreating()`

**用途 / Purpose:** 处理 `stop retreating` 相关逻辑。

### CanPanic
`public bool CanPanic()`

**用途 / Purpose:** 判断当前对象是否可以执行 `panic`。

### OnHit
`public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)`

**用途 / Purpose:** 当 `hit` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved()`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnComponentRemoved
`public override void OnComponentRemoved()`

**用途 / Purpose:** 当 `component removed` 事件触发时调用此方法。

## 使用示例

```csharp
var component = agent.GetComponent<CommonAIComponent>();
```

## 参见

- [完整类目录](../catalog)