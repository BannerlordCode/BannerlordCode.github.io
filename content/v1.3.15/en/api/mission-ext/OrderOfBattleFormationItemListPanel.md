---
title: "OrderOfBattleFormationItemListPanel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationItemListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationItemListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationItemListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationItemListPanel.cs`

## Overview

`OrderOfBattleFormationItemListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CardWidget` | `public Widget CardWidget { get; set; }` |
| `FormationClassDropdown` | `public DropdownWidget FormationClassDropdown { get; set; }` |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer { get; set; }` |
| `IsClassDropdownEnabled` | `public bool IsClassDropdownEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasFormation` | `public bool HasFormation { get; set; }` |
| `DefaultFocusYOffsetFromCenter` | `public float DefaultFocusYOffsetFromCenter { get; set; }` |
| `NoFormationFocusYOffsetFromCenter` | `public float NoFormationFocusYOffsetFromCenter { get; set; }` |

## Usage Example

```csharp
var value = new OrderOfBattleFormationItemListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)