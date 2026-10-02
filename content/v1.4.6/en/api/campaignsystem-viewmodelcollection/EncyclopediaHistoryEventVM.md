---
title: "EncyclopediaHistoryEventVM"
description: "EncyclopediaHistoryEventVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EncyclopediaLinkVM; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs."
---
# EncyclopediaHistoryEventVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaHistoryEventVM : EncyclopediaLinkVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs`

## Overview

EncyclopediaHistoryEventVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs. It is a public class, implementing/inheriting EncyclopediaLinkVM; the inheritance chain is EncyclopediaHistoryEventVM → EncyclopediaLinkVM → ViewModel. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaHistoryEventVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items) the module directory; inheritance chain EncyclopediaHistoryEventVM → EncyclopediaLinkVM → ViewModel. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaHistoryEventVM` | `public EncyclopediaHistoryEventVM(IEncyclopediaLog log)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `HistoryEventTimeText` | `public string HistoryEventTimeText` | property |
| `HistoryEventText` | `public string HistoryEventText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaLinkVM](../EncyclopediaLinkVM)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM)
- [same namespace EncyclopediaFactionVM](../EncyclopediaFactionVM)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM)
- [same namespace EncyclopediaSettlementVM](../EncyclopediaSettlementVM)
