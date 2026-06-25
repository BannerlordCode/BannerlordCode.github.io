---
title: "MPTeammateCompassTargetVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPTeammateCompassTargetVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPTeammateCompassTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPTeammateCompassTargetVM : CompassTargetVM`
**Base:** `CompassTargetVM`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MPTeammateCompassTargetVM.cs`

## Overview

`MPTeammateCompassTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MPTeammateCompassTargetVM
`public unsafe MPTeammateCompassTargetVM(TargetIconType iconType, uint color, uint color2, Banner banner, bool isAlly)`

**Purpose:** Handles logic related to `m p teammate compass target v m`.

### RefreshTargetIconType
`public unsafe void RefreshTargetIconType(TargetIconType targetIconType)`

**Purpose:** Refreshes the display or cache of `target icon type`.

### RefreshTeam
`public void RefreshTeam(Banner banner, bool isAlly)`

**Purpose:** Refreshes the display or cache of `team`.

## Usage Example

```csharp
var value = new MPTeammateCompassTargetVM();
value.MPTeammateCompassTargetVM(iconType, 0, 0, banner, false);
```

## See Also

- [Complete Class Catalog](../catalog)