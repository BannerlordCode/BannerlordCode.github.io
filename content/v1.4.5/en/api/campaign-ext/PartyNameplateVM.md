---
title: "PartyNameplateVM"
description: "Auto-generated class reference for PartyNameplateVM."
---
# PartyNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyNameplateVM.cs`

## Overview

`PartyNameplateVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public MobileParty Party { get; }` |
| `HeadPosition` | `public Vec2 HeadPosition { get; set; }` |
| `Count` | `public string Count { get; set; }` |
| `Prisoner` | `public string Prisoner { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `Wounded` | `public string Wounded { get; set; }` |
| `ExtraInfoText` | `public string ExtraInfoText { get; set; }` |
| `MovementSpeedText` | `public string MovementSpeedText { get; set; }` |
| `FullName` | `public string FullName { get; set; }` |
| `IsInArmy` | `public bool IsInArmy { get; set; }` |
| `IsInSettlement` | `public bool IsInSettlement { get; set; }` |
| `IsDisorganized` | `public bool IsDisorganized { get; set; }` |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea { get; set; }` |
| `IsArmy` | `public bool IsArmy { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsHigh` | `public bool IsHigh { get; set; }` |
| `ShouldShowFullName` | `public bool ShouldShowFullName { get; set; }` |
| `PartyBanner` | `public BannerImageIdentifierVM PartyBanner { get; set; }` |

## Key Methods

### InitializeWith
`public void InitializeWith(MobileParty party, Camera mapCamera)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by with.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.InitializeWith(party, mapCamera);
```

### Clear
`public virtual void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.Clear();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshValues();
```

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RegisterEvents();
```

### UnregisterEvents
`public void UnregisterEvents()`

**Purpose:** **Purpose:** Unregisters events from the current system.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.UnregisterEvents();
```

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**Purpose:** **Purpose:** Keeps the display or cache of dynamic properties in sync with the underlying state.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshDynamicProperties(false);
```

### RefreshPosition
`public override void RefreshPosition()`

**Purpose:** **Purpose:** Keeps the display or cache of position in sync with the underlying state.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshPosition();
```

### RefreshTutorialStatus
`public override void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**Purpose:** **Purpose:** Keeps the display or cache of tutorial status in sync with the underlying state.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshTutorialStatus("example");
```

### DetermineIsVisibleOnMap
`public void DetermineIsVisibleOnMap()`

**Purpose:** **Purpose:** Determines the result of is visible on map based on the current state.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.DetermineIsVisibleOnMap();
```

### RefreshBinding
`public virtual void RefreshBinding()`

**Purpose:** **Purpose:** Keeps the display or cache of binding in sync with the underlying state.

```csharp
// Obtain an instance of PartyNameplateVM from the subsystem API first
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.RefreshBinding();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyNameplateVM partyNameplateVM = ...;
partyNameplateVM.InitializeWith(party, mapCamera);
```

## See Also

- [Area Index](../)