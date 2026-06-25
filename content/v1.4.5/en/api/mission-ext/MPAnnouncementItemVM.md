---
title: "MPAnnouncementItemVM"
description: "Auto-generated class reference for MPAnnouncementItemVM."
---
# MPAnnouncementItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAnnouncementItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home/MPAnnouncementItemVM.cs`

## Overview

`MPAnnouncementItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Home` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSingleDate` | `public bool IsSingleDate { get; set; }` |
| `IsPinned` | `public bool IsPinned { get; set; }` |
| `Type` | `public int Type { get; set; }` |
| `TypeName` | `public string TypeName { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `DateText` | `public string DateText { get; set; }` |

## Key Methods

### ExecuteInspect
`public void ExecuteInspect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with inspect.

```csharp
// Obtain an instance of MPAnnouncementItemVM from the subsystem API first
MPAnnouncementItemVM mPAnnouncementItemVM = ...;
mPAnnouncementItemVM.ExecuteInspect();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPAnnouncementItemVM mPAnnouncementItemVM = ...;
mPAnnouncementItemVM.ExecuteInspect();
```

## See Also

- [Area Index](../)