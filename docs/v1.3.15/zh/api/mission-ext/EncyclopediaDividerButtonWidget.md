<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaDividerButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaDividerButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaDividerButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaDividerButtonWidget.cs`

## 概述

`EncyclopediaDividerButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemListWidget` | `public Widget ItemListWidget { get; set; }` |
| `CollapseIndicator` | `public Widget CollapseIndicator { get; set; }` |

## 使用示例

```csharp
// EncyclopediaDividerButtonWidget (Widget) 的典型用法
// 声明/访问一个 EncyclopediaDividerButtonWidget
var widget = root.GetChild("encyclopediaDividerButtonWidget");;
```

## 参见

- [完整类目录](../catalog)