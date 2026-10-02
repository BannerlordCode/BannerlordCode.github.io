---
title: "ConversationItemVM"
description: "ConversationItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Conversation, inheriting ViewModel; 13 exposed members (4 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ConversationItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ConversationItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ConversationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 4 methods, 7 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`, inheritance chain ConversationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/13, methods 4/13), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ConversationItemVM` | `public ConversationItemVM(Action<int>action, Action onReadyToContinue, Action<ConversationItemVM>setCurrentAnswer, int index)` | constructor |
| `ConversationItemVM` | `public ConversationItemVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `SetCurrentAnswer` | `public void SetCurrentAnswer()` | method |
| `ResetCurrentAnswer` | `public void ResetCurrentAnswer()` | method |
| `PersuasionItem` | `public PersuasionOptionVM PersuasionItem` | property |
| `HasPersuasion` | `public bool HasPersuasion` | property |
| `IconType` | `public int IconType` | property |
| `OptionHint` | `public HintViewModel OptionHint` | property |
| `ItemText` | `public string ItemText` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsSpecial` | `public bool IsSpecial` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM/)
- [same namespace MissionConversationVM](../MissionConversationVM/)
- [same namespace PersuasionOptionVM](../PersuasionOptionVM/)
- [same namespace PersuasionVM](../PersuasionVM/)
