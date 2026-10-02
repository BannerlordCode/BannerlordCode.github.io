---
title: "EncyclopediaListSelectorVM"
description: "EncyclopediaListSelectorVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting SelectorVM<EncyclopediaListSelectorItemVM>; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSelectorVM.cs."
---
# EncyclopediaListSelectorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListSelectorVM : SelectorVM<EncyclopediaListSelectorItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSelectorVM.cs`

## Overview

EncyclopediaListSelectorVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSelectorVM.cs. It is a public class, implementing/inheriting SelectorVM<EncyclopediaListSelectorItemVM>; the inheritance chain is EncyclopediaListSelectorVM → SelectorVM. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListSelectorVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List) the module directory; inheritance chain EncyclopediaListSelectorVM → SelectorVM. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. SelectorVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSelectorVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaListSelectorVM` | `public EncyclopediaListSelectorVM(int selectedIndex, Action<SelectorVM<EncyclopediaListSelectorItemVM>>onChange, Action onActivate) : base(selectedIndex, onChange)` | constructor |
| `ExecuteOnDropdownActivated` | `public void ExecuteOnDropdownActivated()` | method |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM)
- [same namespace EncyclopediaListFilterVM](../EncyclopediaListFilterVM)
- [same namespace EncyclopediaListItemComparer](../EncyclopediaListItemComparer)
- [same namespace EncyclopediaListItemVM](../EncyclopediaListItemVM)
