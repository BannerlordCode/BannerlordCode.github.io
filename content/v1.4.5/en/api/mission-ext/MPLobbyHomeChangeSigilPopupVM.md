---
title: "MPLobbyHomeChangeSigilPopupVM"
description: "Auto-generated class reference for MPLobbyHomeChangeSigilPopupVM."
---
# MPLobbyHomeChangeSigilPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyHomeChangeSigilPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPLobbyHomeChangeSigilPopupVM.cs`

## Overview

`MPLobbyHomeChangeSigilPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedSigil` | `public MPLobbyCosmeticSigilItemVM SelectedSigil { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsLoading` | `public bool IsLoading { get; set; }` |
| `IsInClan` | `public bool IsInClan { get; set; }` |
| `IsUsingClanSigil` | `public bool IsUsingClanSigil { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ChangeText` | `public string ChangeText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `Loot` | `public int Loot { get; set; }` |
| `SigilList` | `public MBBindingList<MPLobbyCosmeticSigilItemVM> SigilList { get; set; }` |

## Key Methods

### Compare
`public int Compare(MPLobbyCosmeticSigilItemVM x, MPLobbyCosmeticSigilItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
var result = mPLobbyHomeChangeSigilPopupVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.RefreshValues();
```

### Open
`public void Open()`

**Purpose:** Opens the resource or UI represented by the this instance.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.Open();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.ExecuteClosePopup();
```

### ExecuteChangeSigil
`public void ExecuteChangeSigil()`

**Purpose:** Runs the operation or workflow associated with change sigil.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.ExecuteChangeSigil();
```

### OnLootUpdated
`public void OnLootUpdated(int finalLoot)`

**Purpose:** Invoked when the loot updated event is raised.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.OnLootUpdated(0);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyHomeChangeSigilPopupVM from the subsystem API first
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyHomeChangeSigilPopupVM mPLobbyHomeChangeSigilPopupVM = ...;
mPLobbyHomeChangeSigilPopupVM.Compare(x, y);
```

## See Also

- [Area Index](../)