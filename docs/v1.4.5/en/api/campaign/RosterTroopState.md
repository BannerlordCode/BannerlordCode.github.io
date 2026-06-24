<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RosterTroopState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RosterTroopState

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Roster/RosterTroopState.cs`

## Overview

`RosterTroopState` lives in `TaleWorlds.CampaignSystem.Roster` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Roster` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new RosterTroopState();
```

## See Also

- [Complete Class Catalog](../catalog)