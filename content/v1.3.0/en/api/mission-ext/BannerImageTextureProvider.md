---
title: "BannerImageTextureProvider"
description: "Auto-generated class reference for BannerImageTextureProvider."
---
# BannerImageTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerImageTextureProvider : ImageIdentifierTextureProvider`
**Base:** `ImageIdentifierTextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/BannerImageTextureProvider.cs`

## Overview

`BannerImageTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of BannerImageTextureProvider from the subsystem API first
BannerImageTextureProvider bannerImageTextureProvider = ...;
bannerImageTextureProvider.Clear(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerImageTextureProvider bannerImageTextureProvider = ...;
bannerImageTextureProvider.Clear(false);
```

## See Also

- [Area Index](../)