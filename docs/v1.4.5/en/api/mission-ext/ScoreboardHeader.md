<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardHeader`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardHeader

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ScoreboardHeader`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## Overview

`ScoreboardHeader` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ScoreboardHeader
`public struct ScoreboardHeader(string id, Func<MissionPeer, string> playerGetterFunc, Func<BotData, string> botGetterFunc)`

**Purpose:** Handles logic related to `scoreboard header`.

### GetValueOf
`public string GetValueOf(MissionPeer missionPeer)`

**Purpose:** Gets the current value of `value of`.

### GetValueOf
`public string GetValueOf(BotData botData)`

**Purpose:** Gets the current value of `value of`.

## Usage Example

```csharp
var value = new ScoreboardHeader();
value.ScoreboardHeader("example", func<MissionPeer, "example", func<BotData, "example");
```

## See Also

- [Complete Class Catalog](../catalog)