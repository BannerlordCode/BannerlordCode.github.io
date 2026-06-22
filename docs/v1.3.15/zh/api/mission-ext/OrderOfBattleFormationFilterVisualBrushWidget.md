<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleFormationFilterVisualBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationFilterVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationFilterVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationFilterVisualBrushWidget.cs`

## 概述

`OrderOfBattleFormationFilterVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FormationFilter` | `public int FormationFilter { get; set; }` |
| `UnsetBrush` | `public Brush UnsetBrush { get; set; }` |
| `SpearBrush` | `public Brush SpearBrush { get; set; }` |
| `ShieldBrush` | `public Brush ShieldBrush { get; set; }` |
| `ThrownBrush` | `public Brush ThrownBrush { get; set; }` |
| `HeavyBrush` | `public Brush HeavyBrush { get; set; }` |
| `HighTierBrush` | `public Brush HighTierBrush { get; set; }` |
| `LowTierBrush` | `public Brush LowTierBrush { get; set; }` |

## 使用示例

```csharp
// OrderOfBattleFormationFilterVisualBrushWidget (Widget) 的典型用法
// 声明/访问一个 OrderOfBattleFormationFilterVisualBrushWidget
var widget = root.GetChild("orderOfBattleFormationFilterVisualBrushWidget");;
```

## 参见

- [完整类目录](../catalog)