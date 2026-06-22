<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherRandomImageWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherRandomImageWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherRandomImageWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherRandomImageWidget.cs`

## 概述

`LauncherRandomImageWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageCount` | `public int ImageCount { get; set; }` |
| `ChangeTrigger` | `public bool ChangeTrigger { get; set; }` |

## 使用示例

```csharp
// LauncherRandomImageWidget (Widget) 的典型用法
// 声明/访问一个 LauncherRandomImageWidget
var widget = root.GetChild("launcherRandomImageWidget");;
```

## 参见

- [完整类目录](../catalog)