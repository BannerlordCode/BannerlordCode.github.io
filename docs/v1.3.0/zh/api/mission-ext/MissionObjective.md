<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionObjective`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjective`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`

## 概述

`MissionObjective` 位于 `TaleWorlds.MountAndBlade.Missions.Objectives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Missions.Objectives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UniqueId` | `public abstract string UniqueId { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `Description` | `public abstract TextObject Description { get; }` |
| `ObjectiveGiver` | `public virtual BasicCharacterObject ObjectiveGiver { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Mission` | `public Mission Mission { get; }` |

## 主要方法

### ForceComplete
`public void ForceComplete()`

**用途 / Purpose:** 处理 `force complete` 相关逻辑。

### GetIsActivationRequirementsMet
`public bool GetIsActivationRequirementsMet()`

**用途 / Purpose:** 获取 `is activation requirements met` 的当前值。

### GetIsCompletionRequirementsMet
`public bool GetIsCompletionRequirementsMet()`

**用途 / Purpose:** 获取 `is completion requirements met` 的当前值。

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

**用途 / Purpose:** 获取 `current progress` 的当前值。

### GetTargets
`public abstract IMissionObjectiveTarget GetTargets()`

**用途 / Purpose:** 获取 `targets` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMissionObjective();
```

## 参见

- [完整类目录](../catalog)