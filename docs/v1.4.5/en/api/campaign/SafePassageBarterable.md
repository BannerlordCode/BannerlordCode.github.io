<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SafePassageBarterable`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SafePassageBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SafePassageBarterable : Barterable`
**Base:** `Barterable`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem.Barterables/SafePassageBarterable.cs`

## Overview

`SafePassageBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### GetPlayerStrengthRatioInEncounter
`public float GetPlayerStrengthRatioInEncounter()`

**Purpose:** Gets the current value of `player strength ratio in encounter`.

### IsCompatible
`public override bool IsCompatible(Barterable barterable)`

**Purpose:** Handles logic related to `is compatible`.

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**Purpose:** Gets the current value of `visual identifier`.

### Apply
`public override void Apply()`

**Purpose:** Applies `apply` to the current object.

## Usage Example

```csharp
var value = new SafePassageBarterable();
value.GetUnitValueForFaction(faction);
```

## See Also

- [Complete Class Catalog](../catalog)