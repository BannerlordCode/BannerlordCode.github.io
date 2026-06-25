---
title: "StoryModePermissionsSystem"
description: "Auto-generated class reference for StoryModePermissionsSystem."
---
# StoryModePermissionsSystem

**Namespace:** StoryMode.View.Permissions
**Module:** StoryMode.View
**Type:** `public class StoryModePermissionsSystem`
**Base:** none
**File:** `Modules.StoryMode/StoryMode.View/StoryMode.View.Permissions/StoryModePermissionsSystem.cs`

## Overview

`StoryModePermissionsSystem` lives in `StoryMode.View.Permissions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.View.Permissions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnInitialize
`public static void OnInitialize()`

**Purpose:** Invoked when the initialize event is raised.

```csharp
// Static call; no instance required
StoryModePermissionsSystem.OnInitialize();
```

## Usage Example

```csharp
StoryModePermissionsSystem.OnInitialize();
```

## See Also

- [Area Index](../)