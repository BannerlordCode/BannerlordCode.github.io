<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyCompositionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyCompositionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyCompositionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PartyCompositionVM.cs`

## Overview

`PartyCompositionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InfantryCount` | `public int InfantryCount { get; set; }` |
| `RangedCount` | `public int RangedCount { get; set; }` |
| `CavalryCount` | `public int CavalryCount { get; set; }` |
| `HorseArcherCount` | `public int HorseArcherCount { get; set; }` |
| `InfantryHint` | `public HintViewModel InfantryHint { get; set; }` |
| `RangedHint` | `public HintViewModel RangedHint { get; set; }` |
| `CavalryHint` | `public HintViewModel CavalryHint { get; set; }` |
| `HorseArcherHint` | `public HintViewModel HorseArcherHint { get; set; }` |

## Key Methods

### OnTroopRemoved
`public void OnTroopRemoved(FormationClass formationClass, int count)`

**Purpose:** Called when the `troop removed` event is raised.

### OnTroopAdded
`public void OnTroopAdded(FormationClass formationClass, int count)`

**Purpose:** Called when the `troop added` event is raised.

### RefreshCounts
`public void RefreshCounts(MBBindingList<PartyCharacterVM> list)`

**Purpose:** Refreshes the display or cache of `counts`.

## Usage Example

```csharp
var value = new PartyCompositionVM();
value.OnTroopRemoved(formationClass, 0);
```

## See Also

- [Complete Class Catalog](../catalog)