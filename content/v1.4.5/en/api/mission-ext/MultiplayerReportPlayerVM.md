---
title: "MultiplayerReportPlayerVM"
description: "Auto-generated class reference for MultiplayerReportPlayerVM."
---
# MultiplayerReportPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerReportPlayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerReportPlayerVM.cs`

## Overview

`MultiplayerReportPlayerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ReportMessage` | `public string ReportMessage { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `ReportReasonText` | `public string ReportReasonText { get; set; }` |
| `CanSendReport` | `public bool CanSendReport { get; set; }` |
| `IsRequestedFromMission` | `public bool IsRequestedFromMission { get; set; }` |
| `MuteDescriptionText` | `public string MuteDescriptionText { get; set; }` |
| `ReportReasons` | `public SelectorVM<SelectorItemVM> ReportReasons { get; set; }` |
| `DisabledReasonHint` | `public HintViewModel DisabledReasonHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MultiplayerReportPlayerVM from the subsystem API first
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.RefreshValues();
```

### OpenNewReportWithGamePlayerId
`public void OpenNewReportWithGamePlayerId(string gameId, PlayerId playerId, string playerName, bool isRequestedFromMission)`

**Purpose:** Opens the resource or UI associated with `new report with game player id`.

```csharp
// Obtain an instance of MultiplayerReportPlayerVM from the subsystem API first
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.OpenNewReportWithGamePlayerId("example", playerId, "example", false);
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with `done`.

```csharp
// Obtain an instance of MultiplayerReportPlayerVM from the subsystem API first
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.ExecuteDone();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of MultiplayerReportPlayerVM from the subsystem API first
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.ExecuteCancel();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MultiplayerReportPlayerVM from the subsystem API first
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerReportPlayerVM from the subsystem API first
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerReportPlayerVM from the subsystem API first
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerReportPlayerVM multiplayerReportPlayerVM = ...;
multiplayerReportPlayerVM.RefreshValues();
```

## See Also

- [Area Index](../)