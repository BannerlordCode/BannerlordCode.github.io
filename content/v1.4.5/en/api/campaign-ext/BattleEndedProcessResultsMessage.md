---
title: "BattleEndedProcessResultsMessage"
description: "Auto-generated class reference for BattleEndedProcessResultsMessage."
---
# BattleEndedProcessResultsMessage

**Namespace:** Messages.BattleServerManager.BattleServerManager
**Module:** Messages.BattleServerManager
**Type:** `public class BattleEndedProcessResultsMessage : Message`
**Base:** `Message`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/Messages.BattleServerManager.BattleServerManager/BattleEndedProcessResultsMessage.cs`

## Overview

`BattleEndedProcessResultsMessage` lives in `Messages.BattleServerManager.BattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.BattleServerManager.BattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public BattleResult BattleResult { get; }` |
| `BadgeDateEntries` | `public List<BadgeDataEntry> BadgeDateEntries { get; }` |
| `BattleGameType` | `public string BattleGameType { get; }` |
| `Region` | `public string Region { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BattleEndedProcessResultsMessage instance = ...;
```

## See Also

- [Area Index](../)