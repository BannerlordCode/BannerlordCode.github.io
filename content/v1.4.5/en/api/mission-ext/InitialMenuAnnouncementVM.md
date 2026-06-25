---
title: "InitialMenuAnnouncementVM"
description: "Auto-generated class reference for InitialMenuAnnouncementVM."
---
# InitialMenuAnnouncementVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuAnnouncementVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu/InitialMenuAnnouncementVM.cs`

## Overview

`InitialMenuAnnouncementVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageUrl` | `public string ImageUrl { get; set; }` |
| `LinkUrl` | `public string LinkUrl { get; set; }` |
| `ExcludedModules` | `public List<string> ExcludedModules { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsLinkAvailable` | `public bool IsLinkAvailable { get; set; }` |
| `ImageSourcePath` | `public string ImageSourcePath { get; set; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of InitialMenuAnnouncementVM from the subsystem API first
InitialMenuAnnouncementVM initialMenuAnnouncementVM = ...;
initialMenuAnnouncementVM.Tick();
```

### Refresh
`public void Refresh()`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of InitialMenuAnnouncementVM from the subsystem API first
InitialMenuAnnouncementVM initialMenuAnnouncementVM = ...;
initialMenuAnnouncementVM.Refresh();
```

### ExecuteNavigateToLink
`public void ExecuteNavigateToLink()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with navigate to link.

```csharp
// Obtain an instance of InitialMenuAnnouncementVM from the subsystem API first
InitialMenuAnnouncementVM initialMenuAnnouncementVM = ...;
initialMenuAnnouncementVM.ExecuteNavigateToLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InitialMenuAnnouncementVM initialMenuAnnouncementVM = ...;
initialMenuAnnouncementVM.Tick();
```

## See Also

- [Area Index](../)