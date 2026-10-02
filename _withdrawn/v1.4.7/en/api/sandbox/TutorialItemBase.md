---
title: "TutorialItemBase"
description: "TutorialItemBase — class in SandBox.GauntletUI.Tutorial. 46 public members (0 static)."
---

<!-- v147-skeleton -->
# TutorialItemBase

**Namespace:** `SandBox.GauntletUI.Tutorial`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public abstract class TutorialItemBase`  
**Source:** `SandBox.GauntletUI/Tutorial/TutorialItemBase.cs`

## Overview

`TutorialItemBase` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (46): `IsConditionsMetForCompletion`, `IsConditionsMetForActivation`, `GetTutorialsRelevantContext`, `Placement`, `MouseRequired`, `HighlightedVisualElementID`, ….
- **Extension points** (43): `IsConditionsMetForCompletion`, `IsConditionsMetForActivation`, `GetTutorialsRelevantContext`, `GetCustomTutorialElementHighlightID`, `OnDeactivate`, `IsConditionsMetForVisibility`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetTutorialsRelevantContext` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `TutorialContexts`. Read path: prefer it over reaching for the backing store. |
| `IsConditionsMetForActivation` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsConditionsMetForCompletion` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsConditionsMetForVisibility` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnArmyCohesionByPlayerBoosted` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `ArmyCohesionBoostedByPlayerEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCharacterPortraitPopUpOpened` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `CharacterObject obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnClanRoleAssignedThroughClanScreen` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `ClanRoleAssignedThroughClanScreenEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCraftingOnWeaponResultPopupOpened` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `CraftingWeaponResultPopupToggledEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCraftingOrderSelectionOpened` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `CraftingOrderSelectionOpenedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCraftingOrderTabOpened` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `CraftingOrderTabOpenedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCraftingWeaponClassSelectionOpened` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `CraftingWeaponClassSelectionOpenedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCrimeValueInspectedInSettlementOverlay` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `CrimeValueInspectedInSettlementOverlayEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFocusAddedByPlayer` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `FocusAddedByPlayerEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameMenuOpened` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MenuCallbackArgs obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameMenuOptionSelected` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `GameMenuOption obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInventoryEquipmentTypeChange` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `InventoryEquipmentTypeChangedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInventoryFilterChanged` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `InventoryFilterChangedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInventoryItemInspected` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `InventoryItemInspectedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInventoryTransferItem` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `InventoryTransferItemEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMainMapCameraMove` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MapScreen.MainMapCameraMoveEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionNameMarkerToggled` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `MissionNameMarkerToggleEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnNewCompanionAdded` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Hero obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnOrderOfBattleFormationClassChanged` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `OrderOfBattleFormationClassChangedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

22 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.

// Lifecycle hooks this type declares:
//   public virtual void OnDeactivate()
//   public virtual void OnInventoryTransferItem(InventoryTransferItemEvent obj)
//   public virtual void OnTutorialContextChanged(TutorialContextChangedEvent obj)
//   public virtual void OnInventoryFilterChanged(InventoryFilterChangedEvent obj)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 43 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Tutorial/TutorialItemBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [TutorialItemVM](../TutorialItemVM/) — `SandBox.ViewModelCollection.Tutorial`.
- [InventoryTransferItemEvent](../../campaign/InventoryTransferItemEvent/) — `TaleWorlds.CampaignSystem.Inventory`.
- [InventoryFilterChangedEvent](../../viewmodel/InventoryFilterChangedEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`.
- [PerkSelectedByPlayerEvent](../../viewmodel/PerkSelectedByPlayerEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`.
- [FocusAddedByPlayerEvent](../../viewmodel/FocusAddedByPlayerEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [InventoryEquipmentTypeChangedEvent](../../viewmodel/InventoryEquipmentTypeChangedEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`.
- [ArmyCohesionBoostedByPlayerEvent](../../viewmodel/ArmyCohesionBoostedByPlayerEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`.
- [PartyAddedToArmyByPlayerEvent](../../viewmodel/PartyAddedToArmyByPlayerEvent/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`.

Section: [api/sandbox/](../) — the other types in this bucket.
