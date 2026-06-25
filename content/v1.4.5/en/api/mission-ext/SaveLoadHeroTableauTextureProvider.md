---
title: "SaveLoadHeroTableauTextureProvider"
description: "Auto-generated class reference for SaveLoadHeroTableauTextureProvider."
---
# SaveLoadHeroTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SaveLoadHeroTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders/SaveLoadHeroTableauTextureProvider.cs`

## Overview

`SaveLoadHeroTableauTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroVisualCode` | `public string HeroVisualCode { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `CurrentlyRotating` | `public bool CurrentlyRotating { get; set; }` |

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of SaveLoadHeroTableauTextureProvider from the subsystem API first
SaveLoadHeroTableauTextureProvider saveLoadHeroTableauTextureProvider = ...;
saveLoadHeroTableauTextureProvider.Tick(0);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of SaveLoadHeroTableauTextureProvider from the subsystem API first
SaveLoadHeroTableauTextureProvider saveLoadHeroTableauTextureProvider = ...;
saveLoadHeroTableauTextureProvider.SetTargetSize(0, 0);
```

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of SaveLoadHeroTableauTextureProvider from the subsystem API first
SaveLoadHeroTableauTextureProvider saveLoadHeroTableauTextureProvider = ...;
saveLoadHeroTableauTextureProvider.Clear(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SaveLoadHeroTableauTextureProvider saveLoadHeroTableauTextureProvider = ...;
saveLoadHeroTableauTextureProvider.Tick(0);
```

## See Also

- [Area Index](../)