---
title: "MPLobbySigilItemVM"
description: "Auto-generated class reference for MPLobbySigilItemVM."
---
# MPLobbySigilItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbySigilItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbySigilItemVM.cs`

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

**Purpose:** Keeps the display or cache of `with` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbySigilItemVM from the subsystem API first
MPLobbySigilItemVM mPLobbySigilItemVM = ...;
mPLobbySigilItemVM.RefreshWith(0);
```

### RefreshWith
`public void RefreshWith(Banner banner)`

**Purpose:** Keeps the display or cache of `with` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbySigilItemVM from the subsystem API first
MPLobbySigilItemVM mPLobbySigilItemVM = ...;
mPLobbySigilItemVM.RefreshWith(banner);
```

### RefreshWith
`public void RefreshWith(string bannerCode)`

**Purpose:** Keeps the display or cache of `with` in sync with the underlying state.

```csharp
// Obtain an instance of MPLobbySigilItemVM from the subsystem API first
MPLobbySigilItemVM mPLobbySigilItemVM = ...;
mPLobbySigilItemVM.RefreshWith("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPLobbySigilItemVM mPLobbySigilItemVM = ...;
mPLobbySigilItemVM.RefreshWith(0);
```

## See Also

- [Area Index](../)