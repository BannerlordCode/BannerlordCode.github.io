<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputRestrictions`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InputRestrictions

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class InputRestrictions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/InputRestrictions.cs`

## Overview

`InputRestrictions` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Order` | `public int Order { get; }` |
| `Id` | `public Guid Id { get; }` |
| `MouseVisibility` | `public bool MouseVisibility { get; }` |
| `InputUsageMask` | `public InputUsageMask InputUsageMask { get; }` |

## Key Methods

### SetMouseVisibility
`public void SetMouseVisibility(bool isVisible)`

**Purpose:** Sets the value or state of `mouse visibility`.

### SetInputRestrictions
`public void SetInputRestrictions(bool isMouseVisible = true, InputUsageMask mask = InputUsageMask.All)`

**Purpose:** Sets the value or state of `input restrictions`.

### ResetInputRestrictions
`public void ResetInputRestrictions()`

**Purpose:** Resets `input restrictions` to its initial state.

## Usage Example

```csharp
var value = new InputRestrictions();
value.SetMouseVisibility(false);
```

## See Also

- [Complete Class Catalog](../catalog)