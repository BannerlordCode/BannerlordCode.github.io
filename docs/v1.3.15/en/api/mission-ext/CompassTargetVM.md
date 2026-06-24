<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompassTargetVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompassTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs`

## Overview

`CompassTargetVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `IsFlag` | `public bool IsFlag { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `Color2` | `public string Color2 { get; set; }` |
| `Color` | `public string Color { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `IconSpriteType` | `public string IconSpriteType { get; set; }` |
| `LetterCode` | `public string LetterCode { get; set; }` |
| `FullPosition` | `public float FullPosition { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |

## Key Methods

### RefreshColor
`public void RefreshColor(uint color, uint color2)`

**Purpose:** Refreshes the display or cache of `color`.

### Refresh
`public virtual void Refresh(float circleX, float x, float distance)`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new CompassTargetVM();
value.RefreshColor(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)