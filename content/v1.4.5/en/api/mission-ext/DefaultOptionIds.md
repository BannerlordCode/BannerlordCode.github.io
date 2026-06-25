---
title: "DefaultOptionIds"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultOptionIds`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultOptionIds

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DefaultOptionIds`
**Area:** mission-ext

## Overview

`DefaultOptionIds` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsUndecided` | `public bool IsUndecided { get; }` |

## Key Methods

### BuildAvailableOptions
`public override AdminPanelMultiSelectionOption BuildAvailableOptions(MBReadOnlyList<IAdminPanelMultiSelectionItem> options)`

**Purpose:** Handles logic related to `build available options`.

### BuildAvailableOptions
`public override AdminPanelMultiSelectionOption BuildAvailableOptions(OptionType optionType, bool buildDefaultValue = true)`

**Purpose:** Handles logic related to `build available options`.

### BuildOtherCultureOption
`public AdminPanelCultureOption BuildOtherCultureOption(AdminPanelCultureOption otherOption)`

**Purpose:** Handles logic related to `build other culture option`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### BuildGameTypeOption
`public AdminPanelUsableMapsOption BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**Purpose:** Handles logic related to `build game type option`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### GetIsDisabled
`public override bool GetIsDisabled(out string reason)`

**Purpose:** Gets the current value of `is disabled`.

### BuildOptionGroups
`public AdminPanelStartMissionAction BuildOptionGroups(MBReadOnlyList<IAdminPanelOptionGroup> optionGroups)`

**Purpose:** Handles logic related to `build option groups`.

### GetIsDisabled
`public override bool GetIsDisabled(out string reason)`

**Purpose:** Gets the current value of `is disabled`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### GetIsAvailable
`public override bool GetIsAvailable()`

**Purpose:** Gets the current value of `is available`.

### BuildGameTypeOption
`public AdminPanelGameTypeDependentNumericOption BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**Purpose:** Handles logic related to `build game type option`.

### BuildInvalidGameTypes
`public AdminPanelGameTypeDependentNumericOption BuildInvalidGameTypes(string gameTypes)`

**Purpose:** Handles logic related to `build invalid game types`.

### BuildRequiredGameTypes
`public AdminPanelGameTypeDependentNumericOption BuildRequiredGameTypes(string gameTypes)`

**Purpose:** Handles logic related to `build required game types`.

### GetIsAvailable
`public override bool GetIsAvailable()`

**Purpose:** Gets the current value of `is available`.

### BuildGameTypeOption
`public AdminPanelGameTypeDependentAction BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**Purpose:** Handles logic related to `build game type option`.

### BuildInvalidGameTypes
`public AdminPanelGameTypeDependentAction BuildInvalidGameTypes(string gameTypes)`

**Purpose:** Handles logic related to `build invalid game types`.

### BuildRequiredGameTypes
`public AdminPanelGameTypeDependentAction BuildRequiredGameTypes(string gameTypes)`

**Purpose:** Handles logic related to `build required game types`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
// First obtain a DefaultOptionIds instance from game state, then call one of its public methods
var value = new DefaultOptionIds();
value.BuildAvailableOptions(options);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
