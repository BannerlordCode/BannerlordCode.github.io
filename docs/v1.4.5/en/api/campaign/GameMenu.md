<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenu`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenu

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenu`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/GameMenu.cs`

## Overview

`GameMenu` lives in `TaleWorlds.CampaignSystem.GameMenus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public MenuAndOptionType Type { get; }` |
| `StringId` | `public string StringId { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `MenuTitle` | `public TextObject MenuTitle { get; }` |
| `OverlayType` | `public MenuOverlayType OverlayType { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `MenuRepeatObjects` | `public List<object> MenuRepeatObjects { get; }` |
| `CurrentRepeatableObject` | `public object CurrentRepeatableObject { get; }` |
| `IsWaitMenu` | `public bool IsWaitMenu { get; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Progress` | `public float Progress { get; }` |
| `TargetWaitHours` | `public float TargetWaitHours { get; }` |
| `OnTick` | `public OnTickDelegate OnTick { get; }` |
| `OnCondition` | `public OnConditionDelegate OnCondition { get; }` |
| `OnConsequence` | `public OnConsequenceDelegate OnConsequence { get; }` |
| `CurrentRepeatableIndex` | `public int CurrentRepeatableIndex { get; }` |
| `AutoSelectFirst` | `public bool AutoSelectFirst { get; }` |

## Key Methods

### SetMenuRepeatObjects
`public void SetMenuRepeatObjects(IEnumerable<object> list)`

**Purpose:** Sets the value or state of `menu repeat objects`.

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(Game game, MenuContext menuContext, int menuItemNumber)`

**Purpose:** Gets the current value of `menu option conditions hold`.

### GetMenuOptionText
`public TextObject GetMenuOptionText(int menuItemNumber)`

**Purpose:** Gets the current value of `menu option text`.

### GetGameMenuOption
`public GameMenuOption GetGameMenuOption(int menuItemNumber)`

**Purpose:** Gets the current value of `game menu option`.

### GetMenuOptionText2
`public TextObject GetMenuOptionText2(int menuItemNumber)`

**Purpose:** Gets the current value of `menu option text2`.

### GetMenuOptionIdString
`public string GetMenuOptionIdString(int menuItemNumber)`

**Purpose:** Gets the current value of `menu option id string`.

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(int menuItemNumber)`

**Purpose:** Gets the current value of `menu option tooltip`.

### GetMenuOptionIsLeave
`public bool GetMenuOptionIsLeave(int menuItemNumber)`

**Purpose:** Gets the current value of `menu option is leave`.

### SetProgressOfWaitingInMenu
`public void SetProgressOfWaitingInMenu(float progress)`

**Purpose:** Sets the value or state of `progress of waiting in menu`.

### SetTargetedWaitingTimeAndInitialProgress
`public void SetTargetedWaitingTimeAndInitialProgress(float targetedWaitingTime, float initialProgress)`

**Purpose:** Sets the value or state of `targeted waiting time and initial progress`.

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(Game game, MenuContext menuContext)`

**Purpose:** Gets the current value of `leave menu option`.

### RunOnTick
`public void RunOnTick(MenuContext menuContext, float dt)`

**Purpose:** Handles logic related to `run on tick`.

### RunWaitMenuCondition
`public bool RunWaitMenuCondition(MenuContext menuContext)`

**Purpose:** Handles logic related to `run wait menu condition`.

### RunWaitMenuConsequence
`public void RunWaitMenuConsequence(MenuContext menuContext)`

**Purpose:** Handles logic related to `run wait menu consequence`.

### RunMenuOptionConsequence
`public void RunMenuOptionConsequence(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Handles logic related to `run menu option consequence`.

### StartWait
`public void StartWait()`

**Purpose:** Handles logic related to `start wait`.

### EndWait
`public void EndWait()`

**Purpose:** Handles logic related to `end wait`.

### RunOnInit
`public void RunOnInit(Game game, MenuContext menuContext)`

**Purpose:** Handles logic related to `run on init`.

### PreInit
`public void PreInit(MenuContext menuContext)`

**Purpose:** Handles logic related to `pre init`.

### AfterInit
`public void AfterInit(MenuContext menuContext)`

**Purpose:** Handles logic related to `after init`.

### GetText
`public TextObject GetText()`

**Purpose:** Gets the current value of `text`.

### ActivateGameMenu
`public static void ActivateGameMenu(string menuId)`

**Purpose:** Handles logic related to `activate game menu`.

### SwitchToMenu
`public static void SwitchToMenu(string menuId)`

**Purpose:** Handles logic related to `switch to menu`.

### ExitToLast
`public static void ExitToLast()`

**Purpose:** Handles logic related to `exit to last`.

## Usage Example

```csharp
var value = new GameMenu();
value.SetMenuRepeatObjects(list);
```

## See Also

- [Complete Class Catalog](../catalog)