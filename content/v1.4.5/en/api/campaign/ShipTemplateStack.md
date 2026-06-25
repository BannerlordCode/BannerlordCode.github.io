---
title: "ShipTemplateStack"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipTemplateStack`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShipTemplateStack

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ShipTemplateStack`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/ShipTemplateStack.cs`

## Overview

`ShipTemplateStack` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ShipTemplateStack
`public struct ShipTemplateStack(ShipHull shipHull, int minValue, int maxValue)`

**Purpose:** Handles logic related to `ship template stack`.

## Usage Example

```csharp
var value = new ShipTemplateStack();
value.ShipTemplateStack(shipHull, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)