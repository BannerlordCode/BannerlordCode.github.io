<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadNavigationForcedScopeCollection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadNavigationForcedScopeCollection

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GamepadNavigationForcedScopeCollection`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs`

## Overview

`GamepadNavigationForcedScopeCollection` lives in `TaleWorlds.GauntletUI.GamepadNavigation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.GamepadNavigation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `CollectionID` | `public string CollectionID { get; set; }` |
| `CollectionOrder` | `public int CollectionOrder { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `Scopes` | `public List<GamepadNavigationScope> Scopes { get; }` |
| `ActiveScope` | `public GamepadNavigationScope ActiveScope { get; set; }` |
| `PreviousScope` | `public GamepadNavigationScope PreviousScope { get; set; }` |

## Key Methods

### IsAvailable
`public bool IsAvailable()`

**Purpose:** Handles logic related to `is available`.

### AddScope
`public void AddScope(GamepadNavigationScope scope)`

**Purpose:** Adds `scope` to the current collection or state.

### RemoveScope
`public void RemoveScope(GamepadNavigationScope scope)`

**Purpose:** Removes `scope` from the current collection or state.

### ClearScopes
`public void ClearScopes()`

**Purpose:** Handles logic related to `clear scopes`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new GamepadNavigationForcedScopeCollection();
value.IsAvailable();
```

## See Also

- [Complete Class Catalog](../catalog)