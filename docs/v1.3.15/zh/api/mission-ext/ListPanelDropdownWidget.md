<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ListPanelDropdownWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ListPanelDropdownWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ListPanelDropdownWidget : DropdownWidget`
**Base:** `DropdownWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ListPanelDropdownWidget.cs`

## 概述

`ListPanelDropdownWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ListPanelContainer` | `public Widget ListPanelContainer { get; set; }` |

## 使用示例

```csharp
// ListPanelDropdownWidget (Widget) 的典型用法
// 声明/访问一个 ListPanelDropdownWidget
var widget = root.GetChild("listPanelDropdownWidget");;
```

## 参见

- [完整类目录](../catalog)