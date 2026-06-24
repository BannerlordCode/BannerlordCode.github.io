<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EngineTexture`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EngineTexture

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class EngineTexture : ITexture`
**Base:** `ITexture`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/EngineTexture.cs`

## Overview

`EngineTexture` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new EngineTexture();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)