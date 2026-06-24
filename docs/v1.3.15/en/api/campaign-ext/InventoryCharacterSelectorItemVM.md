<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryCharacterSelectorItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryCharacterSelectorItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryCharacterSelectorItemVM : SelectorItemVM`
**Base:** `SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryCharacterSelectorItemVM.cs`

## Overview

`InventoryCharacterSelectorItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CharacterID` | `public string CharacterID { get; }` |
| `Hero` | `public Hero Hero { get; }` |

## Usage Example

```csharp
var value = new InventoryCharacterSelectorItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)