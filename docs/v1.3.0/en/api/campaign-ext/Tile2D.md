<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Tile2D`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Tile2D

**Namespace:** SandBox.BoardGames.Tiles
**Module:** SandBox.BoardGames
**Type:** `public class Tile2D : TileBase`
**Base:** `TileBase`
**File:** `SandBox/BoardGames/Tiles/Tile2D.cs`

## Overview

`Tile2D` lives in `SandBox.BoardGames.Tiles` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Tiles` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `X` | `public int X { get; }` |
| `Y` | `public int Y { get; }` |

## Usage Example

```csharp
var value = new Tile2D();
```

## See Also

- [Complete Class Catalog](../catalog)