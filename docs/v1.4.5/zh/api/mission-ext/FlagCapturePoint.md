<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FlagCapturePoint`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FlagCapturePoint

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagCapturePoint : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/FlagCapturePoint.cs`

## 概述

`FlagCapturePoint` 位于 `TaleWorlds.MountAndBlade.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ResetPointAsServer
`public void ResetPointAsServer(uint defaultColor, uint defaultColor2)`

**用途 / Purpose:** 将 `point as server` 重置为初始状态。

### RemovePointAsServer
`public void RemovePointAsServer()`

**用途 / Purpose:** 从当前集合/状态中移除 `point as server`。

### OnAfterTick
`public void OnAfterTick(bool canOwnershipChange, out bool ownerTeamChanged)`

**用途 / Purpose:** 当 `after tick` 事件触发时调用此方法。

### SetMoveFlag
`public void SetMoveFlag(CaptureTheFlagFlagDirection directionTo, float speedMultiplier = 1f)`

**用途 / Purpose:** 设置 `move flag` 的值或状态。

### ChangeMovementSpeed
`public void ChangeMovementSpeed(float speedMultiplier)`

**用途 / Purpose:** 处理 `change movement speed` 相关逻辑。

### SetMoveNone
`public void SetMoveNone()`

**用途 / Purpose:** 设置 `move none` 的值或状态。

### SetVisibleWithAllSynched
`public void SetVisibleWithAllSynched(bool value, bool forceChildrenVisible = false)`

**用途 / Purpose:** 设置 `visible with all synched` 的值或状态。

### SetTeamColorsWithAllSynched
`public void SetTeamColorsWithAllSynched(uint color, uint color2)`

**用途 / Purpose:** 设置 `team colors with all synched` 的值或状态。

### GetFlagColor
`public uint GetFlagColor()`

**用途 / Purpose:** 获取 `flag color` 的当前值。

### GetFlagColor2
`public uint GetFlagColor2()`

**用途 / Purpose:** 获取 `flag color2` 的当前值。

### GetFlagProgress
`public float GetFlagProgress()`

**用途 / Purpose:** 获取 `flag progress` 的当前值。

## 使用示例

```csharp
var value = new FlagCapturePoint();
value.ResetPointAsServer(0, 0);
```

## 参见

- [完整类目录](../catalog)