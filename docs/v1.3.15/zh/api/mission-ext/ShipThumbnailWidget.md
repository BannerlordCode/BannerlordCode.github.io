<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipThumbnailWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipThumbnailWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShipThumbnailWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ShipThumbnailWidget.cs`

## 概述

`ShipThumbnailWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PrefabId` | `public string PrefabId { get; set; }` |
| `SpriteBrush` | `public Brush SpriteBrush { get; set; }` |
| `StyleBrush` | `public Brush StyleBrush { get; set; }` |

## 使用示例

```csharp
// ShipThumbnailWidget (Widget) 的典型用法
// 声明/访问一个 ShipThumbnailWidget
var widget = root.GetChild("shipThumbnailWidget");;
```

## 参见

- [完整类目录](../catalog)