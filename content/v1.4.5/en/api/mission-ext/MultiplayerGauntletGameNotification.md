---
title: "MultiplayerGauntletGameNotification"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGauntletGameNotification`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGauntletGameNotification

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGauntletGameNotification : GauntletGameNotification`
**Base:** `GauntletGameNotification`
**Area:** mission-ext

## Overview

`MultiplayerGauntletGameNotification` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerGauntletGameNotification.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
