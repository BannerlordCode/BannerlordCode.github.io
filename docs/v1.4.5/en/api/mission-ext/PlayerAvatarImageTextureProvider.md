<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerAvatarImageTextureProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerAvatarImageTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerAvatarImageTextureProvider : ImageIdentifierTextureProvider`
**Base:** `ImageIdentifierTextureProvider`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers/PlayerAvatarImageTextureProvider.cs`

## Overview

`PlayerAvatarImageTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new PlayerAvatarImageTextureProvider();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)