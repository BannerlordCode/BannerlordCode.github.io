---
title: "PersuasionVM"
description: "PersuasionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 14 exposed members (4 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs."
---
# PersuasionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PersuasionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs`

## Overview

PersuasionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PersuasionVM → ViewModel. It exposes 14 public/protected members: 4 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PersuasionVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Conversation) the module directory; inheritance chain PersuasionVM → ViewModel. The surface is property-led (properties 9/14, methods 4/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PersuasionVM` | `public PersuasionVM(ConversationManager manager)` | constructor |
| `OnPersuasionProgress` | `public void OnPersuasionProgress(Tuple<PersuasionOptionArgs, PersuasionOptionResult>selectedOption)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetCurrentOption` | `public void SetCurrentOption(PersuasionOptionVM option)` | method |
| `RefreshPersusasion` | `public void RefreshPersusasion()` | method |
| `PersuasionHint` | `public BasicTooltipViewModel PersuasionHint` | property |
| `ProgressText` | `public string ProgressText` | property |
| `MBBindingList` | `public MBBindingList<BoolItemWithActionVM>PersuasionProgress` | property |
| `IsPersuasionActive` | `public bool IsPersuasionActive` | property |
| `CurrentSuccessChance` | `public int CurrentSuccessChance` | property |
| `CurrentPersuasionOption` | `public PersuasionOptionVM CurrentPersuasionOption` | property |
| `CurrentFailChance` | `public int CurrentFailChance` | property |
| `CurrentCritSuccessChance` | `public int CurrentCritSuccessChance` | property |
| `CurrentCritFailChance` | `public int CurrentCritFailChance` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM)
- [same namespace ConversationItemVM](../ConversationItemVM)
- [same namespace MissionConversationVM](../MissionConversationVM)
- [same namespace PersuasionOptionVM](../PersuasionOptionVM)
