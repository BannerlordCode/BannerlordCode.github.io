---
title: "SceneTextureProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneTextureProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders/SceneTextureProvider.cs`

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

**Purpose:** Handles logic related to `tick`.

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

## Usage Example

```csharp
var value = new SceneTextureProvider();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)