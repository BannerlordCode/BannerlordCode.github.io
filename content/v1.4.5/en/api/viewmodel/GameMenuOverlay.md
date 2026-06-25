---
title: "GameMenuOverlay"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuOverlay`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuOverlay

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOverlay : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/GameMenuOverlay.cs`

## Overview

`GameMenuOverlay` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsContextMenuEnabled` | `public bool IsContextMenuEnabled { get; set; }` |
| `IsInitializationOver` | `public bool IsInitializationOver { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `ContextList` | `public MBBindingList<StringItemWithEnabledAndHintVM> ContextList { get; set; }` |
| `CurrentOverlayType` | `public int CurrentOverlayType { get; set; }` |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteOnOverlayClosed
`public virtual void ExecuteOnOverlayClosed()`

**Purpose:** Executes the `on overlay closed` operation or workflow.

### ExecuteOnOverlayOpened
`public virtual void ExecuteOnOverlayOpened()`

**Purpose:** Executes the `on overlay opened` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Refresh
`public virtual void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### UpdateOverlayType
`public virtual void UpdateOverlayType(TaleWorlds.CampaignSystem.GameMenus.GameMenu.MenuOverlayType newType)`

**Purpose:** Updates the state or data of `overlay type`.

### OnFrameTick
`public virtual void OnFrameTick(float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### HourlyTick
`public void HourlyTick()`

**Purpose:** Handles logic related to `hourly tick`.

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `exit input key`.

## Usage Example

```csharp
var value = new GameMenuOverlay();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)