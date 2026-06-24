<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreditsItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CreditsItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsItemVM.cs`

## Overview

`CreditsItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Credits` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Credits` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `Items` | `public MBBindingList<CreditsItemVM> Items { get; set; }` |

## Usage Example

```csharp
var value = new CreditsItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)