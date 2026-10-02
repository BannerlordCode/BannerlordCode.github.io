---
title: "PersuasionVM"
description: "PersuasionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Conversation, inheriting ViewModel; 14 exposed members (4 methods, 9 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PersuasionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PersuasionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PersuasionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PersuasionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 4 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PersuasionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`, inheritance chain PersuasionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/14, methods 4/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/PersuasionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ConversationAggressivePartyItemVM](../ConversationAggressivePartyItemVM/)
- [same namespace ConversationItemVM](../ConversationItemVM/)
- [same namespace MissionConversationVM](../MissionConversationVM/)
- [same namespace PersuasionOptionVM](../PersuasionOptionVM/)
