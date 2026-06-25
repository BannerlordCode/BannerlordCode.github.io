---
title: "StoryModeSubModule"
description: "Auto-generated class reference for StoryModeSubModule."
---
# StoryModeSubModule

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `StoryMode/StoryModeSubModule.cs`

## Overview

`StoryModeSubModule` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the `game end` event is raised.

```csharp
// Obtain an instance of StoryModeSubModule from the subsystem API first
StoryModeSubModule storyModeSubModule = ...;
storyModeSubModule.OnGameEnd(game);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StoryModeSubModule storyModeSubModule = ...;
storyModeSubModule.OnGameEnd(game);
```

## See Also

- [Area Index](../)