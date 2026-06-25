---
title: "ImageSizePolicies"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ImageSizePolicies`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ImageSizePolicies

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum ImageSizePolicies`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets/LauncherOnlineImageTextureWidget.cs`

## 概述

`ImageSizePolicies` 位于 `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 使用示例

```csharp
ImageSizePolicies example = ImageSizePolicies.Value;
```

## 参见

- [完整类目录](../catalog)