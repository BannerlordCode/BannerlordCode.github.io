<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleFormationClassBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationClassBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationClassBrushWidget.cs`

## 概述

`OrderOfBattleFormationClassBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FormationClass` | `public int FormationClass { get; set; }` |
| `ErroredColor` | `public Color ErroredColor { get; set; }` |
| `IsErrored` | `public bool IsErrored { get; set; }` |
| `UnsetBrush` | `public Brush UnsetBrush { get; set; }` |
| `InfantryBrush` | `public Brush InfantryBrush { get; set; }` |
| `RangedBrush` | `public Brush RangedBrush { get; set; }` |
| `CavalryBrush` | `public Brush CavalryBrush { get; set; }` |
| `HorseArcherBrush` | `public Brush HorseArcherBrush { get; set; }` |
| `InfantryAndRangedBrush` | `public Brush InfantryAndRangedBrush { get; set; }` |
| `CavalryAndHorseArcherBrush` | `public Brush CavalryAndHorseArcherBrush { get; set; }` |

## 使用示例

```csharp
// OrderOfBattleFormationClassBrushWidget (Widget) 的典型用法
// 声明/访问一个 OrderOfBattleFormationClassBrushWidget
var widget = root.GetChild("orderOfBattleFormationClassBrushWidget");;
```

## 参见

- [完整类目录](../catalog)