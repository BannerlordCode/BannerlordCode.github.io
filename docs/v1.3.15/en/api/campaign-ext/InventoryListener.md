<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryListener

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryListener`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs`

## Overview

`InventoryListener` lives in `TaleWorlds.CampaignSystem.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGold
`public abstract int GetGold()`

**Purpose:** Gets the current value of `gold`.

### GetTraderName
`public abstract TextObject GetTraderName()`

**Purpose:** Gets the current value of `trader name`.

### SetGold
`public abstract void SetGold(int gold)`

**Purpose:** Sets the value or state of `gold`.

### GetOppositeParty
`public abstract PartyBase GetOppositeParty()`

**Purpose:** Gets the current value of `opposite party`.

### OnTransaction
`public abstract void OnTransaction()`

**Purpose:** Called when the `transaction` event is raised.

## Usage Example

```csharp
var implementation = new CustomInventoryListener();
```

## See Also

- [Complete Class Catalog](../catalog)