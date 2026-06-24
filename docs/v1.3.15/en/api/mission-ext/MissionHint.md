<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionHint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionHint

**Namespace:** TaleWorlds.MountAndBlade.Missions.Hints
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionHint`
**Area:** mission-ext

## Overview

`MissionHint` lives in `TaleWorlds.MountAndBlade.Missions.Hints`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.Hints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithKeyAndAction
`public static MissionHint CreateWithKeyAndAction(TextObject actionText, string hotKeyId)`

**Purpose:** Creates a new `with key and action` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MissionHint.CreateWithKeyAndAction(actionText, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
