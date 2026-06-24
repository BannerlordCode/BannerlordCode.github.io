<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultItems`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItems

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultItems`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/DefaultItems.cs`

## Overview

`DefaultItems` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Grain` | `public static ItemObject Grain { get; }` |
| `Planks` | `public static ItemObject Planks { get; }` |
| `Felt` | `public static ItemObject Felt { get; }` |
| `Meat` | `public static ItemObject Meat { get; }` |
| `Hides` | `public static ItemObject Hides { get; }` |
| `Tools` | `public static ItemObject Tools { get; }` |
| `IronOre` | `public static ItemObject IronOre { get; }` |
| `HardWood` | `public static ItemObject HardWood { get; }` |
| `Charcoal` | `public static ItemObject Charcoal { get; }` |
| `IronIngot1` | `public static ItemObject IronIngot1 { get; }` |
| `IronIngot2` | `public static ItemObject IronIngot2 { get; }` |
| `IronIngot3` | `public static ItemObject IronIngot3 { get; }` |
| `IronIngot4` | `public static ItemObject IronIngot4 { get; }` |
| `IronIngot5` | `public static ItemObject IronIngot5 { get; }` |
| `IronIngot6` | `public static ItemObject IronIngot6 { get; }` |
| `Trash` | `public static ItemObject Trash { get; }` |

## Usage Example

```csharp
var value = new DefaultItems();
```

## See Also

- [Complete Class Catalog](../catalog)