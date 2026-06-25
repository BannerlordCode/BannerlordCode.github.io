---
title: "ConversationViewEventHandler"
description: "ConversationViewEventHandler 的自动生成类参考。"
---
# ConversationViewEventHandler

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public class ConversationViewEventHandler : Attribute`
**Base:** `Attribute`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Conversation/ConversationViewEventHandler.cs`

## 概述

`ConversationViewEventHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `ConversationViewEventHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Type` | `public EventType Type { get; }` |

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<ConversationViewEventHandler>();
```

## 参见

- [本区域目录](../)