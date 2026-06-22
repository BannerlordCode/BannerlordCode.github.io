<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoolBrushChangerBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoolBrushChangerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoolBrushChangerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BoolBrushChangerBrushWidget.cs`

## 概述

`BoolBrushChangerBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BooleanCheck` | `public bool BooleanCheck { get; set; }` |
| `TrueBrush` | `public string TrueBrush { get; set; }` |
| `FalseBrush` | `public string FalseBrush { get; set; }` |
| `TargetWidget` | `public BrushWidget TargetWidget { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |

## 使用示例

```csharp
// BoolBrushChangerBrushWidget (Widget) 的典型用法
// 声明/访问一个 BoolBrushChangerBrushWidget
var widget = root.GetChild("boolBrushChangerBrushWidget");;
```

## 参见

- [完整类目录](../catalog)