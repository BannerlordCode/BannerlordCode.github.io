<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OverlayBaseWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OverlayBaseWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OverlayBaseWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayBaseWidget.cs`

## 概述

`OverlayBaseWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PopupWidget` | `public OverlayPopupWidget PopupWidget { get; set; }` |

## 使用示例

```csharp
// OverlayBaseWidget (Widget) 的典型用法
// 声明/访问一个 OverlayBaseWidget
var widget = root.GetChild("overlayBaseWidget");;
```

## 参见

- [完整类目录](../catalog)