---
title: "EncyclopediaShipStatVM"
description: "EncyclopediaShipStatVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs."
---
# EncyclopediaShipStatVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaShipStatVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs`

## Overview

EncyclopediaShipStatVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaShipStatVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaShipStatVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items) the module directory; inheritance chain EncyclopediaShipStatVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaShipStatVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaShipStatVM` | `public EncyclopediaShipStatVM(string statId, TextObject name, string value, Func<List<TooltipProperty>>getTooltipProperties = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `StatId` | `public string StatId` | property |
| `Name` | `public string Name` | property |
| `ValueText` | `public string ValueText` | property |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM)
- [same namespace EncyclopediaFactionVM](../EncyclopediaFactionVM)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM)
- [same namespace EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM)
