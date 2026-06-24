<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PersuasionChanceVisualListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PersuasionChanceVisualListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PersuasionChanceVisualListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Conversation/PersuasionChanceVisualListPanel.cs`

## Overview

`PersuasionChanceVisualListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFailChance` | `public bool IsFailChance { get; set; }` |
| `ChanceValue` | `public int ChanceValue { get; set; }` |

## Usage Example

```csharp
var value = new PersuasionChanceVisualListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)