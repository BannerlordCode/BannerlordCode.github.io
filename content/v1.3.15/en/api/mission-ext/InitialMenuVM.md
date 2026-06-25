---
title: "InitialMenuVM"
description: "Auto-generated class reference for InitialMenuVM."
---
# InitialMenuVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/InitialMenu/InitialMenuVM.cs`

## Overview

`InitialMenuVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuOptions` | `public MBBindingList<InitialMenuOptionVM> MenuOptions { get; set; }` |
| `DownloadingText` | `public string DownloadingText { get; set; }` |
| `SelectProfileText` | `public string SelectProfileText { get; set; }` |
| `ProfileName` | `public string ProfileName { get; set; }` |
| `IsProfileSelectionEnabled` | `public bool IsProfileSelectionEnabled { get; set; }` |
| `IsDownloadingContent` | `public bool IsDownloadingContent { get; set; }` |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled { get; set; }` |
| `IsUpsellButtonVisible` | `public bool IsUpsellButtonVisible { get; set; }` |
| `IsUpsellButtonActive` | `public bool IsUpsellButtonActive { get; set; }` |
| `CurrentLanguageString` | `public string CurrentLanguageString { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of InitialMenuVM from the subsystem API first
InitialMenuVM initialMenuVM = ...;
initialMenuVM.RefreshValues();
```

### RefreshMenuOptions
`public void RefreshMenuOptions()`

**Purpose:** Keeps the display or cache of `menu options` in sync with the underlying state.

```csharp
// Obtain an instance of InitialMenuVM from the subsystem API first
InitialMenuVM initialMenuVM = ...;
initialMenuVM.RefreshMenuOptions();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of InitialMenuVM from the subsystem API first
InitialMenuVM initialMenuVM = ...;
initialMenuVM.OnFinalize();
```

### ExecuteNavigateToDLCStorePage
`public void ExecuteNavigateToDLCStorePage()`

**Purpose:** Runs the operation or workflow associated with `navigate to d l c store page`.

```csharp
// Obtain an instance of InitialMenuVM from the subsystem API first
InitialMenuVM initialMenuVM = ...;
initialMenuVM.ExecuteNavigateToDLCStorePage();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InitialMenuVM initialMenuVM = ...;
initialMenuVM.RefreshValues();
```

## See Also

- [Area Index](../)