---
title: "PartyNameplateVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyNameplateVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class PartyNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/PartyNameplateVM.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `with`.

### Clear
`public virtual void Clear()`

**Purpose:** Handles logic related to `clear`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RegisterEvents
`public void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### UnregisterEvents
`public void UnregisterEvents()`

**Purpose:** Handles logic related to `unregister events`.

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**Purpose:** Refreshes the display or cache of `dynamic properties`.

### RefreshPosition
`public override void RefreshPosition()`

**Purpose:** Refreshes the display or cache of `position`.

### RefreshTutorialStatus
`public override void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**Purpose:** Refreshes the display or cache of `tutorial status`.

### DetermineIsVisibleOnMap
`public void DetermineIsVisibleOnMap()`

**Purpose:** Handles logic related to `determine is visible on map`.

### RefreshBinding
`public virtual void RefreshBinding()`

**Purpose:** Refreshes the display or cache of `binding`.

## Usage Example

```csharp
var value = new PartyNameplateVM();
value.InitializeWith(party, mapCamera);
```

## See Also

- [Complete Class Catalog](../catalog)