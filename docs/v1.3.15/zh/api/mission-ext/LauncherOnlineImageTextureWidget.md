<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherOnlineImageTextureWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherOnlineImageTextureWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherOnlineImageTextureWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherOnlineImageTextureWidget.cs`

## 概述

`LauncherOnlineImageTextureWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ImageSizePolicy` | `public LauncherOnlineImageTextureWidget.ImageSizePolicies ImageSizePolicy { get; set; }` |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl { get; set; }` |

## 使用示例

```csharp
// LauncherOnlineImageTextureWidget (Widget) 的典型用法
// 声明/访问一个 LauncherOnlineImageTextureWidget
var widget = root.GetChild("launcherOnlineImageTextureWidget");;
```

## 参见

- [完整类目录](../catalog)