<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AIScriptedFrameFlags`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AIScriptedFrameFlags

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum AIScriptedFrameFlags`
**Area:** mission-ext

## Overview

`AIScriptedFrameFlags` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `GoToPosition` |
| `1` |
| `NoAttack` |
| `2` |
| `ConsiderRotation` |
| `4` |
| `NeverSlowDown` |
| `8` |
| `DoNotRun` |
| `16` |
| `GoWithoutMount` |
| `32` |
| `RangerCanMoveForClearTarget` |
| `128` |
| `InConversation` |
| `256` |
| `Crouch` |
| `512` |
| `Drag` |

## Usage Example

```csharp
AIScriptedFrameFlags example = AIScriptedFrameFlags.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
