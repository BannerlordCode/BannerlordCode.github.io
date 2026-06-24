<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundParameterMissionCulture`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SoundParameterMissionCulture

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public enum SoundParameterMissionCulture : short`
**Base:** `short`
**Area:** campaign-ext

## Overview

`SoundParameterMissionCulture` lives in `SandBox.View.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.View.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `Aserai` |
| `Battania` |
| `Empire` |
| `Khuzait` |
| `Sturgia` |
| `Vlandia` |
| `Nord` |
| `ReservedA` |
| `ReservedB` |

## Usage Example

```csharp
SoundParameterMissionCulture example = SoundParameterMissionCulture.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
