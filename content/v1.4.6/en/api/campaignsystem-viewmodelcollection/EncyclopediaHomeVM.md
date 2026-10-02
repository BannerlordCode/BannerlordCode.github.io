---
title: "EncyclopediaHomeVM"
description: "EncyclopediaHomeVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EncyclopediaPageVM; 8 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs."
---
# EncyclopediaHomeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaHomeVM : EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs`

## Overview

EncyclopediaHomeVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs. It is a public class, implementing/inheriting EncyclopediaPageVM; the inheritance chain is EncyclopediaHomeVM → EncyclopediaPageVM → ViewModel. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaHomeVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia) the module directory; inheritance chain EncyclopediaHomeVM → EncyclopediaPageVM → ViewModel. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaHomeVM` | `public EncyclopediaHomeVM(EncyclopediaPageArgs args) : base(args)` | constructor |
| `Refresh` | `public override void Refresh()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | method |
| `GetName` | `public override string GetName()` | method |
| `IsListActive` | `public bool IsListActive` | property |
| `HomeTitleText` | `public string HomeTitleText` | property |
| `MBBindingList` | `public MBBindingList<ListTypeVM>Lists` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaPageVM](../EncyclopediaPageVM)
- [same namespace EncyclopediaLinkVM](../EncyclopediaLinkVM)
- [same namespace EncyclopediaNavigatorVM](../EncyclopediaNavigatorVM)
- [same namespace EncyclopediaPageChangedEvent](../EncyclopediaPageChangedEvent)
- [same namespace EncyclopediaPages](../EncyclopediaPages)
