---
title: "ArcherPosition"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArcherPosition`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArcherPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArcherPosition`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ArcherPosition.cs`

## 概述

`ArcherPosition` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `TacticalArcherPosition` | `public TacticalPosition TacticalArcherPosition { get; }` |
| `ConnectedSides` | `public int ConnectedSides { get; }` |

## 主要方法

### GetLastAssignedFormation
`public Formation GetLastAssignedFormation(int teamIndex)`

**用途 / Purpose:** 获取 `last assigned formation` 的当前值。

### IsArcherPositionRelatedToSide
`public bool IsArcherPositionRelatedToSide(FormationAI.BehaviorSide side)`

**用途 / Purpose:** 处理 `is archer position related to side` 相关逻辑。

### GetArcherPositionClosestSide
`public FormationAI.BehaviorSide GetArcherPositionClosestSide()`

**用途 / Purpose:** 获取 `archer position closest side` 的当前值。

### OnDeploymentFinished
`public void OnDeploymentFinished(SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### SetLastAssignedFormation
`public void SetLastAssignedFormation(int teamIndex, Formation formation)`

**用途 / Purpose:** 设置 `last assigned formation` 的值或状态。

## 使用示例

```csharp
var value = new ArcherPosition();
value.GetLastAssignedFormation(0);
```

## 参见

- [完整类目录](../catalog)