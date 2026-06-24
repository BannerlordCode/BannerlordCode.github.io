<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnchorPoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `call fleet`.

### SetPosition
`public void SetPosition(CampaignVec2 position)`

**Purpose:** Sets the value or state of `position`.

### SetSettlement
`public void SetSettlement(Settlement settlement)`

**Purpose:** Sets the value or state of `settlement`.

### InitializeOnLoad
`public void InitializeOnLoad(MobileParty owner)`

**Purpose:** Initializes the state, resources, or bindings for `on load`.

### CanPartyInteract
`public bool CanPartyInteract(MobileParty mobileParty, float dt)`

**Purpose:** Checks whether the current object can `party interact`.

### SetLastUsedDisembarkPosition
`public void SetLastUsedDisembarkPosition(CampaignVec2 pos)`

**Purpose:** Sets the value or state of `last used disembark position`.

### GetLastUsedDisembarkPosition
`public CampaignVec2 GetLastUsedDisembarkPosition()`

**Purpose:** Gets the current value of `last used disembark position`.

### GetInteractionPosition
`public CampaignVec2 GetInteractionPosition(MobileParty interactingParty)`

**Purpose:** Gets the current value of `interaction position`.

### OnPartyInteraction
`public void OnPartyInteraction(MobileParty mobileParty)`

**Purpose:** Called when the `party interaction` event is raised.

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Gets the current value of `position`.

### IsAtSettlement
`public bool IsAtSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `is at settlement`.

### IsTargetingSettlement
`public bool IsTargetingSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `is targeting settlement`.

### CheckPositionsForMapChangeAndUpdateIfNeeded
`public void CheckPositionsForMapChangeAndUpdateIfNeeded()`

**Purpose:** Handles logic related to `check positions for map change and update if needed`.

### ResetPosition
`public void ResetPosition()`

**Purpose:** Resets `position` to its initial state.

### ResetMoveTarget
`public void ResetMoveTarget()`

**Purpose:** Resets `move target` to its initial state.

## Usage Example

```csharp
var value = new AnchorPoint();
value.CallFleet(settlement);
```

## See Also

- [Complete Class Catalog](../catalog)