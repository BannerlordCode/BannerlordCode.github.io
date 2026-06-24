<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemTableauTextureProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/ItemTableauTextureProvider.cs`

## Overview

`ItemTableauTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemModifierId` | `public string ItemModifierId { get; set; }` |
| `StringId` | `public string StringId { get; set; }` |
| `Item` | `public ItemRosterElement Item { get; set; }` |
| `Ammo` | `public int Ammo { get; set; }` |
| `AverageUnitCost` | `public int AverageUnitCost { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `CurrentlyRotating` | `public bool CurrentlyRotating { get; set; }` |
| `RotateItemVertical` | `public float RotateItemVertical { get; set; }` |
| `RotateItemHorizontal` | `public float RotateItemHorizontal { get; set; }` |
| `InitialTiltRotation` | `public float InitialTiltRotation { get; set; }` |
| `InitialPanRotation` | `public float InitialPanRotation { get; set; }` |

## Key Methods

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Handles logic related to `clear`.

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new ItemTableauTextureProvider();
value.Clear(false);
```

## See Also

- [Complete Class Catalog](../catalog)