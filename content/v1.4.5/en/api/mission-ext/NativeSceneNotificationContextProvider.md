---
title: "NativeSceneNotificationContextProvider"
description: "Auto-generated class reference for NativeSceneNotificationContextProvider."
---
# NativeSceneNotificationContextProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NativeSceneNotificationContextProvider : ISceneNotificationContextProvider`
**Base:** `ISceneNotificationContextProvider`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.SceneNotification/NativeSceneNotificationContextProvider.cs`

## Overview

`NativeSceneNotificationContextProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsContextAllowed
`public bool IsContextAllowed(RelevantContextType relevantType)`

**Purpose:** **Purpose:** Determines whether the this instance is in the context allowed state or condition.

```csharp
// Obtain an instance of NativeSceneNotificationContextProvider from the subsystem API first
NativeSceneNotificationContextProvider nativeSceneNotificationContextProvider = ...;
var result = nativeSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NativeSceneNotificationContextProvider nativeSceneNotificationContextProvider = ...;
nativeSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## See Also

- [Area Index](../)