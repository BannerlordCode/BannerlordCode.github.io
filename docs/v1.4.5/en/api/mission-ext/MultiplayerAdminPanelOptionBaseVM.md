<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminPanelOptionBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminPanelOptionBaseVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerAdminPanelOptionBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelOptionBaseVM.cs`

## Overview

`MultiplayerAdminPanelOptionBaseVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsRequired` | `public bool IsRequired { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsDirty` | `public bool IsDirty { get; set; }` |
| `CanResetToDefault` | `public bool CanResetToDefault { get; set; }` |
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `RequiresRestart` | `public bool RequiresRestart { get; set; }` |
| `OptionTitle` | `public string OptionTitle { get; set; }` |
| `OptionDescription` | `public string OptionDescription { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `DescriptionHint` | `public HintViewModel DescriptionHint { get; set; }` |
| `RequiresRestartHint` | `public HintViewModel RequiresRestartHint { get; set; }` |
| `IsDirtyHint` | `public HintViewModel IsDirtyHint { get; set; }` |
| `RestoreToDefaultsHint` | `public HintViewModel RestoreToDefaultsHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### UpdateValues
`public virtual void UpdateValues()`

**Purpose:** Updates the state or data of `values`.

### ExecuteRevertChanges
`public virtual void ExecuteRevertChanges()`

**Purpose:** Executes the `revert changes` operation or workflow.

### ExecuteRestoreDefaults
`public virtual void ExecuteRestoreDefaults()`

**Purpose:** Executes the `restore defaults` operation or workflow.

## Usage Example

```csharp
var implementation = new CustomMultiplayerAdminPanelOptionBaseVM();
```

## See Also

- [Complete Class Catalog](../catalog)