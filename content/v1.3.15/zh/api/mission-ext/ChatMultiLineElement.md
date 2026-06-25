---
title: "ChatMultiLineElement"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChatMultiLineElement`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChatMultiLineElement

**命名空间:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct ChatMultiLineElement`
**领域:** mission-ext

## 概述

`ChatMultiLineElement` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OneLineTextWidget` | `public RichTextWidget OneLineTextWidget { get; set; }` |
| `CollapsableWidget` | `public ChatCollapsableListPanel CollapsableWidget { get; set; }` |
| `ChatLine` | `public string ChatLine { get; set; }` |
| `ChatLogWidget` | `public ChatLogWidget ChatLogWidget { get; set; }` |

## 使用示例

```csharp
var value = new ChatMultiLineElement();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
