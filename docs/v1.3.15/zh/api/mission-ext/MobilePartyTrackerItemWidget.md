<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyTrackerItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyTrackerItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MobilePartyTrackerItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs`

## 概述

`MobilePartyTrackerItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FrameVisualWidget` | `public Widget FrameVisualWidget { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `TrackerType` | `public string TrackerType { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `TrackerImageBrush` | `public Brush TrackerImageBrush { get; set; }` |

## 使用示例

```csharp
// MobilePartyTrackerItemWidget (Widget) 的典型用法
// 声明/访问一个 MobilePartyTrackerItemWidget
var widget = root.GetChild("mobilePartyTrackerItemWidget");;
```

## 参见

- [完整类目录](../catalog)