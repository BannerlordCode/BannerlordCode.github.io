<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionHintLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionHintLogic

**Namespace:** TaleWorlds.MountAndBlade.Missions.MissionLogics
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHintLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`

## 概述

`MissionHintLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionHintLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveHint` | `public MissionHint ActiveHint { get; }` |

## 主要方法

### SetActiveHint
`public void SetActiveHint(MissionHint hint)`

**用途 / Purpose:** 设置 `active hint` 的值或状态。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### MissionHintChangedDelegate
`public delegate void MissionHintChangedDelegate(MissionHint previousHint, MissionHint newHint)`

**用途 / Purpose:** 处理 `mission hint changed delegate` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionHintLogic());
```

## 参见

- [完整类目录](../catalog)