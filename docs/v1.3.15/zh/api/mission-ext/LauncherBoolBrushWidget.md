<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherBoolBrushWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherBoolBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherBoolBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs`

## 概述

`LauncherBoolBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BoolVariable` | `public bool BoolVariable { get; set; }` |
| `TargetWidget` | `public BrushWidget TargetWidget { get; set; }` |
| `OnTrueBrush` | `public Brush OnTrueBrush { get; set; }` |
| `OnFalseBrush` | `public Brush OnFalseBrush { get; set; }` |

## 使用示例

```csharp
// LauncherBoolBrushWidget (Widget) 的典型用法
// 声明/访问一个 LauncherBoolBrushWidget
var widget = root.GetChild("launcherBoolBrushWidget");;
```

## 参见

- [完整类目录](../catalog)