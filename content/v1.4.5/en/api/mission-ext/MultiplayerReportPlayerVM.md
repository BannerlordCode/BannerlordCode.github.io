---
title: "MultiplayerReportPlayerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerReportPlayerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerReportPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerReportPlayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerReportPlayerVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OpenNewReportWithGamePlayerId
`public void OpenNewReportWithGamePlayerId(string gameId, PlayerId playerId, string playerName, bool isRequestedFromMission)`

**Purpose:** Handles logic related to `open new report with game player id`.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

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
var value = new MultiplayerReportPlayerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)