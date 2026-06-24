<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerWarmupComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerWarmupComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerWarmupComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs`

## 概述

`MultiplayerWarmupComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerWarmupComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalWarmupDuration` | `public static float TotalWarmupDuration { get; }` |
| `IsInWarmup` | `public bool IsInWarmup { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### CheckForWarmupProgressEnd
`public bool CheckForWarmupProgressEnd()`

**用途 / Purpose:** 处理 `check for warmup progress end` 相关逻辑。

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 当 `pre display mission tick` 事件触发时调用此方法。

### EndWarmupProgress
`public void EndWarmupProgress()`

**用途 / Purpose:** 处理 `end warmup progress` 相关逻辑。

### CanMatchStartAfterWarmup
`public bool CanMatchStartAfterWarmup()`

**用途 / Purpose:** 判断当前对象是否可以执行 `match start after warmup`。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### CommandEndWarmup
`public static string CommandEndWarmup(List<string> strings)`

**用途 / Purpose:** 处理 `command end warmup` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerWarmupComponent>();
```

## 参见

- [完整类目录](../catalog)