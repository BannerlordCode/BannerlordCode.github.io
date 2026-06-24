<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveLoadHeroTableauTextureProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SaveLoadHeroTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SaveLoadHeroTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SaveLoadHeroTableauTextureProvider.cs`

## Overview

`SaveLoadHeroTableauTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroVisualCode` | `public string HeroVisualCode { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `IsVersionCompatible` | `public bool IsVersionCompatible { get; set; }` |
| `CurrentlyRotating` | `public bool CurrentlyRotating { get; set; }` |

## Key Methods

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var value = new SaveLoadHeroTableauTextureProvider();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)