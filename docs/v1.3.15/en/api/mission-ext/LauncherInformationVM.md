<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherInformationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherInformationVM.cs`

## Overview

`LauncherInformationVM` lives in `TaleWorlds.MountAndBlade.Launcher.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Text` | `public string Text { get; set; }` |

## Usage Example

```csharp
var value = new LauncherInformationVM();
```

## See Also

- [Complete Class Catalog](../catalog)