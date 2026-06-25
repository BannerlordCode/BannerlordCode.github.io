---
title: "TutorialItemBase"
description: "Auto-generated class reference for TutorialItemBase."
---
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

**Purpose:** Determines whether the this instance is in the conditions met for completion state or condition.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
var result = tutorialItemBase.IsConditionsMetForCompletion();
```

### IsConditionsMetForActivation
`public abstract bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the this instance is in the conditions met for activation state or condition.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
var result = tutorialItemBase.IsConditionsMetForActivation();
```

### GetTutorialsRelevantContext
`public abstract TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the tutorials relevant context value held by the this instance.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
var result = tutorialItemBase.GetTutorialsRelevantContext();
```

### OnDeactivate
`public virtual void OnDeactivate()`

**Purpose:** Invoked when the deactivate event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnDeactivate();
```

### IsConditionsMetForVisibility
`public virtual bool IsConditionsMetForVisibility()`

**Purpose:** Determines whether the this instance is in the conditions met for visibility state or condition.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
var result = tutorialItemBase.IsConditionsMetForVisibility();
```

### OnInventoryTransferItem
`public virtual void OnInventoryTransferItem(InventoryTransferItemEvent obj)`

**Purpose:** Invoked when the inventory transfer item event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnInventoryTransferItem(obj);
```

### OnTutorialContextChanged
`public virtual void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**Purpose:** Invoked when the tutorial context changed event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnTutorialContextChanged(obj);
```

### OnInventoryFilterChanged
`public virtual void OnInventoryFilterChanged(InventoryFilterChangedEvent obj)`

**Purpose:** Invoked when the inventory filter changed event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnInventoryFilterChanged(obj);
```

### OnPerkSelectedByPlayer
`public virtual void OnPerkSelectedByPlayer(PerkSelectedByPlayerEvent obj)`

**Purpose:** Invoked when the perk selected by player event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPerkSelectedByPlayer(obj);
```

### OnFocusAddedByPlayer
`public virtual void OnFocusAddedByPlayer(FocusAddedByPlayerEvent obj)`

**Purpose:** Invoked when the focus added by player event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnFocusAddedByPlayer(obj);
```

### OnGameMenuOpened
`public virtual void OnGameMenuOpened(MenuCallbackArgs obj)`

**Purpose:** Invoked when the game menu opened event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnGameMenuOpened(obj);
```

### OnMainMapCameraMove
`public virtual void OnMainMapCameraMove(MapScreen.MainMapCameraMoveEvent obj)`

**Purpose:** Invoked when the main map camera move event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnMainMapCameraMove(obj);
```

### OnCharacterPortraitPopUpOpened
`public virtual void OnCharacterPortraitPopUpOpened(CharacterObject obj)`

**Purpose:** Invoked when the character portrait pop up opened event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCharacterPortraitPopUpOpened(obj);
```

### OnPlayerStartTalkFromMenuOverlay
`public virtual void OnPlayerStartTalkFromMenuOverlay(Hero obj)`

**Purpose:** Invoked when the player start talk from menu overlay event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerStartTalkFromMenuOverlay(obj);
```

### OnGameMenuOptionSelected
`public virtual void OnGameMenuOptionSelected(GameMenuOption obj)`

**Purpose:** Invoked when the game menu option selected event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnGameMenuOptionSelected(obj);
```

### OnPlayerStartRecruitment
`public virtual void OnPlayerStartRecruitment(CharacterObject obj)`

**Purpose:** Invoked when the player start recruitment event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerStartRecruitment(obj);
```

### OnNewCompanionAdded
`public virtual void OnNewCompanionAdded(Hero obj)`

**Purpose:** Invoked when the new companion added event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnNewCompanionAdded(obj);
```

### OnPlayerRecruitedUnit
`public virtual void OnPlayerRecruitedUnit(CharacterObject obj, int count)`

**Purpose:** Invoked when the player recruited unit event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerRecruitedUnit(obj, 0);
```

### OnPlayerInventoryExchange
`public virtual void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>> purchasedItems, List<ValueTuple<ItemRosterElement, int>> soldItems, bool isTrading)`

**Purpose:** Invoked when the player inventory exchange event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerInventoryExchange(list<ValueTuple<ItemRosterElement, 0, list<ValueTuple<ItemRosterElement, 0, false);
```

### OnMissionNameMarkerToggled
`public virtual void OnMissionNameMarkerToggled(MissionNameMarkerToggleEvent obj)`

**Purpose:** Invoked when the mission name marker toggled event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnMissionNameMarkerToggled(obj);
```

### OnPlayerToggleTrackSettlementFromEncyclopedia
`public virtual void OnPlayerToggleTrackSettlementFromEncyclopedia(PlayerToggleTrackSettlementFromEncyclopediaEvent obj)`

**Purpose:** Invoked when the player toggle track settlement from encyclopedia event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerToggleTrackSettlementFromEncyclopedia(obj);
```

### OnInventoryEquipmentTypeChange
`public virtual void OnInventoryEquipmentTypeChange(InventoryEquipmentTypeChangedEvent obj)`

**Purpose:** Invoked when the inventory equipment type change event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnInventoryEquipmentTypeChange(obj);
```

### OnArmyCohesionByPlayerBoosted
`public virtual void OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)`

**Purpose:** Invoked when the army cohesion by player boosted event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnArmyCohesionByPlayerBoosted(obj);
```

### OnPartyAddedToArmyByPlayer
`public virtual void OnPartyAddedToArmyByPlayer(PartyAddedToArmyByPlayerEvent obj)`

**Purpose:** Invoked when the party added to army by player event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPartyAddedToArmyByPlayer(obj);
```

### OnPlayerStartEngineConstruction
`public virtual void OnPlayerStartEngineConstruction(PlayerStartEngineConstructionEvent obj)`

**Purpose:** Invoked when the player start engine construction event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerStartEngineConstruction(obj);
```

### OnPlayerUpgradeTroop
`public virtual void OnPlayerUpgradeTroop(CharacterObject arg1, CharacterObject arg2, int arg3)`

**Purpose:** Invoked when the player upgrade troop event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerUpgradeTroop(arg1, arg2, 0);
```

### OnPlayerMoveTroop
`public virtual void OnPlayerMoveTroop(PlayerMoveTroopEvent obj)`

**Purpose:** Invoked when the player move troop event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerMoveTroop(obj);
```

### OnPerkSelectionToggle
`public virtual void OnPerkSelectionToggle(PerkSelectionToggleEvent obj)`

**Purpose:** Invoked when the perk selection toggle event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPerkSelectionToggle(obj);
```

### OnPlayerInspectedPartySpeed
`public virtual void OnPlayerInspectedPartySpeed(PlayerInspectedPartySpeedEvent obj)`

**Purpose:** Invoked when the player inspected party speed event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerInspectedPartySpeed(obj);
```

### OnPlayerMovementFlagChanged
`public virtual void OnPlayerMovementFlagChanged(MissionPlayerMovementFlagsChangeEvent obj)`

**Purpose:** Invoked when the player movement flag changed event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerMovementFlagChanged(obj);
```

### OnPlayerToggledUpgradePopup
`public virtual void OnPlayerToggledUpgradePopup(PlayerToggledUpgradePopupEvent obj)`

**Purpose:** Invoked when the player toggled upgrade popup event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerToggledUpgradePopup(obj);
```

### OnOrderOfBattleHeroAssignedToFormation
`public virtual void OnOrderOfBattleHeroAssignedToFormation(OrderOfBattleHeroAssignedToFormationEvent obj)`

**Purpose:** Invoked when the order of battle hero assigned to formation event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnOrderOfBattleHeroAssignedToFormation(obj);
```

### OnOrderOfBattleFormationClassChanged
`public virtual void OnOrderOfBattleFormationClassChanged(OrderOfBattleFormationClassChangedEvent obj)`

**Purpose:** Invoked when the order of battle formation class changed event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnOrderOfBattleFormationClassChanged(obj);
```

### OnOrderOfBattleFormationWeightChanged
`public virtual void OnOrderOfBattleFormationWeightChanged(OrderOfBattleFormationWeightChangedEvent obj)`

**Purpose:** Invoked when the order of battle formation weight changed event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnOrderOfBattleFormationWeightChanged(obj);
```

### OnCraftingWeaponClassSelectionOpened
`public virtual void OnCraftingWeaponClassSelectionOpened(CraftingWeaponClassSelectionOpenedEvent obj)`

**Purpose:** Invoked when the crafting weapon class selection opened event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCraftingWeaponClassSelectionOpened(obj);
```

### OnCraftingOnWeaponResultPopupOpened
`public virtual void OnCraftingOnWeaponResultPopupOpened(CraftingWeaponResultPopupToggledEvent obj)`

**Purpose:** Invoked when the crafting on weapon result popup opened event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCraftingOnWeaponResultPopupOpened(obj);
```

### OnCraftingOrderTabOpened
`public virtual void OnCraftingOrderTabOpened(CraftingOrderTabOpenedEvent obj)`

**Purpose:** Invoked when the crafting order tab opened event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCraftingOrderTabOpened(obj);
```

### OnCraftingOrderSelectionOpened
`public virtual void OnCraftingOrderSelectionOpened(CraftingOrderSelectionOpenedEvent obj)`

**Purpose:** Invoked when the crafting order selection opened event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCraftingOrderSelectionOpened(obj);
```

### OnInventoryItemInspected
`public virtual void OnInventoryItemInspected(InventoryItemInspectedEvent obj)`

**Purpose:** Invoked when the inventory item inspected event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnInventoryItemInspected(obj);
```

### OnCrimeValueInspectedInSettlementOverlay
`public virtual void OnCrimeValueInspectedInSettlementOverlay(CrimeValueInspectedInSettlementOverlayEvent obj)`

**Purpose:** Invoked when the crime value inspected in settlement overlay event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnCrimeValueInspectedInSettlementOverlay(obj);
```

### OnClanRoleAssignedThroughClanScreen
`public virtual void OnClanRoleAssignedThroughClanScreen(ClanRoleAssignedThroughClanScreenEvent obj)`

**Purpose:** Invoked when the clan role assigned through clan screen event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnClanRoleAssignedThroughClanScreen(obj);
```

### OnPlayerSelectedAKingdomDecisionOption
`public virtual void OnPlayerSelectedAKingdomDecisionOption(PlayerSelectedAKingdomDecisionOptionEvent obj)`

**Purpose:** Invoked when the player selected a kingdom decision option event is raised.

```csharp
// Obtain an instance of TutorialItemBase from the subsystem API first
TutorialItemBase tutorialItemBase = ...;
tutorialItemBase.OnPlayerSelectedAKingdomDecisionOption(obj);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TutorialItemBase instance = ...;
```

## See Also

- [Area Index](../)