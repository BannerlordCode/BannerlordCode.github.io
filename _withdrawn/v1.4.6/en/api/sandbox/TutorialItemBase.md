---
title: "TutorialItemBase"
description: "TutorialItemBase: a public class in SandBox.GauntletUI.Tutorial; 46 exposed members (43 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Tutorial/TutorialItemBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialItemBase

**Namespace:** `SandBox.GauntletUI.Tutorial`
**Module:** `SandBox.GauntletUI`
**Type:** `public abstract class TutorialItemBase`
**File:** `SandBox.GauntletUI/Tutorial/TutorialItemBase.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TutorialItemBase lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Tutorial/TutorialItemBase.cs. It is a public class (abstract); the inheritance chain is TutorialItemBase. It exposes 46 public/protected members: 43 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialItemBase lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Tutorial`, inheritance chain TutorialItemBase. The surface is method-led (methods 43/46, properties 3/46), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Tutorial/TutorialItemBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsConditionsMetForCompletion` | `public abstract bool IsConditionsMetForCompletion();` | method |
| `IsConditionsMetForActivation` | `public abstract bool IsConditionsMetForActivation();` | method |
| `GetTutorialsRelevantContext` | `public abstract TutorialContexts GetTutorialsRelevantContext();` | method |
| `Placement` | `public TutorialItemVM.ItemPlacements Placement` | property |
| `MouseRequired` | `public bool MouseRequired` | property |
| `HighlightedVisualElementID` | `public string HighlightedVisualElementID` | property |
| `GetCustomTutorialElementHighlightID` | `protected virtual string GetCustomTutorialElementHighlightID()` | method |
| `OnDeactivate` | `public virtual void OnDeactivate()` | method |
| `IsConditionsMetForVisibility` | `public virtual bool IsConditionsMetForVisibility()` | method |
| `OnInventoryTransferItem` | `public virtual void OnInventoryTransferItem(InventoryTransferItemEvent obj)` | method |
| `OnTutorialContextChanged` | `public virtual void OnTutorialContextChanged(TutorialContextChangedEvent obj)` | method |
| `OnInventoryFilterChanged` | `public virtual void OnInventoryFilterChanged(InventoryFilterChangedEvent obj)` | method |
| `OnPerkSelectedByPlayer` | `public virtual void OnPerkSelectedByPlayer(PerkSelectedByPlayerEvent obj)` | method |
| `OnFocusAddedByPlayer` | `public virtual void OnFocusAddedByPlayer(FocusAddedByPlayerEvent obj)` | method |
| `OnGameMenuOpened` | `public virtual void OnGameMenuOpened(MenuCallbackArgs obj)` | method |
| `OnMainMapCameraMove` | `public virtual void OnMainMapCameraMove(MapScreen.MainMapCameraMoveEvent obj)` | method |
| `OnCharacterPortraitPopUpOpened` | `public virtual void OnCharacterPortraitPopUpOpened(CharacterObject obj)` | method |
| `OnPlayerStartTalkFromMenuOverlay` | `public virtual void OnPlayerStartTalkFromMenuOverlay(Hero obj)` | method |
| `OnGameMenuOptionSelected` | `public virtual void OnGameMenuOptionSelected(GameMenuOption obj)` | method |
| `OnPlayerStartRecruitment` | `public virtual void OnPlayerStartRecruitment(CharacterObject obj)` | method |
| `OnNewCompanionAdded` | `public virtual void OnNewCompanionAdded(Hero obj)` | method |
| `OnPlayerRecruitedUnit` | `public virtual void OnPlayerRecruitedUnit(CharacterObject obj, int count)` | method |
| `OnPlayerInventoryExchange` | `public virtual void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>>purchasedItems, List<ValueTuple<ItemRosterElement, int>>soldItems, bool isTrading)` | method |
| `OnMissionNameMarkerToggled` | `public virtual void OnMissionNameMarkerToggled(MissionNameMarkerToggleEvent obj)` | method |
| `OnPlayerToggleTrackSettlementFromEncyclopedia` | `public virtual void OnPlayerToggleTrackSettlementFromEncyclopedia(PlayerToggleTrackSettlementFromEncyclopediaEvent obj)` | method |
| `OnInventoryEquipmentTypeChange` | `public virtual void OnInventoryEquipmentTypeChange(InventoryEquipmentTypeChangedEvent obj)` | method |
| `OnArmyCohesionByPlayerBoosted` | `public virtual void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)` | method |
| `OnPartyAddedToArmyByPlayer` | `public virtual void OnPartyAddedToArmyByPlayer(PartyAddedToArmyByPlayerEvent obj)` | method |
| `OnPlayerStartEngineConstruction` | `public virtual void OnPlayerStartEngineConstruction(PlayerStartEngineConstructionEvent obj)` | method |
| `OnPlayerUpgradeTroop` | `public virtual void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)` | method |
| `OnPlayerMoveTroop` | `public virtual void OnPlayerMoveTroop(PlayerMoveTroopEvent obj)` | method |
| `OnPerkSelectionToggle` | `public virtual void OnPerkSelectionToggle(PerkSelectionToggleEvent obj)` | method |
| `OnPlayerInspectedPartySpeed` | `public virtual void OnPlayerInspectedPartySpeed(PlayerInspectedPartySpeedEvent obj)` | method |
| `OnPlayerMovementFlagChanged` | `public virtual void OnPlayerMovementFlagChanged(MissionPlayerMovementFlagsChangeEvent obj)` | method |
| `OnPlayerToggledUpgradePopup` | `public virtual void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)` | method |
| `OnOrderOfBattleHeroAssignedToFormation` | `public virtual void OnOrderOfBattleHeroAssignedToFormation(OrderOfBattleHeroAssignedToFormationEvent obj)` | method |
| `OnOrderOfBattleFormationClassChanged` | `public virtual void OnOrderOfBattleFormationClassChanged(OrderOfBattleFormationClassChangedEvent obj)` | method |
| `OnOrderOfBattleFormationWeightChanged` | `public virtual void OnOrderOfBattleFormationWeightChanged(OrderOfBattleFormationWeightChangedEvent obj)` | method |
| `OnCraftingWeaponClassSelectionOpened` | `public virtual void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)` | method |
| `OnCraftingOnWeaponResultPopupOpened` | `public virtual void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)` | method |
| `OnCraftingOrderTabOpened` | `public virtual void OnCraftingOrderTabOpened(CraftingOrderTabOpenedEvent obj)` | method |
| `OnCraftingOrderSelectionOpened` | `public virtual void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)` | method |
| `OnInventoryItemInspected` | `public virtual void OnInventoryItemInspected(InventoryItemInspectedEvent obj)` | method |
| `OnCrimeValueInspectedInSettlementOverlay` | `public virtual void OnCrimeValueInspectedInSettlementOverlay(CrimeValueInspectedInSettlementOverlayEvent obj)` | method |
| `OnClanRoleAssignedThroughClanScreen` | `public virtual void OnClanRoleAssignedThroughClanScreen(ClanRoleAssignedThroughClanScreenEvent obj)` | method |
| `OnPlayerSelectedAKingdomDecisionOption` | `public virtual void OnPlayerSelectedAKingdomDecisionOption(PlayerSelectedAKingdomDecisionOptionEvent obj)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GauntletTutorialSystem](../GauntletTutorialSystem/)
- [same namespace TutorialAttribute](../TutorialAttribute/)
- [same namespace TutorialHelper](../TutorialHelper/)
