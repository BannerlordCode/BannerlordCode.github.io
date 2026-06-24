<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopGivenToSettlementNotificationItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopGivenToSettlementNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class TroopGivenToSettlementNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopGivenToSettlementNotificationItemVM.cs`

## Overview

`TroopGivenToSettlementNotificationItemVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GiverHero` | `public Hero GiverHero { get; }` |
| `Troops` | `public TroopRoster Troops { get; }` |

## Key Methods

### AddNewAction
`public void AddNewAction(TroopRoster newTroops)`

**Purpose:** Adds `new action` to the current collection or state.

## Usage Example

```csharp
var value = new TroopGivenToSettlementNotificationItemVM();
value.AddNewAction(newTroops);
```

## See Also

- [Complete Class Catalog](../catalog)