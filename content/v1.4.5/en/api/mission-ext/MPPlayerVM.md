---
title: "MPPlayerVM"
description: "Auto-generated class reference for MPPlayerVM."
---
# MPPlayerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPlayerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MPPlayerVM.cs`

## Overview

`MPPlayerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public MissionPeer Peer { get; }` |
| `Gold` | `public int Gold { get; set; }` |
| `ValuePercent` | `public int ValuePercent { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsValueEnabled` | `public bool IsValueEnabled { get; set; }` |
| `HasSetCompassElement` | `public bool HasSetCompassElement { get; set; }` |
| `IsSpawnActive` | `public bool IsSpawnActive { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `Avatar` | `public PlayerAvatarImageIdentifierVM Avatar { get; set; }` |
| `Preview` | `public MPArmoryHeroPreviewVM Preview { get; set; }` |
| `ActivePerks` | `public MBBindingList<MPPerkVM> ActivePerks { get; set; }` |

## Key Methods

### UpdateDisabled
`public void UpdateDisabled()`

**Purpose:** Recalculates and stores the latest representation of `disabled`.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.UpdateDisabled();
```

### RefreshDivision
`public void RefreshDivision(bool useCultureColors = false)`

**Purpose:** Keeps the display or cache of `division` in sync with the underlying state.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshDivision(false);
```

### RefreshGold
`public void RefreshGold()`

**Purpose:** Keeps the display or cache of `gold` in sync with the underlying state.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshGold();
```

### RefreshTeam
`public void RefreshTeam()`

**Purpose:** Keeps the display or cache of `team` in sync with the underlying state.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshTeam();
```

### RefreshProperties
`public void RefreshProperties()`

**Purpose:** Keeps the display or cache of `properties` in sync with the underlying state.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshProperties();
```

### RefreshPreview
`public void RefreshPreview(BasicCharacterObject character, DynamicBodyProperties dynamicBodyProperties, bool isFemale)`

**Purpose:** Keeps the display or cache of `preview` in sync with the underlying state.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshPreview(character, dynamicBodyProperties, false);
```

### RefreshActivePerks
`public void RefreshActivePerks()`

**Purpose:** Keeps the display or cache of `active perks` in sync with the underlying state.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshActivePerks();
```

### RefreshAvatar
`public void RefreshAvatar()`

**Purpose:** Keeps the display or cache of `avatar` in sync with the underlying state.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.RefreshAvatar();
```

### ExecuteFocusBegin
`public void ExecuteFocusBegin()`

**Purpose:** Runs the operation or workflow associated with `focus begin`.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.ExecuteFocusBegin();
```

### ExecuteFocusEnd
`public void ExecuteFocusEnd()`

**Purpose:** Runs the operation or workflow associated with `focus end`.

```csharp
// Obtain an instance of MPPlayerVM from the subsystem API first
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.ExecuteFocusEnd();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPPlayerVM mPPlayerVM = ...;
mPPlayerVM.UpdateDisabled();
```

## See Also

- [Area Index](../)