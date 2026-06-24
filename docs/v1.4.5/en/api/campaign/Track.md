<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Track`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Track

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Track : ILocatable<Track>, IInteractablePoint`
**Base:** `ILocatable<Track>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Track.cs`

## Overview

`Track` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDetected` | `public bool IsDetected { get; set; }` |
| `IsPointer` | `public bool IsPointer { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |

## Key Methods

### CanPartyInteract
`public bool CanPartyInteract(MobileParty mobileParty, float dt)`

**Purpose:** Checks whether the current object can `party interact`.

### GetPartyTypeEnum
`public static PartyTypeEnum GetPartyTypeEnum(MobileParty party)`

**Purpose:** Gets the current value of `party type enum`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new Track();
value.CanPartyInteract(mobileParty, 0);
```

## See Also

- [Complete Class Catalog](../catalog)