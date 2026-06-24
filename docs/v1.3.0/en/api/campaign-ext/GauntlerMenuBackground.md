<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntlerMenuBackground`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntlerMenuBackground

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntlerMenuBackground : MenuView`
**Base:** `MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntlerMenuBackground.cs`

## Overview

`GauntlerMenuBackground` lives in `SandBox.GauntletUI.Menu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI.Menu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new GauntlerMenuBackground();
```

## See Also

- [Complete Class Catalog](../catalog)