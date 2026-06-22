<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherHintWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherHintWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherHintWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherHintWidget.cs`

## 概述

`LauncherHintWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |

## 使用示例

```csharp
// LauncherHintWidget (Widget) 的典型用法
// 声明/访问一个 LauncherHintWidget
var widget = root.GetChild("launcherHintWidget");;
```

## 参见

- [完整类目录](../catalog)