---
title: "GameMenuOverlay"
description: "Auto-generated class reference for GameMenuOverlay."
---
# GameMenuOverlay

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOverlay : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/GameMenuOverlay.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.RefreshValues();
```

### ExecuteOnOverlayClosed
`public virtual void ExecuteOnOverlayClosed()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with on overlay closed.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.ExecuteOnOverlayClosed();
```

### ExecuteOnOverlayOpened
`public virtual void ExecuteOnOverlayOpened()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with on overlay opened.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.ExecuteOnOverlayOpened();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.OnFinalize();
```

### Refresh
`public virtual void Refresh()`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.Refresh();
```

### UpdateOverlayType
`public virtual void UpdateOverlayType(GameMenu.MenuOverlayType newType)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of overlay type.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.UpdateOverlayType(newType);
```

### OnFrameTick
`public virtual void OnFrameTick(float dt)`

**Purpose:** **Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.OnFrameTick(0);
```

### HourlyTick
`public void HourlyTick()`

**Purpose:** **Purpose:** Executes the HourlyTick logic.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.HourlyTick();
```

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to exit input key and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuOverlay from the subsystem API first
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.SetExitInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenuOverlay gameMenuOverlay = ...;
gameMenuOverlay.RefreshValues();
```

## See Also

- [Area Index](../)