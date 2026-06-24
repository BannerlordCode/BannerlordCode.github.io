<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu/GameMenuVM.cs`

## Overview

`GameMenuVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `IsNight` | `public bool IsNight { get; set; }` |
| `IsInSiegeMode` | `public bool IsInSiegeMode { get; set; }` |
| `IsEncounterMenu` | `public bool IsEncounterMenu { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ContextText` | `public string ContextText { get; set; }` |
| `ItemList` | `public MBBindingList<GameMenuItemVM> ItemList { get; set; }` |
| `ProgressItemList` | `public MBBindingList<GameMenuItemProgressVM> ProgressItemList { get; set; }` |
| `Background` | `public string Background { get; set; }` |
| `BackgroundCopy` | `public string BackgroundCopy { get; set; }` |
| `MenuId` | `public string MenuId { get; set; }` |
| `PlunderItems` | `public MBBindingList<GameMenuPlunderItemVM> PlunderItems { get; set; }` |

## Key Methods

### Get
`public TItem Get()`

**Purpose:** Gets the current value of `get`.

### Release
`public void Release(TItem item)`

**Purpose:** Handles logic related to `release`.

### Compare
`public int Compare(GameMenuItemVM x, GameMenuItemVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetIdleMode
`public void SetIdleMode(bool isIdle)`

**Purpose:** Sets the value or state of `idle mode`.

### Refresh
`public void Refresh(bool forceUpdateItems)`

**Purpose:** Refreshes the display or cache of `refresh`.

### OnFrameTick
`public void OnFrameTick()`

**Purpose:** Called when the `frame tick` event is raised.

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext newMenuContext)`

**Purpose:** Updates the state or data of `menu context`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetLeaveHotKey
`public void SetLeaveHotKey(GameKey gameKey)`

**Purpose:** Sets the value or state of `leave hot key`.

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Executes the `link` operation or workflow.

## Usage Example

```csharp
var value = new GameMenuVM();
value.Get();
```

## See Also

- [Complete Class Catalog](../catalog)