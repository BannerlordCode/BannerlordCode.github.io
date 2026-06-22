<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherNewsWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherNewsWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherNewsWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherNewsWidget.cs`

## 概述

`LauncherNewsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `TimeToShowNewsItemInSeconds` | `public float TimeToShowNewsItemInSeconds { get; set; }` |
| `RadioButtonContainer` | `public ListPanel RadioButtonContainer { get; set; }` |
| `TimeLeftFillWidget` | `public Widget TimeLeftFillWidget { get; set; }` |

## 使用示例

```csharp
// LauncherNewsWidget (Widget) 的典型用法
// 声明/访问一个 LauncherNewsWidget
var widget = root.GetChild("launcherNewsWidget");;
```

## 参见

- [完整类目录](../catalog)