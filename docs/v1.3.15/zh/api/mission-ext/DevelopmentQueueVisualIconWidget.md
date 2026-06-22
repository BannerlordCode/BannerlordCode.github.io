<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DevelopmentQueueVisualIconWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentQueueVisualIconWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentQueueVisualIconWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentQueueVisualIconWidget.cs`

## 概述

`DevelopmentQueueVisualIconWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `QueueIconWidget` | `public Widget QueueIconWidget { get; set; }` |
| `InProgressIconWidget` | `public BrushWidget InProgressIconWidget { get; set; }` |

## 使用示例

```csharp
// DevelopmentQueueVisualIconWidget (Widget) 的典型用法
// 声明/访问一个 DevelopmentQueueVisualIconWidget
var widget = root.GetChild("developmentQueueVisualIconWidget");;
```

## 参见

- [完整类目录](../catalog)