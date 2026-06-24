<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OverrideMainAgentControlFlag`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OverrideMainAgentControlFlag

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum OverrideMainAgentControlFlag`
**Area:** mission-ext

## Overview

`OverrideMainAgentControlFlag` lives in `TaleWorlds.MountAndBlade.View.MissionViews`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `Walk` |
| `1` |
| `Run` |
| `2` |
| `Crouch` |
| `4` |
| `Stand` |

## Usage Example

```csharp
OverrideMainAgentControlFlag example = OverrideMainAgentControlFlag.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
