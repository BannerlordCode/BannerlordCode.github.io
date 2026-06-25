---
title: "SettlementNameplateVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplateVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplateVM.cs`

## Overview

`SettlementNameplateVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `SettlementTypeEnum` | `public Type SettlementTypeEnum { get; }` |
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
| `PortLevel` | `public int PortLevel { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**Purpose:** Refreshes the display or cache of `dynamic properties`.

### RefreshRelationStatus
`public override void RefreshRelationStatus()`

**Purpose:** Refreshes the display or cache of `relation status`.

### RefreshPosition
`public override void RefreshPosition()`

**Purpose:** Refreshes the display or cache of `position`.

### RefreshTutorialStatus
`public override void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**Purpose:** Refreshes the display or cache of `tutorial status`.

### OnSiegeEventStartedOnSettlement
`public void OnSiegeEventStartedOnSettlement(SiegeEvent siegeEvent)`

**Purpose:** Called when the `siege event started on settlement` event is raised.

### OnSiegeEventEndedOnSettlement
`public void OnSiegeEventEndedOnSettlement(SiegeEvent siegeEvent)`

**Purpose:** Called when the `siege event ended on settlement` event is raised.

### OnMapEventStartedOnSettlement
`public void OnMapEventStartedOnSettlement(MapEvent mapEvent)`

**Purpose:** Called when the `map event started on settlement` event is raised.

### OnMapEventEndedOnSettlement
`public void OnMapEventEndedOnSettlement()`

**Purpose:** Called when the `map event ended on settlement` event is raised.

### OnRebelliousClanFormed
`public void OnRebelliousClanFormed(Clan clan)`

**Purpose:** Called when the `rebellious clan formed` event is raised.

### OnRebelliousClanDisbanded
`public void OnRebelliousClanDisbanded(Clan clan)`

**Purpose:** Called when the `rebellious clan disbanded` event is raised.

### UpdateNameplateMT
`public void UpdateNameplateMT(Vec3 cameraPosition)`

**Purpose:** Updates the state or data of `nameplate m t`.

### RefreshBindValues
`public void RefreshBindValues()`

**Purpose:** Refreshes the display or cache of `bind values`.

### ExecuteTrack
`public void ExecuteTrack()`

**Purpose:** Executes the `track` operation or workflow.

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**Purpose:** Executes the `set camera position` operation or workflow.

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Executes the `open encyclopedia` operation or workflow.

## Usage Example

```csharp
var value = new SettlementNameplateVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)