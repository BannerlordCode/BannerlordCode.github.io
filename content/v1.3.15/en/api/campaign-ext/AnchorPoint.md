---
title: "AnchorPoint"
description: "Auto-generated class reference for AnchorPoint."
---
# AnchorPoint

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AnchorPoint : IInteractablePoint, ITrackableCampaignObject, ITrackableBase`
**Base:** `IInteractablePoint`
**File:** `TaleWorlds.CampaignSystem/Naval/AnchorPoint.cs`

## Overview

`AnchorPoint` lives in `TaleWorlds.CampaignSystem.Naval` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Naval` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Owner` | `public MobileParty Owner { get; }` |
| `Position` | `public CampaignVec2 Position { get; }` |
| `TargetPosition` | `public CampaignVec2 TargetPosition { get; }` |
| `IsMovingToPoint` | `public bool IsMovingToPoint { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `ArrivalTime` | `public CampaignTime ArrivalTime { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public TextObject Name { get; }` |

## Key Methods

### CallFleet
`public void CallFleet(Settlement settlement)`

**Purpose:** **Purpose:** Executes the CallFleet logic.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.CallFleet(settlement);
```

### SetPosition
`public void SetPosition(CampaignVec2 position)`

**Purpose:** **Purpose:** Assigns a new value to position and updates the object's internal state.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.SetPosition(position);
```

### SetSettlement
`public void SetSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Assigns a new value to settlement and updates the object's internal state.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.SetSettlement(settlement);
```

### InitializeOnLoad
`public void InitializeOnLoad(MobileParty owner)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by on load.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.InitializeOnLoad(owner);
```

### CanPartyInteract
`public bool CanPartyInteract(MobileParty mobileParty, float dt)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for party interact.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
var result = anchorPoint.CanPartyInteract(mobileParty, 0);
```

### SetLastUsedDisembarkPosition
`public void SetLastUsedDisembarkPosition(CampaignVec2 pos)`

**Purpose:** **Purpose:** Assigns a new value to last used disembark position and updates the object's internal state.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.SetLastUsedDisembarkPosition(pos);
```

### GetLastUsedDisembarkPosition
`public CampaignVec2 GetLastUsedDisembarkPosition()`

**Purpose:** **Purpose:** Reads and returns the last used disembark position value held by the this instance.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
var result = anchorPoint.GetLastUsedDisembarkPosition();
```

### GetInteractionPosition
`public CampaignVec2 GetInteractionPosition(MobileParty interactingParty)`

**Purpose:** **Purpose:** Reads and returns the interaction position value held by the this instance.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
var result = anchorPoint.GetInteractionPosition(interactingParty);
```

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the party interaction event is raised.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.OnPartyInteraction(mobileParty);
```

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** **Purpose:** Reads and returns the position value held by the this instance.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
var result = anchorPoint.GetPosition();
```

### IsAtSettlement
`public bool IsAtSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the at settlement state or condition.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
var result = anchorPoint.IsAtSettlement(settlement);
```

### IsTargetingSettlement
`public bool IsTargetingSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Determines whether the this instance is in the targeting settlement state or condition.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
var result = anchorPoint.IsTargetingSettlement(settlement);
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** **Purpose:** Verifies whether positions for map change and update if needed holds true for the this instance.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.CheckPositionsForMapChangeAndUpdateIfNeeded();
```

### ResetPosition
`public void ResetPosition()`

**Purpose:** **Purpose:** Returns position to its default or initial condition.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.ResetPosition();
```

### ResetMoveTarget
`public void ResetMoveTarget()`

**Purpose:** **Purpose:** Returns move target to its default or initial condition.

```csharp
// Obtain an instance of AnchorPoint from the subsystem API first
AnchorPoint anchorPoint = ...;
anchorPoint.ResetMoveTarget();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AnchorPoint anchorPoint = ...;
anchorPoint.CallFleet(settlement);
```

## See Also

- [Area Index](../)