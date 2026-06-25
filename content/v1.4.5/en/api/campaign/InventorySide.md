---
title: "InventorySide"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventorySide`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventorySide

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum InventorySide`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/InventoryLogic.cs`

## Overview

`InventorySide` lives in `TaleWorlds.CampaignSystem.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
InventorySide example = InventorySide.Value;
```

## See Also

- [Complete Class Catalog](../catalog)