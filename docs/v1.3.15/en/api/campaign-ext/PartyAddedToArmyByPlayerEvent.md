<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyAddedToArmyByPlayerEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyAddedToArmyByPlayerEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyAddedToArmyByPlayerEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/PartyAddedToArmyByPlayerEvent.cs`

## Overview

`PartyAddedToArmyByPlayerEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AddedParty` | `public MobileParty AddedParty { get; }` |

## Usage Example

```csharp
var value = new PartyAddedToArmyByPlayerEvent();
```

## See Also

- [Complete Class Catalog](../catalog)