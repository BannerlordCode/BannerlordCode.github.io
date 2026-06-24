<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadingWindowViewModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LoadingWindowViewModel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs`

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

### UnloadImageDelegate
`public delegate void UnloadImageDelegate(int index)`

**Purpose:** Handles logic related to `unload image delegate`.

### LoadImageDelegate
`public delegate void LoadImageDelegate(int index, out string imageName)`

**Purpose:** Loads `image delegate` data.

### SetTotalGenericImageCount
`public void SetTotalGenericImageCount(int totalGenericImageCount)`

**Purpose:** Sets the value or state of `total generic image count`.

## Usage Example

```csharp
var vm = new LoadingWindowViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)