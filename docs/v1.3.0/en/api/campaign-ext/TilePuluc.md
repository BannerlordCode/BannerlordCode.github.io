<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TilePuluc`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TilePuluc

**Namespace:** SandBox.BoardGames.Tiles
**Module:** SandBox.BoardGames
**Type:** `public class TilePuluc : Tile1D`
**Base:** `Tile1D`
**File:** `SandBox/BoardGames/Tiles/TilePuluc.cs`

## Overview

`TilePuluc` lives in `SandBox.BoardGames.Tiles` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Tiles` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PosLeft` | `public Vec3 PosLeft { get; }` |
| `PosLeftMid` | `public Vec3 PosLeftMid { get; }` |
| `PosRight` | `public Vec3 PosRight { get; }` |
| `PosRightMid` | `public Vec3 PosRightMid { get; }` |

## Key Methods

### UpdateTilePosition
`public void UpdateTilePosition()`

**Purpose:** Updates the state or data of `tile position`.

## Usage Example

```csharp
var value = new TilePuluc();
value.UpdateTilePosition();
```

## See Also

- [Complete Class Catalog](../catalog)