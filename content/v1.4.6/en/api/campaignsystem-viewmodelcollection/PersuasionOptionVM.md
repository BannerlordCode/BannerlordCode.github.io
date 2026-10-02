---
title: "PersuasionOptionVM"
description: "PersuasionOptionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 22 exposed members (3 methods, 18 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs."
---
# PersuasionOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PersuasionOptionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs`

## Overview

PersuasionOptionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PersuasionOptionVM → ViewModel. It exposes 22 public/protected members: 3 methods, 18 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PersuasionOptionVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Conversation) the module directory; inheritance chain PersuasionOptionVM → ViewModel. The surface is property-led (properties 18/22, methods 3/22), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionOptionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PersuasionOptionVM` | `public PersuasionOptionVM(ConversationManager manager, int index, Action onReadyToContinue)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `GetPersuasionAdditionalText` | `public string GetPersuasionAdditionalText()` | method |
| `ExecuteReadyToContinue` | `public void ExecuteReadyToContinue()` | method |
| `IsPersuasionResultReady` | `public bool IsPersuasionResultReady` | property |
| `IsABlockingOption` | `public bool IsABlockingOption` | property |
| `IsAProgressingOption` | `public bool IsAProgressingOption` | property |
| `SuccessChance` | `public int SuccessChance` | property |
| `PersuasionResultIndex` | `public int PersuasionResultIndex` | property |
| `FailChance` | `public int FailChance` | property |
| `CritSuccessChance` | `public int CritSuccessChance` | property |
| `CritFailChance` | `public int CritFailChance` | property |
| `FailChanceText` | `public string FailChanceText` | property |
| `CritFailChanceText` | `public string CritFailChanceText` | property |
| `SuccessChanceText` | `public string SuccessChanceText` | property |
| `CritSuccessChanceText` | `public string CritSuccessChanceText` | property |
| `CritFailHint` | `public BasicTooltipViewModel CritFailHint` | property |
| `FailHint` | `public BasicTooltipViewModel FailHint` | property |
| `SuccessHint` | `public BasicTooltipViewModel SuccessHint` | property |
| `CritSuccessHint` | `public BasicTooltipViewModel CritSuccessHint` | property |
| `BlockingOptionHint` | `public HintViewModel BlockingOptionHint` | property |
| `ProgressingOptionHint` | `public HintViewModel ProgressingOptionHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM)
- [same namespace ConversationItemVM](../ConversationItemVM)
- [same namespace MissionConversationVM](../MissionConversationVM)
- [same namespace PersuasionVM](../PersuasionVM)
