---
title: "ClanSupporterGroupVM"
description: "ClanSupporterGroupVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters, inheriting ViewModel; 12 exposed members (4 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Supporters/ClanSupporterGroupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanSupporterGroupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanSupporterGroupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Supporters/ClanSupporterGroupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanSupporterGroupVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Supporters/ClanSupporterGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanSupporterGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanSupporterGroupVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters`, inheritance chain ClanSupporterGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Supporters/ClanSupporterGroupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanSupporterGroupVM` | `public ClanSupporterGroupVM(TextObject groupName, float influenceBonus, Action<ClanSupporterGroupVM>onSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `AddSupporter` | `public void AddSupporter(Hero hero)` | method |
| `Refresh` | `public void Refresh()` | method |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `TitleText` | `public string TitleText` | property |
| `TotalInfluenceBonus` | `public float TotalInfluenceBonus` | property |
| `InfluenceBonusDescription` | `public string InfluenceBonusDescription` | property |
| `Name` | `public string Name` | property |
| `TotalInfluence` | `public string TotalInfluence` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `MBBindingList` | `public MBBindingList<ClanSupporterItemVM>Supporters` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClanSupporterItemVM](../ClanSupporterItemVM/)
