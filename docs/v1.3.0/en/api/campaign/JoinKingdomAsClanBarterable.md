<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JoinKingdomAsClanBarterable`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JoinKingdomAsClanBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JoinKingdomAsClanBarterable : Barterable`
**Base:** `Barterable`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/JoinKingdomAsClanBarterable.cs`

## Overview

`JoinKingdomAsClanBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringID` | `public override string StringID { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction factionForEvaluation)`

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
var value = new JoinKingdomAsClanBarterable();
value.GetUnitValueForFaction(factionForEvaluation);
```

## See Also

- [Complete Class Catalog](../catalog)