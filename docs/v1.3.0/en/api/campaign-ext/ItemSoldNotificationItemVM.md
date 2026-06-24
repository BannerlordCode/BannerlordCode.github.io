<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemSoldNotificationItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemSoldNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class ItemSoldNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/ItemSoldNotificationItemVM.cs`

## Overview

`ItemSoldNotificationItemVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Item` | `public ItemRosterElement Item { get; }` |
| `ReceiverParty` | `public PartyBase ReceiverParty { get; }` |
| `PayerParty` | `public PartyBase PayerParty { get; }` |

## Key Methods

### AddNewTransaction
`public void AddNewTransaction(int amount)`

**Purpose:** Adds `new transaction` to the current collection or state.

## Usage Example

```csharp
var value = new ItemSoldNotificationItemVM();
value.AddNewTransaction(0);
```

## See Also

- [Complete Class Catalog](../catalog)