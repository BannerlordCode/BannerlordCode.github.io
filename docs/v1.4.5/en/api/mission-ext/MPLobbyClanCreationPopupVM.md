<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyClanCreationPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyClanCreationPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyClanCreationPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Clan/MPLobbyClanCreationPopupVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Executes the `open popup` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### UpdateFactionErrorText
`public void UpdateFactionErrorText()`

**Purpose:** Updates the state or data of `faction error text`.

### UpdateSigilIconErrorText
`public void UpdateSigilIconErrorText()`

**Purpose:** Updates the state or data of `sigil icon error text`.

### UpdateConfirmation
`public void UpdateConfirmation(PlayerId playerId, ClanCreationAnswer answer)`

**Purpose:** Updates the state or data of `confirmation`.

### ExecuteSwitchToWaiting
`public void ExecuteSwitchToWaiting()`

**Purpose:** Executes the `switch to waiting` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

## Usage Example

```csharp
var value = new MPLobbyClanCreationPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)