---
title: "DebugHotKeyCategory"
description: "DebugHotKeyCategory: a public class in TaleWorlds.Engine.InputSystem, inheriting GameKeyContext; 276 exposed members (0 methods, 0 properties, 275 fields). Canonical bucket engine. Source: TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DebugHotKeyCategory

**Namespace:** `TaleWorlds.Engine.InputSystem`
**Module:** `TaleWorlds.Engine`
**Type:** `public class DebugHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine.InputSystem)

## Overview

DebugHotKeyCategory lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs. It is a public class, implementing/inheriting GameKeyContext; the inheritance chain is DebugHotKeyCategory → GameKeyContext. It exposes 276 public/protected members: 275 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DebugHotKeyCategory lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine.InputSystem`), namespace `TaleWorlds.Engine.InputSystem`, inheritance chain DebugHotKeyCategory → GameKeyContext. The surface is method-led (methods 0/276, properties 0/276), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DebugHotKeyCategory` | `public DebugHotKeyCategory() : base(" ", 0, GameKeyContext.GameKeyContextType.AuxiliaryNotSerialized)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `LeftMouseButton` | `public const string LeftMouseButton` | field |
| `RightMouseButton` | `public const string RightMouseButton` | field |
| `SelectAll` | `public const string SelectAll` | field |
| `Redo` | `public const string Redo` | field |
| `Undo` | `public const string Undo` | field |
| `Copy` | `public const string Copy` | field |
| `Duplicate` | `public const string Duplicate` | field |
| `Score` | `public const string Score` | field |
| `SetOriginToZero` | `public const string SetOriginToZero` | field |
| `TestEngineCrash` | `public const string TestEngineCrash` | field |
| `AgentHotkeySwitchRender` | `public const string AgentHotkeySwitchRender` | field |
| `AgentHotkeySwitchFaceAnimationDebug` | `public const string AgentHotkeySwitchFaceAnimationDebug` | field |
| `AgentHotkeyCheckCollisionCapsule` | `public const string AgentHotkeyCheckCollisionCapsule` | field |
| `EngineInterfaceHotkeyWireframe` | `public const string EngineInterfaceHotkeyWireframe` | field |
| `EngineInterfaceHotkeyWireframe2` | `public const string EngineInterfaceHotkeyWireframe2` | field |
| `EngineInterfaceHotkeyTakeScreenShot` | `public const string EngineInterfaceHotkeyTakeScreenShot` | field |
| `EditingManagerHotkeyCrashReporting` | `public const string EditingManagerHotkeyCrashReporting` | field |
| `EditingManagerHotkeyEmergencySceneSaving` | `public const string EditingManagerHotkeyEmergencySceneSaving` | field |
| `EditingManagerHotkeyAssertTestEntityOperations` | `public const string EditingManagerHotkeyAssertTestEntityOperations` | field |
| `EditingManagerHotkeyUpdateSceneDialog` | `public const string EditingManagerHotkeyUpdateSceneDialog` | field |
| `EditingManagerHotkeySetTriadToWorld` | `public const string EditingManagerHotkeySetTriadToWorld` | field |
| `EditingManagerHotkeySetTriadToLocal` | `public const string EditingManagerHotkeySetTriadToLocal` | field |
| `EditingManagerHotkeySetTriadToScreen` | `public const string EditingManagerHotkeySetTriadToScreen` | field |
| `EditingManagerHotkeyCameraSmoothMode` | `public const string EditingManagerHotkeyCameraSmoothMode` | field |
| `EditingManagerHotkeyDisplayNormalsOfSelectedEntities` | `public const string EditingManagerHotkeyDisplayNormalsOfSelectedEntities` | field |
| `EditingManagerHotkeyChoosePhysicsMaterial` | `public const string EditingManagerHotkeyChoosePhysicsMaterial` | field |
| `EditingManagerHotkeySwitchObjectsLockedForSelection` | `public const string EditingManagerHotkeySwitchObjectsLockedForSelection` | field |
| `ApplicationHotkeyAnimationReload` | `public const string ApplicationHotkeyAnimationReload` | field |
| `ApplicationHotkeyIncreasePingDelay` | `public const string ApplicationHotkeyIncreasePingDelay` | field |
| `ApplicationHotkeyIncreaseLossRatio` | `public const string ApplicationHotkeyIncreaseLossRatio` | field |
| `ApplicationHotkeySaveAllContentFilesWithType` | `public const string ApplicationHotkeySaveAllContentFilesWithType` | field |
| `MissionHotkeySwitchAnimationDebugSystem` | `public const string MissionHotkeySwitchAnimationDebugSystem` | field |
| `MissionHotkeyAssignMainAgentToDebugAgent` | `public const string MissionHotkeyAssignMainAgentToDebugAgent` | field |
| `MissionHotkeyUseProgrammerSound` | `public const string MissionHotkeyUseProgrammerSound` | field |
| `MissionHotkeySetDebugPathStartPos` | `public const string MissionHotkeySetDebugPathStartPos` | field |
| `MissionHotkeySetDebugPathEndPos` | `public const string MissionHotkeySetDebugPathEndPos` | field |
| `MissionHotkeyRenderCombatCollisionCapsules` | `public const string MissionHotkeyRenderCombatCollisionCapsules` | field |
| `ModelviewerHotkeyApplyUpwardsForce` | `public const string ModelviewerHotkeyApplyUpwardsForce` | field |
| `ModelviewerHotkeyApplyDownwardsForce` | `public const string ModelviewerHotkeyApplyDownwardsForce` | field |
| `NavigationMeshBuilderHotkeyMakeFourLastVerticesFace` | `public const string NavigationMeshBuilderHotkeyMakeFourLastVerticesFace` | field |
| `CameraControllerHotkeyMoveForward` | `public const string CameraControllerHotkeyMoveForward` | field |
| `CameraControllerHotkeyMoveBackward` | `public const string CameraControllerHotkeyMoveBackward` | field |
| `CameraControllerHotkeyMoveLeft` | `public const string CameraControllerHotkeyMoveLeft` | field |
| `CameraControllerHotkeyMoveRight` | `public const string CameraControllerHotkeyMoveRight` | field |
| `CameraControllerHotkeyMoveUpward` | `public const string CameraControllerHotkeyMoveUpward` | field |
| `CameraControllerHotkeyMoveDownward` | `public const string CameraControllerHotkeyMoveDownward` | field |
| `CameraControllerHotkeyPenCamera` | `public const string CameraControllerHotkeyPenCamera` | field |
| `ClothSimulationHotkeyResetAllMeshes` | `public const string ClothSimulationHotkeyResetAllMeshes` | field |
| `EngineInterfaceHotkeySwitchForwardPhysicxDebugMode` | `public const string EngineInterfaceHotkeySwitchForwardPhysicxDebugMode` | field |
| `EngineInterfaceHotkeySwitchBackwardPhysicxDebugMode` | `public const string EngineInterfaceHotkeySwitchBackwardPhysicxDebugMode` | field |
| `EngineInterfaceHotkeyShowPhysicsDebugInfo` | `public const string EngineInterfaceHotkeyShowPhysicsDebugInfo` | field |
| `EngineInterfaceHotkeyShowProfileModes` | `public const string EngineInterfaceHotkeyShowProfileModes` | field |
| `EngineInterfaceHotkeyShowDebugInfo` | `public const string EngineInterfaceHotkeyShowDebugInfo` | field |
| `EngineInterfaceHotkeyDecreaseByTenDrawOneByOneIndex` | `public const string EngineInterfaceHotkeyDecreaseByTenDrawOneByOneIndex` | field |
| `EngineInterfaceHotkeyIncreaseByTenDrawOneByOneIndex` | `public const string EngineInterfaceHotkeyIncreaseByTenDrawOneByOneIndex` | field |
| `EngineInterfaceHotkeyDecreaseDrawOneByOneIndex` | `public const string EngineInterfaceHotkeyDecreaseDrawOneByOneIndex` | field |
| `EngineInterfaceHotkeyIncreaseDrawOneByOneIndex` | `public const string EngineInterfaceHotkeyIncreaseDrawOneByOneIndex` | field |
| `EngineInterfaceHotkeyForceSetDrawOneByOneIndexMinusone` | `public const string EngineInterfaceHotkeyForceSetDrawOneByOneIndexMinusone` | field |
| `EngineInterfaceHotkeySetDrawOneByOneIndexMinusone` | `public const string EngineInterfaceHotkeySetDrawOneByOneIndexMinusone` | field |
| `EngineInterfaceHotkeyReleaseUnusedMemory` | `public const string EngineInterfaceHotkeyReleaseUnusedMemory` | field |
| `EngineInterfaceHotkeyChangeShaderVisualizationMode` | `public const string EngineInterfaceHotkeyChangeShaderVisualizationMode` | field |
| `EngineInterfaceHotkeyOnlyRenderDeferredQuad` | `public const string EngineInterfaceHotkeyOnlyRenderDeferredQuad` | field |
| `EngineInterfaceHotkeyOnlyRenderNonDeferredMeshes` | `public const string EngineInterfaceHotkeyOnlyRenderNonDeferredMeshes` | field |
| `EngineInterfaceHotkeyChangeAnimationDebugMode` | `public const string EngineInterfaceHotkeyChangeAnimationDebugMode` | field |
| `EngineInterfaceHotkeyTestAssertReport` | `public const string EngineInterfaceHotkeyTestAssertReport` | field |
| `EngineInterfaceHotkeyTestCreateBugReportTask` | `public const string EngineInterfaceHotkeyTestCreateBugReportTask` | field |
| `EngineInterfaceHotkeySlowmotion` | `public const string EngineInterfaceHotkeySlowmotion` | field |
| `EngineInterfaceHotkeyRecompileShader` | `public const string EngineInterfaceHotkeyRecompileShader` | field |
| `EngineInterfaceHotkeyToggleConsole` | `public const string EngineInterfaceHotkeyToggleConsole` | field |
| `EngineInterfaceHotkeyShowConsoleManager` | `public const string EngineInterfaceHotkeyShowConsoleManager` | field |
| `EngineInterfaceHotkeyShowDebugTools` | `public const string EngineInterfaceHotkeyShowDebugTools` | field |
| `SceneHotkeyIncreaseEnforcedSkyboxIndex` | `public const string SceneHotkeyIncreaseEnforcedSkyboxIndex` | field |
| `SceneHotkeyDecreaseEnforcedSkyboxIndex` | `public const string SceneHotkeyDecreaseEnforcedSkyboxIndex` | field |
| `SceneHotkeyCheckBoundingBoxCorrectness` | `public const string SceneHotkeyCheckBoundingBoxCorrectness` | field |
| `SceneHotkeyShowNavigationMeshIds` | `public const string SceneHotkeyShowNavigationMeshIds` | field |
| `SceneHotkeyShowNavigationMeshIdsXray` | `public const string SceneHotkeyShowNavigationMeshIdsXray` | field |
| `SceneHotkeyShowNavigationMeshIslands` | `public const string SceneHotkeyShowNavigationMeshIslands` | field |
| `SceneHotkeySetNewCharacterDetailModifier` | `public const string SceneHotkeySetNewCharacterDetailModifier` | field |
| `SceneHotkeyShowTerrainMaterials` | `public const string SceneHotkeyShowTerrainMaterials` | field |
| `SceneViewHotkeyTakeHighQualityScreenshot` | `public const string SceneViewHotkeyTakeHighQualityScreenshot` | field |
| `SoundManagerHotkeyReloadSounds` | `public const string SoundManagerHotkeyReloadSounds` | field |
| `ReplayEditorHotkeyRenderSounds` | `public const string ReplayEditorHotkeyRenderSounds` | field |
| `FrameMoveTaskHotkeyUseTelemetryProfiler` | `public const string FrameMoveTaskHotkeyUseTelemetryProfiler` | field |
| `SkeletonHotkeyActivateDisableAnimationFpsOptimization` | `public const string SkeletonHotkeyActivateDisableAnimationFpsOptimization` | field |
| `SkeletonHotkeyDisactiveDisableAnimationFpsOptimization` | `public const string SkeletonHotkeyDisactiveDisableAnimationFpsOptimization` | field |
| `LibraryHotkeyDisableCommitChanges` | `public const string LibraryHotkeyDisableCommitChanges` | field |
| `Numpad0` | `public const string Numpad0` | field |
| `Numpad1` | `public const string Numpad1` | field |
| `Numpad3` | `public const string Numpad3` | field |
| `Numpad5` | `public const string Numpad5` | field |
| `Numpad7` | `public const string Numpad7` | field |
| `Numpad9` | `public const string Numpad9` | field |
| `D0` | `public const string D0` | field |
| `D1` | `public const string D1` | field |
| `D2` | `public const string D2` | field |
| `D3` | `public const string D3` | field |
| `D4` | `public const string D4` | field |
| `D5` | `public const string D5` | field |
| `D6` | `public const string D6` | field |
| `D7` | `public const string D7` | field |
| `D8` | `public const string D8` | field |
| `D9` | `public const string D9` | field |
| `F1` | `public const string F1` | field |
| `F2` | `public const string F2` | field |
| `F3` | `public const string F3` | field |
| `F4` | `public const string F4` | field |
| `F5` | `public const string F5` | field |
| `F6` | `public const string F6` | field |
| `F7` | `public const string F7` | field |
| `F8` | `public const string F8` | field |
| `F9` | `public const string F9` | field |
| `F10` | `public const string F10` | field |
| `F11` | `public const string F11` | field |
| `Y` | `public const string Y` | field |
| `A` | `public const string A` | field |
| `F` | `public const string F` | field |
| `B` | `public const string B` | field |
| `N` | `public const string N` | field |
| `C` | `public const string C` | field |
| `E` | `public const string E` | field |
| `J` | `public const string J` | field |
| `Q` | `public const string Q` | field |
| `H` | `public const string H` | field |
| `W` | `public const string W` | field |
| `S` | `public const string S` | field |
| `U` | `public const string U` | field |
| `T` | `public const string T` | field |
| `K` | `public const string K` | field |
| `M` | `public const string M` | field |
| `G` | `public const string G` | field |
| `D` | `public const string D` | field |
| `Space` | `public const string Space` | field |
| `UpArrow` | `public const string UpArrow` | field |
| `LeftArrow` | `public const string LeftArrow` | field |
| `DownArrow` | `public const string DownArrow` | field |
| `RightArrow` | `public const string RightArrow` | field |
| `NumpadArrowForward` | `public const string NumpadArrowForward` | field |
| `NumpadArrowBackward` | `public const string NumpadArrowBackward` | field |
| `NumpadArrowLeft` | `public const string NumpadArrowLeft` | field |
| `NumpadArrowRight` | `public const string NumpadArrowRight` | field |
| `SwapToEnemy` | `public const string SwapToEnemy` | field |
| `ChangeEnemyTeam` | `public const string ChangeEnemyTeam` | field |
| `Paste` | `public const string Paste` | field |
| `Cut` | `public const string Cut` | field |
| `Refresh` | `public const string Refresh` | field |
| `EnterEditMode` | `public const string EnterEditMode` | field |
| `FixSkeletons` | `public const string FixSkeletons` | field |
| `Reset` | `public const string Reset` | field |
| `AnimationTestControllerHotkeyUseWeaponTesting` | `public const string AnimationTestControllerHotkeyUseWeaponTesting` | field |
| `BaseBattleMissionControllerHotkeyBecomePlayer` | `public const string BaseBattleMissionControllerHotkeyBecomePlayer` | field |
| `BaseBattleMissionControllerHotkeyDrawNavMeshLines` | `public const string BaseBattleMissionControllerHotkeyDrawNavMeshLines` | field |
| `ModuleHotkeyOpenDebug` | `public const string ModuleHotkeyOpenDebug` | field |
| `FormationTestMissionControllerHotkeyChargeSide` | `public const string FormationTestMissionControllerHotkeyChargeSide` | field |
| `FormationTestMissionControllerHotkeyToggleSide` | `public const string FormationTestMissionControllerHotkeyToggleSide` | field |
| `FormationTestMissionControllerHotkeyToggleFactionBackward` | `public const string FormationTestMissionControllerHotkeyToggleFactionBackward` | field |
| `FormationTestMissionControllerHotkeyToggleFactionForward` | `public const string FormationTestMissionControllerHotkeyToggleFactionForward` | field |
| `FormationTestMissionControllerHotkeyToggleTroopForward` | `public const string FormationTestMissionControllerHotkeyToggleTroopForward` | field |
| `FormationTestMissionControllerHotkeyToggleTroopBackward` | `public const string FormationTestMissionControllerHotkeyToggleTroopBackward` | field |
| `FormationTestMissionControllerHotkeyIncreaseSpawnCount` | `public const string FormationTestMissionControllerHotkeyIncreaseSpawnCount` | field |
| `FormationTestMissionControllerHotkeyDecreaseSpawnCount` | `public const string FormationTestMissionControllerHotkeyDecreaseSpawnCount` | field |
| `FormationTestMissionControllerHotkeySpawnCustom` | `public const string FormationTestMissionControllerHotkeySpawnCustom` | field |
| `FormationTestMissionControllerHotkeyOrderLooseAndInfantryFormation` | `public const string FormationTestMissionControllerHotkeyOrderLooseAndInfantryFormation` | field |
| `FormationTestMissionControllerHotkeyOrderScatterAndRangedFormation` | `public const string FormationTestMissionControllerHotkeyOrderScatterAndRangedFormation` | field |
| `FormationTestMissionControllerHotkeyOrderSkeinAndCavalryFormation` | `public const string FormationTestMissionControllerHotkeyOrderSkeinAndCavalryFormation` | field |
| `FormationTestMissionControllerHotkeyOrderLineAndHorseArcherFormation` | `public const string FormationTestMissionControllerHotkeyOrderLineAndHorseArcherFormation` | field |
| `FormationTestMissionControllerHotkeyOrderCircle` | `public const string FormationTestMissionControllerHotkeyOrderCircle` | field |
| `FormationTestMissionControllerHotkeyOrderColumn` | `public const string FormationTestMissionControllerHotkeyOrderColumn` | field |
| `FormationTestMissionControllerHotkeyOrderShieldWall` | `public const string FormationTestMissionControllerHotkeyOrderShieldWall` | field |
| `FormationTestMissionControllerHotkeyOrderSquare` | `public const string FormationTestMissionControllerHotkeyOrderSquare` | field |
| `AiTestMissionControllerHotkeySpawnFormation` | `public const string AiTestMissionControllerHotkeySpawnFormation` | field |
| `TabbedPanelHotkeyDecreaseSelectedIndex` | `public const string TabbedPanelHotkeyDecreaseSelectedIndex` | field |
| `TabbedPanelHotkeyIncreaseSelectedIndex` | `public const string TabbedPanelHotkeyIncreaseSelectedIndex` | field |
| `MissionSingleplayerUiHandlerHotkeyUpdateItems` | `public const string MissionSingleplayerUiHandlerHotkeyUpdateItems` | field |
| `MissionSingleplayerUiHandlerHotkeyJoinEnemyTeam` | `public const string MissionSingleplayerUiHandlerHotkeyJoinEnemyTeam` | field |
| `SiegeDeploymentViewHotkeyTeleportMainAgent` | `public const string SiegeDeploymentViewHotkeyTeleportMainAgent` | field |
| `SiegeDeploymentViewHotkeyFinishDeployment` | `public const string SiegeDeploymentViewHotkeyFinishDeployment` | field |
| `CraftingScreenHotkeyEnableRuler` | `public const string CraftingScreenHotkeyEnableRuler` | field |
| `CraftingScreenHotkeyEnableRulerPoint1` | `public const string CraftingScreenHotkeyEnableRulerPoint1` | field |
| `CraftingScreenHotkeyEnableRulerPoint2` | `public const string CraftingScreenHotkeyEnableRulerPoint2` | field |
| `CraftingScreenHotkeySwitchSelectedPieceMovement` | `public const string CraftingScreenHotkeySwitchSelectedPieceMovement` | field |
| `CraftingScreenHotkeySetSelectedVariableIndexZero` | `public const string CraftingScreenHotkeySetSelectedVariableIndexZero` | field |
| `CraftingScreenHotkeySetSelectedVariableIndexOne` | `public const string CraftingScreenHotkeySetSelectedVariableIndexOne` | field |
| `CraftingScreenHotkeySetSelectedVariableIndexTwo` | `public const string CraftingScreenHotkeySetSelectedVariableIndexTwo` | field |
| `CraftingScreenHotkeySelectPieceZero` | `public const string CraftingScreenHotkeySelectPieceZero` | field |
| `CraftingScreenHotkeySelectPieceOne` | `public const string CraftingScreenHotkeySelectPieceOne` | field |
| `CraftingScreenHotkeySelectPieceTwo` | `public const string CraftingScreenHotkeySelectPieceTwo` | field |
| `CraftingScreenHotkeySelectPieceThree` | `public const string CraftingScreenHotkeySelectPieceThree` | field |
| `MbFaceGeneratorScreenHotkeyCamDebugAndAdjustEnabled` | `public const string MbFaceGeneratorScreenHotkeyCamDebugAndAdjustEnabled` | field |
| `MbFaceGeneratorScreenHotkeyNumpad0` | `public const string MbFaceGeneratorScreenHotkeyNumpad0` | field |
| `MbFaceGeneratorScreenHotkeyNumpad1` | `public const string MbFaceGeneratorScreenHotkeyNumpad1` | field |
| `MbFaceGeneratorScreenHotkeyNumpad2` | `public const string MbFaceGeneratorScreenHotkeyNumpad2` | field |
| `MbFaceGeneratorScreenHotkeyNumpad3` | `public const string MbFaceGeneratorScreenHotkeyNumpad3` | field |
| `MbFaceGeneratorScreenHotkeyNumpad4` | `public const string MbFaceGeneratorScreenHotkeyNumpad4` | field |
| `MbFaceGeneratorScreenHotkeyNumpad5` | `public const string MbFaceGeneratorScreenHotkeyNumpad5` | field |
| `MbFaceGeneratorScreenHotkeyNumpad6` | `public const string MbFaceGeneratorScreenHotkeyNumpad6` | field |
| `MbFaceGeneratorScreenHotkeyNumpad7` | `public const string MbFaceGeneratorScreenHotkeyNumpad7` | field |
| `MbFaceGeneratorScreenHotkeyNumpad8` | `public const string MbFaceGeneratorScreenHotkeyNumpad8` | field |
| `MbFaceGeneratorScreenHotkeyNumpad9` | `public const string MbFaceGeneratorScreenHotkeyNumpad9` | field |
| `MbFaceGeneratorScreenHotkeyResetFaceToDefault` | `public const string MbFaceGeneratorScreenHotkeyResetFaceToDefault` | field |
| `MbFaceGeneratorScreenHotkeySetFaceKeyMax` | `public const string MbFaceGeneratorScreenHotkeySetFaceKeyMax` | field |
| `MbFaceGeneratorScreenHotkeySetFaceKeyMin` | `public const string MbFaceGeneratorScreenHotkeySetFaceKeyMin` | field |
| `MbFaceGeneratorScreenHotkeySetCurFaceKeyToMax` | `public const string MbFaceGeneratorScreenHotkeySetCurFaceKeyToMax` | field |
| `MbFaceGeneratorScreenHotkeySetCurFaceKeyToMin` | `public const string MbFaceGeneratorScreenHotkeySetCurFaceKeyToMin` | field |
| `SoftwareOcclusionCheckerHotkeySaveOcclusionImage` | `public const string SoftwareOcclusionCheckerHotkeySaveOcclusionImage` | field |
| `MapScreenHotkeySwitchCampaignTrueSight` | `public const string MapScreenHotkeySwitchCampaignTrueSight` | field |
| `MapScreenPrintMultiLineText` | `public const string MapScreenPrintMultiLineText` | field |
| `MapScreenHotkeyShowPos` | `public const string MapScreenHotkeyShowPos` | field |
| `MapScreenHotkeyOpenEncyclopedia` | `public const string MapScreenHotkeyOpenEncyclopedia` | field |
| `ReplayCaptureLogicHotkeyRenderWithScreenshot` | `public const string ReplayCaptureLogicHotkeyRenderWithScreenshot` | field |
| `MissionScreenHotkeyFixCamera` | `public const string MissionScreenHotkeyFixCamera` | field |
| `MissionScreenHotkeyIncrementArtificialLag` | `public const string MissionScreenHotkeyIncrementArtificialLag` | field |
| `MissionScreenHotkeyIncrementArtificialLoss` | `public const string MissionScreenHotkeyIncrementArtificialLoss` | field |
| `MissionScreenHotkeyResetDebugVariables` | `public const string MissionScreenHotkeyResetDebugVariables` | field |
| `MissionScreenHotkeySwitchCameraSmooth` | `public const string MissionScreenHotkeySwitchCameraSmooth` | field |
| `MissionScreenHotkeyIncreaseFirstFormationWidth` | `public const string MissionScreenHotkeyIncreaseFirstFormationWidth` | field |
| `MissionScreenHotkeyDecreaseFirstFormationWidth` | `public const string MissionScreenHotkeyDecreaseFirstFormationWidth` | field |
| `MissionScreenHotkeyExtendedDebugKey` | `public const string MissionScreenHotkeyExtendedDebugKey` | field |
| `MissionScreenHotkeyShowDebug` | `public const string MissionScreenHotkeyShowDebug` | field |
| `MissionScreenHotkeyIncreaseTotalUploadLimit` | `public const string MissionScreenHotkeyIncreaseTotalUploadLimit` | field |
| `MissionScreenIncreaseTotalUploadLimit` | `public const string MissionScreenIncreaseTotalUploadLimit` | field |
| `MissionScreenHotkeyDecreaseRulerDistanceFromPivot` | `public const string MissionScreenHotkeyDecreaseRulerDistanceFromPivot` | field |
| `MissionScreenHotkeyIncreaseRulerDistanceFromPivot` | `public const string MissionScreenHotkeyIncreaseRulerDistanceFromPivot` | field |
| `DebugAgentTeleportMissionControllerHotkeyTeleportMainAgent` | `public const string DebugAgentTeleportMissionControllerHotkeyTeleportMainAgent` | field |
| `DebugAgentTeleportMissionControllerHotkeyDisableScriptedMovement` | `public const string DebugAgentTeleportMissionControllerHotkeyDisableScriptedMovement` | field |
| `MissionDebugHandlerHotkeyKillAI` | `public const string MissionDebugHandlerHotkeyKillAI` | field |
| `MissionDebugHandlerHotkeyKillAttacker` | `public const string MissionDebugHandlerHotkeyKillAttacker` | field |
| `MissionDebugHandlerHotkeyKillDefender` | `public const string MissionDebugHandlerHotkeyKillDefender` | field |
| `MissionDebugHandlerHotkeyKillMainAgent` | `public const string MissionDebugHandlerHotkeyKillMainAgent` | field |
| `MissionDebugHandlerHotkeyAttackingAiAgent` | `public const string MissionDebugHandlerHotkeyAttackingAiAgent` | field |
| `MissionDebugHandlerHotkeyDefendingAiAgent` | `public const string MissionDebugHandlerHotkeyDefendingAiAgent` | field |
| `MissionDebugHandlerHotkeyNormalAiAgent` | `public const string MissionDebugHandlerHotkeyNormalAiAgent` | field |
| `MissionDebugHandlerHotkeyAiAgentSideZero` | `public const string MissionDebugHandlerHotkeyAiAgentSideZero` | field |
| `MissionDebugHandlerHotkeyAiAgentSideOne` | `public const string MissionDebugHandlerHotkeyAiAgentSideOne` | field |
| `MissionDebugHandlerHotkeyAiAgentSideTwo` | `public const string MissionDebugHandlerHotkeyAiAgentSideTwo` | field |
| `MissionDebugHandlerHotkeyAiAgentSideThree` | `public const string MissionDebugHandlerHotkeyAiAgentSideThree` | field |
| `MissionDebugHandlerHotkeyColorEnemyTeam` | `public const string MissionDebugHandlerHotkeyColorEnemyTeam` | field |
| `MissionDebugHandlerHotkeyOpenMissionDebug` | `public const string MissionDebugHandlerHotkeyOpenMissionDebug` | field |
| `UsableMachineAiBaseHotkeyShowMachineUsers` | `public const string UsableMachineAiBaseHotkeyShowMachineUsers` | field |
| `UsableMachineAiBaseHotkeyRetreatScriptActive` | `public const string UsableMachineAiBaseHotkeyRetreatScriptActive` | field |
| `UsableMachineAiBaseHotkeyRetreatScriptPassive` | `public const string UsableMachineAiBaseHotkeyRetreatScriptPassive` | field |
| `CustomCameraMissionViewHotkeyIncreaseCustomCameraIndex` | `public const string CustomCameraMissionViewHotkeyIncreaseCustomCameraIndex` | field |
| `DebugSiegeBehaviorHotkeyAimAtBallistas` | `public const string DebugSiegeBehaviorHotkeyAimAtBallistas` | field |
| `DebugSiegeBehaviorHotkeyAimAtMangonels` | `public const string DebugSiegeBehaviorHotkeyAimAtMangonels` | field |
| `DebugSiegeBehaviorHotkeyAimAtBattlements` | `public const string DebugSiegeBehaviorHotkeyAimAtBattlements` | field |
| `DebugSiegeBehaviorHotkeyAimAtNone` | `public const string DebugSiegeBehaviorHotkeyAimAtNone` | field |
| `DebugSiegeBehaviorHotkeyAimAtNone2` | `public const string DebugSiegeBehaviorHotkeyAimAtNone2` | field |
| `DebugSiegeBehaviorHotkeyTargetDebugActive` | `public const string DebugSiegeBehaviorHotkeyTargetDebugActive` | field |
| `DebugSiegeBehaviorHotkeyTargetDebugDisactive` | `public const string DebugSiegeBehaviorHotkeyTargetDebugDisactive` | field |
| `DebugSiegeBehaviorHotkeyAimAtRam` | `public const string DebugSiegeBehaviorHotkeyAimAtRam` | field |
| `DebugSiegeBehaviorHotkeyAimAtSt` | `public const string DebugSiegeBehaviorHotkeyAimAtSt` | field |
| `DebugSiegeBehaviorHotkeyAimAtBallistas2` | `public const string DebugSiegeBehaviorHotkeyAimAtBallistas2` | field |
| `DebugSiegeBehaviorHotkeyAimAtMangonels2` | `public const string DebugSiegeBehaviorHotkeyAimAtMangonels2` | field |
| `DebugNetworkEventStatisticsHotkeyClear` | `public const string DebugNetworkEventStatisticsHotkeyClear` | field |
| `DebugNetworkEventStatisticsHotkeyDumpDataAndClear` | `public const string DebugNetworkEventStatisticsHotkeyDumpDataAndClear` | field |
| `DebugNetworkEventStatisticsHotkeyDumpData` | `public const string DebugNetworkEventStatisticsHotkeyDumpData` | field |
| `DebugNetworkEventStatisticsHotkeyClearReplicationData` | `public const string DebugNetworkEventStatisticsHotkeyClearReplicationData` | field |
| `DebugNetworkEventStatisticsHotkeyDumpReplicationData` | `public const string DebugNetworkEventStatisticsHotkeyDumpReplicationData` | field |
| `DebugNetworkEventStatisticsHotkeyDumpAndClearReplicationData` | `public const string DebugNetworkEventStatisticsHotkeyDumpAndClearReplicationData` | field |
| `DebugNetworkEventStatisticsHotkeyToggleActive` | `public const string DebugNetworkEventStatisticsHotkeyToggleActive` | field |
| `AiSelectDebugAgent1` | `public const string AiSelectDebugAgent1` | field |
| `AiSelectDebugAgent2` | `public const string AiSelectDebugAgent2` | field |
| `AiClearDebugAgents` | `public const string AiClearDebugAgents` | field |
| `DebugCustomBattlePredefinedSettings1` | `public const string DebugCustomBattlePredefinedSettings1` | field |
| `CraftingScreenResetVariable` | `public const string CraftingScreenResetVariable` | field |
| `DisableParallelSettlementPositionUpdate` | `public const string DisableParallelSettlementPositionUpdate` | field |
| `OpenUIEditor` | `public const string OpenUIEditor` | field |
| `ToggleUI` | `public const string ToggleUI` | field |
| `LeaveWhileInConversation` | `public const string LeaveWhileInConversation` | field |
| `ShowHighlightsSummary` | `public const string ShowHighlightsSummary` | field |
| `ResetMusicParameters` | `public const string ResetMusicParameters` | field |
| `UIExtendedDebugKey` | `public const string UIExtendedDebugKey` | field |
| `FaceGeneratorExtendedDebugKey` | `public const string FaceGeneratorExtendedDebugKey` | field |
| `FormationTestMissionExtendedDebugKey` | `public const string FormationTestMissionExtendedDebugKey` | field |
| `FormationTestMissionExtendedDebugKey2` | `public const string FormationTestMissionExtendedDebugKey2` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameKeyContext](../../system/GameKeyContext/)
- [same namespace CheatsHotKeyCategory](../CheatsHotKeyCategory/)
- [same namespace EngineInputManager](../EngineInputManager/)
