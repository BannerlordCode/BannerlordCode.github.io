---
title: "CharacterImageTextureProvider"
description: "Auto-generated class reference for CharacterImageTextureProvider."
---
# CharacterImageTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterImageTextureProvider : ImageIdentifierTextureProvider`
**Base:** `ImageIdentifierTextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/CharacterImageTextureProvider.cs`

## Overview

`CharacterImageTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of CharacterImageTextureProvider from the subsystem API first
CharacterImageTextureProvider characterImageTextureProvider = ...;
characterImageTextureProvider.Clear(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterImageTextureProvider characterImageTextureProvider = ...;
characterImageTextureProvider.Clear(false);
```

## See Also

- [Area Index](../)