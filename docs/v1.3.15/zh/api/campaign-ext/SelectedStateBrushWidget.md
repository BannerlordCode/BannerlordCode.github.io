<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SelectedStateBrushWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectedStateBrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SelectedStateBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SelectedStateBrushWidget.cs`

## 概述

`SelectedStateBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedState` | `public string SelectedState { get { return this._selectedState; }` |

## 使用示例

```csharp
// SelectedStateBrushWidget (Widget) 的典型用法
// 声明/访问一个 SelectedStateBrushWidget
var widget = root.GetChild("selectedStateBrushWidget");;
```

## 参见

- [完整类目录](../catalog)