---
title: "EncyclopediaListSelectorVM"
description: "EncyclopediaListSelectorVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List, inheriting SelectorVM<EncyclopediaListSelectorItemVM>; 2 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSelectorVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaListSelectorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListSelectorVM : SelectorVM<EncyclopediaListSelectorItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSelectorVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaListSelectorVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSelectorVM.cs. It is a public class, implementing/inheriting SelectorVM<EncyclopediaListSelectorItemVM>; the inheritance chain is EncyclopediaListSelectorVM → SelectorVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListSelectorVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`, inheritance chain EncyclopediaListSelectorVM → SelectorVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSelectorVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaListSelectorVM` | `public EncyclopediaListSelectorVM(int selectedIndex, Action<SelectorVM<EncyclopediaListSelectorItemVM>>onChange, Action onActivate) : base(selectedIndex, onChange)` | constructor |
| `ExecuteOnDropdownActivated` | `public void ExecuteOnDropdownActivated()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SelectorVM](../SelectorVM__1/)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM/)
- [same namespace EncyclopediaListFilterVM](../EncyclopediaListFilterVM/)
- [same namespace EncyclopediaListItemComparer](../EncyclopediaListItemComparer/)
- [same namespace EncyclopediaListItemVM](../EncyclopediaListItemVM/)
