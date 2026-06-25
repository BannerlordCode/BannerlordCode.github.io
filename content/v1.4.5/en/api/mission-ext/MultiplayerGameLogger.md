---
title: "MultiplayerGameLogger"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGameLogger`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGameLogger

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameLogger : GameHandler`
**Base:** `GameHandler`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGameLogger.cs`

## Overview

`MultiplayerGameLogger` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Log
`public void Log(GameLog log)`

**Purpose:** Handles logic related to `log`.

### OnBeforeSave
`public override void OnBeforeSave()`

**Purpose:** Called when the `before save` event is raised.

### OnAfterSave
`public override void OnAfterSave()`

**Purpose:** Called when the `after save` event is raised.

## Usage Example

```csharp
var value = new MultiplayerGameLogger();
value.Log(log);
```

## See Also

- [Complete Class Catalog](../catalog)