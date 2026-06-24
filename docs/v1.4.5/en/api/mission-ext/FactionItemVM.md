<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FactionItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FactionItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FactionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem/FactionItemVM.cs`

## Overview

`FactionItemVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Faction` | `public BasicCultureObject Faction { get; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `CultureCode` | `public string CultureCode { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Usage Example

```csharp
var value = new FactionItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)