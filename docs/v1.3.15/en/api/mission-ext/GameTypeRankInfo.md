<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTypeRankInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTypeRankInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Ranked
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameTypeRankInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Ranked/GameTypeRankInfo.cs`

## Overview

`GameTypeRankInfo` lives in `TaleWorlds.MountAndBlade.Diamond.Ranked` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Ranked` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public string GameType { get; }` |
| `RankBarInfo` | `public RankBarInfo RankBarInfo { get; }` |

## Usage Example

```csharp
var value = new GameTypeRankInfo();
```

## See Also

- [Complete Class Catalog](../catalog)