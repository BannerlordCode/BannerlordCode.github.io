---
title: "ChatLogWidget"
description: "ChatLogWidget 的自动生成类参考。"
---
# ChatLogWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/ChatLogWidget.cs`

## 概述

`ChatLogWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ChatLogWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsChatDisabled` | `public bool IsChatDisabled { get; set; }` |
| `FinishedResizing` | `public bool FinishedResizing { get; set; }` |
| `FullyShowChat` | `public bool FullyShowChat { get; set; }` |
| `FullyShowChatWithTyping` | `public bool FullyShowChatWithTyping { get; set; }` |
| `TextInputWidget` | `public EditableTextWidget TextInputWidget { get; set; }` |
| `Scrollbar` | `public ScrollbarWidget Scrollbar { get; set; }` |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel { get; set; }` |
| `ResizerWidget` | `public Widget ResizerWidget { get; set; }` |
| `ResizeFrameWidget` | `public Widget ResizeFrameWidget { get; set; }` |
| `SizeX` | `public float SizeX { get; set; }` |
| `SizeY` | `public float SizeY { get; set; }` |
| `MessageHistoryList` | `public ListPanel MessageHistoryList { get; set; }` |
| `IsMPChatLog` | `public bool IsMPChatLog { get; set; }` |

## 主要方法

### RegisterMultiLineElement
`public void RegisterMultiLineElement(ChatCollapsableListPanel element)`

**用途 / Purpose:** 将「multi line element」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ChatLogWidget 实例
ChatLogWidget chatLogWidget = ...;
chatLogWidget.RegisterMultiLineElement(element);
```

### RemoveMultiLineElement
`public void RemoveMultiLineElement(ChatCollapsableListPanel element)`

**用途 / Purpose:** 从当前容器或状态中移除 「multi line element」。

```csharp
// 先通过子系统 API 拿到 ChatLogWidget 实例
ChatLogWidget chatLogWidget = ...;
chatLogWidget.RemoveMultiLineElement(element);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ChatLogWidget widget = ...;
```

## 参见

- [本区域目录](../)