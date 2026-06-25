---
title: "MultiplayerAdminPanelNumericOptionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminPanelNumericOptionVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminPanelNumericOptionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelNumericOptionVM : MultiplayerAdminPanelOptionBaseVM`
**Base:** `MultiplayerAdminPanelOptionBaseVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel/MultiplayerAdminPanelNumericOptionVM.cs`

## Overview

`MultiplayerAdminPanelNumericOptionVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.AdminPanel` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNumericOption` | `public bool IsNumericOption { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `MinValueInt` | `public int MinValueInt { get; set; }` |
| `MaxValueInt` | `public int MaxValueInt { get; set; }` |

## Key Methods

### UpdateValues
`public override void UpdateValues()`

**Purpose:** Updates the state or data of `values`.

## Usage Example

```csharp
var value = new MultiplayerAdminPanelNumericOptionVM();
value.UpdateValues();
```

## See Also

- [Complete Class Catalog](../catalog)