---
title: "EncyclopediaUnitVM"
description: "EncyclopediaUnitVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items, inheriting ViewModel; 10 exposed members (4 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaUnitVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaUnitVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaUnitVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaUnitVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 4 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaUnitVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`, inheritance chain EncyclopediaUnitVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/10, methods 4/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaUnitVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaUnitVM` | `public EncyclopediaUnitVM(CharacterObject character, bool isActive)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteLink` | `public void ExecuteLink()` | method |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | method |
| `IsActiveUnit` | `public bool IsActiveUnit` | property |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier` | property |
| `NameText` | `public string NameText` | property |
| `TierIconData` | `public StringItemWithHintVM TierIconData` | property |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM/)
- [same namespace EncyclopediaFactionVM](../EncyclopediaFactionVM/)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM/)
- [same namespace EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM/)
