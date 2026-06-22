<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SortButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SortButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SortButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SortButtonWidget.cs`

## 概述

`SortButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SortState` | `public int SortState { get; set; }` |
| `SortVisualWidget` | `public BrushWidget SortVisualWidget { get; set; }` |

## 使用示例

```csharp
// SortButtonWidget (Widget) 的典型用法
// 声明/访问一个 SortButtonWidget
var widget = root.GetChild("sortButtonWidget");;
```

## 参见

- [完整类目录](../catalog)