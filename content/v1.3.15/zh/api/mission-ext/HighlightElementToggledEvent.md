---
title: "HighlightElementToggledEvent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HighlightElementToggledEvent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HighlightElementToggledEvent

**命名空间:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class HighlightElementToggledEvent : EventBase`
**Base:** `EventBase`
**领域:** mission-ext

## 概述

`HighlightElementToggledEvent` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomSizeSyncTarget` | `public Widget CustomSizeSyncTarget { get; set; }` |
| `DoNotOverrideWidth` | `public bool DoNotOverrideWidth { get; set; }` |
| `DoNotOverrideHeight` | `public bool DoNotOverrideHeight { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `HighlightFrameWidget` | `public TutorialHighlightItemBrushWidget HighlightFrameWidget { get; }` |

## 使用示例

```csharp
var value = new HighlightElementToggledEvent();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
