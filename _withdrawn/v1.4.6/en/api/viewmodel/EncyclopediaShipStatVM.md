---
title: "EncyclopediaShipStatVM"
description: "EncyclopediaShipStatVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaShipStatVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaShipStatVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaShipStatVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaShipStatVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaShipStatVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`, inheritance chain EncyclopediaShipStatVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaShipStatVM` | `public EncyclopediaShipStatVM(string statId, TextObject name, string value, Func<List<TooltipProperty>>getTooltipProperties = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `StatId` | `public string StatId` | property |
| `Name` | `public string Name` | property |
| `ValueText` | `public string ValueText` | property |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM/)
- [same namespace EncyclopediaFactionVM](../EncyclopediaFactionVM/)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM/)
- [same namespace EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM/)
