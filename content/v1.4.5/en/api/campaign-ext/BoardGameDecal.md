---
title: "BoardGameDecal"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameDecal`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameDecal

**Namespace:** SandBox.BoardGames.Objects
**Module:** SandBox.BoardGames
**Type:** `public class BoardGameDecal : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.BoardGames.Objects/BoardGameDecal.cs`

## Overview

`BoardGameDecal` lives in `SandBox.BoardGames.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetAlpha
`public void SetAlpha(float alpha)`

**Purpose:** Sets the value or state of `alpha`.

## Usage Example

```csharp
var value = new BoardGameDecal();
value.SetAlpha(0);
```

## See Also

- [Complete Class Catalog](../catalog)