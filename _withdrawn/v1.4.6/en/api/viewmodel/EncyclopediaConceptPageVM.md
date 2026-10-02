---
title: "EncyclopediaConceptPageVM"
description: "EncyclopediaConceptPageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages, inheriting EncyclopediaContentPageVM; 9 exposed members (6 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaConceptPageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaConceptPageVM : EncyclopediaContentPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaConceptPageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs. It is a public class, implementing/inheriting EncyclopediaContentPageVM; the inheritance chain is EncyclopediaConceptPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaConceptPageVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`, inheritance chain EncyclopediaConceptPageVM → EncyclopediaContentPageVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Pages/EncyclopediaConceptPageVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [same namespace EncyclopediaClanPageVM](../EncyclopediaClanPageVM/)
- [same namespace EncyclopediaContentPageVM](../EncyclopediaContentPageVM/)
- [same namespace EncyclopediaFactionPageVM](../EncyclopediaFactionPageVM/)
- [same namespace EncyclopediaHeroPageVM](../EncyclopediaHeroPageVM/)
