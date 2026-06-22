<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleHeroDragWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleHeroDragWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroDragWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDragWidget.cs`

## 概述

`OrderOfBattleHeroDragWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `StackCount` | `public int StackCount { get; set; }` |
| `StackDragWidget` | `public BrushWidget StackDragWidget { get; set; }` |
| `StackThumbnailWidget` | `public ImageIdentifierWidget StackThumbnailWidget { get; set; }` |
| `InnerBrushName` | `public string InnerBrushName { get; set; }` |

## 使用示例

```csharp
// OrderOfBattleHeroDragWidget (Widget) 的典型用法
// 声明/访问一个 OrderOfBattleHeroDragWidget
var widget = root.GetChild("orderOfBattleHeroDragWidget");;
```

## 参见

- [完整类目录](../catalog)