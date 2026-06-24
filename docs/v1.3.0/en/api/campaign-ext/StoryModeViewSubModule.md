<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeViewSubModule`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeViewSubModule

**Namespace:** StoryMode.View
**Module:** StoryMode.View
**Type:** `public class StoryModeViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `StoryMode.View/StoryModeViewSubModule.cs`

## Overview

`StoryModeViewSubModule` lives in `StoryMode.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Called when the `game initialization finished` event is raised.

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Called when the `game end` event is raised.

### OnSubModuleDeactivated
`public override void OnSubModuleDeactivated()`

**Purpose:** Called when the `sub module deactivated` event is raised.

### OnSubModuleActivated
`public override void OnSubModuleActivated()`

**Purpose:** Called when the `sub module activated` event is raised.

## Usage Example

```csharp
var value = new StoryModeViewSubModule();
value.OnGameInitializationFinished(game);
```

## See Also

- [Complete Class Catalog](../catalog)