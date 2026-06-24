<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherHintVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherHintVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherHintVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherHintVM.cs`

## Overview

`LauncherHintVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |

## Key Methods

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

## Usage Example

```csharp
var value = new LauncherHintVM();
value.ExecuteBeginHint();
```

## See Also

- [Complete Class Catalog](../catalog)