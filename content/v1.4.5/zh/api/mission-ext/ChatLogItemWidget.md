---
title: "ChatLogItemWidget"
description: "ChatLogItemWidget 的自动生成类参考。"
---
# ChatLogItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/ChatLogItemWidget.cs`

## 概述

`ChatLogItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ChatLogItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OneLineTextWidget` | `public RichTextWidget OneLineTextWidget { get; set; }` |
| `CollapsableWidget` | `public ChatCollapsableListPanel CollapsableWidget { get; set; }` |
| `ChatLine` | `public string ChatLine { get; set; }` |
| `ChatLogWidget` | `public ChatLogWidget ChatLogWidget { get; set; }` |

## 主要方法

### ChatMultiLineElement
`public struct ChatMultiLineElement(string line, int identModifier)`

**用途 / Purpose:** 处理与 「chat multi line element」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ChatLogItemWidget 实例
ChatLogItemWidget chatLogItemWidget = ...;
var result = chatLogItemWidget.ChatMultiLineElement("example", 0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ChatLogItemWidget widget = ...;
```

## 参见

- [本区域目录](../)