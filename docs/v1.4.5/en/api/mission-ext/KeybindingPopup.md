<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KeybindingPopup`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KeybindingPopup

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KeybindingPopup`
**Base:** none
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopup.cs`

## Overview

`KeybindingPopup` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### OnToggle
`public void OnToggle(bool isActive)`

**Purpose:** Called when the `toggle` event is raised.

## Usage Example

```csharp
var value = new KeybindingPopup();
value.Tick();
```

## See Also

- [Complete Class Catalog](../catalog)