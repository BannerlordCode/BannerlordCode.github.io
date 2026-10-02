---
title: "EncyclopediaHomeVM"
description: "EncyclopediaHomeVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia, inheriting EncyclopediaPageVM; 8 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaHomeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaHomeVM : EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaHomeVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs. It is a public class, implementing/inheriting EncyclopediaPageVM; the inheritance chain is EncyclopediaHomeVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaHomeVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`, inheritance chain EncyclopediaHomeVM → EncyclopediaPageVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaHomeVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EncyclopediaPageVM](../EncyclopediaPageVM/)
- [same namespace EncyclopediaLinkVM](../EncyclopediaLinkVM/)
- [same namespace EncyclopediaNavigatorVM](../EncyclopediaNavigatorVM/)
- [same namespace EncyclopediaPageChangedEvent](../EncyclopediaPageChangedEvent/)
- [same namespace EncyclopediaPages](../EncyclopediaPages/)
