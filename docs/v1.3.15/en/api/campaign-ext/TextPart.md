<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextPart`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextPart

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TextPart`
**Base:** none
**File:** `TaleWorlds.TwoDimension/TextPart.cs`

## Overview

`TextPart` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DrawObject2D` | `public TextDrawObject DrawObject2D { get; set; }` |
| `DefaultFont` | `public Font DefaultFont { get; set; }` |
| `WordWidth` | `public float WordWidth { get; set; }` |
| `PartPosition` | `public Vector2 PartPosition { get; set; }` |

## Usage Example

```csharp
var value = new TextPart();
```

## See Also

- [Complete Class Catalog](../catalog)