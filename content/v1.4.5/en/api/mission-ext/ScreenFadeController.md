---
title: "ScreenFadeController"
description: "Auto-generated class reference for ScreenFadeController."
---
# ScreenFadeController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ScreenFadeController`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ScreenFadeController.cs`

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

**Purpose:** Registers handler with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
ScreenFadeController.RegisterHandler(handler);
```

### BeginFadeOutAndIn
`public static void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)`

**Purpose:** Executes the BeginFadeOutAndIn logic.

```csharp
// Static call; no instance required
ScreenFadeController.BeginFadeOutAndIn(0, 0, 0);
```

### BeginFadeOut
`public static void BeginFadeOut(float fadeOutDuration = 0.5f)`

**Purpose:** Executes the BeginFadeOut logic.

```csharp
// Static call; no instance required
ScreenFadeController.BeginFadeOut(0);
```

### BeginFadeIn
`public static void BeginFadeIn(float fadeInDuration = 0.5f)`

**Purpose:** Executes the BeginFadeIn logic.

```csharp
// Static call; no instance required
ScreenFadeController.BeginFadeIn(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ScreenFadeController>();
```

## See Also

- [Area Index](../)