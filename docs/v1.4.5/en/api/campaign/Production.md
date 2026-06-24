<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Production`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Production

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct Production`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Workshops/WorkshopType.cs`

## Overview

`Production` lives in `TaleWorlds.CampaignSystem.Settlements.Workshops` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Workshops` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Production
`public struct Production(float conversionSpeed)`

**Purpose:** Handles logic related to `production`.

### AddInput
`public void AddInput(ItemCategory item, int count = 1)`

**Purpose:** Adds `input` to the current collection or state.

### AddOutput
`public void AddOutput(ItemCategory outputCategory, int outputCount)`

**Purpose:** Adds `output` to the current collection or state.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new Production();
value.Production(0);
```

## See Also

- [Complete Class Catalog](../catalog)