---
title: "MultiplayerAdminPanelVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminPanelVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminPanelVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelVM.cs`

## Overview

`MultiplayerAdminPanelVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsApplyDisabled` | `public bool IsApplyDisabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `ApplyText` | `public string ApplyText { get; set; }` |
| `StartMissionText` | `public string StartMissionText { get; set; }` |
| `ApplyDisabledHint` | `public HintViewModel ApplyDisabledHint { get; set; }` |
| `OptionGroups` | `public MBBindingList<MultiplayerAdminPanelOptionGroupVM> OptionGroups { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### ExecuteApplyChanges
`public void ExecuteApplyChanges()`

**Purpose:** Executes the `apply changes` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

## Usage Example

```csharp
var value = new MultiplayerAdminPanelVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)