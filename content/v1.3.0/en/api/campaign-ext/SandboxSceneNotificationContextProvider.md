---
title: "SandboxSceneNotificationContextProvider"
description: "Auto-generated class reference for SandboxSceneNotificationContextProvider."
---
# SandboxSceneNotificationContextProvider

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class SandboxSceneNotificationContextProvider : ISceneNotificationContextProvider`
**Base:** `ISceneNotificationContextProvider`
**File:** `SandBox.GauntletUI/SandboxSceneNotificationContextProvider.cs`

## Overview

`SandboxSceneNotificationContextProvider` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsContextAllowed
`public bool IsContextAllowed(SceneNotificationData.RelevantContextType relevantType)`

**Purpose:** Determines whether the this instance is in the context allowed state or condition.

```csharp
// Obtain an instance of SandboxSceneNotificationContextProvider from the subsystem API first
SandboxSceneNotificationContextProvider sandboxSceneNotificationContextProvider = ...;
var result = sandboxSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SandboxSceneNotificationContextProvider sandboxSceneNotificationContextProvider = ...;
sandboxSceneNotificationContextProvider.IsContextAllowed(relevantType);
```

## See Also

- [Area Index](../)