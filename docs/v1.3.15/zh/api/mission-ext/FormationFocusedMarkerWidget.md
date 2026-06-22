<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationFocusedMarkerWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationFocusedMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationFocusedMarkerWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FormationFocusedMarkerWidget.cs`

## 概述

`FormationFocusedMarkerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NormalSize` | `public int NormalSize { get; set; }` |
| `FocusedSize` | `public int FocusedSize { get; set; }` |
| `IsCenterOfFocus` | `public bool IsCenterOfFocus { get; set; }` |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant { get; set; }` |
| `IsTargetingAFormation` | `public bool IsTargetingAFormation { get; set; }` |

## 使用示例

```csharp
// FormationFocusedMarkerWidget (Widget) 的典型用法
// 声明/访问一个 FormationFocusedMarkerWidget
var widget = root.GetChild("formationFocusedMarkerWidget");;
```

## 参见

- [完整类目录](../catalog)