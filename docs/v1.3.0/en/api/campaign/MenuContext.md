<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuContext`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuContext

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MenuContext : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/GameState/MenuContext.cs`

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

**Purpose:** Refreshes the display or cache of `refresh`.

### SwitchToMenu
`public void SwitchToMenu(string menuId)`

**Purpose:** Handles logic related to `switch to menu`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnHourlyTick
`public void OnHourlyTick()`

**Purpose:** Called when the `hourly tick` event is raised.

### GetCurrentRepeatableObject
`public object GetCurrentRepeatableObject()`

**Purpose:** Gets the current value of `current repeatable object`.

### GetSelectedObject
`public object GetSelectedObject()`

**Purpose:** Gets the current value of `selected object`.

### GetSelectedRepeatableObject
`public object GetSelectedRepeatableObject()`

**Purpose:** Gets the current value of `selected repeatable object`.

### SetRepeatObjectList
`public void SetRepeatObjectList(IEnumerable<object> list)`

**Purpose:** Sets the value or state of `repeat object list`.

### OnConsequence
`public void OnConsequence(GameMenuOption gameMenuOption)`

**Purpose:** Called when the `consequence` event is raised.

### InvokeConsequence
`public void InvokeConsequence(int index)`

**Purpose:** Handles logic related to `invoke consequence`.

### SetBackgroundMeshName
`public void SetBackgroundMeshName(string name)`

**Purpose:** Sets the value or state of `background mesh name`.

### SetPanelSound
`public void SetPanelSound(string panelSoundID)`

**Purpose:** Sets the value or state of `panel sound`.

### SetAmbientSound
`public void SetAmbientSound(string ambientSoundID)`

**Purpose:** Sets the value or state of `ambient sound`.

### OpenTownManagement
`public void OpenTownManagement()`

**Purpose:** Handles logic related to `open town management`.

### OpenRecruitVolunteers
`public void OpenRecruitVolunteers()`

**Purpose:** Handles logic related to `open recruit volunteers`.

### OpenTournamentLeaderboards
`public void OpenTournamentLeaderboards()`

**Purpose:** Handles logic related to `open tournament leaderboards`.

### OpenTroopSelection
`public void OpenTroopSelection(TroopRoster fullRoster, TroopRoster initialSelections, Func<CharacterObject, bool> canChangeStatusOfTroop, Action<TroopRoster> onDone, int maxSelectableTroopCount, int minSelectableTroopCount = 1)`

**Purpose:** Handles logic related to `open troop selection`.

## Usage Example

```csharp
var value = new MenuContext();
value.Refresh();
```

## See Also

- [Complete Class Catalog](../catalog)