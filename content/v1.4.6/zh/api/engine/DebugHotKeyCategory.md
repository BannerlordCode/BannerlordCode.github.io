---
title: "DebugHotKeyCategory"
description: "DebugHotKeyCategory：TaleWorlds.Engine 的 public 类，继承 GameKeyContext；公开成员 276 个（方法 0、属性 0、字段 275）。源文件 TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs。"
---
# DebugHotKeyCategory

**Namespace:** `TaleWorlds.Engine.InputSystem`
**Module:** `TaleWorlds.Engine`
**Type:** `public class DebugHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs`

## 概述

DebugHotKeyCategory 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs。它是一个 public 类，实现/继承 GameKeyContext，继承链为 DebugHotKeyCategory → GameKeyContext。public/protected 成员共 276 个：275 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DebugHotKeyCategory 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录不同（TaleWorlds.Engine.InputSystem），继承链 DebugHotKeyCategory → GameKeyContext。成员构成以方法为主（方法 0/276，属性 0/276），对外主要以操作入口暴露。继承链上的 GameKeyContext 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DebugHotKeyCategory` | `public DebugHotKeyCategory() : base(" ", 0, GameKeyContext.GameKeyContextType.AuxiliaryNotSerialized)` | 构造函数 |
| `CategoryId` | `public const string CategoryId` | 字段 |
| `LeftMouseButton` | `public const string LeftMouseButton` | 字段 |
| `RightMouseButton` | `public const string RightMouseButton` | 字段 |
| `SelectAll` | `public const string SelectAll` | 字段 |
| `Redo` | `public const string Redo` | 字段 |
| `Undo` | `public const string Undo` | 字段 |
| `Copy` | `public const string Copy` | 字段 |
| `Duplicate` | `public const string Duplicate` | 字段 |
| `Score` | `public const string Score` | 字段 |
| `SetOriginToZero` | `public const string SetOriginToZero` | 字段 |
| `TestEngineCrash` | `public const string TestEngineCrash` | 字段 |
| `AgentHotkeySwitchRender` | `public const string AgentHotkeySwitchRender` | 字段 |
| `AgentHotkeySwitchFaceAnimationDebug` | `public const string AgentHotkeySwitchFaceAnimationDebug` | 字段 |
| `AgentHotkeyCheckCollisionCapsule` | `public const string AgentHotkeyCheckCollisionCapsule` | 字段 |
| `EngineInterfaceHotkeyWireframe` | `public const string EngineInterfaceHotkeyWireframe` | 字段 |
| `EngineInterfaceHotkeyWireframe2` | `public const string EngineInterfaceHotkeyWireframe2` | 字段 |
| `EngineInterfaceHotkeyTakeScreenShot` | `public const string EngineInterfaceHotkeyTakeScreenShot` | 字段 |
| `EditingManagerHotkeyCrashReporting` | `public const string EditingManagerHotkeyCrashReporting` | 字段 |
| `EditingManagerHotkeyEmergencySceneSaving` | `public const string EditingManagerHotkeyEmergencySceneSaving` | 字段 |
| `EditingManagerHotkeyAssertTestEntityOperations` | `public const string EditingManagerHotkeyAssertTestEntityOperations` | 字段 |
| `EditingManagerHotkeyUpdateSceneDialog` | `public const string EditingManagerHotkeyUpdateSceneDialog` | 字段 |
| `EditingManagerHotkeySetTriadToWorld` | `public const string EditingManagerHotkeySetTriadToWorld` | 字段 |
| `EditingManagerHotkeySetTriadToLocal` | `public const string EditingManagerHotkeySetTriadToLocal` | 字段 |
| `EditingManagerHotkeySetTriadToScreen` | `public const string EditingManagerHotkeySetTriadToScreen` | 字段 |
| `EditingManagerHotkeyCameraSmoothMode` | `public const string EditingManagerHotkeyCameraSmoothMode` | 字段 |
| `EditingManagerHotkeyDisplayNormalsOfSelectedEntities` | `public const string EditingManagerHotkeyDisplayNormalsOfSelectedEntities` | 字段 |
| `EditingManagerHotkeyChoosePhysicsMaterial` | `public const string EditingManagerHotkeyChoosePhysicsMaterial` | 字段 |
| `EditingManagerHotkeySwitchObjectsLockedForSelection` | `public const string EditingManagerHotkeySwitchObjectsLockedForSelection` | 字段 |
| `ApplicationHotkeyAnimationReload` | `public const string ApplicationHotkeyAnimationReload` | 字段 |
| `ApplicationHotkeyIncreasePingDelay` | `public const string ApplicationHotkeyIncreasePingDelay` | 字段 |
| `ApplicationHotkeyIncreaseLossRatio` | `public const string ApplicationHotkeyIncreaseLossRatio` | 字段 |
| `ApplicationHotkeySaveAllContentFilesWithType` | `public const string ApplicationHotkeySaveAllContentFilesWithType` | 字段 |
| `MissionHotkeySwitchAnimationDebugSystem` | `public const string MissionHotkeySwitchAnimationDebugSystem` | 字段 |
| `MissionHotkeyAssignMainAgentToDebugAgent` | `public const string MissionHotkeyAssignMainAgentToDebugAgent` | 字段 |
| `MissionHotkeyUseProgrammerSound` | `public const string MissionHotkeyUseProgrammerSound` | 字段 |
| `MissionHotkeySetDebugPathStartPos` | `public const string MissionHotkeySetDebugPathStartPos` | 字段 |
| `MissionHotkeySetDebugPathEndPos` | `public const string MissionHotkeySetDebugPathEndPos` | 字段 |
| `MissionHotkeyRenderCombatCollisionCapsules` | `public const string MissionHotkeyRenderCombatCollisionCapsules` | 字段 |
| `ModelviewerHotkeyApplyUpwardsForce` | `public const string ModelviewerHotkeyApplyUpwardsForce` | 字段 |
| `ModelviewerHotkeyApplyDownwardsForce` | `public const string ModelviewerHotkeyApplyDownwardsForce` | 字段 |
| `NavigationMeshBuilderHotkeyMakeFourLastVerticesFace` | `public const string NavigationMeshBuilderHotkeyMakeFourLastVerticesFace` | 字段 |
| `CameraControllerHotkeyMoveForward` | `public const string CameraControllerHotkeyMoveForward` | 字段 |
| `CameraControllerHotkeyMoveBackward` | `public const string CameraControllerHotkeyMoveBackward` | 字段 |
| `CameraControllerHotkeyMoveLeft` | `public const string CameraControllerHotkeyMoveLeft` | 字段 |
| `CameraControllerHotkeyMoveRight` | `public const string CameraControllerHotkeyMoveRight` | 字段 |
| `CameraControllerHotkeyMoveUpward` | `public const string CameraControllerHotkeyMoveUpward` | 字段 |
| `CameraControllerHotkeyMoveDownward` | `public const string CameraControllerHotkeyMoveDownward` | 字段 |
| `CameraControllerHotkeyPenCamera` | `public const string CameraControllerHotkeyPenCamera` | 字段 |
| `ClothSimulationHotkeyResetAllMeshes` | `public const string ClothSimulationHotkeyResetAllMeshes` | 字段 |
| `EngineInterfaceHotkeySwitchForwardPhysicxDebugMode` | `public const string EngineInterfaceHotkeySwitchForwardPhysicxDebugMode` | 字段 |
| `EngineInterfaceHotkeySwitchBackwardPhysicxDebugMode` | `public const string EngineInterfaceHotkeySwitchBackwardPhysicxDebugMode` | 字段 |
| `EngineInterfaceHotkeyShowPhysicsDebugInfo` | `public const string EngineInterfaceHotkeyShowPhysicsDebugInfo` | 字段 |
| `EngineInterfaceHotkeyShowProfileModes` | `public const string EngineInterfaceHotkeyShowProfileModes` | 字段 |
| `EngineInterfaceHotkeyShowDebugInfo` | `public const string EngineInterfaceHotkeyShowDebugInfo` | 字段 |
| `EngineInterfaceHotkeyDecreaseByTenDrawOneByOneIndex` | `public const string EngineInterfaceHotkeyDecreaseByTenDrawOneByOneIndex` | 字段 |
| `EngineInterfaceHotkeyIncreaseByTenDrawOneByOneIndex` | `public const string EngineInterfaceHotkeyIncreaseByTenDrawOneByOneIndex` | 字段 |
| `EngineInterfaceHotkeyDecreaseDrawOneByOneIndex` | `public const string EngineInterfaceHotkeyDecreaseDrawOneByOneIndex` | 字段 |
| `EngineInterfaceHotkeyIncreaseDrawOneByOneIndex` | `public const string EngineInterfaceHotkeyIncreaseDrawOneByOneIndex` | 字段 |
| `EngineInterfaceHotkeyForceSetDrawOneByOneIndexMinusone` | `public const string EngineInterfaceHotkeyForceSetDrawOneByOneIndexMinusone` | 字段 |
| `EngineInterfaceHotkeySetDrawOneByOneIndexMinusone` | `public const string EngineInterfaceHotkeySetDrawOneByOneIndexMinusone` | 字段 |
| `EngineInterfaceHotkeyReleaseUnusedMemory` | `public const string EngineInterfaceHotkeyReleaseUnusedMemory` | 字段 |
| `EngineInterfaceHotkeyChangeShaderVisualizationMode` | `public const string EngineInterfaceHotkeyChangeShaderVisualizationMode` | 字段 |
| `EngineInterfaceHotkeyOnlyRenderDeferredQuad` | `public const string EngineInterfaceHotkeyOnlyRenderDeferredQuad` | 字段 |
| `EngineInterfaceHotkeyOnlyRenderNonDeferredMeshes` | `public const string EngineInterfaceHotkeyOnlyRenderNonDeferredMeshes` | 字段 |
| `EngineInterfaceHotkeyChangeAnimationDebugMode` | `public const string EngineInterfaceHotkeyChangeAnimationDebugMode` | 字段 |
| `EngineInterfaceHotkeyTestAssertReport` | `public const string EngineInterfaceHotkeyTestAssertReport` | 字段 |
| `EngineInterfaceHotkeyTestCreateBugReportTask` | `public const string EngineInterfaceHotkeyTestCreateBugReportTask` | 字段 |
| `EngineInterfaceHotkeySlowmotion` | `public const string EngineInterfaceHotkeySlowmotion` | 字段 |
| `EngineInterfaceHotkeyRecompileShader` | `public const string EngineInterfaceHotkeyRecompileShader` | 字段 |
| `EngineInterfaceHotkeyToggleConsole` | `public const string EngineInterfaceHotkeyToggleConsole` | 字段 |
| `EngineInterfaceHotkeyShowConsoleManager` | `public const string EngineInterfaceHotkeyShowConsoleManager` | 字段 |
| `EngineInterfaceHotkeyShowDebugTools` | `public const string EngineInterfaceHotkeyShowDebugTools` | 字段 |
| `SceneHotkeyIncreaseEnforcedSkyboxIndex` | `public const string SceneHotkeyIncreaseEnforcedSkyboxIndex` | 字段 |
| `SceneHotkeyDecreaseEnforcedSkyboxIndex` | `public const string SceneHotkeyDecreaseEnforcedSkyboxIndex` | 字段 |
| `SceneHotkeyCheckBoundingBoxCorrectness` | `public const string SceneHotkeyCheckBoundingBoxCorrectness` | 字段 |
| `SceneHotkeyShowNavigationMeshIds` | `public const string SceneHotkeyShowNavigationMeshIds` | 字段 |
| `SceneHotkeyShowNavigationMeshIdsXray` | `public const string SceneHotkeyShowNavigationMeshIdsXray` | 字段 |
| `SceneHotkeyShowNavigationMeshIslands` | `public const string SceneHotkeyShowNavigationMeshIslands` | 字段 |
| `SceneHotkeySetNewCharacterDetailModifier` | `public const string SceneHotkeySetNewCharacterDetailModifier` | 字段 |
| `SceneHotkeyShowTerrainMaterials` | `public const string SceneHotkeyShowTerrainMaterials` | 字段 |
| `SceneViewHotkeyTakeHighQualityScreenshot` | `public const string SceneViewHotkeyTakeHighQualityScreenshot` | 字段 |
| `SoundManagerHotkeyReloadSounds` | `public const string SoundManagerHotkeyReloadSounds` | 字段 |
| `ReplayEditorHotkeyRenderSounds` | `public const string ReplayEditorHotkeyRenderSounds` | 字段 |
| `FrameMoveTaskHotkeyUseTelemetryProfiler` | `public const string FrameMoveTaskHotkeyUseTelemetryProfiler` | 字段 |
| `SkeletonHotkeyActivateDisableAnimationFpsOptimization` | `public const string SkeletonHotkeyActivateDisableAnimationFpsOptimization` | 字段 |
| `SkeletonHotkeyDisactiveDisableAnimationFpsOptimization` | `public const string SkeletonHotkeyDisactiveDisableAnimationFpsOptimization` | 字段 |
| `LibraryHotkeyDisableCommitChanges` | `public const string LibraryHotkeyDisableCommitChanges` | 字段 |
| `Numpad0` | `public const string Numpad0` | 字段 |
| `Numpad1` | `public const string Numpad1` | 字段 |
| `Numpad3` | `public const string Numpad3` | 字段 |
| `Numpad5` | `public const string Numpad5` | 字段 |
| `Numpad7` | `public const string Numpad7` | 字段 |
| `Numpad9` | `public const string Numpad9` | 字段 |
| `D0` | `public const string D0` | 字段 |
| `D1` | `public const string D1` | 字段 |
| `D2` | `public const string D2` | 字段 |
| `D3` | `public const string D3` | 字段 |
| `D4` | `public const string D4` | 字段 |
| `D5` | `public const string D5` | 字段 |
| `D6` | `public const string D6` | 字段 |
| `D7` | `public const string D7` | 字段 |
| `D8` | `public const string D8` | 字段 |
| `D9` | `public const string D9` | 字段 |
| `F1` | `public const string F1` | 字段 |
| `F2` | `public const string F2` | 字段 |
| `F3` | `public const string F3` | 字段 |
| `F4` | `public const string F4` | 字段 |
| `F5` | `public const string F5` | 字段 |
| `F6` | `public const string F6` | 字段 |
| `F7` | `public const string F7` | 字段 |
| `F8` | `public const string F8` | 字段 |
| `F9` | `public const string F9` | 字段 |
| `F10` | `public const string F10` | 字段 |
| `F11` | `public const string F11` | 字段 |
| `Y` | `public const string Y` | 字段 |
| `A` | `public const string A` | 字段 |
| `F` | `public const string F` | 字段 |
| `B` | `public const string B` | 字段 |
| `N` | `public const string N` | 字段 |
| `C` | `public const string C` | 字段 |
| `E` | `public const string E` | 字段 |
| `J` | `public const string J` | 字段 |
| `Q` | `public const string Q` | 字段 |
| `H` | `public const string H` | 字段 |
| `W` | `public const string W` | 字段 |
| `S` | `public const string S` | 字段 |
| `U` | `public const string U` | 字段 |
| `T` | `public const string T` | 字段 |
| `K` | `public const string K` | 字段 |
| `M` | `public const string M` | 字段 |
| `G` | `public const string G` | 字段 |
| `D` | `public const string D` | 字段 |
| `Space` | `public const string Space` | 字段 |
| `UpArrow` | `public const string UpArrow` | 字段 |
| `LeftArrow` | `public const string LeftArrow` | 字段 |
| `DownArrow` | `public const string DownArrow` | 字段 |
| `RightArrow` | `public const string RightArrow` | 字段 |
| `NumpadArrowForward` | `public const string NumpadArrowForward` | 字段 |
| `NumpadArrowBackward` | `public const string NumpadArrowBackward` | 字段 |
| `NumpadArrowLeft` | `public const string NumpadArrowLeft` | 字段 |
| `NumpadArrowRight` | `public const string NumpadArrowRight` | 字段 |
| `SwapToEnemy` | `public const string SwapToEnemy` | 字段 |
| `ChangeEnemyTeam` | `public const string ChangeEnemyTeam` | 字段 |
| `Paste` | `public const string Paste` | 字段 |
| `Cut` | `public const string Cut` | 字段 |
| `Refresh` | `public const string Refresh` | 字段 |
| `EnterEditMode` | `public const string EnterEditMode` | 字段 |
| `FixSkeletons` | `public const string FixSkeletons` | 字段 |
| `Reset` | `public const string Reset` | 字段 |
| `AnimationTestControllerHotkeyUseWeaponTesting` | `public const string AnimationTestControllerHotkeyUseWeaponTesting` | 字段 |
| `BaseBattleMissionControllerHotkeyBecomePlayer` | `public const string BaseBattleMissionControllerHotkeyBecomePlayer` | 字段 |
| `BaseBattleMissionControllerHotkeyDrawNavMeshLines` | `public const string BaseBattleMissionControllerHotkeyDrawNavMeshLines` | 字段 |
| `ModuleHotkeyOpenDebug` | `public const string ModuleHotkeyOpenDebug` | 字段 |
| `FormationTestMissionControllerHotkeyChargeSide` | `public const string FormationTestMissionControllerHotkeyChargeSide` | 字段 |
| `FormationTestMissionControllerHotkeyToggleSide` | `public const string FormationTestMissionControllerHotkeyToggleSide` | 字段 |
| `FormationTestMissionControllerHotkeyToggleFactionBackward` | `public const string FormationTestMissionControllerHotkeyToggleFactionBackward` | 字段 |
| `FormationTestMissionControllerHotkeyToggleFactionForward` | `public const string FormationTestMissionControllerHotkeyToggleFactionForward` | 字段 |
| `FormationTestMissionControllerHotkeyToggleTroopForward` | `public const string FormationTestMissionControllerHotkeyToggleTroopForward` | 字段 |
| `FormationTestMissionControllerHotkeyToggleTroopBackward` | `public const string FormationTestMissionControllerHotkeyToggleTroopBackward` | 字段 |
| `FormationTestMissionControllerHotkeyIncreaseSpawnCount` | `public const string FormationTestMissionControllerHotkeyIncreaseSpawnCount` | 字段 |
| `FormationTestMissionControllerHotkeyDecreaseSpawnCount` | `public const string FormationTestMissionControllerHotkeyDecreaseSpawnCount` | 字段 |
| `FormationTestMissionControllerHotkeySpawnCustom` | `public const string FormationTestMissionControllerHotkeySpawnCustom` | 字段 |
| `FormationTestMissionControllerHotkeyOrderLooseAndInfantryFormation` | `public const string FormationTestMissionControllerHotkeyOrderLooseAndInfantryFormation` | 字段 |
| `FormationTestMissionControllerHotkeyOrderScatterAndRangedFormation` | `public const string FormationTestMissionControllerHotkeyOrderScatterAndRangedFormation` | 字段 |
| `FormationTestMissionControllerHotkeyOrderSkeinAndCavalryFormation` | `public const string FormationTestMissionControllerHotkeyOrderSkeinAndCavalryFormation` | 字段 |
| `FormationTestMissionControllerHotkeyOrderLineAndHorseArcherFormation` | `public const string FormationTestMissionControllerHotkeyOrderLineAndHorseArcherFormation` | 字段 |
| `FormationTestMissionControllerHotkeyOrderCircle` | `public const string FormationTestMissionControllerHotkeyOrderCircle` | 字段 |
| `FormationTestMissionControllerHotkeyOrderColumn` | `public const string FormationTestMissionControllerHotkeyOrderColumn` | 字段 |
| `FormationTestMissionControllerHotkeyOrderShieldWall` | `public const string FormationTestMissionControllerHotkeyOrderShieldWall` | 字段 |
| `FormationTestMissionControllerHotkeyOrderSquare` | `public const string FormationTestMissionControllerHotkeyOrderSquare` | 字段 |
| `AiTestMissionControllerHotkeySpawnFormation` | `public const string AiTestMissionControllerHotkeySpawnFormation` | 字段 |
| `TabbedPanelHotkeyDecreaseSelectedIndex` | `public const string TabbedPanelHotkeyDecreaseSelectedIndex` | 字段 |
| `TabbedPanelHotkeyIncreaseSelectedIndex` | `public const string TabbedPanelHotkeyIncreaseSelectedIndex` | 字段 |
| `MissionSingleplayerUiHandlerHotkeyUpdateItems` | `public const string MissionSingleplayerUiHandlerHotkeyUpdateItems` | 字段 |
| `MissionSingleplayerUiHandlerHotkeyJoinEnemyTeam` | `public const string MissionSingleplayerUiHandlerHotkeyJoinEnemyTeam` | 字段 |
| `SiegeDeploymentViewHotkeyTeleportMainAgent` | `public const string SiegeDeploymentViewHotkeyTeleportMainAgent` | 字段 |
| `SiegeDeploymentViewHotkeyFinishDeployment` | `public const string SiegeDeploymentViewHotkeyFinishDeployment` | 字段 |
| `CraftingScreenHotkeyEnableRuler` | `public const string CraftingScreenHotkeyEnableRuler` | 字段 |
| `CraftingScreenHotkeyEnableRulerPoint1` | `public const string CraftingScreenHotkeyEnableRulerPoint1` | 字段 |
| `CraftingScreenHotkeyEnableRulerPoint2` | `public const string CraftingScreenHotkeyEnableRulerPoint2` | 字段 |
| `CraftingScreenHotkeySwitchSelectedPieceMovement` | `public const string CraftingScreenHotkeySwitchSelectedPieceMovement` | 字段 |
| `CraftingScreenHotkeySetSelectedVariableIndexZero` | `public const string CraftingScreenHotkeySetSelectedVariableIndexZero` | 字段 |
| `CraftingScreenHotkeySetSelectedVariableIndexOne` | `public const string CraftingScreenHotkeySetSelectedVariableIndexOne` | 字段 |
| `CraftingScreenHotkeySetSelectedVariableIndexTwo` | `public const string CraftingScreenHotkeySetSelectedVariableIndexTwo` | 字段 |
| `CraftingScreenHotkeySelectPieceZero` | `public const string CraftingScreenHotkeySelectPieceZero` | 字段 |
| `CraftingScreenHotkeySelectPieceOne` | `public const string CraftingScreenHotkeySelectPieceOne` | 字段 |
| `CraftingScreenHotkeySelectPieceTwo` | `public const string CraftingScreenHotkeySelectPieceTwo` | 字段 |
| `CraftingScreenHotkeySelectPieceThree` | `public const string CraftingScreenHotkeySelectPieceThree` | 字段 |
| `MbFaceGeneratorScreenHotkeyCamDebugAndAdjustEnabled` | `public const string MbFaceGeneratorScreenHotkeyCamDebugAndAdjustEnabled` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad0` | `public const string MbFaceGeneratorScreenHotkeyNumpad0` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad1` | `public const string MbFaceGeneratorScreenHotkeyNumpad1` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad2` | `public const string MbFaceGeneratorScreenHotkeyNumpad2` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad3` | `public const string MbFaceGeneratorScreenHotkeyNumpad3` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad4` | `public const string MbFaceGeneratorScreenHotkeyNumpad4` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad5` | `public const string MbFaceGeneratorScreenHotkeyNumpad5` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad6` | `public const string MbFaceGeneratorScreenHotkeyNumpad6` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad7` | `public const string MbFaceGeneratorScreenHotkeyNumpad7` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad8` | `public const string MbFaceGeneratorScreenHotkeyNumpad8` | 字段 |
| `MbFaceGeneratorScreenHotkeyNumpad9` | `public const string MbFaceGeneratorScreenHotkeyNumpad9` | 字段 |
| `MbFaceGeneratorScreenHotkeyResetFaceToDefault` | `public const string MbFaceGeneratorScreenHotkeyResetFaceToDefault` | 字段 |
| `MbFaceGeneratorScreenHotkeySetFaceKeyMax` | `public const string MbFaceGeneratorScreenHotkeySetFaceKeyMax` | 字段 |
| `MbFaceGeneratorScreenHotkeySetFaceKeyMin` | `public const string MbFaceGeneratorScreenHotkeySetFaceKeyMin` | 字段 |
| `MbFaceGeneratorScreenHotkeySetCurFaceKeyToMax` | `public const string MbFaceGeneratorScreenHotkeySetCurFaceKeyToMax` | 字段 |
| `MbFaceGeneratorScreenHotkeySetCurFaceKeyToMin` | `public const string MbFaceGeneratorScreenHotkeySetCurFaceKeyToMin` | 字段 |
| `SoftwareOcclusionCheckerHotkeySaveOcclusionImage` | `public const string SoftwareOcclusionCheckerHotkeySaveOcclusionImage` | 字段 |
| `MapScreenHotkeySwitchCampaignTrueSight` | `public const string MapScreenHotkeySwitchCampaignTrueSight` | 字段 |
| `MapScreenPrintMultiLineText` | `public const string MapScreenPrintMultiLineText` | 字段 |
| `MapScreenHotkeyShowPos` | `public const string MapScreenHotkeyShowPos` | 字段 |
| `MapScreenHotkeyOpenEncyclopedia` | `public const string MapScreenHotkeyOpenEncyclopedia` | 字段 |
| `ReplayCaptureLogicHotkeyRenderWithScreenshot` | `public const string ReplayCaptureLogicHotkeyRenderWithScreenshot` | 字段 |
| `MissionScreenHotkeyFixCamera` | `public const string MissionScreenHotkeyFixCamera` | 字段 |
| `MissionScreenHotkeyIncrementArtificialLag` | `public const string MissionScreenHotkeyIncrementArtificialLag` | 字段 |
| `MissionScreenHotkeyIncrementArtificialLoss` | `public const string MissionScreenHotkeyIncrementArtificialLoss` | 字段 |
| `MissionScreenHotkeyResetDebugVariables` | `public const string MissionScreenHotkeyResetDebugVariables` | 字段 |
| `MissionScreenHotkeySwitchCameraSmooth` | `public const string MissionScreenHotkeySwitchCameraSmooth` | 字段 |
| `MissionScreenHotkeyIncreaseFirstFormationWidth` | `public const string MissionScreenHotkeyIncreaseFirstFormationWidth` | 字段 |
| `MissionScreenHotkeyDecreaseFirstFormationWidth` | `public const string MissionScreenHotkeyDecreaseFirstFormationWidth` | 字段 |
| `MissionScreenHotkeyExtendedDebugKey` | `public const string MissionScreenHotkeyExtendedDebugKey` | 字段 |
| `MissionScreenHotkeyShowDebug` | `public const string MissionScreenHotkeyShowDebug` | 字段 |
| `MissionScreenHotkeyIncreaseTotalUploadLimit` | `public const string MissionScreenHotkeyIncreaseTotalUploadLimit` | 字段 |
| `MissionScreenIncreaseTotalUploadLimit` | `public const string MissionScreenIncreaseTotalUploadLimit` | 字段 |
| `MissionScreenHotkeyDecreaseRulerDistanceFromPivot` | `public const string MissionScreenHotkeyDecreaseRulerDistanceFromPivot` | 字段 |
| `MissionScreenHotkeyIncreaseRulerDistanceFromPivot` | `public const string MissionScreenHotkeyIncreaseRulerDistanceFromPivot` | 字段 |
| `DebugAgentTeleportMissionControllerHotkeyTeleportMainAgent` | `public const string DebugAgentTeleportMissionControllerHotkeyTeleportMainAgent` | 字段 |
| `DebugAgentTeleportMissionControllerHotkeyDisableScriptedMovement` | `public const string DebugAgentTeleportMissionControllerHotkeyDisableScriptedMovement` | 字段 |
| `MissionDebugHandlerHotkeyKillAI` | `public const string MissionDebugHandlerHotkeyKillAI` | 字段 |
| `MissionDebugHandlerHotkeyKillAttacker` | `public const string MissionDebugHandlerHotkeyKillAttacker` | 字段 |
| `MissionDebugHandlerHotkeyKillDefender` | `public const string MissionDebugHandlerHotkeyKillDefender` | 字段 |
| `MissionDebugHandlerHotkeyKillMainAgent` | `public const string MissionDebugHandlerHotkeyKillMainAgent` | 字段 |
| `MissionDebugHandlerHotkeyAttackingAiAgent` | `public const string MissionDebugHandlerHotkeyAttackingAiAgent` | 字段 |
| `MissionDebugHandlerHotkeyDefendingAiAgent` | `public const string MissionDebugHandlerHotkeyDefendingAiAgent` | 字段 |
| `MissionDebugHandlerHotkeyNormalAiAgent` | `public const string MissionDebugHandlerHotkeyNormalAiAgent` | 字段 |
| `MissionDebugHandlerHotkeyAiAgentSideZero` | `public const string MissionDebugHandlerHotkeyAiAgentSideZero` | 字段 |
| `MissionDebugHandlerHotkeyAiAgentSideOne` | `public const string MissionDebugHandlerHotkeyAiAgentSideOne` | 字段 |
| `MissionDebugHandlerHotkeyAiAgentSideTwo` | `public const string MissionDebugHandlerHotkeyAiAgentSideTwo` | 字段 |
| `MissionDebugHandlerHotkeyAiAgentSideThree` | `public const string MissionDebugHandlerHotkeyAiAgentSideThree` | 字段 |
| `MissionDebugHandlerHotkeyColorEnemyTeam` | `public const string MissionDebugHandlerHotkeyColorEnemyTeam` | 字段 |
| `MissionDebugHandlerHotkeyOpenMissionDebug` | `public const string MissionDebugHandlerHotkeyOpenMissionDebug` | 字段 |
| `UsableMachineAiBaseHotkeyShowMachineUsers` | `public const string UsableMachineAiBaseHotkeyShowMachineUsers` | 字段 |
| `UsableMachineAiBaseHotkeyRetreatScriptActive` | `public const string UsableMachineAiBaseHotkeyRetreatScriptActive` | 字段 |
| `UsableMachineAiBaseHotkeyRetreatScriptPassive` | `public const string UsableMachineAiBaseHotkeyRetreatScriptPassive` | 字段 |
| `CustomCameraMissionViewHotkeyIncreaseCustomCameraIndex` | `public const string CustomCameraMissionViewHotkeyIncreaseCustomCameraIndex` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtBallistas` | `public const string DebugSiegeBehaviorHotkeyAimAtBallistas` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtMangonels` | `public const string DebugSiegeBehaviorHotkeyAimAtMangonels` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtBattlements` | `public const string DebugSiegeBehaviorHotkeyAimAtBattlements` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtNone` | `public const string DebugSiegeBehaviorHotkeyAimAtNone` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtNone2` | `public const string DebugSiegeBehaviorHotkeyAimAtNone2` | 字段 |
| `DebugSiegeBehaviorHotkeyTargetDebugActive` | `public const string DebugSiegeBehaviorHotkeyTargetDebugActive` | 字段 |
| `DebugSiegeBehaviorHotkeyTargetDebugDisactive` | `public const string DebugSiegeBehaviorHotkeyTargetDebugDisactive` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtRam` | `public const string DebugSiegeBehaviorHotkeyAimAtRam` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtSt` | `public const string DebugSiegeBehaviorHotkeyAimAtSt` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtBallistas2` | `public const string DebugSiegeBehaviorHotkeyAimAtBallistas2` | 字段 |
| `DebugSiegeBehaviorHotkeyAimAtMangonels2` | `public const string DebugSiegeBehaviorHotkeyAimAtMangonels2` | 字段 |
| `DebugNetworkEventStatisticsHotkeyClear` | `public const string DebugNetworkEventStatisticsHotkeyClear` | 字段 |
| `DebugNetworkEventStatisticsHotkeyDumpDataAndClear` | `public const string DebugNetworkEventStatisticsHotkeyDumpDataAndClear` | 字段 |
| `DebugNetworkEventStatisticsHotkeyDumpData` | `public const string DebugNetworkEventStatisticsHotkeyDumpData` | 字段 |
| `DebugNetworkEventStatisticsHotkeyClearReplicationData` | `public const string DebugNetworkEventStatisticsHotkeyClearReplicationData` | 字段 |
| `DebugNetworkEventStatisticsHotkeyDumpReplicationData` | `public const string DebugNetworkEventStatisticsHotkeyDumpReplicationData` | 字段 |
| `DebugNetworkEventStatisticsHotkeyDumpAndClearReplicationData` | `public const string DebugNetworkEventStatisticsHotkeyDumpAndClearReplicationData` | 字段 |
| `DebugNetworkEventStatisticsHotkeyToggleActive` | `public const string DebugNetworkEventStatisticsHotkeyToggleActive` | 字段 |
| `AiSelectDebugAgent1` | `public const string AiSelectDebugAgent1` | 字段 |
| `AiSelectDebugAgent2` | `public const string AiSelectDebugAgent2` | 字段 |
| `AiClearDebugAgents` | `public const string AiClearDebugAgents` | 字段 |
| `DebugCustomBattlePredefinedSettings1` | `public const string DebugCustomBattlePredefinedSettings1` | 字段 |
| `CraftingScreenResetVariable` | `public const string CraftingScreenResetVariable` | 字段 |
| `DisableParallelSettlementPositionUpdate` | `public const string DisableParallelSettlementPositionUpdate` | 字段 |
| `OpenUIEditor` | `public const string OpenUIEditor` | 字段 |
| `ToggleUI` | `public const string ToggleUI` | 字段 |
| `LeaveWhileInConversation` | `public const string LeaveWhileInConversation` | 字段 |
| `ShowHighlightsSummary` | `public const string ShowHighlightsSummary` | 字段 |
| `ResetMusicParameters` | `public const string ResetMusicParameters` | 字段 |
| `UIExtendedDebugKey` | `public const string UIExtendedDebugKey` | 字段 |
| `FaceGeneratorExtendedDebugKey` | `public const string FaceGeneratorExtendedDebugKey` | 字段 |
| `FormationTestMissionExtendedDebugKey` | `public const string FormationTestMissionExtendedDebugKey` | 字段 |
| `FormationTestMissionExtendedDebugKey2` | `public const string FormationTestMissionExtendedDebugKey2` | 字段 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CheatsHotKeyCategory](../CheatsHotKeyCategory)
- [同命名空间 EngineInputManager](../EngineInputManager)
