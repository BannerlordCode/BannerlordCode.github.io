<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntCosmeticElement`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntCosmeticElement

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntCosmeticElement : CosmeticElement`
**Base:** `CosmeticElement`
**File:** `TaleWorlds.MountAndBlade.Diamond/Cosmetics/CosmeticTypes/TauntCosmeticElement.cs`

## Overview

`TauntCosmeticElement` lives in `TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxNumberOfTaunts` | `public static int MaxNumberOfTaunts { get; }` |
| `Name` | `public TextObject Name { get; }` |

## Usage Example

```csharp
var value = new TauntCosmeticElement();
```

## See Also

- [Complete Class Catalog](../catalog)