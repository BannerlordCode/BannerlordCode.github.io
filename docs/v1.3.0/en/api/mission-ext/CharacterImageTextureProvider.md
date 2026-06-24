<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterImageTextureProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var value = new CharacterImageTextureProvider();
value.Clear(false);
```

## See Also

- [Complete Class Catalog](../catalog)