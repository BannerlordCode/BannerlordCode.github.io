<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBSubModuleBase`
- [← Area / Back to core](./)
- [↑ API Index](../)
- [⭐ SDK Overview (canonical)](../../../../v1.3.15/en/architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSubModuleBase (v1.3.0)

**Namespace**: TaleWorlds.MountAndBlade
**Module**: TaleWorlds.MountAndBlade
**Version**: v1.3.0
**Type**: Abstract class (`public abstract class`)

> v1.3.0 documentation for `MBSubModuleBase`. For the full API reference (properties, methods, examples) see the canonical version:
> [v1.3.15 `MBSubModuleBase`](../../../../v1.3.15/en/api/core/MBSubModuleBase)

## Overview

`MBSubModuleBase` is the main entry point for every mod. When you declare a SubModule in `SubModule.xml`, you must create a class inheriting from `MBSubModuleBase` to respond to game events. In v1.3.0 the class is declared `public abstract class` and defines about 29 `virtual` lifecycle hooks (such as `OnSubModuleLoad`, `OnGameStart`, `OnMissionBehaviorInitialize`, `OnApplicationTick`); all hooks ship with default empty implementations and mods override only what they need.

## v1.3.0 Notes

- Abstract class in the `TaleWorlds.MountAndBlade` namespace, source file `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`.
- Provides about 29 virtual method hooks covering module load, game start/end, campaign/mission initialization, and per-frame tick lifecycle points.
- Key method signatures as they exist in v1.3.0: `protected internal virtual void OnSubModuleLoad()`, `protected internal virtual void OnGameStart(Game, IGameStarter)`, `public virtual void OnCampaignStart(Game, object)`, `public virtual void OnMissionBehaviorInitialize(Mission)`, `protected internal virtual void OnApplicationTick(float dt)`, `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)`, `public virtual void OnGameLoaded(Game, object)`.
- Compared to v1.3.15: missing some later-added lifecycle hooks; total method count is slightly lower (about 29 vs more in canonical).
- No `AgentComponent` system integration (introduced later in v1.3.15).

## See Also

- [v1.3.15 full documentation](../../../../v1.3.15/en/api/core/MBSubModuleBase)
- [Area API index](./)
- [v1.3.0 API overview](../)
