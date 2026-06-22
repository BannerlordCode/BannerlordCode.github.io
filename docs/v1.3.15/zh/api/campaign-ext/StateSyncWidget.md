<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StateSyncWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StateSyncWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StateSyncWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs`

## 概述

`StateSyncWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `SourceWidget` | `public Widget SourceWidget { get { return this._sourceWidget; }` |
| `TargetWidget` | `public Widget TargetWidget { get { return this._targetWidget; }` |

## 使用示例

```csharp
// StateSyncWidget (Widget) 的典型用法
// 声明/访问一个 StateSyncWidget
var widget = root.GetChild("stateSyncWidget");;
```

## 参见

- [完整类目录](../catalog)