<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyOverlayWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyOverlayWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayWidget : OverlayBaseWidget`
**Base:** `OverlayBaseWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs`

## 概述

`ArmyOverlayWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Overlay` | `public Widget Overlay { get; set; }` |
| `ArmyListGridWidget` | `public GridWidget ArmyListGridWidget { get; set; }` |
| `ExtendButton` | `public ButtonWidget ExtendButton { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `PageControlWidget` | `public ContainerPageControlWidget PageControlWidget { get; set; }` |

## 使用示例

```csharp
// ArmyOverlayWidget (Widget) 的典型用法
// 声明/访问一个 ArmyOverlayWidget
var widget = root.GetChild("armyOverlayWidget");;
```

## 参见

- [完整类目录](../catalog)