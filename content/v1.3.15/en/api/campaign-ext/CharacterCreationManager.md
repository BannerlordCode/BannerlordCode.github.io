---
title: "CharacterCreationManager"
description: "Auto-generated class reference for CharacterCreationManager."
---
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

**Purpose:** **Purpose:** Registers character creation content handler with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.RegisterCharacterCreationContentHandler(characterCreationContentHandler, 0);
```

### AddStage
`public void AddStage(CharacterCreationStageBase stage)`

**Purpose:** **Purpose:** Adds stage to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.AddStage(stage);
```

### NextStage
`public void NextStage()`

**Purpose:** **Purpose:** Executes the NextStage logic.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.NextStage();
```

### PreviousStage
`public void PreviousStage()`

**Purpose:** **Purpose:** Executes the PreviousStage logic.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.PreviousStage();
```

### GoToStage
`public void GoToStage(int stageIndex)`

**Purpose:** **Purpose:** Executes the GoToStage logic.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.GoToStage(0);
```

### GetIndexOfCurrentStage
`public int GetIndexOfCurrentStage()`

**Purpose:** **Purpose:** Reads and returns the index of current stage value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetIndexOfCurrentStage();
```

### GetTotalStagesCount
`public int GetTotalStagesCount()`

**Purpose:** **Purpose:** Reads and returns the total stages count value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetTotalStagesCount();
```

### GetFurthestIndex
`public int GetFurthestIndex()`

**Purpose:** **Purpose:** Reads and returns the furthest index value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetFurthestIndex();
```

### AddNewMenu
`public void AddNewMenu(NarrativeMenu menu)`

**Purpose:** **Purpose:** Adds new menu to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.AddNewMenu(menu);
```

### GetCurrentMenu
`public NarrativeMenu GetCurrentMenu(int index)`

**Purpose:** **Purpose:** Reads and returns the current menu value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetCurrentMenu(0);
```

### GetCurrentMenuOptions
`public IEnumerable<NarrativeMenuOption> GetCurrentMenuOptions(int index)`

**Purpose:** **Purpose:** Reads and returns the current menu options value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetCurrentMenuOptions(0);
```

### GetNarrativeMenuWithId
`public NarrativeMenu GetNarrativeMenuWithId(string stringId)`

**Purpose:** **Purpose:** Reads and returns the narrative menu with id value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetNarrativeMenuWithId("example");
```

### DeleteNarrativeMenuWithId
`public void DeleteNarrativeMenuWithId(string stringId)`

**Purpose:** **Purpose:** Executes the DeleteNarrativeMenuWithId logic.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.DeleteNarrativeMenuWithId("example");
```

### ResetNarrativeMenus
`public void ResetNarrativeMenus()`

**Purpose:** **Purpose:** Returns narrative menus to its default or initial condition.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.ResetNarrativeMenus();
```

### ResetMenuOptions
`public void ResetMenuOptions()`

**Purpose:** **Purpose:** Returns menu options to its default or initial condition.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.ResetMenuOptions();
```

### StartNarrativeStage
`public void StartNarrativeStage()`

**Purpose:** **Purpose:** Starts the narrative stage flow or state machine.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.StartNarrativeStage();
```

### TrySwitchToNextMenu
`public bool TrySwitchToNextMenu()`

**Purpose:** **Purpose:** Attempts to retrieve switch to next menu, usually returning success through an out parameter.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.TrySwitchToNextMenu();
```

### TrySwitchToPreviousMenu
`public bool TrySwitchToPreviousMenu()`

**Purpose:** **Purpose:** Attempts to retrieve switch to previous menu, usually returning success through an out parameter.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.TrySwitchToPreviousMenu();
```

### OnNarrativeMenuOptionSelected
`public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option)`

**Purpose:** **Purpose:** Invoked when the narrative menu option selected event is raised.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.OnNarrativeMenuOptionSelected(option);
```

### GetSuitableNarrativeMenuOptions
`public IEnumerable<NarrativeMenuOption> GetSuitableNarrativeMenuOptions()`

**Purpose:** **Purpose:** Reads and returns the suitable narrative menu options value held by the this instance.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
var result = characterCreationManager.GetSuitableNarrativeMenuOptions();
```

### ApplyFinalEffects
`public void ApplyFinalEffects()`

**Purpose:** **Purpose:** Applies the effect of final effects to the this instance.

```csharp
// Obtain an instance of CharacterCreationManager from the subsystem API first
CharacterCreationManager characterCreationManager = ...;
characterCreationManager.ApplyFinalEffects();
```

## Usage Example

```csharp
var manager = CharacterCreationManager.Current;
```

## See Also

- [Area Index](../)