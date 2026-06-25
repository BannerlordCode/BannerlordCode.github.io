---
title: "MultiplayerFactionBannerWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerFactionBannerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerFactionBannerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerFactionBannerWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerFactionBannerWidget.cs`

## 概述

`MultiplayerFactionBannerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerFactionBannerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `FactionCode` | `public string FactionCode { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |

## 主要方法

### MultiplayerFactionBannerWidget
`public class MultiplayerFactionBannerWidget(UIContext context)`

**用途 / Purpose:** 处理 `multiplayer faction banner widget` 相关逻辑。

## 使用示例

```csharp
var widget = new MultiplayerFactionBannerWidget(context);
```

## 参见

- [完整类目录](../catalog)