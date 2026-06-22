<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContainerPageControlButtonListWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerPageControlButtonListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContainerPageControlButtonListWidget : ContainerPageControlWidget`
**Base:** `ContainerPageControlWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlButtonListWidget.cs`

## 概述

`ContainerPageControlButtonListWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `PageButtonTemplate` | `public ButtonWidget PageButtonTemplate { get; set; }` |
| `FullButtonBrush` | `public string FullButtonBrush { get; set; }` |
| `EmptyButtonBrush` | `public string EmptyButtonBrush { get; set; }` |
| `PageButtonItemsListPanel` | `public ListPanel PageButtonItemsListPanel { get; set; }` |

## 使用示例

```csharp
// ContainerPageControlButtonListWidget (Widget) 的典型用法
// 声明/访问一个 ContainerPageControlButtonListWidget
var widget = root.GetChild("containerPageControlButtonListWidget");;
```

## 参见

- [完整类目录](../catalog)