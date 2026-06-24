<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterEquipmentItemVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterEquipmentItemVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterEquipmentItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs`

## Overview

`CharacterEquipmentItemVM` lives in `TaleWorlds.Core.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public string Type { get; set; }` |
| `HasItem` | `public bool HasItem { get; set; }` |

## Key Methods

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

## Usage Example

```csharp
var value = new CharacterEquipmentItemVM();
value.ExecuteBeginHint();
```

## See Also

- [Complete Class Catalog](../catalog)