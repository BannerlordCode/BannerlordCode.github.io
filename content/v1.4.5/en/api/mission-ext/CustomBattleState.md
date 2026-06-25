---
title: "CustomBattleState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleState

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleState : GameState`
**Base:** `GameState`
**Area:** mission-ext

## Overview

`CustomBattleState` lives in `TaleWorlds.MountAndBlade.CustomBattle`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EnableRecordMission
`public static string EnableRecordMission(List<string> strings)`

**Purpose:** Handles logic related to `enable record mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CustomBattleState.EnableRecordMission(strings);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
