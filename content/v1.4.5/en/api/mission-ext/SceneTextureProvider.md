---
title: "SceneTextureProvider"
description: "Auto-generated class reference for SceneTextureProvider."
---
# SceneTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders/SceneTextureProvider.cs`

## Overview

`SceneTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WantedScene` | `public Scene WantedScene { get; }` |
| `Scene` | `public object Scene { get; set; }` |

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of SceneTextureProvider from the subsystem API first
SceneTextureProvider sceneTextureProvider = ...;
sceneTextureProvider.Tick(0);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** **Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of SceneTextureProvider from the subsystem API first
SceneTextureProvider sceneTextureProvider = ...;
sceneTextureProvider.SetTargetSize(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SceneTextureProvider sceneTextureProvider = ...;
sceneTextureProvider.Tick(0);
```

## See Also

- [Area Index](../)