<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WallSegment`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WallSegment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WallSegment : SynchedMissionObject, IPointDefendable, ICastleKeyPosition`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/WallSegment.cs`

## 概述

`WallSegment` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MiddlePosition` | `public TacticalPosition MiddlePosition { get; }` |
| `WaitPosition` | `public TacticalPosition WaitPosition { get; }` |
| `AttackerWaitPosition` | `public TacticalPosition AttackerWaitPosition { get; }` |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon { get; }` |
| `DefencePoints` | `public IEnumerable<DefencePoint> DefencePoints { get; }` |
| `IsBreachedWall` | `public bool IsBreachedWall { get; }` |
| `MiddleFrame` | `public WorldFrame MiddleFrame { get; }` |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame { get; }` |
| `AttackerWaitFrame` | `public WorldFrame AttackerWaitFrame { get; }` |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide { get; }` |

## 主要方法

### GetPosition
`public Vec3 GetPosition()`

**用途 / Purpose:** 获取 `position` 的当前值。

### OnChooseUsedWallSegment
`public void OnChooseUsedWallSegment(bool isBroken)`

**用途 / Purpose:** 当 `choose used wall segment` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new WallSegment();
value.GetPosition();
```

## 参见

- [完整类目录](../catalog)