---
title: "EncounterMenuOverlayVM"
description: "EncounterMenuOverlayVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay, inheriting GameMenuOverlay; 34 exposed members (3 methods, 30 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncounterMenuOverlayVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncounterMenuOverlayVM : GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncounterMenuOverlayVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs. It is a public class, implementing/inheriting GameMenuOverlay; the inheritance chain is EncounterMenuOverlayVM → GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 34 public/protected members: 3 methods, 30 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncounterMenuOverlayVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`, inheritance chain EncounterMenuOverlayVM → GameMenuOverlay → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 30/34, methods 3/34), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/EncounterMenuOverlayVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncounterMenuOverlayVM` | `public EncounterMenuOverlayVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFrameTick` | `public override void OnFrameTick(float dt)` | method |
| `Refresh` | `public override void Refresh()` | method |
| `TitleText` | `public string TitleText` | property |
| `DefenderPartyBanner` | `public BannerImageIdentifierVM DefenderPartyBanner` | property |
| `AttackerPartyBanner` | `public BannerImageIdentifierVM AttackerPartyBanner` | property |
| `PowerComparer` | `public PowerLevelComparer PowerComparer` | property |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>AttackerPartyList` | property |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>DefenderPartyList` | property |
| `DefenderPartyMorale` | `public string DefenderPartyMorale` | property |
| `AttackerPartyMorale` | `public string AttackerPartyMorale` | property |
| `DefenderPartyCount` | `public int DefenderPartyCount` | property |
| `AttackerPartyCount` | `public int AttackerPartyCount` | property |
| `DefenderShipCount` | `public int DefenderShipCount` | property |
| `AttackerShipCount` | `public int AttackerShipCount` | property |
| `DefenderPartyFood` | `public string DefenderPartyFood` | property |
| `AttackerPartyFood` | `public string AttackerPartyFood` | property |
| `DefenderWallHitPoints` | `public string DefenderWallHitPoints` | property |
| `IsNaval` | `public bool IsNaval` | property |
| `IsSiege` | `public bool IsSiege` | property |
| `DefenderPartyCountLbl` | `public string DefenderPartyCountLbl` | property |
| `AttackerPartyCountLbl` | `public string AttackerPartyCountLbl` | property |
| `AttackerBannerHint` | `public HintViewModel AttackerBannerHint` | property |
| `DefenderBannerHint` | `public HintViewModel DefenderBannerHint` | property |
| `AttackerTroopNumHint` | `public BasicTooltipViewModel AttackerTroopNumHint` | property |
| `DefenderTroopNumHint` | `public BasicTooltipViewModel DefenderTroopNumHint` | property |
| `AttackerShipNumHint` | `public BasicTooltipViewModel AttackerShipNumHint` | property |
| `DefenderShipNumHint` | `public BasicTooltipViewModel DefenderShipNumHint` | property |
| `DefenderWallHint` | `public BasicTooltipViewModel DefenderWallHint` | property |
| `DefenderFoodHint` | `public BasicTooltipViewModel DefenderFoodHint` | property |
| `AttackerFoodHint` | `public BasicTooltipViewModel AttackerFoodHint` | property |
| `AttackerMoraleHint` | `public BasicTooltipViewModel AttackerMoraleHint` | property |
| `DefenderMoraleHint` | `public BasicTooltipViewModel DefenderMoraleHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameMenuOverlay](../GameMenuOverlay/)
- [same namespace ArmyMenuOverlayVM](../ArmyMenuOverlayVM/)
- [same namespace GameMenuOverlay](../GameMenuOverlay/)
- [same namespace GameMenuOverlayActionVM](../GameMenuOverlayActionVM/)
- [same namespace GameMenuOverlayFactory](../GameMenuOverlayFactory/)
