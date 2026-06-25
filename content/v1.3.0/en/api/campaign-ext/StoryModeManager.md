---
title: "StoryModeManager"
description: "Auto-generated class reference for StoryModeManager."
---
# StoryModeManager

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeManager`
**Base:** none
**File:** `StoryMode/StoryModeManager.cs`

## Overview

`StoryModeManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `StoryModeManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static StoryModeManager Current { get; }` |
| `StoryModeEvents` | `public StoryModeEvents StoryModeEvents { get; }` |
| `MainStoryLine` | `public MainStoryLine MainStoryLine { get; }` |
| `StoryModeHeroes` | `public StoryModeHeroes StoryModeHeroes { get; }` |
| `StoryModeBannerEffects` | `public StoryModeBannerEffects StoryModeBannerEffects { get; }` |

## Usage Example

```csharp
var manager = StoryModeManager.Current;
```

## See Also

- [Area Index](../)