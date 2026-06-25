---
title: "StoryModeViewSubModule"
description: "Auto-generated class reference for StoryModeViewSubModule."
---
# StoryModeViewSubModule

**Namespace:** StoryMode.View
**Module:** StoryMode.View
**Type:** `public class StoryModeViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.StoryMode/StoryMode.View/StoryMode.View/StoryModeViewSubModule.cs`

## Overview

`StoryModeViewSubModule` lives in `StoryMode.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Invoked when the game initialization finished event is raised.

```csharp
// Obtain an instance of StoryModeViewSubModule from the subsystem API first
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnGameInitializationFinished(game);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the game end event is raised.

```csharp
// Obtain an instance of StoryModeViewSubModule from the subsystem API first
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnGameEnd(game);
```

### OnSubModuleDeactivated
`public override void OnSubModuleDeactivated()`

**Purpose:** Invoked when the sub module deactivated event is raised.

```csharp
// Obtain an instance of StoryModeViewSubModule from the subsystem API first
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnSubModuleDeactivated();
```

### OnSubModuleActivated
`public override void OnSubModuleActivated()`

**Purpose:** Invoked when the sub module activated event is raised.

```csharp
// Obtain an instance of StoryModeViewSubModule from the subsystem API first
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnSubModuleActivated();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StoryModeViewSubModule storyModeViewSubModule = ...;
storyModeViewSubModule.OnGameInitializationFinished(game);
```

## See Also

- [Area Index](../)