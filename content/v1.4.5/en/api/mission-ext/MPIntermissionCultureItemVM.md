---
title: "MPIntermissionCultureItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPIntermissionCultureItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPIntermissionCultureItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPIntermissionCultureItemVM : MPCultureItemVM`
**Base:** `MPCultureItemVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission/MPIntermissionCultureItemVM.cs`

## Overview

`MPIntermissionCultureItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Votes` | `public int Votes { get; set; }` |

## Key Methods

### ExecuteVote
`public void ExecuteVote()`

**Purpose:** Executes the `vote` operation or workflow.

## Usage Example

```csharp
var value = new MPIntermissionCultureItemVM();
value.ExecuteVote();
```

## See Also

- [Complete Class Catalog](../catalog)