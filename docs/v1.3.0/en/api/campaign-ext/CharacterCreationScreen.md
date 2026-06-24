<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationScreen`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationScreen

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public class CharacterCreationScreen : ScreenBase, ICharacterCreationStateHandler, IGameStateListener`
**Base:** `ScreenBase`
**File:** `SandBox.View/CharacterCreation/CharacterCreationScreen.cs`

## Overview

`CharacterCreationScreen` lives in `SandBox.View.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new CharacterCreationScreen();
```

## See Also

- [Complete Class Catalog](../catalog)