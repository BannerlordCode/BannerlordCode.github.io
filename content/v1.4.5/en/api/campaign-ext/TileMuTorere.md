---
title: "TileMuTorere"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TileMuTorere`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TileMuTorere

**Namespace:** SandBox.BoardGames.Tiles
**Module:** SandBox.BoardGames
**Type:** `public class TileMuTorere : Tile1D`
**Base:** `Tile1D`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames.Tiles/TileMuTorere.cs`

## Overview

`TileMuTorere` lives in `SandBox.BoardGames.Tiles` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Tiles` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `XLeftTile` | `public int XLeftTile { get; }` |
| `XRightTile` | `public int XRightTile { get; }` |

## Usage Example

```csharp
var value = new TileMuTorere();
```

## See Also

- [Complete Class Catalog](../catalog)