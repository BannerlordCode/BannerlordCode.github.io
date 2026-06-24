<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBuilderState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.MountAndBlade/BannerBuilderState.cs`

## Overview

`BannerBuilderState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; }` |
| `DefaultBannerKey` | `public string DefaultBannerKey { get; }` |

## Usage Example

```csharp
var value = new BannerBuilderState();
```

## See Also

- [Complete Class Catalog](../catalog)