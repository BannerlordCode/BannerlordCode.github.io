<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TacticalPosition`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticalPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticalPosition : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/TacticalPosition.cs`

## 概述

`TacticalPosition` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public WorldPosition Position { get; set; }` |
| `Direction` | `public Vec2 Direction { get; set; }` |
| `Width` | `public float Width { get; }` |
| `Slope` | `public float Slope { get; }` |
| `IsInsurmountable` | `public bool IsInsurmountable { get; }` |
| `IsOuterEdge` | `public bool IsOuterEdge { get; set; }` |
| `LinkedTacticalPositions` | `public List<TacticalPosition> LinkedTacticalPositions { get; set; }` |
| `TacticalPositionType` | `public TacticalPosition.TacticalPositionTypeEnum TacticalPositionType { get; }` |
| `TacticalRegionMembership` | `public TacticalRegion.TacticalRegionTypeEnum TacticalRegionMembership { get; }` |
| `TacticalPositionSide` | `public FormationAI.BehaviorSide TacticalPositionSide { get; }` |

## 主要方法

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 处理 `after mission start` 相关逻辑。

### SetWidth
`public void SetWidth(float width)`

**用途 / Purpose:** 设置 `width` 的值或状态。

## 使用示例

```csharp
var value = new TacticalPosition();
value.AfterMissionStart();
```

## 参见

- [完整类目录](../catalog)