<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SquareFormation`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SquareFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SquareFormation : LineFormation`
**Base:** `LineFormation`
**File:** `TaleWorlds.MountAndBlade/SquareFormation.cs`

## 概述

`SquareFormation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public override float Width { get; set; }` |
| `Depth` | `public override float Depth { get; }` |
| `MinimumWidth` | `public override float MinimumWidth { get; }` |
| `MaximumWidth` | `public override float MaximumWidth { get; }` |

## 主要方法

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### DeepCopyFrom
`public override void DeepCopyFrom(IFormationArrangement arrangement)`

**用途 / Purpose:** 处理 `deep copy from` 相关逻辑。

### FormFromBorderSideWidth
`public void FormFromBorderSideWidth(float borderSideWidth)`

**用途 / Purpose:** 处理 `form from border side width` 相关逻辑。

### FormFromBorderUnitCountPerSide
`public void FormFromBorderUnitCountPerSide(int unitCountPerSide)`

**用途 / Purpose:** 处理 `form from border unit count per side` 相关逻辑。

### GetUnitsPerSideFromRankCount
`public int GetUnitsPerSideFromRankCount(int rankCount)`

**用途 / Purpose:** 获取 `units per side from rank count` 的当前值。

### FormFromRankCount
`public void FormFromRankCount(int rankCount)`

**用途 / Purpose:** 处理 `form from rank count` 相关逻辑。

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** 获取 `local direction of unit or default` 的当前值。

### TurnBackwards
`public override void TurnBackwards()`

**用途 / Purpose:** 处理 `turn backwards` 相关逻辑。

## 使用示例

```csharp
var value = new SquareFormation();
value.Clone(formation);
```

## 参见

- [完整类目录](../catalog)