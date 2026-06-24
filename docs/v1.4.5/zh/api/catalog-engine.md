---
title: 引擎 Engine 类目录 / Class Catalog
sidebar: auto
---

# 引擎 Engine 类目录

## 心智模型

先把 `引擎 Engine 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.4.5 源码中该领域全部公开类型，按命名空间分组。共 **154** 个类型，其中 **150** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.Engine (130)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [AnimResult](/v1.3.15/zh/api/engine/AnimResult.md) | 🔗 |
| C | [ApplicationHealthChecker](/v1.3.15/zh/api/engine/ApplicationHealthChecker.md) | 🔗 |
| C | [AsyncTask](/v1.3.15/zh/api/engine/AsyncTask.md) | 🔗 |
| E | [BillboardType](/v1.3.15/zh/api/engine/BillboardType.md) | 🔗 |
| E | [BodyFlags](/v1.3.15/zh/api/engine/BodyFlags.md) | 🔗 |
| S | [BoundingBox](/v1.3.15/zh/api/engine/BoundingBox.md) | 🔗 |
| C | [Camera](/v1.3.15/zh/api/engine/Camera.md) | 🔗 |
| S | [CapsuleData](/v1.3.15/zh/api/engine/CapsuleData.md) | 🔗 |
| C | [ClothSimulatorComponent](/v1.3.15/zh/api/engine/ClothSimulatorComponent.md) | 🔗 |
| E | [ColorStyle](/v1.3.15/zh/api/engine/ColorStyle.md) | 🔗 |
| E | [ComponentType](/v1.3.15/zh/api/engine/ComponentType.md) | 🔗 |
| C | [CompositeComponent](/v1.3.15/zh/api/engine/CompositeComponent.md) | 🔗 |
| C | [CrashInformation](/v1.3.15/zh/api/engine/CrashInformation.md) | 🔗 |
| C | [CrashInformationCollector](/v1.3.15/zh/api/engine/CrashInformationCollector.md) | 🔗 |
| C | [CrashInformationProvider](/v1.3.15/zh/api/engine/CrashInformationProvider.md) | 🔗 |
| C | [Decal](/v1.3.15/zh/api/engine/Decal.md) | 🔗 |
| E | [DecalAtlasGroup](/v1.3.15/zh/api/engine/DecalAtlasGroup.md) | 🔗 |
| E | [EditDataPolicy](/v1.3.15/zh/api/engine/EditDataPolicy.md) | 🔗 |
| C | [EditorVisibleScriptComponentVariable](/v1.3.15/zh/api/engine/EditorVisibleScriptComponentVariable.md) | 🔗 |
| C | [EngineCallback](/v1.3.15/zh/api/engine/EngineCallback.md) | 🔗 |
| C | [EngineController](/v1.3.15/zh/api/engine/EngineController.md) | 🔗 |
| C | [EngineExtensions](/v1.3.15/zh/api/engine/EngineExtensions.md) | 🔗 |
| C | [EngineFilePaths](/v1.3.15/zh/api/engine/EngineFilePaths.md) | 🔗 |
| E | [EngineRenderDisplayMode](/v1.3.15/zh/api/engine/EngineRenderDisplayMode.md) | 🔗 |
| E | [EntityFlags](/v1.3.15/zh/api/engine/EntityFlags.md) | 🔗 |
| E | [EntityVisibilityFlags](/v1.3.15/zh/api/engine/EntityVisibilityFlags.md) | 🔗 |
| S | [Face](/v1.3.15/zh/api/engine/Face.md) | 🔗 |
| S | [FaceCorner](/v1.3.15/zh/api/engine/FaceCorner.md) | 🔗 |
| E | [FloaterVolumeDynamicUpAxis](/v1.3.15/zh/api/engine/FloaterVolumeDynamicUpAxis.md) | 🔗 |
| E | [ForceMode](/v1.3.15/zh/api/engine/ForceMode.md) | 🔗 |
| C | [GameEntity](/v1.3.15/zh/api/engine/GameEntity.md) | 🔗 |
| C | [GameEntityComponent](/v1.3.15/zh/api/engine/GameEntityComponent.md) | 🔗 |
| C | [GameEntityPhysicsExtensions](/v1.3.15/zh/api/engine/GameEntityPhysicsExtensions.md) | 🔗 |
| C | [GameEntityWithWorldPosition](/v1.3.15/zh/api/engine/GameEntityWithWorldPosition.md) | 🔗 |
| C | [HasTableauCache](/v1.3.15/zh/api/engine/HasTableauCache.md) | 🔗 |
| C | [Highlights](/v1.3.15/zh/api/engine/Highlights.md) | 🔗 |
| I | [ILoadingWindowManager](/v1.3.15/zh/api/engine/ILoadingWindowManager.md) | 🔗 |
| C | [Imgui](/v1.3.15/zh/api/engine/Imgui.md) | 🔗 |
| E | [InputLayout](/v1.3.15/zh/api/engine/InputLayout.md) | 🔗 |
| S | [Intersection](/v1.3.15/zh/api/engine/Intersection.md) | 🔗 |
| E | [IntersectionDetails](/v1.3.15/zh/api/engine/IntersectionDetails.md) | 🔗 |
| E | [IntersectionType](/v1.3.15/zh/api/engine/IntersectionType.md) | 🔗 |
| C | [Job](/v1.3.15/zh/api/engine/Job.md) | 🔗 |
| C | [JobManager](/v1.3.15/zh/api/engine/JobManager.md) | 🔗 |
| C | [Light](/v1.3.15/zh/api/engine/Light.md) | 🔗 |
| C | [LoadingWindow](/v1.3.15/zh/api/engine/LoadingWindow.md) | 🔗 |
| C | [MainThreadPerformanceQuery](/v1.3.15/zh/api/engine/MainThreadPerformanceQuery.md) | 🔗 |
| C | [ManagedExtensions](/v1.3.15/zh/api/engine/ManagedExtensions.md) | 🔗 |
| C | [ManagedMeshEditOperations](/v1.3.15/zh/api/engine/ManagedMeshEditOperations.md) | 🔗 |
| C | [ManagedScriptComponent](/v1.3.15/zh/api/engine/ManagedScriptComponent.md) | 🔗 |
| C | [ManagedScriptHolder](/v1.3.15/zh/api/engine/ManagedScriptHolder.md) | 🔗 |
| C | [Material](/v1.3.15/zh/api/engine/Material.md) | 🔗 |
| E | [MaterialFlags](/v1.3.15/zh/api/engine/MaterialFlags.md) | 🔗 |
| E | [MBAlphaBlendMode](/v1.3.15/zh/api/engine/MBAlphaBlendMode.md) | 🔗 |
| C | [MBDebug](/v1.3.15/zh/api/engine/MBDebug.md) | 🔗 |
| E | [MBMeshCullingMode](/v1.3.15/zh/api/engine/MBMeshCullingMode.md) | 🔗 |
| E | [MBMouseButtonState](/v1.3.15/zh/api/engine/MBMouseButtonState.md) | 🔗 |
| E | [MBTextureType](/v1.3.15/zh/api/engine/MBTextureType.md) | 🔗 |
| C | [Mesh](/v1.3.15/zh/api/engine/Mesh.md) | 🔗 |
| C | [MeshBuilder](/v1.3.15/zh/api/engine/MeshBuilder.md) | 🔗 |
| E | [MessageBoxTypeFlag](/v1.3.15/zh/api/engine/MessageBoxTypeFlag.md) | 🔗 |
| C | [MessageManagerBase](/v1.3.15/zh/api/engine/MessageManagerBase.md) | 🔗 |
| C | [MetaMesh](/v1.3.15/zh/api/engine/MetaMesh.md) | 🔗 |
| E | [Mobility](/v1.3.15/zh/api/engine/Mobility.md) | 🔗 |
| C | [MouseManager](/v1.3.15/zh/api/engine/MouseManager.md) | 🔗 |
| C | [Music](/v1.3.15/zh/api/engine/Music.md) | 🔗 |
| C | [NativeConfig](/v1.3.15/zh/api/engine/NativeConfig.md) | 🔗 |
| C | [NativeParallelDriver](/v1.3.15/zh/api/engine/NativeParallelDriver.md) | 🔗 |
| C | [NativeScriptComponent](/v1.3.15/zh/api/engine/NativeScriptComponent.md) | 🔗 |
| C | [ParticleSystem](/v1.3.15/zh/api/engine/ParticleSystem.md) | 🔗 |
| C | [ParticleSystemManager](/v1.3.15/zh/api/engine/ParticleSystemManager.md) | 🔗 |
| C | [Path](/v1.3.15/zh/api/engine/Path.md) | 🔗 |
| C | [PerformanceAnalyzer](/v1.3.15/zh/api/engine/PerformanceAnalyzer.md) | 🔗 |
| S | [PhysicsContact](/v1.3.15/zh/api/engine/PhysicsContact.md) | 🔗 |
| S | [PhysicsContactInfo](/v1.3.15/zh/api/engine/PhysicsContactInfo.md) | 🔗 |
| S | [PhysicsContactPair](/v1.3.15/zh/api/engine/PhysicsContactPair.md) | 🔗 |
| E | [PhysicsEventType](/v1.3.15/zh/api/engine/PhysicsEventType.md) | 🔗 |
| C | [PhysicsJoint](/v1.3.15/zh/api/engine/PhysicsJoint.md) | 🔗 |
| E | [PhysicsMaterialFlags](/v1.3.15/zh/api/engine/PhysicsMaterialFlags.md) | 🔗 |
| C | [PhysicsShape](/v1.3.15/zh/api/engine/PhysicsShape.md) | 🔗 |
| E | [PostfxConfig](/v1.3.15/zh/api/engine/PostfxConfig.md) | 🔗 |
| E | [RagdollState](/v1.3.15/zh/api/engine/RagdollState.md) | 🔗 |
| C | [RenderTargetComponent](/v1.3.15/zh/api/engine/RenderTargetComponent.md) | 🔗 |
| C | [Resource](/v1.3.15/zh/api/engine/Resource.md) | 🔗 |
| E | [RglScriptFieldType](/v1.3.15/zh/api/engine/RglScriptFieldType.md) | 🔗 |
| C | Scene | — |
| S | [SceneInitializationData](/v1.3.15/zh/api/engine/SceneInitializationData.md) | 🔗 |
| C | [SceneProblemChecker](/v1.3.15/zh/api/engine/SceneProblemChecker.md) | 🔗 |
| C | [SceneView](/v1.3.15/zh/api/engine/SceneView.md) | 🔗 |
| C | [Screen](/v1.3.15/zh/api/engine/Screen.md) | 🔗 |
| C | [ScreenManagerEngineConnection](/v1.3.15/zh/api/engine/ScreenManagerEngineConnection.md) | 🔗 |
| C | [ScriptComponent](/v1.3.15/zh/api/engine/ScriptComponent.md) | 🔗 |
| C | [ScriptComponentBehavior](/v1.3.15/zh/api/engine/ScriptComponentBehavior.md) | 🔗 |
| S | [ScriptComponentFieldHolder](/v1.3.15/zh/api/engine/ScriptComponentFieldHolder.md) | 🔗 |
| C | [Shader](/v1.3.15/zh/api/engine/Shader.md) | 🔗 |
| E | [ShadowType](/v1.3.15/zh/api/engine/ShadowType.md) | 🔗 |
| E | [Significance](/v1.3.15/zh/api/engine/Significance.md) | 🔗 |
| C | [SimpleButton](/v1.3.15/zh/api/engine/SimpleButton.md) | 🔗 |
| C | Skeleton | — |
| C | [SoundEvent](/v1.3.15/zh/api/engine/SoundEvent.md) | 🔗 |
| S | [SoundEventParameter](/v1.3.15/zh/api/engine/SoundEventParameter.md) | 🔗 |
| C | [SoundManager](/v1.3.15/zh/api/engine/SoundManager.md) | 🔗 |
| S | [SphereData](/v1.3.15/zh/api/engine/SphereData.md) | 🔗 |
| C | [TableauView](/v1.3.15/zh/api/engine/TableauView.md) | 🔗 |
| E | [TextFlags](/v1.3.15/zh/api/engine/TextFlags.md) | 🔗 |
| C | [Texture](/v1.3.15/zh/api/engine/Texture.md) | 🔗 |
| E | [TextureSaveFormat](/v1.3.15/zh/api/engine/TextureSaveFormat.md) | 🔗 |
| C | [TextureView](/v1.3.15/zh/api/engine/TextureView.md) | 🔗 |
| C | [ThumbnailCreatorView](/v1.3.15/zh/api/engine/ThumbnailCreatorView.md) | 🔗 |
| S | [ThumbnailRenderRequest](/v1.3.15/zh/api/engine/ThumbnailRenderRequest.md) | 🔗 |
| E | [TickRequirement](/v1.3.15/zh/api/engine/TickRequirement.md) | 🔗 |
| C | [Time](/v1.3.15/zh/api/engine/Time.md) | 🔗 |
| S | [TransformedBoundingBoxPointsContainer](/v1.3.15/zh/api/engine/TransformedBoundingBoxPointsContainer.md) | 🔗 |
| S | [TwoDimensionMeshDrawData](/v1.3.15/zh/api/engine/TwoDimensionMeshDrawData.md) | 🔗 |
| S | [TwoDimensionTextMeshDrawData](/v1.3.15/zh/api/engine/TwoDimensionTextMeshDrawData.md) | 🔗 |
| C | [TwoDimensionView](/v1.3.15/zh/api/engine/TwoDimensionView.md) | 🔗 |
| E | [Type](/v1.3.15/zh/api/engine/Type.md) | 🔗 |
| E | [UpgradeLevelMask](/v1.3.15/zh/api/engine/UpgradeLevelMask.md) | 🔗 |
| C | Utilities | — |
| C | [VideoPlayerView](/v1.3.15/zh/api/engine/VideoPlayerView.md) | 🔗 |
| C | [View](/v1.3.15/zh/api/engine/View.md) | 🔗 |
| E | [ViewRenderOptions](/v1.3.15/zh/api/engine/ViewRenderOptions.md) | 🔗 |
| E | [VisibilityMaskFlags](/v1.3.15/zh/api/engine/VisibilityMaskFlags.md) | 🔗 |
| S | [VolumeDataForSubmergeComputation](/v1.3.15/zh/api/engine/VolumeDataForSubmergeComputation.md) | 🔗 |
| S | [WeakGameEntity](/v1.3.15/zh/api/engine/WeakGameEntity.md) | 🔗 |
| S | [WeakMaterial](/v1.3.15/zh/api/engine/WeakMaterial.md) | 🔗 |
| S | [WorldFrame](/v1.3.15/zh/api/engine/WorldFrame.md) | 🔗 |
| S | [WorldPosition](/v1.3.15/zh/api/engine/WorldPosition.md) | 🔗 |
| E | [WorldPositionEnforcedCache](/v1.3.15/zh/api/engine/WorldPositionEnforcedCache.md) | 🔗 |
| E | [ZValidityState](/v1.3.15/zh/api/engine/ZValidityState.md) | 🔗 |

## TaleWorlds.Engine.GauntletUI (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EngineTexture](/v1.3.15/zh/api/engine/EngineTexture.md) | 🔗 |
| C | Extensions | — |
| C | [GauntletLayer](/v1.3.15/zh/api/engine/GauntletLayer.md) | 🔗 |
| C | [GauntletMovieIdentifier](/v1.3.15/zh/api/engine/GauntletMovieIdentifier.md) | 🔗 |
| C | [TwoDimensionEnginePlatform](/v1.3.15/zh/api/engine/TwoDimensionEnginePlatform.md) | 🔗 |
| C | [TwoDimensionEngineResourceContext](/v1.3.15/zh/api/engine/TwoDimensionEngineResourceContext.md) | 🔗 |
| C | [UIConfig](/v1.3.15/zh/api/engine/UIConfig.md) | 🔗 |
| C | [UIResourceManager](/v1.3.15/zh/api/engine/UIResourceManager.md) | 🔗 |

## TaleWorlds.Engine.InputSystem (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CheatsHotKeyCategory](/v1.3.15/zh/api/engine/CheatsHotKeyCategory.md) | 🔗 |
| C | [DebugHotKeyCategory](/v1.3.15/zh/api/engine/DebugHotKeyCategory.md) | 🔗 |
| C | [EngineInputManager](/v1.3.15/zh/api/engine/EngineInputManager.md) | 🔗 |

## TaleWorlds.Engine.Options (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [ConfigQuality](/v1.3.15/zh/api/engine/ConfigQuality.md) | 🔗 |
| I | [IBooleanOptionData](/v1.3.15/zh/api/engine/IBooleanOptionData.md) | 🔗 |
| I | [INumericOptionData](/v1.3.15/zh/api/engine/INumericOptionData.md) | 🔗 |
| I | [IOptionData](/v1.3.15/zh/api/engine/IOptionData.md) | 🔗 |
| I | [ISelectionOptionData](/v1.3.15/zh/api/engine/ISelectionOptionData.md) | 🔗 |
| C | [NativeBooleanOptionData](/v1.3.15/zh/api/engine/NativeBooleanOptionData.md) | 🔗 |
| C | [NativeNumericOptionData](/v1.3.15/zh/api/engine/NativeNumericOptionData.md) | 🔗 |
| C | [NativeOptionData](/v1.3.15/zh/api/engine/NativeOptionData.md) | 🔗 |
| C | [NativeOptions](/v1.3.15/zh/api/engine/NativeOptions.md) | 🔗 |
| E | [NativeOptionsType](/v1.3.15/zh/api/engine/NativeOptionsType.md) | 🔗 |
| C | [NativeSelectionOptionData](/v1.3.15/zh/api/engine/NativeSelectionOptionData.md) | 🔗 |
| S | [SelectionData](/v1.3.15/zh/api/engine/SelectionData.md) | 🔗 |

## TaleWorlds.Engine.Screens (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SceneLayer](/v1.3.15/zh/api/engine/SceneLayer.md) | 🔗 |
