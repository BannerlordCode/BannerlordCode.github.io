<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyCreationNotificationItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyCreationNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyCreationNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/ArmyCreationNotificationItemVM.cs`

## Overview

`ArmyCreationNotificationItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Army` | `public Army Army { get; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new ArmyCreationNotificationItemVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)