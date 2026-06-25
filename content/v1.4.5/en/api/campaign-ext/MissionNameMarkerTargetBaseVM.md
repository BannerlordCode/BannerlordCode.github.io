---
title: "MissionNameMarkerTargetBaseVM"
description: "Auto-generated class reference for MissionNameMarkerTargetBaseVM."
---
# MissionNameMarkerTargetBaseVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerTargetBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerTargetBaseVM.cs`

## Overview

`MissionNameMarkerTargetBaseVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `NameType` | `public string NameType { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsQuestMainStory` | `public bool IsQuestMainStory { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsFriendly` | `public bool IsFriendly { get; set; }` |
| `IsPersistent` | `public bool IsPersistent { get; set; }` |

## Key Methods

### UpdatePosition
`public abstract void UpdatePosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of position.

```csharp
// Obtain an instance of MissionNameMarkerTargetBaseVM from the subsystem API first
MissionNameMarkerTargetBaseVM missionNameMarkerTargetBaseVM = ...;
missionNameMarkerTargetBaseVM.UpdatePosition(missionCamera);
```

### Equals
`public abstract bool Equals(MissionNameMarkerTargetBaseVM other)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MissionNameMarkerTargetBaseVM from the subsystem API first
MissionNameMarkerTargetBaseVM missionNameMarkerTargetBaseVM = ...;
var result = missionNameMarkerTargetBaseVM.Equals(other);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionNameMarkerTargetBaseVM from the subsystem API first
MissionNameMarkerTargetBaseVM missionNameMarkerTargetBaseVM = ...;
missionNameMarkerTargetBaseVM.RefreshValues();
```

### SetEnabledState
`public void SetEnabledState(bool enabled)`

**Purpose:** Assigns a new value to enabled state and updates the object's internal state.

```csharp
// Obtain an instance of MissionNameMarkerTargetBaseVM from the subsystem API first
MissionNameMarkerTargetBaseVM missionNameMarkerTargetBaseVM = ...;
missionNameMarkerTargetBaseVM.SetEnabledState(false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionNameMarkerTargetBaseVM instance = ...;
```

## See Also

- [Area Index](../)