---
title: 引擎 Engine 类目录 / Class Catalog
extra:
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
| S | [AnimResult](/v1.3.15/zh/api/engine/AnimResult) | 🔗 |
| C | [ApplicationHealthChecker](/v1.3.15/zh/api/engine/ApplicationHealthChecker) | 🔗 |
| C | [AsyncTask](/v1.3.15/zh/api/engine/AsyncTask) | 🔗 |
| E | [BillboardType](/v1.3.15/zh/api/engine/BillboardType) | 🔗 |
| E | [BodyFlags](/v1.3.15/zh/api/engine/BodyFlags) | 🔗 |
| S | [BoundingBox](/v1.3.15/zh/api/engine/BoundingBox) | 🔗 |
| C | [Camera](/v1.3.15/zh/api/engine/Camera) | 🔗 |
| S | [CapsuleData](/v1.3.15/zh/api/engine/CapsuleData) | 🔗 |
| C | [ClothSimulatorComponent](/v1.3.15/zh/api/engine/ClothSimulatorComponent) | 🔗 |
| E | [ColorStyle](/v1.3.15/zh/api/engine/ColorStyle) | 🔗 |
| E | [ComponentType](/v1.3.15/zh/api/engine/ComponentType) | 🔗 |
| C | [CompositeComponent](/v1.3.15/zh/api/engine/CompositeComponent) | 🔗 |
| C | [CrashInformation](/v1.3.15/zh/api/engine/CrashInformation) | 🔗 |
| C | [CrashInformationCollector](/v1.3.15/zh/api/engine/CrashInformationCollector) | 🔗 |
| C | [CrashInformationProvider](/v1.3.15/zh/api/engine/CrashInformationProvider) | 🔗 |
| C | [Decal](/v1.3.15/zh/api/engine/Decal) | 🔗 |
| E | [DecalAtlasGroup](/v1.3.15/zh/api/engine/DecalAtlasGroup) | 🔗 |
| E | [EditDataPolicy](/v1.3.15/zh/api/engine/EditDataPolicy) | 🔗 |
| C | [EditorVisibleScriptComponentVariable](/v1.3.15/zh/api/engine/EditorVisibleScriptComponentVariable) | 🔗 |
| C | [EngineCallback](/v1.3.15/zh/api/engine/EngineCallback) | 🔗 |
| C | [EngineController](/v1.3.15/zh/api/engine/EngineController) | 🔗 |
| C | [EngineExtensions](/v1.3.15/zh/api/engine/EngineExtensions) | 🔗 |
| C | [EngineFilePaths](/v1.3.15/zh/api/engine/EngineFilePaths) | 🔗 |
| E | [EngineRenderDisplayMode](/v1.3.15/zh/api/engine/EngineRenderDisplayMode) | 🔗 |
| E | [EntityFlags](/v1.3.15/zh/api/engine/EntityFlags) | 🔗 |
| E | [EntityVisibilityFlags](/v1.3.15/zh/api/engine/EntityVisibilityFlags) | 🔗 |
| S | [Face](/v1.3.15/zh/api/engine/Face) | 🔗 |
| S | [FaceCorner](/v1.3.15/zh/api/engine/FaceCorner) | 🔗 |
| E | [FloaterVolumeDynamicUpAxis](/v1.3.15/zh/api/engine/FloaterVolumeDynamicUpAxis) | 🔗 |
| E | [ForceMode](/v1.3.15/zh/api/engine/ForceMode) | 🔗 |
| C | [GameEntity](/v1.3.15/zh/api/engine/GameEntity) | 🔗 |
| C | [GameEntityComponent](/v1.3.15/zh/api/engine/GameEntityComponent) | 🔗 |
| C | [GameEntityPhysicsExtensions](/v1.3.15/zh/api/engine/GameEntityPhysicsExtensions) | 🔗 |
| C | [GameEntityWithWorldPosition](/v1.3.15/zh/api/engine/GameEntityWithWorldPosition) | 🔗 |
| C | [HasTableauCache](/v1.3.15/zh/api/engine/HasTableauCache) | 🔗 |
| C | [Highlights](/v1.3.15/zh/api/engine/Highlights) | 🔗 |
| I | [ILoadingWindowManager](/v1.3.15/zh/api/engine/ILoadingWindowManager) | 🔗 |
| C | [Imgui](/v1.3.15/zh/api/engine/Imgui) | 🔗 |
| E | [InputLayout](/v1.3.15/zh/api/engine/InputLayout) | 🔗 |
| S | [Intersection](/v1.3.15/zh/api/engine/Intersection) | 🔗 |
| E | [IntersectionDetails](/v1.3.15/zh/api/engine/IntersectionDetails) | 🔗 |
| E | [IntersectionType](/v1.3.15/zh/api/engine/IntersectionType) | 🔗 |
| C | [Job](/v1.3.15/zh/api/engine/Job) | 🔗 |
| C | [JobManager](/v1.3.15/zh/api/engine/JobManager) | 🔗 |
| C | [Light](/v1.3.15/zh/api/engine/Light) | 🔗 |
| C | [LoadingWindow](/v1.3.15/zh/api/engine/LoadingWindow) | 🔗 |
| C | [MainThreadPerformanceQuery](/v1.3.15/zh/api/engine/MainThreadPerformanceQuery) | 🔗 |
| C | [ManagedExtensions](/v1.3.15/zh/api/engine/ManagedExtensions) | 🔗 |
| C | [ManagedMeshEditOperations](/v1.3.15/zh/api/engine/ManagedMeshEditOperations) | 🔗 |
| C | [ManagedScriptComponent](/v1.3.15/zh/api/engine/ManagedScriptComponent) | 🔗 |
| C | [ManagedScriptHolder](/v1.3.15/zh/api/engine/ManagedScriptHolder) | 🔗 |
| C | [Material](/v1.3.15/zh/api/engine/Material) | 🔗 |
| E | [MaterialFlags](/v1.3.15/zh/api/engine/MaterialFlags) | 🔗 |
| E | [MBAlphaBlendMode](/v1.3.15/zh/api/engine/MBAlphaBlendMode) | 🔗 |
| C | [MBDebug](/v1.3.15/zh/api/engine/MBDebug) | 🔗 |
| E | [MBMeshCullingMode](/v1.3.15/zh/api/engine/MBMeshCullingMode) | 🔗 |
| E | [MBMouseButtonState](/v1.3.15/zh/api/engine/MBMouseButtonState) | 🔗 |
| E | [MBTextureType](/v1.3.15/zh/api/engine/MBTextureType) | 🔗 |
| C | [Mesh](/v1.3.15/zh/api/engine/Mesh) | 🔗 |
| C | [MeshBuilder](/v1.3.15/zh/api/engine/MeshBuilder) | 🔗 |
| E | [MessageBoxTypeFlag](/v1.3.15/zh/api/engine/MessageBoxTypeFlag) | 🔗 |
| C | [MessageManagerBase](/v1.3.15/zh/api/engine/MessageManagerBase) | 🔗 |
| C | [MetaMesh](/v1.3.15/zh/api/engine/MetaMesh) | 🔗 |
| E | [Mobility](/v1.3.15/zh/api/engine/Mobility) | 🔗 |
| C | [MouseManager](/v1.3.15/zh/api/engine/MouseManager) | 🔗 |
| C | [Music](/v1.3.15/zh/api/engine/Music) | 🔗 |
| C | [NativeConfig](/v1.3.15/zh/api/engine/NativeConfig) | 🔗 |
| C | [NativeParallelDriver](/v1.3.15/zh/api/engine/NativeParallelDriver) | 🔗 |
| C | [NativeScriptComponent](/v1.3.15/zh/api/engine/NativeScriptComponent) | 🔗 |
| C | [ParticleSystem](/v1.3.15/zh/api/engine/ParticleSystem) | 🔗 |
| C | [ParticleSystemManager](/v1.3.15/zh/api/engine/ParticleSystemManager) | 🔗 |
| C | [Path](/v1.3.15/zh/api/engine/Path) | 🔗 |
| C | [PerformanceAnalyzer](/v1.3.15/zh/api/engine/PerformanceAnalyzer) | 🔗 |
| S | [PhysicsContact](/v1.3.15/zh/api/engine/PhysicsContact) | 🔗 |
| S | [PhysicsContactInfo](/v1.3.15/zh/api/engine/PhysicsContactInfo) | 🔗 |
| S | [PhysicsContactPair](/v1.3.15/zh/api/engine/PhysicsContactPair) | 🔗 |
| E | [PhysicsEventType](/v1.3.15/zh/api/engine/PhysicsEventType) | 🔗 |
| C | [PhysicsJoint](/v1.3.15/zh/api/engine/PhysicsJoint) | 🔗 |
| E | [PhysicsMaterialFlags](/v1.3.15/zh/api/engine/PhysicsMaterialFlags) | 🔗 |
| C | [PhysicsShape](/v1.3.15/zh/api/engine/PhysicsShape) | 🔗 |
| E | [PostfxConfig](/v1.3.15/zh/api/engine/PostfxConfig) | 🔗 |
| E | [RagdollState](/v1.3.15/zh/api/engine/RagdollState) | 🔗 |
| C | [RenderTargetComponent](/v1.3.15/zh/api/engine/RenderTargetComponent) | 🔗 |
| C | [Resource](/v1.3.15/zh/api/engine/Resource) | 🔗 |
| E | [RglScriptFieldType](/v1.3.15/zh/api/engine/RglScriptFieldType) | 🔗 |
| C | Scene | — |
| S | [SceneInitializationData](/v1.3.15/zh/api/engine/SceneInitializationData) | 🔗 |
| C | [SceneProblemChecker](/v1.3.15/zh/api/engine/SceneProblemChecker) | 🔗 |
| C | [SceneView](/v1.3.15/zh/api/engine/SceneView) | 🔗 |
| C | [Screen](/v1.3.15/zh/api/engine/Screen) | 🔗 |
| C | [ScreenManagerEngineConnection](/v1.3.15/zh/api/engine/ScreenManagerEngineConnection) | 🔗 |
| C | [ScriptComponent](/v1.3.15/zh/api/engine/ScriptComponent) | 🔗 |
| C | [ScriptComponentBehavior](/v1.3.15/zh/api/engine/ScriptComponentBehavior) | 🔗 |
| S | [ScriptComponentFieldHolder](/v1.3.15/zh/api/engine/ScriptComponentFieldHolder) | 🔗 |
| C | [Shader](/v1.3.15/zh/api/engine/Shader) | 🔗 |
| E | [ShadowType](/v1.3.15/zh/api/engine/ShadowType) | 🔗 |
| E | [Significance](/v1.3.15/zh/api/engine/Significance) | 🔗 |
| C | [SimpleButton](/v1.3.15/zh/api/engine/SimpleButton) | 🔗 |
| C | Skeleton | — |
| C | [SoundEvent](/v1.3.15/zh/api/engine/SoundEvent) | 🔗 |
| S | [SoundEventParameter](/v1.3.15/zh/api/engine/SoundEventParameter) | 🔗 |
| C | [SoundManager](/v1.3.15/zh/api/engine/SoundManager) | 🔗 |
| S | [SphereData](/v1.3.15/zh/api/engine/SphereData) | 🔗 |
| C | [TableauView](/v1.3.15/zh/api/engine/TableauView) | 🔗 |
| E | [TextFlags](/v1.3.15/zh/api/engine/TextFlags) | 🔗 |
| C | [Texture](/v1.3.15/zh/api/engine/Texture) | 🔗 |
| E | [TextureSaveFormat](/v1.3.15/zh/api/engine/TextureSaveFormat) | 🔗 |
| C | [TextureView](/v1.3.15/zh/api/engine/TextureView) | 🔗 |
| C | [ThumbnailCreatorView](/v1.3.15/zh/api/engine/ThumbnailCreatorView) | 🔗 |
| S | [ThumbnailRenderRequest](/v1.3.15/zh/api/engine/ThumbnailRenderRequest) | 🔗 |
| E | [TickRequirement](/v1.3.15/zh/api/engine/TickRequirement) | 🔗 |
| C | [Time](/v1.3.15/zh/api/engine/Time) | 🔗 |
| S | [TransformedBoundingBoxPointsContainer](/v1.3.15/zh/api/engine/TransformedBoundingBoxPointsContainer) | 🔗 |
| S | [TwoDimensionMeshDrawData](/v1.3.15/zh/api/engine/TwoDimensionMeshDrawData) | 🔗 |
| S | [TwoDimensionTextMeshDrawData](/v1.3.15/zh/api/engine/TwoDimensionTextMeshDrawData) | 🔗 |
| C | [TwoDimensionView](/v1.3.15/zh/api/engine/TwoDimensionView) | 🔗 |
| E | [Type](/v1.3.15/zh/api/engine/Type) | 🔗 |
| E | [UpgradeLevelMask](/v1.3.15/zh/api/engine/UpgradeLevelMask) | 🔗 |
| C | Utilities | — |
| C | [VideoPlayerView](/v1.3.15/zh/api/engine/VideoPlayerView) | 🔗 |
| C | [View](/v1.3.15/zh/api/engine/View) | 🔗 |
| E | [ViewRenderOptions](/v1.3.15/zh/api/engine/ViewRenderOptions) | 🔗 |
| E | [VisibilityMaskFlags](/v1.3.15/zh/api/engine/VisibilityMaskFlags) | 🔗 |
| S | [VolumeDataForSubmergeComputation](/v1.3.15/zh/api/engine/VolumeDataForSubmergeComputation) | 🔗 |
| S | [WeakGameEntity](/v1.3.15/zh/api/engine/WeakGameEntity) | 🔗 |
| S | [WeakMaterial](/v1.3.15/zh/api/engine/WeakMaterial) | 🔗 |
| S | [WorldFrame](/v1.3.15/zh/api/engine/WorldFrame) | 🔗 |
| S | [WorldPosition](/v1.3.15/zh/api/engine/WorldPosition) | 🔗 |
| E | [WorldPositionEnforcedCache](/v1.3.15/zh/api/engine/WorldPositionEnforcedCache) | 🔗 |
| E | [ZValidityState](/v1.3.15/zh/api/engine/ZValidityState) | 🔗 |

## TaleWorlds.Engine.GauntletUI (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EngineTexture](/v1.3.15/zh/api/engine/EngineTexture) | 🔗 |
| C | Extensions | — |
| C | [GauntletLayer](/v1.3.15/zh/api/engine/GauntletLayer) | 🔗 |
| C | [GauntletMovieIdentifier](/v1.3.15/zh/api/engine/GauntletMovieIdentifier) | 🔗 |
| C | [TwoDimensionEnginePlatform](/v1.3.15/zh/api/engine/TwoDimensionEnginePlatform) | 🔗 |
| C | [TwoDimensionEngineResourceContext](/v1.3.15/zh/api/engine/TwoDimensionEngineResourceContext) | 🔗 |
| C | [UIConfig](/v1.3.15/zh/api/engine/UIConfig) | 🔗 |
| C | [UIResourceManager](/v1.3.15/zh/api/engine/UIResourceManager) | 🔗 |

## TaleWorlds.Engine.InputSystem (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CheatsHotKeyCategory](/v1.3.15/zh/api/engine/CheatsHotKeyCategory) | 🔗 |
| C | [DebugHotKeyCategory](/v1.3.15/zh/api/engine/DebugHotKeyCategory) | 🔗 |
| C | [EngineInputManager](/v1.3.15/zh/api/engine/EngineInputManager) | 🔗 |

## TaleWorlds.Engine.Options (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [ConfigQuality](/v1.3.15/zh/api/engine/ConfigQuality) | 🔗 |
| I | [IBooleanOptionData](/v1.3.15/zh/api/engine/IBooleanOptionData) | 🔗 |
| I | [INumericOptionData](/v1.3.15/zh/api/engine/INumericOptionData) | 🔗 |
| I | [IOptionData](/v1.3.15/zh/api/engine/IOptionData) | 🔗 |
| I | [ISelectionOptionData](/v1.3.15/zh/api/engine/ISelectionOptionData) | 🔗 |
| C | [NativeBooleanOptionData](/v1.3.15/zh/api/engine/NativeBooleanOptionData) | 🔗 |
| C | [NativeNumericOptionData](/v1.3.15/zh/api/engine/NativeNumericOptionData) | 🔗 |
| C | [NativeOptionData](/v1.3.15/zh/api/engine/NativeOptionData) | 🔗 |
| C | [NativeOptions](/v1.3.15/zh/api/engine/NativeOptions) | 🔗 |
| E | [NativeOptionsType](/v1.3.15/zh/api/engine/NativeOptionsType) | 🔗 |
| C | [NativeSelectionOptionData](/v1.3.15/zh/api/engine/NativeSelectionOptionData) | 🔗 |
| S | [SelectionData](/v1.3.15/zh/api/engine/SelectionData) | 🔗 |

## TaleWorlds.Engine.Screens (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SceneLayer](/v1.3.15/zh/api/engine/SceneLayer) | 🔗 |
