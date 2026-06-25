---
title: "ApplicationPlatform"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplicationPlatform`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### IsPlatformWindows
`public static bool IsPlatformWindows()`

**Purpose:** Handles logic related to `is platform windows`.

### IsPlatformConsole
`public static bool IsPlatformConsole()`

**Purpose:** Handles logic related to `is platform console`.

## Usage Example

```csharp
ApplicationPlatform.Initialize(engineType, currentPlatform, currentRuntimeLibrary);
```

## See Also

- [Complete Class Catalog](../catalog)