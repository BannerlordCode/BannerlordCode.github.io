---
title: "MPLobbySigilItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbySigilItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbySigilItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbySigilItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbySigilItemVM.cs`

## Overview

`MPLobbySigilItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconID` | `public int IconID { get; }` |
| `IconPath` | `public string IconPath { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### RefreshWith
`public void RefreshWith(int iconID)`

**Purpose:** Refreshes the display or cache of `with`.

### RefreshWith
`public void RefreshWith(Banner banner)`

**Purpose:** Refreshes the display or cache of `with`.

### RefreshWith
`public void RefreshWith(string bannerCode)`

**Purpose:** Refreshes the display or cache of `with`.

## Usage Example

```csharp
var value = new MPLobbySigilItemVM();
value.RefreshWith(0);
```

## See Also

- [Complete Class Catalog](../catalog)