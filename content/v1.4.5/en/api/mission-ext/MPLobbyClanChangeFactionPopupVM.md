---
title: "MPLobbyClanChangeFactionPopupVM"
description: "Auto-generated class reference for MPLobbyClanChangeFactionPopupVM."
---
# MPLobbyClanChangeFactionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanChangeFactionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanChangeFactionPopupVM.cs`

## Overview

`MPLobbyClanChangeFactionPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanChangeFaction` | `public bool CanChangeFaction { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `FactionsList` | `public MBBindingList<MPCultureItemVM> FactionsList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanChangeFactionPopupVM from the subsystem API first
MPLobbyClanChangeFactionPopupVM mPLobbyClanChangeFactionPopupVM = ...;
mPLobbyClanChangeFactionPopupVM.RefreshValues();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of MPLobbyClanChangeFactionPopupVM from the subsystem API first
MPLobbyClanChangeFactionPopupVM mPLobbyClanChangeFactionPopupVM = ...;
mPLobbyClanChangeFactionPopupVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyClanChangeFactionPopupVM from the subsystem API first
MPLobbyClanChangeFactionPopupVM mPLobbyClanChangeFactionPopupVM = ...;
mPLobbyClanChangeFactionPopupVM.ExecuteClosePopup();
```

### ExecuteChangeFaction
`public void ExecuteChangeFaction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with change faction.

```csharp
// Obtain an instance of MPLobbyClanChangeFactionPopupVM from the subsystem API first
MPLobbyClanChangeFactionPopupVM mPLobbyClanChangeFactionPopupVM = ...;
mPLobbyClanChangeFactionPopupVM.ExecuteChangeFaction();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyClanChangeFactionPopupVM from the subsystem API first
MPLobbyClanChangeFactionPopupVM mPLobbyClanChangeFactionPopupVM = ...;
mPLobbyClanChangeFactionPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyClanChangeFactionPopupVM from the subsystem API first
MPLobbyClanChangeFactionPopupVM mPLobbyClanChangeFactionPopupVM = ...;
mPLobbyClanChangeFactionPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyClanChangeFactionPopupVM from the subsystem API first
MPLobbyClanChangeFactionPopupVM mPLobbyClanChangeFactionPopupVM = ...;
mPLobbyClanChangeFactionPopupVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanChangeFactionPopupVM mPLobbyClanChangeFactionPopupVM = ...;
mPLobbyClanChangeFactionPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)