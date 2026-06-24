<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/ClanState.cs`

## Overview

`ClanState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; }` |
| `InitialSelectedHero` | `public Hero InitialSelectedHero { get; }` |
| `InitialSelectedParty` | `public PartyBase InitialSelectedParty { get; }` |
| `InitialSelectedSettlement` | `public Settlement InitialSelectedSettlement { get; }` |
| `InitialSelectedWorkshop` | `public Workshop InitialSelectedWorkshop { get; }` |
| `InitialSelectedAlley` | `public Alley InitialSelectedAlley { get; }` |
| `Handler` | `public IClanStateHandler Handler { get; set; }` |

## Usage Example

```csharp
var value = new ClanState();
```

## See Also

- [Complete Class Catalog](../catalog)