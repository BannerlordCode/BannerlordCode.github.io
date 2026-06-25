---
title: "AvailableCustomGames"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AvailableCustomGames`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AvailableCustomGames

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AvailableCustomGames`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/AvailableCustomGames.cs`

## Overview

`AvailableCustomGames` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomGameServerInfos` | `public List<GameServerEntry> CustomGameServerInfos { get; }` |

## Key Methods

### GetCustomGamesByPermission
`public AvailableCustomGames GetCustomGamesByPermission(int playerPermission)`

**Purpose:** Gets the current value of `custom games by permission`.

## Usage Example

```csharp
var value = new AvailableCustomGames();
value.GetCustomGamesByPermission(0);
```

## See Also

- [Complete Class Catalog](../catalog)