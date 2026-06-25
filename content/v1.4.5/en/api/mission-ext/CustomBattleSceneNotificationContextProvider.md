---
title: "CustomBattleSceneNotificationContextProvider"
description: "Auto-generated class reference for CustomBattleSceneNotificationContextProvider."
---
# CustomBattleSceneNotificationContextProvider

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSceneNotificationContextProvider : ISceneNotificationContextProvider`
**Base:** `ISceneNotificationContextProvider`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneNotificationContextProvider.cs`

## Overview

`CustomBattleSceneNotificationContextProvider` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsContextAllowed
`public bool IsContextAllowed(RelevantContextType relevantType)`

**Purpose:** Determines whether the current object is in the `context allowed` state or condition.

```csharp
// Obtain an instance of CustomBattleSceneNotificationContextProvider from the subsystem API first
CustomBattleSceneNotificationContextProvider customBattleSceneNotificationContextProvider = ...;
var result = customBattleSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleSceneNotificationContextProvider customBattleSceneNotificationContextProvider = ...;
customBattleSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## See Also

- [Area Index](../)