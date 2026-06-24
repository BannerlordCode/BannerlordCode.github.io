<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkEventFlags`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkEventFlags

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum PerkEventFlags`
**Area:** mission-ext

## Overview

`PerkEventFlags` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Enum Values

| Name |
|------|
| `None` |
| `0` |
| `MoraleChange` |
| `1` |
| `FlagCapture` |
| `2` |
| `FlagRemoval` |
| `4` |
| `HealthChange` |
| `8` |
| `AliveBotCountChange` |
| `16` |
| `PeerControlledAgentChange` |
| `32` |
| `BannerPickUp` |
| `64` |
| `BannerDrop` |
| `128` |
| `SpawnEnd` |
| `256` |
| `MountHealthChange` |
| `512` |
| `MountChange` |
| `1024` |
| `AgentEventsMask` |

## Usage Example

```csharp
PerkEventFlags example = PerkEventFlags.None;
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
