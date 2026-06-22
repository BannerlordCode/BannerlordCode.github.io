<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompassElementWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompassElementWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassElementWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassElementWidget.cs`

## 概述

`CompassElementWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public float Position { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `FlagWidget` | `public Widget FlagWidget { get; set; }` |

## 使用示例

```csharp
// CompassElementWidget (Widget) 的典型用法
// 声明/访问一个 CompassElementWidget
var widget = root.GetChild("compassElementWidget");;
```

## 参见

- [完整类目录](../catalog)