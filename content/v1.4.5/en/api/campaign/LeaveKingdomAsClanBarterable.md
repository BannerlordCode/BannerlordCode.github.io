---
title: "LeaveKingdomAsClanBarterable"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LeaveKingdomAsClanBarterable`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LeaveKingdomAsClanBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LeaveKingdomAsClanBarterable : Barterable`
**Base:** `Barterable`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem.Barterables/LeaveKingdomAsClanBarterable.cs`

## Overview

`LeaveKingdomAsClanBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Gets the current value of `unit value for faction`.

### CheckBarterLink
`public override void CheckBarterLink(Barterable linkedBarterable)`

**Purpose:** Handles logic related to `check barter link`.

### IsCompatible
`public override bool IsCompatible(Barterable barterable)`

**Purpose:** Handles logic related to `is compatible`.

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**Purpose:** Gets the current value of `visual identifier`.

### GetEncyclopediaLink
`public override string GetEncyclopediaLink()`

**Purpose:** Gets the current value of `encyclopedia link`.

### Apply
`public override void Apply()`

**Purpose:** Applies `apply` to the current object.

## Usage Example

```csharp
var value = new LeaveKingdomAsClanBarterable();
value.GetUnitValueForFaction(faction);
```

## See Also

- [Complete Class Catalog](../catalog)