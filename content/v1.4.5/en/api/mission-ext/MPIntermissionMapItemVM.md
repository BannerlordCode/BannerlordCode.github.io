---
title: "MPIntermissionMapItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPIntermissionMapItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPIntermissionMapItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPIntermissionMapItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission/MPIntermissionMapItemVM.cs`

## Overview

`MPIntermissionMapItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `MapID` | `public string MapID { get; set; }` |
| `MapName` | `public string MapName { get; set; }` |
| `Votes` | `public int Votes { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteVote
`public void ExecuteVote()`

**Purpose:** Executes the `vote` operation or workflow.

## Usage Example

```csharp
var value = new MPIntermissionMapItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)