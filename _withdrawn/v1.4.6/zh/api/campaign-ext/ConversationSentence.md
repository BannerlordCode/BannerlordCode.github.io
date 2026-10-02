---
title: "ConversationSentence"
description: "ConversationSentence：TaleWorlds.CampaignSystem.Conversation 的 public 类；公开成员 36 个（方法 8、属性 20、字段 2）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationSentence

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ConversationSentence`
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Conversation)

## 概述

ConversationSentence 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs。它是一个 public 类，继承链为 ConversationSentence。public/protected 成员共 36 个：8 方法、20 属性、2 字段、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConversationSentence 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.Conversation`），命名空间 `TaleWorlds.CampaignSystem.Conversation`，继承链 ConversationSentence。成员构成以属性为主（属性 20/36，方法 8/36），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Text` | `public TextObject Text` | 属性 |
| `Index` | `public int Index` | 属性 |
| `Id` | `public string Id` | 属性 |
| `IsPlayer` | `public bool IsPlayer` | 属性 |
| `IsRepeatable` | `public bool IsRepeatable` | 属性 |
| `IsSpecial` | `public bool IsSpecial` | 属性 |
| `IsUsedOnce` | `public bool IsUsedOnce` | 属性 |
| `Priority` | `public int Priority` | 属性 |
| `InputToken` | `public int InputToken` | 属性 |
| `OutputToken` | `public int OutputToken` | 属性 |
| `RelatedObject` | `public object RelatedObject` | 属性 |
| `IsWithVariation` | `public bool IsWithVariation` | 属性 |
| `PersuationOptionArgs` | `public PersuasionOptionArgs PersuationOptionArgs` | 属性 |
| `HasPersuasion` | `public bool HasPersuasion` | 属性 |
| `SkillName` | `public string SkillName` | 属性 |
| `TraitName` | `public string TraitName` | 属性 |
| `Variation` | `public ConversationSentence Variation(params object[]list)` | 方法 |
| `Deserialize` | `public void Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conversationManager, int defaultPriority)` | 方法 |
| `CurrentProcessedRepeatObject` | `public static object CurrentProcessedRepeatObject` | 属性 |
| `SelectedRepeatObject` | `public static object SelectedRepeatObject` | 属性 |
| `SelectedRepeatLine` | `public static TextObject SelectedRepeatLine` | 属性 |
| `SetObjectsToRepeatOver` | `public static void SetObjectsToRepeatOver(IReadOnlyList<object>objectsToRepeatOver, int maxRepeatedDialogsInConversation = 5)` | 方法 |
| `DefaultPriority` | `public const int DefaultPriority` | 字段 |
| `IsClickable` | `public bool IsClickable` | 字段 |
| `DialogLineFlags` | `public enum DialogLineFlags` | 属性 |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate();` | 方法 |
| `OnClickableConditionDelegate` | `public delegate bool OnClickableConditionDelegate(out TextObject explanation);` | 方法 |
| `OnPersuasionOptionDelegate` | `public delegate PersuasionOptionArgs OnPersuasionOptionDelegate();` | 方法 |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate();` | 方法 |
| `OnMultipleConversationConsequenceDelegate` | `public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent);` | 方法 |
| `DialogLineFlags` | `public enum DialogLineFlags` | 嵌套类型 |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate()` | 嵌套类型 |
| `OnClickableConditionDelegate` | `public delegate bool OnClickableConditionDelegate(out TextObject explanation)` | 嵌套类型 |
| `OnPersuasionOptionDelegate` | `public delegate PersuasionOptionArgs OnPersuasionOptionDelegate()` | 嵌套类型 |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate()` | 嵌套类型 |
| `OnMultipleConversationConsequenceDelegate` | `public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CampaignMapConversation](../CampaignMapConversation/)
- [同命名空间 ConversationAnimationManager](../ConversationAnimationManager/)
- [同命名空间 ConversationAnimData](../ConversationAnimData/)
- [同命名空间 ConversationCharacterData](../ConversationCharacterData/)
