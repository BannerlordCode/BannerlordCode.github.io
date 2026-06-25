---
title: "CustomBattleServerReadyResponseMessage"
description: "Auto-generated class reference for CustomBattleServerReadyResponseMessage."
---
# CustomBattleServerReadyResponseMessage

**Namespace:** Messages.FromCustomBattleServerManager.ToCustomBattleServer
**Module:** Messages.FromCustomBattleServerManager
**Type:** `public class CustomBattleServerReadyResponseMessage : LoginResultObject`
**Base:** `LoginResultObject`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromCustomBattleServerManager/ToCustomBattleServer/CustomBattleServerReadyResponseMessage.cs`

## Overview

`CustomBattleServerReadyResponseMessage` lives in `Messages.FromCustomBattleServerManager.ToCustomBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServerManager.ToCustomBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CustomBattleServerReadyResponseMessage instance = ...;
```

## See Also

- [Area Index](../)