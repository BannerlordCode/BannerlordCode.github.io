---
title: "ClanState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/ClanState.cs`

## Overview

`ClanState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InitialSelectedHero` | `public Hero InitialSelectedHero { get; }` |
| `InitialSelectedParty` | `public PartyBase InitialSelectedParty { get; }` |
| `InitialSelectedSettlement` | `public Settlement InitialSelectedSettlement { get; }` |
| `InitialSelectedWorkshop` | `public Workshop InitialSelectedWorkshop { get; }` |
| `InitialSelectedAlley` | `public Alley InitialSelectedAlley { get; }` |
| `Handler` | `public IClanStateHandler Handler { get; set; }` |

## Usage Example

```csharp
var example = new ClanState();
```

## See Also

- [Complete Class Catalog](../catalog)