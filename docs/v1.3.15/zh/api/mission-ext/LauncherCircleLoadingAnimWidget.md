<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherCircleLoadingAnimWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherCircleLoadingAnimWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherCircleLoadingAnimWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherCircleLoadingAnimWidget.cs`

## 概述

`LauncherCircleLoadingAnimWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumOfCirclesInASecond` | `public float NumOfCirclesInASecond { get; set; }` |
| `NormalAlpha` | `public float NormalAlpha { get; set; }` |
| `FullAlpha` | `public float FullAlpha { get; set; }` |
| `CircleRadius` | `public float CircleRadius { get; set; }` |
| `StaySeconds` | `public float StaySeconds { get; set; }` |
| `IsMovementEnabled` | `public bool IsMovementEnabled { get; set; }` |
| `IsReverse` | `public bool IsReverse { get; set; }` |
| `FadeInSeconds` | `public float FadeInSeconds { get; set; }` |
| `FadeOutSeconds` | `public float FadeOutSeconds { get; set; }` |

## 使用示例

```csharp
// LauncherCircleLoadingAnimWidget (Widget) 的典型用法
// 声明/访问一个 LauncherCircleLoadingAnimWidget
var widget = root.GetChild("launcherCircleLoadingAnimWidget");;
```

## 参见

- [完整类目录](../catalog)