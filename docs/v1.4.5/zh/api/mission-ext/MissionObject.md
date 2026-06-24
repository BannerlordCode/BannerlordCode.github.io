<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionObject`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObject.cs`

## 概述

`MissionObject` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public MissionObjectId Id { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `HitObjectName` | `public virtual TextObject HitObjectName { get; }` |

## 主要方法

### SetAbilityOfFaces
`public virtual void SetAbilityOfFaces(bool enabled)`

**用途 / Purpose:** 设置 `ability of faces` 的值或状态。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### AfterMissionStart
`public virtual void AfterMissionStart()`

**用途 / Purpose:** 处理 `after mission start` 相关逻辑。

### OnMissionEnded
`public virtual void OnMissionEnded()`

**用途 / Purpose:** 当 `mission ended` 事件触发时调用此方法。

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### SetEnabled
`public void SetEnabled(bool isParentObject = false)`

**用途 / Purpose:** 设置 `enabled` 的值或状态。

### SetEnabledAndMakeVisible
`public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)`

**用途 / Purpose:** 设置 `enabled and make visible` 的值或状态。

### SetDisabled
`public void SetDisabled(bool isParentObject = false)`

**用途 / Purpose:** 设置 `disabled` 的值或状态。

### SetDisabledAndMakeInvisible
`public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)`

**用途 / Purpose:** 设置 `disabled and make invisible` 的值或状态。

### OnEndMission
`public virtual void OnEndMission()`

**用途 / Purpose:** 当 `end mission` 事件触发时调用此方法。

### AddStuckMissile
`public virtual void AddStuckMissile(GameEntity missileEntity)`

**用途 / Purpose:** 向当前集合/状态中添加 `stuck missile`。

## 使用示例

```csharp
var implementation = new CustomMissionObject();
```

## 参见

- [完整类目录](../catalog)