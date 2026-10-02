---
title: "ConversationItemVM"
description: "ConversationItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 13 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs."
---
# ConversationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ConversationItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs`

## Overview

ConversationItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ConversationItemVM → ViewModel. It exposes 13 public/protected members: 4 methods, 7 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Conversation) the module directory; inheritance chain ConversationItemVM → ViewModel. The surface is property-led (properties 7/13, methods 4/13), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM)
- [same namespace MissionConversationVM](../MissionConversationVM)
- [same namespace PersuasionOptionVM](../PersuasionOptionVM)
- [same namespace PersuasionVM](../PersuasionVM)
