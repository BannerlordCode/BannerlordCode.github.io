---
title: "EncyclopediaConceptPageVM"
description: "EncyclopediaConceptPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EncyclopediaContentPageVM; 9 exposed members (6 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs."
---
# EncyclopediaConceptPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaConceptPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs`

## Overview

EncyclopediaConceptPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs. It is a public class, implementing/inheriting EncyclopediaContentPageVM; the inheritance chain is EncyclopediaConceptPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaConceptPageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages) the module directory; inheritance chain EncyclopediaConceptPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaConceptPageVM` | `public EncyclopediaConceptPageVM(EncyclopediaPageArgs args) : base(args)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Refresh` | `public override void Refresh()` | method |
| `GetName` | `public override string GetName()` | method |
| `ExecuteLink` | `public void ExecuteLink(string link)` | method |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | method |
| `ExecuteSwitchBookmarkedState` | `public override void ExecuteSwitchBookmarkedState()` | method |
| `TitleText` | `public string TitleText` | property |
| `DescriptionText` | `public string DescriptionText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaClanPageVM](../EncyclopediaClanPageVM)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM)
- [same namespace EncyclopediaHeroPageVM](../EncyclopediaHeroPageVM)
