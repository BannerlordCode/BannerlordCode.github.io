---
title: "PlayerEncounterState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerEncounterState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerEncounterState

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/PlayerEncounterState.cs`

## Overview

`PlayerEncounterState` lives in `TaleWorlds.CampaignSystem.Encounters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encounters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new PlayerEncounterState();
```

## See Also

- [Complete Class Catalog](../catalog)