---
title: "MultiplayerReportPlayerScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerReportPlayerScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerReportPlayerScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerReportPlayerScreen : GlobalLayer`
**Base:** `GlobalLayer`
**Area:** mission-ext

## Overview

`MultiplayerReportPlayerScreen` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static MultiplayerReportPlayerScreen Current { get; }` |

## Key Methods

### OnInitialize
`public static void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### OnFinalize
`public static void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerReportPlayerScreen.OnInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
