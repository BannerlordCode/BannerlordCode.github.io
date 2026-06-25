---
title: "FakeInventoryListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FakeInventoryListener`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FakeInventoryListener

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FakeInventoryListener : InventoryListener`
**Base:** `InventoryListener`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/FakeInventoryListener.cs`

## Overview

`FakeInventoryListener` lives in `TaleWorlds.CampaignSystem.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGold
`public override int GetGold()`

**Purpose:** Gets the current value of `gold`.

### GetTraderName
`public override TextObject GetTraderName()`

**Purpose:** Gets the current value of `trader name`.

### SetGold
`public override void SetGold(int gold)`

**Purpose:** Sets the value or state of `gold`.

### OnTransaction
`public override void OnTransaction()`

**Purpose:** Called when the `transaction` event is raised.

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**Purpose:** Gets the current value of `opposite party`.

## Usage Example

```csharp
var value = new FakeInventoryListener();
value.GetGold();
```

## See Also

- [Complete Class Catalog](../catalog)