---
title: "TutorialItemBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialItemBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialItemBase

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public abstract class TutorialItemBase`
**Base:** none
**File:** `SandBox.GauntletUI/Tutorial/TutorialItemBase.cs`

## Overview

`TutorialItemBase` lives in `SandBox.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Placement` | `public TutorialItemVM.ItemPlacements Placement { get; set; }` |
| `MouseRequired` | `public bool MouseRequired { get; set; }` |
| `HighlightedVisualElementID` | `public string HighlightedVisualElementID { get; set; }` |

## Key Methods

### IsConditionsMetForCompletion
`public abstract bool IsConditionsMetForCompletion()`

**Purpose:** Handles logic related to `is conditions met for completion`.

### IsConditionsMetForActivation
`public abstract bool IsConditionsMetForActivation()`

**Purpose:** Handles logic related to `is conditions met for activation`.

### GetTutorialsRelevantContext
`public abstract TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Gets the current value of `tutorials relevant context`.

### OnDeactivate
`public virtual void OnDeactivate()`

**Purpose:** Called when the `deactivate` event is raised.

### IsConditionsMetForVisibility
`public virtual bool IsConditionsMetForVisibility()`

**Purpose:** Handles logic related to `is conditions met for visibility`.

### OnInventoryTransferItem
`public virtual void OnInventoryTransferItem(InventoryTransferItemEvent obj)`

**Purpose:** Called when the `inventory transfer item` event is raised.

### OnTutorialContextChanged
`public virtual void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**Purpose:** Called when the `tutorial context changed` event is raised.

### OnInventoryFilterChanged
`public virtual void OnInventoryFilterChanged(InventoryFilterChangedEvent obj)`

**Purpose:** Called when the `inventory filter changed` event is raised.

### OnPerkSelectedByPlayer
`public virtual void OnPerkSelectedByPlayer(PerkSelectedByPlayerEvent obj)`

**Purpose:** Called when the `perk selected by player` event is raised.

### OnFocusAddedByPlayer
`public virtual void OnFocusAddedByPlayer(FocusAddedByPlayerEvent obj)`

**Purpose:** Called when the `focus added by player` event is raised.

### OnGameMenuOpened
`public virtual void OnGameMenuOpened(MenuCallbackArgs obj)`

**Purpose:** Called when the `game menu opened` event is raised.

### OnMainMapCameraMove
`public virtual void OnMainMapCameraMove(MapScreen.MainMapCameraMoveEvent obj)`

**Purpose:** Called when the `main map camera move` event is raised.

### OnCharacterPortraitPopUpOpened
`public virtual void OnCharacterPortraitPopUpOpened(CharacterObject obj)`

**Purpose:** Called when the `character portrait pop up opened` event is raised.

### OnPlayerStartTalkFromMenuOverlay
`public virtual void OnPlayerStartTalkFromMenuOverlay(Hero obj)`

**Purpose:** Called when the `player start talk from menu overlay` event is raised.

### OnGameMenuOptionSelected
`public virtual void OnGameMenuOptionSelected(GameMenuOption obj)`

**Purpose:** Called when the `game menu option selected` event is raised.

### OnPlayerStartRecruitment
`public virtual void OnPlayerStartRecruitment(CharacterObject obj)`

**Purpose:** Called when the `player start recruitment` event is raised.

### OnNewCompanionAdded
`public virtual void OnNewCompanionAdded(Hero obj)`

**Purpose:** Called when the `new companion added` event is raised.

### OnPlayerRecruitedUnit
`public virtual void OnPlayerRecruitedUnit(CharacterObject obj, int count)`

**Purpose:** Called when the `player recruited unit` event is raised.

### OnPlayerInventoryExchange
`public virtual void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>> purchasedItems, List<ValueTuple<ItemRosterElement, int>> soldItems, bool isTrading)`

**Purpose:** Called when the `player inventory exchange` event is raised.

### OnMissionNameMarkerToggled
`public virtual void OnMissionNameMarkerToggled(MissionNameMarkerToggleEvent obj)`

**Purpose:** Called when the `mission name marker toggled` event is raised.

### OnPlayerToggleTrackSettlementFromEncyclopedia
`public virtual void OnPlayerToggleTrackSettlementFromEncyclopedia(PlayerToggleTrackSettlementFromEncyclopediaEvent obj)`

**Purpose:** Called when the `player toggle track settlement from encyclopedia` event is raised.

### OnInventoryEquipmentTypeChange
`public virtual void OnInventoryEquipmentTypeChange(InventoryEquipmentTypeChangedEvent obj)`

**Purpose:** Called when the `inventory equipment type change` event is raised.

### OnArmyCohesionByPlayerBoosted
`public virtual void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)`

**Purpose:** Called when the `army cohesion by player boosted` event is raised.

### OnPartyAddedToArmyByPlayer
`public virtual void OnPartyAddedToArmyByPlayer(PartyAddedToArmyByPlayerEvent obj)`

**Purpose:** Called when the `party added to army by player` event is raised.

### OnPlayerStartEngineConstruction
`public virtual void OnPlayerStartEngineConstruction(PlayerStartEngineConstructionEvent obj)`

**Purpose:** Called when the `player start engine construction` event is raised.

### OnPlayerUpgradeTroop
`public virtual void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)`

**Purpose:** Called when the `player upgrade troop` event is raised.

### OnPlayerMoveTroop
`public virtual void OnPlayerMoveTroop(PlayerMoveTroopEvent obj)`

**Purpose:** Called when the `player move troop` event is raised.

### OnPerkSelectionToggle
`public virtual void OnPerkSelectionToggle(PerkSelectionToggleEvent obj)`

**Purpose:** Called when the `perk selection toggle` event is raised.

### OnPlayerInspectedPartySpeed
`public virtual void OnPlayerInspectedPartySpeed(PlayerInspectedPartySpeedEvent obj)`

**Purpose:** Called when the `player inspected party speed` event is raised.

### OnPlayerMovementFlagChanged
`public virtual void OnPlayerMovementFlagChanged(MissionPlayerMovementFlagsChangeEvent obj)`

**Purpose:** Called when the `player movement flag changed` event is raised.

### OnPlayerToggledUpgradePopup
`public virtual void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)`

**Purpose:** Called when the `player toggled upgrade popup` event is raised.

### OnOrderOfBattleHeroAssignedToFormation
`public virtual void OnOrderOfBattleHeroAssignedToFormation(OrderOfBattleHeroAssignedToFormationEvent obj)`

**Purpose:** Called when the `order of battle hero assigned to formation` event is raised.

### OnOrderOfBattleFormationClassChanged
`public virtual void OnOrderOfBattleFormationClassChanged(OrderOfBattleFormationClassChangedEvent obj)`

**Purpose:** Called when the `order of battle formation class changed` event is raised.

### OnOrderOfBattleFormationWeightChanged
`public virtual void OnOrderOfBattleFormationWeightChanged(OrderOfBattleFormationWeightChangedEvent obj)`

**Purpose:** Called when the `order of battle formation weight changed` event is raised.

### OnCraftingWeaponClassSelectionOpened
`public virtual void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)`

**Purpose:** Called when the `crafting weapon class selection opened` event is raised.

### OnCraftingOnWeaponResultPopupOpened
`public virtual void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)`

**Purpose:** Called when the `crafting on weapon result popup opened` event is raised.

### OnCraftingOrderTabOpened
`public virtual void OnCraftingOrderTabOpened(CraftingOrderTabOpenedEvent obj)`

**Purpose:** Called when the `crafting order tab opened` event is raised.

### OnCraftingOrderSelectionOpened
`public virtual void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)`

**Purpose:** Called when the `crafting order selection opened` event is raised.

### OnInventoryItemInspected
`public virtual void OnInventoryItemInspected(InventoryItemInspectedEvent obj)`

**Purpose:** Called when the `inventory item inspected` event is raised.

### OnCrimeValueInspectedInSettlementOverlay
`public virtual void OnCrimeValueInspectedInSettlementOverlay(CrimeValueInspectedInSettlementOverlayEvent obj)`

**Purpose:** Called when the `crime value inspected in settlement overlay` event is raised.

### OnClanRoleAssignedThroughClanScreen
`public virtual void OnClanRoleAssignedThroughClanScreen(ClanRoleAssignedThroughClanScreenEvent obj)`

**Purpose:** Called when the `clan role assigned through clan screen` event is raised.

### OnPlayerSelectedAKingdomDecisionOption
`public virtual void OnPlayerSelectedAKingdomDecisionOption(PlayerSelectedAKingdomDecisionOptionEvent obj)`

**Purpose:** Called when the `player selected a kingdom decision option` event is raised.

## Usage Example

```csharp
var implementation = new CustomTutorialItemBase();
```

## See Also

- [Complete Class Catalog](../catalog)