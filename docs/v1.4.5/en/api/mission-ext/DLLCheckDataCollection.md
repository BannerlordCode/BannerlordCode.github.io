<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DLLCheckDataCollection`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DLLCheckDataCollection

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLLCheckDataCollection`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/DLLCheckDataCollection.cs`

## Overview

`DLLCheckDataCollection` lives in `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DLLData` | `public List<DLLCheckData> DLLData { get; set; }` |

## Usage Example

```csharp
var example = new DLLCheckDataCollection();
```

## See Also

- [Complete Class Catalog](../catalog)