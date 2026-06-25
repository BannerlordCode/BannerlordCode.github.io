---
title: "ConversationAnimationManager"
description: "ConversationAnimationManager 的自动生成类参考。"
---
# ConversationAnimationManager

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationAnimationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationAnimationManager.cs`

## 概述

`ConversationAnimationManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ConversationAnimationManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConversationAnims` | `public Dictionary<string, ConversationAnimData> ConversationAnims { get; }` |

## 使用示例

```csharp
var manager = ConversationAnimationManager.Current;
```

## 参见

- [本区域目录](../)