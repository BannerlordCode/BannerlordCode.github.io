---
title: "GamepadCursorViewModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadCursorViewModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GamepadCursorViewModel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GamepadCursorViewModel.cs`

## Overview

`GamepadCursorViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `GamepadCursorViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsConsoleMouseVisible` | `public bool IsConsoleMouseVisible { get; set; }` |
| `IsGamepadCursorVisible` | `public bool IsGamepadCursorVisible { get; set; }` |
| `CursorPositionX` | `public float CursorPositionX { get; set; }` |
| `CursorPositionY` | `public float CursorPositionY { get; set; }` |

## Usage Example

```csharp
var vm = new GamepadCursorViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)