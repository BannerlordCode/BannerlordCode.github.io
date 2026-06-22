<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapCurrentTimeVisualWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapCurrentTimeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapCurrentTimeVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapCurrentTimeVisualWidget.cs`

## 概述

`MapCurrentTimeVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentTimeState` | `public int CurrentTimeState { get; set; }` |
| `FastForwardButton` | `public ButtonWidget FastForwardButton { get; set; }` |
| `PlayButton` | `public ButtonWidget PlayButton { get; set; }` |
| `PauseButton` | `public ButtonWidget PauseButton { get; set; }` |

## 使用示例

```csharp
// MapCurrentTimeVisualWidget (Widget) 的典型用法
// 声明/访问一个 MapCurrentTimeVisualWidget
var widget = root.GetChild("mapCurrentTimeVisualWidget");;
```

## 参见

- [完整类目录](../catalog)