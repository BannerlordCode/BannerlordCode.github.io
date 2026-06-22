<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerFactionBannerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerFactionBannerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerFactionBannerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerFactionBannerWidget.cs`

## 概述

`MultiplayerFactionBannerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `FactionCode` | `public string FactionCode { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |

## 使用示例

```csharp
// MultiplayerFactionBannerWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerFactionBannerWidget
var widget = root.GetChild("multiplayerFactionBannerWidget");;
```

## 参见

- [完整类目录](../catalog)