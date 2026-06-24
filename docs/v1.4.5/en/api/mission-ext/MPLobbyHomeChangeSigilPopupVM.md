<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyHomeChangeSigilPopupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyHomeChangeSigilPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyHomeChangeSigilPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPLobbyHomeChangeSigilPopupVM.cs`

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

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Open
`public void Open()`

**Purpose:** Handles logic related to `open`.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### ExecuteChangeSigil
`public void ExecuteChangeSigil()`

**Purpose:** Executes the `change sigil` operation or workflow.

### OnLootUpdated
`public void OnLootUpdated(int finalLoot)`

**Purpose:** Called when the `loot updated` event is raised.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new MPLobbyHomeChangeSigilPopupVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)