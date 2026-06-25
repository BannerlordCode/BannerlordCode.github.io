---
title: "ImageIdentifierTextureProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageIdentifierTextureProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ImageIdentifierTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ImageIdentifierTextureProvider : TextureProvider, IDisposable`
**Base:** `TextureProvider`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers/ImageIdentifierTextureProvider.cs`

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

**Purpose:** Handles logic related to `tick`.

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Handles logic related to `clear`.

### CreateImageWithId
`public void CreateImageWithId(string id, string additionalArgs)`

**Purpose:** Creates a new `image with id` instance or object.

## Usage Example

```csharp
var implementation = new CustomImageIdentifierTextureProvider();
```

## See Also

- [Complete Class Catalog](../catalog)