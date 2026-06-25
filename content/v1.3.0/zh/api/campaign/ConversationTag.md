---
title: "ConversationTag"
description: "ConversationTag 的自动生成类参考。"
---
# ConversationTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ConversationTag`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/Tags/ConversationTag.cs`

## 概述

`ConversationTag` 位于 `TaleWorlds.CampaignSystem.Conversation.Tags`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation.Tags` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringId` | `public abstract string StringId { get; }` |

## 主要方法

### IsApplicableTo
`public abstract bool IsApplicableTo(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 applicable to 状态或条件。

```csharp
// 先通过子系统 API 拿到 ConversationTag 实例
ConversationTag conversationTag = ...;
var result = conversationTag.IsApplicableTo(character);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 ConversationTag 实例
ConversationTag conversationTag = ...;
var result = conversationTag.ToString();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ConversationTag instance = ...;
```

## 参见

- [本区域目录](../)