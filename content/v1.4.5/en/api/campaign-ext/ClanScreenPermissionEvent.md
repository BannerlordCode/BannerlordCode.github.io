---
title: "ClanScreenPermissionEvent"
description: "Auto-generated class reference for ClanScreenPermissionEvent."
---
# ClanScreenPermissionEvent

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class ClanScreenPermissionEvent : EventBase`
**Base:** `EventBase`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation.NavigationElements/ClanScreenPermissionEvent.cs`

## Overview

`ClanScreenPermissionEvent` lives in `SandBox.View.Map.Navigation.NavigationElements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Navigation.NavigationElements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsClanScreenAvailable` | `public Action<bool, TextObject> IsClanScreenAvailable { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ClanScreenPermissionEvent instance = ...;
```

## See Also

- [Area Index](../)