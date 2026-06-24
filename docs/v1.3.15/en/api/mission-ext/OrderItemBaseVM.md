<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderItemBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderItemBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class OrderItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderItemBaseVM.cs`

## Overview

`OrderItemBaseVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `OrderIconId` | `public string OrderIconId { get; set; }` |
| `SelectionState` | `public string SelectionState { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshState
`public void RefreshState()`

**Purpose:** Refreshes the display or cache of `state`.

### ExecuteAction
`public void ExecuteAction(VisualOrderExecutionParameters executionParameters)`

**Purpose:** Executes the `action` operation or workflow.

### SetShortcutKey
`public void SetShortcutKey(InputKeyItemVM inputKeyItem)`

**Purpose:** Sets the value or state of `shortcut key`.

## Usage Example

```csharp
var implementation = new CustomOrderItemBaseVM();
```

## See Also

- [Complete Class Catalog](../catalog)