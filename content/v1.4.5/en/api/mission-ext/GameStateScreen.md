---
title: "GameStateScreen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameStateScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameStateScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameStateScreen : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Screens/GameStateScreen.cs`

## Overview

`GameStateScreen` lives in `TaleWorlds.MountAndBlade.View.Screens` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Screens` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameStateType` | `public Type GameStateType { get; }` |

## Usage Example

```csharp
var value = new GameStateScreen();
```

## See Also

- [Complete Class Catalog](../catalog)