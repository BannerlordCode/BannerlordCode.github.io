<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherUI`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherUI

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherUI`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs`

## Overview

`LauncherUI` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### CheckMouseOverWindowDragArea
`public bool CheckMouseOverWindowDragArea()`

**Purpose:** Handles logic related to `check mouse over window drag area`.

### HitTest
`public bool HitTest()`

**Purpose:** Handles logic related to `hit test`.

### AddHintInformation
`public static void AddHintInformation(string message)`

**Purpose:** Adds `hint information` to the current collection or state.

### HideHintInformation
`public static void HideHintInformation()`

**Purpose:** Handles logic related to `hide hint information`.

## Usage Example

```csharp
var value = new LauncherUI();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)