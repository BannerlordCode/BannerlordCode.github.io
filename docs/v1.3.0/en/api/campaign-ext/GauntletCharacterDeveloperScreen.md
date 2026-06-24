<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletCharacterDeveloperScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletCharacterDeveloperScreen

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletCharacterDeveloperScreen : ScreenBase, IGameStateListener, IChangeableScreen, ICharacterDeveloperStateHandler`
**Base:** `ScreenBase`
**File:** `SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs`

## Overview

`GauntletCharacterDeveloperScreen` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new GauntletCharacterDeveloperScreen();
```

## See Also

- [Complete Class Catalog](../catalog)