---
title: "SettlementNameplateVM"
description: "Auto-generated class reference for SettlementNameplateVM."
---
# SettlementNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs`

## Overview

`SettlementNameplateVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `SettlementNotifications` | `public SettlementNameplateNotificationsVM SettlementNotifications { get; set; }` |
| `SettlementParties` | `public SettlementNameplatePartyMarkersVM SettlementParties { get; set; }` |
| `SettlementEvents` | `public SettlementNameplateEventsVM SettlementEvents { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `MapEventVisualType` | `public int MapEventVisualType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `WPos` | `public float WPos { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `IsInRange` | `public bool IsInRange { get; set; }` |
| `HasPort` | `public bool HasPort { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshValues();
```

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**Purpose:** Keeps the display or cache of `dynamic properties` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshDynamicProperties(false);
```

### RefreshRelationStatus
`public override void RefreshRelationStatus()`

**Purpose:** Keeps the display or cache of `relation status` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshRelationStatus();
```

### RefreshPosition
`public override void RefreshPosition()`

**Purpose:** Keeps the display or cache of `position` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshPosition();
```

### RefreshTutorialStatus
`public override void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**Purpose:** Keeps the display or cache of `tutorial status` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshTutorialStatus("example");
```

### OnSiegeEventStartedOnSettlement
`public void OnSiegeEventStartedOnSettlement(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the `siege event started on settlement` event is raised.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnSiegeEventStartedOnSettlement(siegeEvent);
```

### OnSiegeEventEndedOnSettlement
`public void OnSiegeEventEndedOnSettlement(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the `siege event ended on settlement` event is raised.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnSiegeEventEndedOnSettlement(siegeEvent);
```

### OnMapEventStartedOnSettlement
`public void OnMapEventStartedOnSettlement(MapEvent mapEvent)`

**Purpose:** Invoked when the `map event started on settlement` event is raised.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnMapEventStartedOnSettlement(mapEvent);
```

### OnMapEventEndedOnSettlement
`public void OnMapEventEndedOnSettlement()`

**Purpose:** Invoked when the `map event ended on settlement` event is raised.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnMapEventEndedOnSettlement();
```

### OnRebelliousClanFormed
`public void OnRebelliousClanFormed(Clan clan)`

**Purpose:** Invoked when the `rebellious clan formed` event is raised.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnRebelliousClanFormed(clan);
```

### OnRebelliousClanDisbanded
`public void OnRebelliousClanDisbanded(Clan clan)`

**Purpose:** Invoked when the `rebellious clan disbanded` event is raised.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnRebelliousClanDisbanded(clan);
```

### UpdateNameplateMT
`public void UpdateNameplateMT(Vec3 cameraPosition)`

**Purpose:** Recalculates and stores the latest representation of `nameplate m t`.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.UpdateNameplateMT(cameraPosition);
```

### RefreshBindValues
`public void RefreshBindValues()`

**Purpose:** Keeps the display or cache of `bind values` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshBindValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnFinalize();
```

### ExecuteTrack
`public void ExecuteTrack()`

**Purpose:** Runs the operation or workflow associated with `track`.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.ExecuteTrack();
```

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**Purpose:** Runs the operation or workflow associated with `set camera position`.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.ExecuteSetCameraPosition();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with `open encyclopedia`.

```csharp
// Obtain an instance of SettlementNameplateVM from the subsystem API first
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.ExecuteOpenEncyclopedia();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshValues();
```

## See Also

- [Area Index](../)