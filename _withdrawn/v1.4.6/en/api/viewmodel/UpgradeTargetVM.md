---
title: "UpgradeTargetVM"
description: "UpgradeTargetVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Party, inheriting ViewModel; 18 exposed members (6 methods, 11 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UpgradeTargetVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class UpgradeTargetVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

UpgradeTargetVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is UpgradeTargetVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 6 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UpgradeTargetVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party`, inheritance chain UpgradeTargetVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/18, methods 6/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeTargetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UpgradeTargetVM` | `public UpgradeTargetVM(int upgradeIndex, CharacterObject character, CharacterCode upgradeCharacterCode, Action<int, int>onUpgraded, Action<UpgradeTargetVM>onFocused)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Refresh` | `public void Refresh(int upgradableAmount, bool isAvailable, bool isInsufficient, bool itemRequirementsMet, bool perkRequirementsMet, string hintString, bool isMarinerTroop)` | method |
| `ExecuteUpgradeEncyclopediaLink` | `public void ExecuteUpgradeEncyclopediaLink()` | method |
| `ExecuteUpgrade` | `public void ExecuteUpgrade()` | method |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | method |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | method |
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey` | property |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey` | property |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey` | property |
| `Requirements` | `public UpgradeRequirementsVM Requirements` | property |
| `TroopImage` | `public CharacterImageIdentifierVM TroopImage` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `AvailableUpgrades` | `public int AvailableUpgrades` | property |
| `IsAvailable` | `public bool IsAvailable` | property |
| `IsInsufficient` | `public bool IsInsufficient` | property |
| `IsHighlighted` | `public bool IsHighlighted` | property |
| `IsMarinerTroop` | `public bool IsMarinerTroop` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyCharacterVM](../PartyCharacterVM/)
- [same namespace PartyCompositionVM](../PartyCompositionVM/)
- [same namespace PartySortControllerVM](../PartySortControllerVM/)
- [same namespace PartyTradeVM](../PartyTradeVM/)
