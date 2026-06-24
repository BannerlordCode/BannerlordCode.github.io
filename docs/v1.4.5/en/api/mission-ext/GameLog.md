<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameLog`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameLog

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameLog`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/GameLog.cs`

## Overview

`GameLog` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Type` | `public GameLogType Type { get; set; }` |
| `Player` | `public PlayerId Player { get; set; }` |
| `GameTime` | `public float GameTime { get; set; }` |
| `Data` | `public Dictionary<string, string> Data { get; set; }` |

## Key Methods

### GetDataAsString
`public string GetDataAsString()`

**Purpose:** Gets the current value of `data as string`.

## Usage Example

```csharp
var value = new GameLog();
value.GetDataAsString();
```

## See Also

- [Complete Class Catalog](../catalog)