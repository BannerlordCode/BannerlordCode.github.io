---
title: "EncyclopediaFactionVM"
description: "EncyclopediaFactionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 9 exposed members (4 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs."
---
# EncyclopediaFactionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaFactionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs`

## Overview

EncyclopediaFactionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaFactionVM → ViewModel. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaFactionVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items) the module directory; inheritance chain EncyclopediaFactionVM → ViewModel. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFactionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Faction` | `public IFaction Faction` | property |
| `EncyclopediaFactionVM` | `public EncyclopediaFactionVM(IFaction faction)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | method |
| `ImageIdentifier` | `public BannerImageIdentifierVM ImageIdentifier` | property |
| `NameText` | `public string NameText` | property |
| `IsDestroyed` | `public bool IsDestroyed` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM)
- [same namespace EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM)
- [same namespace EncyclopediaSettlementVM](../EncyclopediaSettlementVM)
