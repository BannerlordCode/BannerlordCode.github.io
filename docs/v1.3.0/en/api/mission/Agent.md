<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Agent`
- [← Area / Back to mission](./)
- [↑ API Index](../)
- [⭐ SDK Overview (canonical)](../../../../v1.3.15/en/architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Agent](/versions/Agent)
<!-- END BREADCRUMB -->
# Agent (v1.3.0)

**Namespace**: TaleWorlds.MountAndBlade
**Module**: TaleWorlds.MountAndBlade
**Version**: v1.3.0
**Type**: Sealed class (`public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`)

> v1.3.0 documentation for `Agent`. For the full API reference (properties, methods, examples) see the canonical version:
> [v1.3.15 `Agent`](../../../../v1.3.15/en/api/mission/Agent)
> To see how this class changed across 1.3.0 / 1.3.15 / 1.4.5, see the [cross-version comparison](/versions/Agent).

## Overview

`Agent` is the agent entity in the game, representing soldiers, cavalry, archers, mounts, etc. on the battlefield. Each `Agent` has position, animation, equipment, and AI control. In v1.3.0 the class is declared `public sealed class`, inherits from `DotNetObject`, implements `IAgent`, `IFocusable`, `IUsable`, `IFormationUnit`, `ITrackableBase`, and is a managed wrapper around a native engine object (rendering and physics handled natively); access the player agent via the static property `Agent.Main`.

## v1.3.0 Notes

- Sealed class in the `TaleWorlds.MountAndBlade` namespace, source file `TaleWorlds.MountAndBlade/Agent.cs` (about 7000 lines, far smaller than v1.3.15's 23000+ lines).
- Static access: `public static Agent Main` (internally reads `Mission.Current.MainAgent`).
- Identity and state properties (all present in v1.3.0): `public bool IsPlayerControlled`, `public bool IsMine`, `public bool IsMainAgent`, `public bool IsHuman`, `public bool IsMount`, `public bool IsAIControlled`.
- Position and movement properties (all present in v1.3.0): `public Vec3 Position`, `public Vec3 VisualPosition`, `public Vec2 MovementVelocity`.
- Events (present in v1.3.0): `public event Agent.OnAgentHealthChangedDelegate OnAgentHealthChanged`, `public event Agent.OnMountHealthChangedDelegate OnMountHealthChanged`.
- Compared to v1.3.15: no `AgentComponent` component system (added in v1.3.15), fewer properties and methods, missing some advanced AI/behavior features and deep `Formation` integration, and a simplified event system.

## See Also

- [v1.3.15 full documentation](../../../../v1.3.15/en/api/mission/Agent)
- [Cross-version API comparison](/versions/Agent)
- [Area API index](./)
- [v1.3.0 API overview](../)
