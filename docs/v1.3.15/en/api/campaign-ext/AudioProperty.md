<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AudioProperty`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AudioProperty

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AudioProperty`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AudioProperty.cs`

## Overview

`AudioProperty` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AudioName` | `public string AudioName { get; set; }` |
| `Delay` | `public bool Delay { get; set; }` |
| `DelaySeconds` | `public float DelaySeconds { get; set; }` |

## Key Methods

### FillFrom
`public void FillFrom(AudioProperty audioProperty)`

**Purpose:** Handles logic related to `fill from`.

## Usage Example

```csharp
var value = new AudioProperty();
value.FillFrom(audioProperty);
```

## See Also

- [Complete Class Catalog](../catalog)