<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs`

## Overview

`CharacterCreationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CharacterCreationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NarrativeMenus` | `public MBReadOnlyList<NarrativeMenu> NarrativeMenus { get; }` |
| `CharacterCreationContent` | `public CharacterCreationContent CharacterCreationContent { get; }` |
| `CurrentMenu` | `public NarrativeMenu CurrentMenu { get; }` |
| `CharacterCreationMenuCount` | `public int CharacterCreationMenuCount { get; }` |
| `CurrentStage` | `public CharacterCreationStageBase CurrentStage { get; }` |

## Key Methods

### RegisterCharacterCreationContentHandler
`public void RegisterCharacterCreationContentHandler(ICharacterCreationContentHandler characterCreationContentHandler, int priority)`

**Purpose:** Handles logic related to `register character creation content handler`.

### AddStage
`public void AddStage(CharacterCreationStageBase stage)`

**Purpose:** Adds `stage` to the current collection or state.

### NextStage
`public void NextStage()`

**Purpose:** Handles logic related to `next stage`.

### PreviousStage
`public void PreviousStage()`

**Purpose:** Handles logic related to `previous stage`.

### GoToStage
`public void GoToStage(int stageIndex)`

**Purpose:** Handles logic related to `go to stage`.

### GetIndexOfCurrentStage
`public int GetIndexOfCurrentStage()`

**Purpose:** Gets the current value of `index of current stage`.

### GetTotalStagesCount
`public int GetTotalStagesCount()`

**Purpose:** Gets the current value of `total stages count`.

### GetFurthestIndex
`public int GetFurthestIndex()`

**Purpose:** Gets the current value of `furthest index`.

### AddNewMenu
`public void AddNewMenu(NarrativeMenu menu)`

**Purpose:** Adds `new menu` to the current collection or state.

### GetCurrentMenu
`public NarrativeMenu GetCurrentMenu(int index)`

**Purpose:** Gets the current value of `current menu`.

### GetCurrentMenuOptions
`public IEnumerable<NarrativeMenuOption> GetCurrentMenuOptions(int index)`

**Purpose:** Gets the current value of `current menu options`.

### GetNarrativeMenuWithId
`public NarrativeMenu GetNarrativeMenuWithId(string stringId)`

**Purpose:** Gets the current value of `narrative menu with id`.

### DeleteNarrativeMenuWithId
`public void DeleteNarrativeMenuWithId(string stringId)`

**Purpose:** Handles logic related to `delete narrative menu with id`.

### ResetNarrativeMenus
`public void ResetNarrativeMenus()`

**Purpose:** Resets `narrative menus` to its initial state.

### ResetMenuOptions
`public void ResetMenuOptions()`

**Purpose:** Resets `menu options` to its initial state.

### StartNarrativeStage
`public void StartNarrativeStage()`

**Purpose:** Handles logic related to `start narrative stage`.

### TrySwitchToNextMenu
`public bool TrySwitchToNextMenu()`

**Purpose:** Attempts to get `switch to next menu`, usually returning the result in an out parameter.

### TrySwitchToPreviousMenu
`public bool TrySwitchToPreviousMenu()`

**Purpose:** Attempts to get `switch to previous menu`, usually returning the result in an out parameter.

### OnNarrativeMenuOptionSelected
`public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option)`

**Purpose:** Called when the `narrative menu option selected` event is raised.

### GetSuitableNarrativeMenuOptions
`public IEnumerable<NarrativeMenuOption> GetSuitableNarrativeMenuOptions()`

**Purpose:** Gets the current value of `suitable narrative menu options`.

### ApplyFinalEffects
`public void ApplyFinalEffects()`

**Purpose:** Applies `final effects` to the current object.

## Usage Example

```csharp
var manager = CharacterCreationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)