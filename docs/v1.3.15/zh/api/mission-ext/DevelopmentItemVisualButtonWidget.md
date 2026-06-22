<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DevelopmentItemVisualButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentItemVisualButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentItemVisualButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentItemVisualButtonWidget.cs`

## 概述

`DevelopmentItemVisualButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `UseSmallVariant` | `public bool UseSmallVariant { get; set; }` |
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `SpriteCode` | `public string SpriteCode { get; set; }` |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget { get; set; }` |

## 使用示例

```csharp
// DevelopmentItemVisualButtonWidget (Widget) 的典型用法
// 声明/访问一个 DevelopmentItemVisualButtonWidget
var widget = root.GetChild("developmentItemVisualButtonWidget");;
```

## 参见

- [完整类目录](../catalog)