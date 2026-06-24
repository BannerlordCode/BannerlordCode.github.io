<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TrainingIcon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TrainingIcon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TrainingIcon : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/TrainingIcon.cs`

## 概述

`TrainingIcon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Focused` | `public bool Focused { get; }` |

## 主要方法

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### SetMarked
`public void SetMarked(bool highlight)`

**用途 / Purpose:** 设置 `marked` 的值或状态。

### GetIsActivated
`public bool GetIsActivated()`

**用途 / Purpose:** 获取 `is activated` 的当前值。

### GetTrainingSubTypeTag
`public string GetTrainingSubTypeTag()`

**用途 / Purpose:** 获取 `training sub type tag` 的当前值。

### DisableIcon
`public void DisableIcon()`

**用途 / Purpose:** 处理 `disable icon` 相关逻辑。

### EnableIcon
`public void EnableIcon()`

**用途 / Purpose:** 处理 `enable icon` 相关逻辑。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject = null)`

**用途 / Purpose:** 获取 `action text for standing point` 的当前值。

### OnFocusGain
`public override void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 当 `focus gain` 事件触发时调用此方法。

### OnFocusLose
`public override void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 当 `focus lose` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new TrainingIcon();
value.GetTickRequirement();
```

## 参见

- [完整类目录](../catalog)