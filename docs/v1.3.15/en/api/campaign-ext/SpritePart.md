<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpritePart`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpritePart

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpritePart`
**Base:** none
**File:** `TaleWorlds.TwoDimension/SpritePart.cs`

## Overview

`SpritePart` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `SheetID` | `public int SheetID { get; }` |
| `SheetX` | `public int SheetX { get; }` |
| `SheetY` | `public int SheetY { get; }` |
| `MinU` | `public float MinU { get; }` |
| `MinV` | `public float MinV { get; }` |
| `MaxU` | `public float MaxU { get; }` |
| `MaxV` | `public float MaxV { get; }` |
| `SheetWidth` | `public int SheetWidth { get; }` |
| `SheetHeight` | `public int SheetHeight { get; }` |
| `Texture` | `public Texture Texture { get; }` |
| `Category` | `public SpriteCategory Category { get; set; }` |

## Key Methods

### UpdateInitValues
`public void UpdateInitValues()`

**Purpose:** Updates the state or data of `init values`.

## Usage Example

```csharp
var value = new SpritePart();
value.UpdateInitValues();
```

## See Also

- [Complete Class Catalog](../catalog)