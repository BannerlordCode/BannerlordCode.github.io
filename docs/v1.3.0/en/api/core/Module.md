<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Module`
- [← Area / Back to core](./)
- [↑ API Index](../)
- [⭐ SDK Overview (canonical)](../../../../v1.3.15/en/architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Module (v1.3.0)

**Namespace**: TaleWorlds.MountAndBlade
**Module**: TaleWorlds.MountAndBlade
**Version**: v1.3.0
**Type**: Sealed class (`public sealed class Module : DotNetObject, IGameStateManagerOwner`)

> v1.3.0 documentation for `Module`. For the full API reference (properties, methods, examples) see the canonical version:
> [v1.3.15 `Module`](../../../../v1.3.15/en/api/core/Module)

## Overview

`Module` is the core singleton class of the game, responsible for managing all submodule loading, initialization, and global game state plus platform services. It is created at game startup and is the main entry point for accessing current module information. In v1.3.0 the class is declared `public sealed class`, inherits from `DotNetObject`, implements `IGameStateManagerOwner`, and is accessed via the static property `Module.CurrentModule`.

## v1.3.0 Notes

- Sealed class in the `TaleWorlds.MountAndBlade` namespace, source file `TaleWorlds.MountAndBlade/Module.cs` (about 1600 lines).
- Singleton access: `public static Module CurrentModule { get; private set; }`; do not instantiate directly.
- Key properties (all present in v1.3.0): `GlobalGameStateManager` (`GameStateManager`), `GlobalTextManager` (`GameTextManager`), `MultiplayerRequested` (`bool`), `LoadingFinished` (`bool`), `JobManager` (`JobManager`).
- Key methods (all present in v1.3.0): `public MBReadOnlyList<MBSubModuleBase> CollectSubModules()`, `public Type GetSubModuleType(string name)`, `public void SetInitialModuleScreenAsRootScreen()`, `internal void Initialize()`, `internal string GetMissionControllerClassNames()`.
- Compared to v1.3.15: simpler structure — no standalone `TaleWorlds.SaveSystem` module (save functionality is inline within the `TaleWorlds.SaveSystem` namespace), no standalone `TaleWorlds.DotNet` module, and fewer platform service integrations.

## See Also

- [v1.3.15 full documentation](../../../../v1.3.15/en/api/core/Module)
- [Area API index](./)
- [v1.3.0 API overview](../)
