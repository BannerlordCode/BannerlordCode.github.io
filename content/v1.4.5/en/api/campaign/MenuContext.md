---
title: "MenuContext"
description: "Auto-generated class reference for MenuContext."
---
# MenuContext

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MenuContext : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/MenuContext.cs`

## Overview

`MenuContext` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameMenu` | `public GameMenu GameMenu { get; }` |
| `Handler` | `public IMenuContextHandler Handler { get; }` |
| `CurrentBackgroundMeshName` | `public string CurrentBackgroundMeshName { get; }` |
| `CurrentAmbientSoundID` | `public string CurrentAmbientSoundID { get; }` |
| `CurrentPanelSoundID` | `public string CurrentPanelSoundID { get; }` |

## Key Methods

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.Refresh();
```

### SwitchToMenu
`public void SwitchToMenu(string menuId)`

**Purpose:** Executes the SwitchToMenu logic.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.SwitchToMenu("example");
```

### Destroy
`public void Destroy()`

**Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.Destroy();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.OnTick(0);
```

### OnHourlyTick
`public void OnHourlyTick()`

**Purpose:** Invoked when the hourly tick event is raised.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.OnHourlyTick();
```

### GetCurrentRepeatableObject
`public object GetCurrentRepeatableObject()`

**Purpose:** Reads and returns the current repeatable object value held by the this instance.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
var result = menuContext.GetCurrentRepeatableObject();
```

### GetSelectedObject
`public object GetSelectedObject()`

**Purpose:** Reads and returns the selected object value held by the this instance.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
var result = menuContext.GetSelectedObject();
```

### GetSelectedRepeatableObject
`public object GetSelectedRepeatableObject()`

**Purpose:** Reads and returns the selected repeatable object value held by the this instance.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
var result = menuContext.GetSelectedRepeatableObject();
```

### SetRepeatObjectList
`public void SetRepeatObjectList(IEnumerable<object> list)`

**Purpose:** Assigns a new value to repeat object list and updates the object's internal state.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.SetRepeatObjectList(list);
```

### OnConsequence
`public void OnConsequence(GameMenuOption gameMenuOption)`

**Purpose:** Invoked when the consequence event is raised.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.OnConsequence(gameMenuOption);
```

### InvokeConsequence
`public void InvokeConsequence(int index)`

**Purpose:** Executes the InvokeConsequence logic.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.InvokeConsequence(0);
```

### SetBackgroundMeshName
`public void SetBackgroundMeshName(string name)`

**Purpose:** Assigns a new value to background mesh name and updates the object's internal state.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.SetBackgroundMeshName("example");
```

### SetPanelSound
`public void SetPanelSound(string panelSoundID)`

**Purpose:** Assigns a new value to panel sound and updates the object's internal state.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.SetPanelSound("example");
```

### SetAmbientSound
`public void SetAmbientSound(string ambientSoundID)`

**Purpose:** Assigns a new value to ambient sound and updates the object's internal state.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.SetAmbientSound("example");
```

### OpenTownManagement
`public void OpenTownManagement()`

**Purpose:** Opens the resource or UI associated with town management.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.OpenTownManagement();
```

### OpenRecruitVolunteers
`public void OpenRecruitVolunteers()`

**Purpose:** Opens the resource or UI associated with recruit volunteers.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.OpenRecruitVolunteers();
```

### OpenTournamentLeaderboards
`public void OpenTournamentLeaderboards()`

**Purpose:** Opens the resource or UI associated with tournament leaderboards.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.OpenTournamentLeaderboards();
```

### OpenTroopSelection
`public void OpenTroopSelection(TroopRoster fullRoster, TroopRoster initialSelections, List<Ship> eligibleShips, Func<CharacterObject, bool> canChangeStatusOfTroop, Action<TroopRoster> onDone, int maxSelectableTroopCount, int minSelectableTroopCount = 1, bool isNavalRaid = false)`

**Purpose:** Opens the resource or UI associated with troop selection.

```csharp
// Obtain an instance of MenuContext from the subsystem API first
MenuContext menuContext = ...;
menuContext.OpenTroopSelection(fullRoster, initialSelections, eligibleShips, func<CharacterObject, false, onDone, 0, 0, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MenuContext menuContext = ...;
menuContext.Refresh();
```

## See Also

- [Area Index](../)