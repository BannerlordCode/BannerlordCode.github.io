---
title: "MultiplayerGame"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGame`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGame

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGame : GameType`
**Base:** `GameType`
**Area:** mission-ext

## Overview

`MultiplayerGame` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ReadDefaultEquipments
`public static Dictionary<string, Equipment> ReadDefaultEquipments(string defaultEquipmentsPath)`

**Purpose:** Handles logic related to `read default equipments`.

### OnDestroy
`public override void OnDestroy()`

**Purpose:** Called when the `destroy` event is raised.

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**Purpose:** Called when the `state changed` event is raised.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MultiplayerGame.ReadDefaultEquipments("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
