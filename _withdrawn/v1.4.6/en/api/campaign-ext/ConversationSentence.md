---
title: "ConversationSentence"
description: "ConversationSentence: a public class in TaleWorlds.CampaignSystem.Conversation; 36 exposed members (8 methods, 20 properties, 2 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationSentence

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ConversationSentence`
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Conversation)

## Overview

ConversationSentence lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs. It is a public class; the inheritance chain is ConversationSentence. It exposes 36 public/protected members: 8 methods, 20 properties, 2 fields, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationSentence lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Conversation`), namespace `TaleWorlds.CampaignSystem.Conversation`, inheritance chain ConversationSentence. The surface is property-led (properties 20/36, methods 8/36), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Conversation/ConversationSentence.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Text` | `public TextObject Text` | property |
| `Index` | `public int Index` | property |
| `Id` | `public string Id` | property |
| `IsPlayer` | `public bool IsPlayer` | property |
| `IsRepeatable` | `public bool IsRepeatable` | property |
| `IsSpecial` | `public bool IsSpecial` | property |
| `IsUsedOnce` | `public bool IsUsedOnce` | property |
| `Priority` | `public int Priority` | property |
| `InputToken` | `public int InputToken` | property |
| `OutputToken` | `public int OutputToken` | property |
| `RelatedObject` | `public object RelatedObject` | property |
| `IsWithVariation` | `public bool IsWithVariation` | property |
| `PersuationOptionArgs` | `public PersuasionOptionArgs PersuationOptionArgs` | property |
| `HasPersuasion` | `public bool HasPersuasion` | property |
| `SkillName` | `public string SkillName` | property |
| `TraitName` | `public string TraitName` | property |
| `Variation` | `public ConversationSentence Variation(params object[]list)` | method |
| `Deserialize` | `public void Deserialize(XmlNode node, Type typeOfConversationCallbacks, ConversationManager conversationManager, int defaultPriority)` | method |
| `CurrentProcessedRepeatObject` | `public static object CurrentProcessedRepeatObject` | property |
| `SelectedRepeatObject` | `public static object SelectedRepeatObject` | property |
| `SelectedRepeatLine` | `public static TextObject SelectedRepeatLine` | property |
| `SetObjectsToRepeatOver` | `public static void SetObjectsToRepeatOver(IReadOnlyList<object>objectsToRepeatOver, int maxRepeatedDialogsInConversation = 5)` | method |
| `DefaultPriority` | `public const int DefaultPriority` | field |
| `IsClickable` | `public bool IsClickable` | field |
| `DialogLineFlags` | `public enum DialogLineFlags` | property |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate();` | method |
| `OnClickableConditionDelegate` | `public delegate bool OnClickableConditionDelegate(out TextObject explanation);` | method |
| `OnPersuasionOptionDelegate` | `public delegate PersuasionOptionArgs OnPersuasionOptionDelegate();` | method |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate();` | method |
| `OnMultipleConversationConsequenceDelegate` | `public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent);` | method |
| `DialogLineFlags` | `public enum DialogLineFlags` | nested type |
| `OnConditionDelegate` | `public delegate bool OnConditionDelegate()` | nested type |
| `OnClickableConditionDelegate` | `public delegate bool OnClickableConditionDelegate(out TextObject explanation)` | nested type |
| `OnPersuasionOptionDelegate` | `public delegate PersuasionOptionArgs OnPersuasionOptionDelegate()` | nested type |
| `OnConsequenceDelegate` | `public delegate void OnConsequenceDelegate()` | nested type |
| `OnMultipleConversationConsequenceDelegate` | `public delegate bool OnMultipleConversationConsequenceDelegate(IAgent agent)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CampaignMapConversation](../CampaignMapConversation/)
- [same namespace ConversationAnimationManager](../ConversationAnimationManager/)
- [same namespace ConversationAnimData](../ConversationAnimData/)
- [same namespace ConversationCharacterData](../ConversationCharacterData/)
