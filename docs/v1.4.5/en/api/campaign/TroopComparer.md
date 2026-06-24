<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopComparer`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopComparer

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopComparer : IComparer<TroopRosterElement>`
**Base:** `IComparer<TroopRosterElement>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyScreenLogic.cs`

## Overview

`TroopComparer` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetIsAscending
`public void SetIsAscending(bool isAscending)`

**Purpose:** Sets the value or state of `is ascending`.

### Compare
`public int Compare(TroopRosterElement x, TroopRosterElement y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var implementation = new CustomTroopComparer();
```

## See Also

- [Complete Class Catalog](../catalog)