---
title: "NativeOptionsType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeOptionsType`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeOptionsType

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public enum NativeOptionsType`
**Area:** engine

## Overview

`NativeOptionsType` lives in `TaleWorlds.Engine.Options`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine.Options` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `1` |
| `MasterVolume` |
| `SoundVolume` |
| `MusicVolume` |
| `VoiceChatVolume` |
| `VoiceOverVolume` |
| `SoundDevice` |
| `MaxSimultaneousSoundEventCount` |
| `SoundPreset` |
| `KeepSoundInBackground` |
| `SoundOcclusion` |
| `MouseSensitivity` |
| `InvertMouseYAxis` |
| `MouseYMovementScale` |
| `TrailAmount` |
| `EnableVibration` |
| `EnableGyroAssistedAim` |
| `GyroAimSensitivity` |
| `EnableTouchpadMouse` |
| `EnableAlternateAiming` |
| `DisplayMode` |
| `SelectedMonitor` |
| `SelectedAdapter` |
| `ScreenResolution` |
| `RefreshRate` |
| `ResolutionScale` |
| `FrameLimiter` |
| `VSync` |
| `Brightness` |

## Usage Example

```csharp
NativeOptionsType example = NativeOptionsType.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
