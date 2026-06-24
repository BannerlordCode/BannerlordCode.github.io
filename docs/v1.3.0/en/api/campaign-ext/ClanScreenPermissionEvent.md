<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanScreenPermissionEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanScreenPermissionEvent

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class ClanScreenPermissionEvent : EventBase`
**Base:** `EventBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs`

## Overview

`ClanScreenPermissionEvent` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Navigation.NavigationElements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsClanScreenAvailable` | `public Action<bool, TextObject> IsClanScreenAvailable { get; }` |

## Usage Example

```csharp
var value = new ClanScreenPermissionEvent();
```

## See Also

- [Complete Class Catalog](../catalog)