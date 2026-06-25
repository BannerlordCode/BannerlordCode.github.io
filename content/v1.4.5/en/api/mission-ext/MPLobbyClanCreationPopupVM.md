---
title: "MPLobbyClanCreationPopupVM"
description: "Auto-generated class reference for MPLobbyClanCreationPopupVM."
---
# MPLobbyClanCreationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanCreationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanCreationPopupVM.cs`

## Overview

`MPLobbyClanCreationPopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasCreationStarted` | `public bool HasCreationStarted { get; set; }` |
| `IsWaiting` | `public bool IsWaiting { get; set; }` |
| `CreateClanText` | `public string CreateClanText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `NameErrorText` | `public string NameErrorText { get; set; }` |
| `TagText` | `public string TagText { get; set; }` |
| `TagErrorText` | `public string TagErrorText { get; set; }` |
| `FactionText` | `public string FactionText { get; set; }` |
| `FactionErrorText` | `public string FactionErrorText { get; set; }` |
| `SigilText` | `public string SigilText { get; set; }` |
| `SigilIconErrorText` | `public string SigilIconErrorText { get; set; }` |
| `CreateText` | `public string CreateText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `NameInputText` | `public string NameInputText { get; set; }` |
| `TagInputText` | `public string TagInputText { get; set; }` |
| `WaitingForConfirmationText` | `public string WaitingForConfirmationText { get; set; }` |
| `FactionsList` | `public MBBindingList<MPCultureItemVM> FactionsList { get; set; }` |
| `IconsList` | `public MBBindingList<MPLobbySigilItemVM> IconsList { get; set; }` |
| `PartyMembersList` | `public MBBindingList<MPLobbyClanMemberItemVM> PartyMembersList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.RefreshValues();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.ExecuteOpenPopup();
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.ExecuteClosePopup();
```

### UpdateFactionErrorText
`public void UpdateFactionErrorText()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of faction error text.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.UpdateFactionErrorText();
```

### UpdateSigilIconErrorText
`public void UpdateSigilIconErrorText()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of sigil icon error text.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.UpdateSigilIconErrorText();
```

### UpdateConfirmation
`public void UpdateConfirmation(PlayerId playerId, ClanCreationAnswer answer)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of confirmation.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.UpdateConfirmation(playerId, answer);
```

### ExecuteSwitchToWaiting
`public void ExecuteSwitchToWaiting()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with switch to waiting.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.ExecuteSwitchToWaiting();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MPLobbyClanCreationPopupVM from the subsystem API first
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.SetCancelInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbyClanCreationPopupVM mPLobbyClanCreationPopupVM = ...;
mPLobbyClanCreationPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)