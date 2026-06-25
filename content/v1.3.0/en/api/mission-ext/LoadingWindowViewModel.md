---
title: "LoadingWindowViewModel"
description: "Auto-generated class reference for LoadingWindowViewModel."
---
# LoadingWindowViewModel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs`

## Overview

`LoadingWindowViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `LoadingWindowViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentlyShowingMultiplayer` | `public bool CurrentlyShowingMultiplayer { get; }` |
| `Enabled` | `public bool Enabled { get; set; }` |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GameModeText` | `public string GameModeText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `IsMultiplayer` | `public bool IsMultiplayer { get; set; }` |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled { get; set; }` |
| `LoadingImageName` | `public string LoadingImageName { get; set; }` |

## Key Methods

### SetTotalGenericImageCount
`public void SetTotalGenericImageCount(int totalGenericImageCount)`

**Purpose:** **Purpose:** Assigns a new value to total generic image count and updates the object's internal state.

```csharp
// Obtain an instance of LoadingWindowViewModel from the subsystem API first
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.SetTotalGenericImageCount(0);
```

### UnloadImageDelegate
`public delegate void UnloadImageDelegate(int index)`

**Purpose:** **Purpose:** Executes the UnloadImageDelegate logic.

```csharp
// Obtain an instance of LoadingWindowViewModel from the subsystem API first
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.UnloadImageDelegate(0);
```

### LoadImageDelegate
`public delegate void LoadImageDelegate(int index, out string imageName)`

**Purpose:** **Purpose:** Reads image delegate from persistent storage or a stream.

```csharp
// Obtain an instance of LoadingWindowViewModel from the subsystem API first
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.LoadImageDelegate(0, imageName);
```

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
LoadingWindowViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)