---
title: "GauntletFullScreenNoticeView"
description: "Auto-generated class reference for GauntletFullScreenNoticeView."
---
# GauntletFullScreenNoticeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletFullScreenNoticeView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletFullScreenNoticeView.cs`

## Overview

`GauntletFullScreenNoticeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletFullScreenNoticeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletFullScreenNoticeView Current { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletFullScreenNoticeView.Initialize();
```

### SkipNotice
`public static void SkipNotice()`

**Purpose:** **Purpose:** Executes the SkipNotice logic.

```csharp
// Static call; no instance required
GauntletFullScreenNoticeView.SkipNotice();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletFullScreenNoticeView view = ...;
```

## See Also

- [Area Index](../)