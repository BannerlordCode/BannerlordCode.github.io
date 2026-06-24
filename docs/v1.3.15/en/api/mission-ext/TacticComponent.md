<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TacticComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TacticComponent.cs`

## Overview

`TacticComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `TacticComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Team` | `public Team Team { get; set; }` |

## Key Methods

### TickOccasionally
`public virtual void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

### ResetTactic
`public void ResetTactic()`

**Purpose:** Resets `tactic` to its initial state.

### SetDefaultBehaviorWeights
`public static void SetDefaultBehaviorWeights(Formation f)`

**Purpose:** Sets the value or state of `default behavior weights`.

## Usage Example

```csharp
var implementation = new CustomTacticComponent();
```

## See Also

- [Complete Class Catalog](../catalog)