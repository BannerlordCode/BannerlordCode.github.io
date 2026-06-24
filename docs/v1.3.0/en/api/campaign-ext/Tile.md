<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Tile`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Tile

**Namespace:** SandBox.BoardGames.Objects
**Module:** SandBox.BoardGames
**Type:** `public class Tile : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/BoardGames/Objects/Tile.cs`

## Overview

`Tile` lives in `SandBox.BoardGames.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetVisibility
`public void SetVisibility(bool visible)`

**Purpose:** Sets the value or state of `visibility`.

## Usage Example

```csharp
var value = new Tile();
value.SetVisibility(false);
```

## See Also

- [Complete Class Catalog](../catalog)