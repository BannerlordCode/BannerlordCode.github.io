<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mission`
- [← Area / Back to mission](./)
- [↑ API Index](../)
- [⭐ SDK Overview (canonical)](../../../../v1.3.15/en/architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Mission](/versions/Mission)
<!-- END BREADCRUMB -->
# Mission (v1.3.0)

**Namespace**: TaleWorlds.MountAndBlade
**Module**: TaleWorlds.MountAndBlade
**Version**: v1.3.0
**Type**: Sealed class (`public sealed class Mission : DotNetObject, IMission`)

> v1.3.0 documentation for `Mission`. For the full API reference (properties, methods, examples) see the canonical version:
> [v1.3.15 `Mission`](../../../../v1.3.15/en/api/mission/Mission)
> To see how this class changed across 1.3.0 / 1.3.15 / 1.4.5, see the [cross-version comparison](/versions/Mission).

## Overview

`Mission` is the core class of the game mission (battle) system, responsible for managing all entities, agents, and mission behaviors within a mission scene. Every battle takes place within a `Mission` instance. In v1.3.0 the class is declared `public sealed class`, inherits from `DotNetObject`, implements `IMission`, and is a managed wrapper around a native engine object; access the active mission via the static property `Mission.Current`.

## v1.3.0 Notes

- Sealed class in the `TaleWorlds.MountAndBlade` namespace, source file `TaleWorlds.MountAndBlade/Mission.cs` (about 8500 lines, far smaller than v1.3.15's 32000+ lines).
- Singleton access: `public static Mission Current`, main agent `public Agent MainAgent`, scene `public Scene Scene`, scene name `public string SceneName`.
- Mission object collections (all present in v1.3.0): `public MBReadOnlyList<MissionObject> ActiveMissionObjects`, `public MBReadOnlyList<MissionObject> MissionObjects`.
- Teams and logic: `public Mission.TeamCollection Teams`, `public List<MissionLogic> MissionLogics`, `public List<MissionBehavior> MissionBehaviors`, plus `public Mission.State CurrentState`, `public MissionResult MissionResult`, `public MissionTimeTracker MissionTimeTracker`.
- Key methods (all present in v1.3.0): `public void AddMissionBehavior(MissionBehavior)`, `public void EndMission()`, `public static IEnumerable<Team> GetTeamsOfSide(BattleSideEnum)`.
- Compared to v1.3.15: no `AgentComponent` system, fewer `MissionBehavior` types, missing some AI/Formation features and advanced animation integration, and simpler scene interaction.

## See Also

- [v1.3.15 full documentation](../../../../v1.3.15/en/api/mission/Mission)
- [Cross-version API comparison](/versions/Mission)
- [Area API index](./)
- [v1.3.0 API overview](../)
