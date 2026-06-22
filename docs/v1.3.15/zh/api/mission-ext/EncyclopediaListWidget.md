<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaListWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListWidget.cs`

## 概述

`EncyclopediaListWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `ItemList` | `public ListPanel ItemList { get; set; }` |
| `ItemListScroll` | `public ScrollbarWidget ItemListScroll { get; set; }` |

## 使用示例

```csharp
// EncyclopediaListWidget (Widget) 的典型用法
// 声明/访问一个 EncyclopediaListWidget
var widget = root.GetChild("encyclopediaListWidget");;
```

## 参见

- [完整类目录](../catalog)