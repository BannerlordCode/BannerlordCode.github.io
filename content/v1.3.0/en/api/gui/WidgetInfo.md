---
title: "WidgetInfo"
description: "Auto-generated class reference for WidgetInfo."
---
# WidgetInfo

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetInfo`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/WidgetInfo.cs`

## Overview

`WidgetInfo` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Type` | `public Type Type { get; }` |
| `GotCustomUpdate` | `public bool GotCustomUpdate { get; }` |
| `GotCustomLateUpdate` | `public bool GotCustomLateUpdate { get; }` |
| `GotCustomParallelUpdate` | `public bool GotCustomParallelUpdate { get; }` |
| `GotUpdateBrushes` | `public bool GotUpdateBrushes { get; }` |

## Key Methods

### Refresh
`public static void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Static call; no instance required
WidgetInfo.Refresh();
```

### GetWidgetInfo
`public static WidgetInfo GetWidgetInfo(Type type)`

**Purpose:** Reads and returns the `widget info` value held by the current object.

```csharp
// Static call; no instance required
WidgetInfo.GetWidgetInfo(type);
```

### GetWidgetInfos
`public static WidgetInfo GetWidgetInfos()`

**Purpose:** Reads and returns the `widget infos` value held by the current object.

```csharp
// Static call; no instance required
WidgetInfo.GetWidgetInfos();
```

## Usage Example

```csharp
WidgetInfo.Refresh();
```

## See Also

- [Area Index](../)