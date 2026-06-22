<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapInfoBarWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapInfoBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapInfoBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapInfoBarWidget.cs`

## 概述

`MapInfoBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |

## 主要方法

### MapBarExtendStateChangeEvent
```csharp
public delegate void MapBarExtendStateChangeEvent(bool newState)
```

## 使用示例

```csharp
// MapInfoBarWidget (Widget) 的典型用法
// 声明/访问一个 MapInfoBarWidget
var widget = root.GetChild("mapInfoBarWidget");;
```

## 参见

- [完整类目录](../catalog)