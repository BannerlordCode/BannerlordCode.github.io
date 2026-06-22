<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuTroopSelectionItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuTroopSelectionItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuTroopSelectionItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuTroopSelectionItemButtonWidget.cs`

## 概述

`GameMenuTroopSelectionItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AddButtonWidget` | `public ButtonWidget AddButtonWidget { get; set; }` |
| `RemoveButtonWidget` | `public ButtonWidget RemoveButtonWidget { get; set; }` |
| `CheckmarkVisualWidget` | `public Widget CheckmarkVisualWidget { get; set; }` |
| `AddRemoveControls` | `public Widget AddRemoveControls { get; set; }` |
| `HeroHealthParent` | `public Widget HeroHealthParent { get; set; }` |
| `IsRosterFull` | `public bool IsRosterFull { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsTroopHero` | `public bool IsTroopHero { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |

## 使用示例

```csharp
// GameMenuTroopSelectionItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 GameMenuTroopSelectionItemButtonWidget
var widget = root.GetChild("gameMenuTroopSelectionItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)