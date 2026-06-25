---
title: "MPTeammateCompassTargetVM"
description: "Auto-generated class reference for MPTeammateCompassTargetVM."
---
# MPTeammateCompassTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPTeammateCompassTargetVM : CompassTargetVM`
**Base:** `CompassTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/MPTeammateCompassTargetVM.cs`

## Overview

`MPTeammateCompassTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MPTeammateCompassTargetVM
`public unsafe MPTeammateCompassTargetVM(TargetIconType iconType, uint color, uint color2, Banner banner, bool isAlly)`

**Purpose:** **Purpose:** Executes the MPTeammateCompassTargetVM logic.

```csharp
// Obtain an instance of MPTeammateCompassTargetVM from the subsystem API first
MPTeammateCompassTargetVM mPTeammateCompassTargetVM = ...;
var result = mPTeammateCompassTargetVM.MPTeammateCompassTargetVM(iconType, 0, 0, banner, false);
```

### RefreshTargetIconType
`public unsafe void RefreshTargetIconType(TargetIconType targetIconType)`

**Purpose:** **Purpose:** Keeps the display or cache of target icon type in sync with the underlying state.

```csharp
// Obtain an instance of MPTeammateCompassTargetVM from the subsystem API first
MPTeammateCompassTargetVM mPTeammateCompassTargetVM = ...;
mPTeammateCompassTargetVM.RefreshTargetIconType(targetIconType);
```

### RefreshTeam
`public void RefreshTeam(Banner banner, bool isAlly)`

**Purpose:** **Purpose:** Keeps the display or cache of team in sync with the underlying state.

```csharp
// Obtain an instance of MPTeammateCompassTargetVM from the subsystem API first
MPTeammateCompassTargetVM mPTeammateCompassTargetVM = ...;
mPTeammateCompassTargetVM.RefreshTeam(banner, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPTeammateCompassTargetVM mPTeammateCompassTargetVM = ...;
mPTeammateCompassTargetVM.MPTeammateCompassTargetVM(iconType, 0, 0, banner, false);
```

## See Also

- [Area Index](../)