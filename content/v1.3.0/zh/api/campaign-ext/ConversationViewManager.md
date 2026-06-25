---
title: "ConversationViewManager"
description: "ConversationViewManager 的自动生成类参考。"
---
# ConversationViewManager

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public class ConversationViewManager`
**Base:** 无
**File:** `SandBox.View/Conversation/ConversationViewManager.cs`

## 概述

`ConversationViewManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ConversationViewManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static ConversationViewManager Instance { get; }` |

## 使用示例

```csharp
var manager = ConversationViewManager.Current;
```

## 参见

- [本区域目录](../)