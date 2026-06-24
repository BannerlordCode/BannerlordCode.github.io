<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionHint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionHint

**Namespace:** TaleWorlds.MountAndBlade.Missions.Hints
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHint`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Hints/MissionHint.cs`

## Overview

`MissionHint` lives in `TaleWorlds.MountAndBlade.Missions.Hints` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Hints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithKeyAndAction
`public static MissionHint CreateWithKeyAndAction(TextObject actionText, string hotKeyId)`

**Purpose:** Creates a new `with key and action` instance or object.

## Usage Example

```csharp
MissionHint.CreateWithKeyAndAction(actionText, "example");
```

## See Also

- [Complete Class Catalog](../catalog)