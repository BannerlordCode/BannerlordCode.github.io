<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringItemWithEnabledAndHintVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StringItemWithEnabledAndHintVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Generic
**Module:** TaleWorlds.Core
**Type:** `public class StringItemWithEnabledAndHintVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/StringItemWithEnabledAndHintVM.cs`

## Overview

`StringItemWithEnabledAndHintVM` lives in `TaleWorlds.Core.ViewModelCollection.Generic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Generic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionText` | `public string ActionText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |

## Key Methods

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

## Usage Example

```csharp
var value = new StringItemWithEnabledAndHintVM();
value.ExecuteAction();
```

## See Also

- [Complete Class Catalog](../catalog)