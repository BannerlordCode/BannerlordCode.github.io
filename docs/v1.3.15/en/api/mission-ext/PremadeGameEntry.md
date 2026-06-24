<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PremadeGameEntry`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PremadeGameEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PremadeGameEntry`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PremadeGameEntry.cs`

## Overview

`PremadeGameEntry` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public Guid Id { get; }` |
| `Name` | `public string Name { get; }` |
| `Region` | `public string Region { get; }` |
| `GameType` | `public string GameType { get; }` |
| `MapName` | `public string MapName { get; }` |
| `FactionA` | `public string FactionA { get; }` |
| `FactionB` | `public string FactionB { get; }` |
| `IsPasswordProtected` | `public bool IsPasswordProtected { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |

## Usage Example

```csharp
var value = new PremadeGameEntry();
```

## See Also

- [Complete Class Catalog](../catalog)