---
title: "ConversationSentence"
description: "ConversationSentence 的自动生成类参考。"
---
# ConversationSentence

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationSentence`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/ConversationSentence.cs`

## 概述

`ConversationSentence` 位于 `TaleWorlds.CampaignSystem.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Text` | `public TextObject Text { get; }` |
| `Index` | `public int Index { get; }` |
| `Id` | `public string Id { get; }` |
| `IsPlayer` | `public bool IsPlayer { get; set; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; set; }` |
| `IsSpecial` | `public bool IsSpecial { get; set; }` |
| `IsUsedOnce` | `public bool IsUsedOnce { get; }` |
| `Priority` | `public int Priority { get; }` |
| `InputToken` | `public int InputToken { get; }` |
| `OutputToken` | `public int OutputToken { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `IsWithVariation` | `public bool IsWithVariation { get; }` |
| `PersuationOptionArgs` | `public PersuasionOptionArgs PersuationOptionArgs { get; }` |
| `SkillName` | `public string SkillName { get; }` |
| `TraitName` | `public string TraitName { get; }` |

## 主要方法

### OnConditionDelegate
`public delegate bool OnConditionDelegate()`

**用途 / Purpose:** 在 condition delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationSentence 实例
ConversationSentence conversationSentence = ...;
var result = conversationSentence.OnConditionDelegate();
```

### OnClickableConditionDelegate
`public delegate bool OnClickableConditionDelegate(out TextObject explanation)`

**用途 / Purpose:** 在 clickable condition delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationSentence 实例
ConversationSentence conversationSentence = ...;
var result = conversationSentence.OnClickableConditionDelegate(explanation);
```

### OnPersuasionOptionDelegate
`public delegate PersuasionOptionArgs OnPersuasionOptionDelegate()`

**用途 / Purpose:** 在 persuasion option delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationSentence 实例
ConversationSentence conversationSentence = ...;
var result = conversationSentence.OnPersuasionOptionDelegate();
```

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate()`

**用途 / Purpose:** 在 consequence delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationSentence 实例
ConversationSentence conversationSentence = ...;
conversationSentence.OnConsequenceDelegate();
```

### OnMultipleConversationConsequenceDelegate
`public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent)`

**用途 / Purpose:** 在 multiple conversation consequence delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConversationSentence 实例
ConversationSentence conversationSentence = ...;
var result = conversationSentence.OnMultipleConversationConsequenceDelegate(agent);
```

### Variation
`public ConversationSentence Variation(params object list)`

**用途 / Purpose:** 调用 Variation 对应的操作。

```csharp
// 先通过子系统 API 拿到 ConversationSentence 实例
ConversationSentence conversationSentence = ...;
var result = conversationSentence.Variation(list);
```

### Deserialize
`public void Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conversationManager, int defaultPriority)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 ConversationSentence 实例
ConversationSentence conversationSentence = ...;
conversationSentence.Deserialize(node, typeOfConversationCallbacks, conversationManager, 0);
```

### SetObjectsToRepeatOver
`public static void SetObjectsToRepeatOver(IReadOnlyList<object> objectsToRepeatOver, int maxRepeatedDialogsInConversation = 5)`

**用途 / Purpose:** 为 objects to repeat over 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ConversationSentence.SetObjectsToRepeatOver(objectsToRepeatOver, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ConversationSentence conversationSentence = ...;
conversationSentence.OnConditionDelegate();
```

## 参见

- [本区域目录](../)