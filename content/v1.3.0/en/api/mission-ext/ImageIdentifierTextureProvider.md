---
title: "ImageIdentifierTextureProvider"
description: "Auto-generated class reference for ImageIdentifierTextureProvider."
---
# ImageIdentifierTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ImageIdentifierTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ImageIdentifiers/ImageIdentifierTextureProvider.cs`

## Overview

`ImageIdentifierTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsReleased` | `public bool IsReleased { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |
| `ImageId` | `public string ImageId { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ImageIdentifierTextureProvider from the subsystem API first
ImageIdentifierTextureProvider imageIdentifierTextureProvider = ...;
imageIdentifierTextureProvider.Tick(0);
```

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of ImageIdentifierTextureProvider from the subsystem API first
ImageIdentifierTextureProvider imageIdentifierTextureProvider = ...;
imageIdentifierTextureProvider.Clear(false);
```

### CreateImageWithId
`public void CreateImageWithId(string id, string additionalArgs)`

**Purpose:** Constructs a new image with id entity and returns it to the caller.

```csharp
// Obtain an instance of ImageIdentifierTextureProvider from the subsystem API first
ImageIdentifierTextureProvider imageIdentifierTextureProvider = ...;
imageIdentifierTextureProvider.CreateImageWithId("example", "example");
```

### ReleaseCache
`public void ReleaseCache()`

**Purpose:** Executes the ReleaseCache logic.

```csharp
// Obtain an instance of ImageIdentifierTextureProvider from the subsystem API first
ImageIdentifierTextureProvider imageIdentifierTextureProvider = ...;
imageIdentifierTextureProvider.ReleaseCache();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ImageIdentifierTextureProvider instance = ...;
```

## See Also

- [Area Index](../)