---
title: "StoryModeGauntletUISubModule"
description: "Auto-generated class reference for StoryModeGauntletUISubModule."
---
# StoryModeGauntletUISubModule

**Namespace:** StoryMode.GauntletUI
**Module:** StoryMode.GauntletUI
**Type:** `public class StoryModeGauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `StoryMode.GauntletUI/StoryModeGauntletUISubModule.cs`

## Overview

`StoryModeGauntletUISubModule` lives in `StoryMode.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Invoked when the `game initialization finished` event is raised.

```csharp
// Obtain an instance of StoryModeGauntletUISubModule from the subsystem API first
StoryModeGauntletUISubModule storyModeGauntletUISubModule = ...;
storyModeGauntletUISubModule.OnGameInitializationFinished(game);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the `game end` event is raised.

```csharp
// Obtain an instance of StoryModeGauntletUISubModule from the subsystem API first
StoryModeGauntletUISubModule storyModeGauntletUISubModule = ...;
storyModeGauntletUISubModule.OnGameEnd(game);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StoryModeGauntletUISubModule storyModeGauntletUISubModule = ...;
storyModeGauntletUISubModule.OnGameInitializationFinished(game);
```

## See Also

- [Area Index](../)