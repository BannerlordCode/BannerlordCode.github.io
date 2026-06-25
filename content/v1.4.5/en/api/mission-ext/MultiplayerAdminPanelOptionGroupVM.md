---
title: "MultiplayerAdminPanelOptionGroupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminPanelOptionGroupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminPanelOptionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelOptionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelOptionGroupVM.cs`

## Overview

`MultiplayerAdminPanelOptionGroupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RequiresRestart` | `public bool RequiresRestart { get; set; }` |
| `GroupName` | `public string GroupName { get; set; }` |
| `RequiresRestartHint` | `public HintViewModel RequiresRestartHint { get; set; }` |
| `Options` | `public MBBindingList<MultiplayerAdminPanelOptionBaseVM> Options { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MultiplayerAdminPanelOptionGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)