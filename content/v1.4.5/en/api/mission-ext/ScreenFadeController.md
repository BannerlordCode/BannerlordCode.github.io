---
title: "ScreenFadeController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScreenFadeController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScreenFadeController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ScreenFadeController`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ScreenFadeController.cs`

## Overview

`ScreenFadeController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `ScreenFadeController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFadeActive` | `public static bool IsFadeActive { get; }` |
| `IsFadingOut` | `public static bool IsFadingOut { get; }` |
| `IsFadingIn` | `public static bool IsFadingIn { get; }` |
| `IsFadedOut` | `public static bool IsFadedOut { get; }` |

## Key Methods

### RegisterHandler
`public static void RegisterHandler(IScreenFadeHandler handler)`

**Purpose:** Handles logic related to `register handler`.

### BeginFadeOutAndIn
`public static void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)`

**Purpose:** Handles logic related to `begin fade out and in`.

### BeginFadeOut
`public static void BeginFadeOut(float fadeOutDuration = 0.5f)`

**Purpose:** Handles logic related to `begin fade out`.

### BeginFadeIn
`public static void BeginFadeIn(float fadeInDuration = 0.5f)`

**Purpose:** Handles logic related to `begin fade in`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ScreenFadeController>();
```

## See Also

- [Complete Class Catalog](../catalog)