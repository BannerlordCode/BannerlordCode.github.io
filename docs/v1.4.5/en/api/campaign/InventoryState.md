<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryState : PlayerGameState`
**Base:** `PlayerGameState`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/InventoryState.cs`

## Overview

`InventoryState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InventoryLogic` | `public InventoryLogic InventoryLogic { get; set; }` |
| `InventoryMode` | `public InventoryScreenHelper.InventoryMode InventoryMode { get; set; }` |
| `DoneLogicExtrasDelegate` | `public Action DoneLogicExtrasDelegate { get; set; }` |
| `Handler` | `public IInventoryStateHandler Handler { get; set; }` |

## Usage Example

```csharp
var example = new InventoryState();
```

## See Also

- [Complete Class Catalog](../catalog)