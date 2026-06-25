---
title: "ApplicationPlatform"
description: "Auto-generated class reference for ApplicationPlatform."
---
# ApplicationPlatform

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class ApplicationPlatform`
**Base:** none
**File:** `TaleWorlds.Library/ApplicationPlatform.cs`

## Overview

`ApplicationPlatform` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentEngine` | `public static EngineType CurrentEngine { get; }` |
| `CurrentPlatform` | `public static Platform CurrentPlatform { get; }` |
| `CurrentRuntimeLibrary` | `public static Runtime CurrentRuntimeLibrary { get; }` |

## Key Methods

### Initialize
`public static void Initialize(EngineType engineType, Platform currentPlatform, Runtime currentRuntimeLibrary)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
ApplicationPlatform.Initialize(engineType, currentPlatform, currentRuntimeLibrary);
```

### IsPlatformWindows
`public static bool IsPlatformWindows()`

**Purpose:** **Purpose:** Determines whether the this instance is in the platform windows state or condition.

```csharp
// Static call; no instance required
ApplicationPlatform.IsPlatformWindows();
```

### IsPlatformConsole
`public static bool IsPlatformConsole()`

**Purpose:** **Purpose:** Determines whether the this instance is in the platform console state or condition.

```csharp
// Static call; no instance required
ApplicationPlatform.IsPlatformConsole();
```

## Usage Example

```csharp
ApplicationPlatform.Initialize(engineType, currentPlatform, currentRuntimeLibrary);
```

## See Also

- [Area Index](../)