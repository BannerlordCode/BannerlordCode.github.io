---
title: "TransferCommandResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TransferCommandResult`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TransferCommandResult

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TransferCommandResult`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/TransferCommandResult.cs`

## Overview

`TransferCommandResult` lives in `TaleWorlds.CampaignSystem.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TransferCharacter` | `public CharacterObject TransferCharacter { get; }` |
| `ResultSide` | `public InventoryLogic.InventorySide ResultSide { get; }` |
| `EffectedItemRosterElement` | `public ItemRosterElement EffectedItemRosterElement { get; }` |
| `EffectedNumber` | `public int EffectedNumber { get; }` |
| `FinalNumber` | `public int FinalNumber { get; }` |
| `EffectedEquipmentIndex` | `public EquipmentIndex EffectedEquipmentIndex { get; }` |

## Usage Example

```csharp
var example = new TransferCommandResult();
```

## See Also

- [Complete Class Catalog](../catalog)