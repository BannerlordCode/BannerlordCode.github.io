---
title: "PlayerAvatarImageTextureProvider"
description: "Auto-generated class reference for PlayerAvatarImageTextureProvider."
---
# PlayerAvatarImageTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerAvatarImageTextureProvider : ImageIdentifierTextureProvider`
**Base:** `ImageIdentifierTextureProvider`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers/PlayerAvatarImageTextureProvider.cs`

## Overview

`PlayerAvatarImageTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of PlayerAvatarImageTextureProvider from the subsystem API first
PlayerAvatarImageTextureProvider playerAvatarImageTextureProvider = ...;
playerAvatarImageTextureProvider.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerAvatarImageTextureProvider playerAvatarImageTextureProvider = ...;
playerAvatarImageTextureProvider.Tick(0);
```

## See Also

- [Area Index](../)