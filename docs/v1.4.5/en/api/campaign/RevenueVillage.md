<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RevenueVillage`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RevenueVillage

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueVillage`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

## Overview

`RevenueVillage` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetDone
`public void SetDone()`

**Purpose:** Sets the value or state of `done`.

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**Purpose:** Sets the value or state of `additional progress`.

### GetIsCompleted
`public bool GetIsCompleted()`

**Purpose:** Gets the current value of `is completed`.

## Usage Example

```csharp
var value = new RevenueVillage();
value.SetDone();
```

## See Also

- [Complete Class Catalog](../catalog)