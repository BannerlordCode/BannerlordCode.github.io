---
title: 引擎 Engine 类目录 / Class Catalog
extra:
  sidebar: auto
---
# 引擎 Engine 类目录

## 心智模型

先把 `引擎 Engine 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.15 源码中该领域全部公开类型，按命名空间分组。共 **154** 个类型，其中 **150** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.Engine (130)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [AnimResult](./engine/AnimResult) | 🔗 |
| C | [ApplicationHealthChecker](./engine/ApplicationHealthChecker) | 🔗 |
| C | [AsyncTask](./engine/AsyncTask) | 🔗 |
| E | [BillboardType](./engine/BillboardType) | 🔗 |
| E | [BodyFlags](./engine/BodyFlags) | 🔗 |
| S | [BoundingBox](./engine/BoundingBox) | 🔗 |
| C | [Camera](./engine/Camera) | 🔗 |
| S | [CapsuleData](./engine/CapsuleData) | 🔗 |
| C | [ClothSimulatorComponent](./engine/ClothSimulatorComponent) | 🔗 |
| E | [ColorStyle](./engine/ColorStyle) | 🔗 |
| E | [ComponentType](./engine/ComponentType) | 🔗 |
| C | [CompositeComponent](./engine/CompositeComponent) | 🔗 |
| C | [CrashInformation](./engine/CrashInformation) | 🔗 |
| C | [CrashInformationCollector](./engine/CrashInformationCollector) | 🔗 |
| C | [CrashInformationProvider](./engine/CrashInformationProvider) | 🔗 |
| C | [Decal](./engine/Decal) | 🔗 |
| E | [DecalAtlasGroup](./engine/DecalAtlasGroup) | 🔗 |
| E | [EditDataPolicy](./engine/EditDataPolicy) | 🔗 |
| C | [EditorVisibleScriptComponentVariable](./engine/EditorVisibleScriptComponentVariable) | 🔗 |
| C | [EngineCallback](./engine/EngineCallback) | 🔗 |
| C | [EngineController](./engine/EngineController) | 🔗 |
| C | [EngineExtensions](./engine/EngineExtensions) | 🔗 |
| C | [EngineFilePaths](./engine/EngineFilePaths) | 🔗 |
| E | [EngineRenderDisplayMode](./engine/EngineRenderDisplayMode) | 🔗 |
| E | [EntityFlags](./engine/EntityFlags) | 🔗 |
| E | [EntityVisibilityFlags](./engine/EntityVisibilityFlags) | 🔗 |
| S | [Face](./engine/Face) | 🔗 |
| S | [FaceCorner](./engine/FaceCorner) | 🔗 |
| E | [FloaterVolumeDynamicUpAxis](./engine/FloaterVolumeDynamicUpAxis) | 🔗 |
| E | [ForceMode](./engine/ForceMode) | 🔗 |
| C | [GameEntity](./engine/GameEntity) | 🔗 |
| C | [GameEntityComponent](./engine/GameEntityComponent) | 🔗 |
| C | [GameEntityPhysicsExtensions](./engine/GameEntityPhysicsExtensions) | 🔗 |
| C | [GameEntityWithWorldPosition](./engine/GameEntityWithWorldPosition) | 🔗 |
| C | [HasTableauCache](./engine/HasTableauCache) | 🔗 |
| C | [Highlights](./engine/Highlights) | 🔗 |
| I | [ILoadingWindowManager](./engine/ILoadingWindowManager) | 🔗 |
| C | [Imgui](./engine/Imgui) | 🔗 |
| E | [InputLayout](./engine/InputLayout) | 🔗 |
| S | [Intersection](./engine/Intersection) | 🔗 |
| E | [IntersectionDetails](./engine/IntersectionDetails) | 🔗 |
| E | [IntersectionType](./engine/IntersectionType) | 🔗 |
| C | [Job](./engine/Job) | 🔗 |
| C | [JobManager](./engine/JobManager) | 🔗 |
| C | [Light](./engine/Light) | 🔗 |
| C | [LoadingWindow](./engine/LoadingWindow) | 🔗 |
| C | [MainThreadPerformanceQuery](./engine/MainThreadPerformanceQuery) | 🔗 |
| C | [ManagedExtensions](./engine/ManagedExtensions) | 🔗 |
| C | [ManagedMeshEditOperations](./engine/ManagedMeshEditOperations) | 🔗 |
| C | [ManagedScriptComponent](./engine/ManagedScriptComponent) | 🔗 |
| C | [ManagedScriptHolder](./engine/ManagedScriptHolder) | 🔗 |
| C | [Material](./engine/Material) | 🔗 |
| E | [MaterialFlags](./engine/MaterialFlags) | 🔗 |
| E | [MBAlphaBlendMode](./engine/MBAlphaBlendMode) | 🔗 |
| C | [MBDebug](./engine/MBDebug) | 🔗 |
| E | [MBMeshCullingMode](./engine/MBMeshCullingMode) | 🔗 |
| E | [MBMouseButtonState](./engine/MBMouseButtonState) | 🔗 |
| E | [MBTextureType](./engine/MBTextureType) | 🔗 |
| C | [Mesh](./engine/Mesh) | 🔗 |
| C | [MeshBuilder](./engine/MeshBuilder) | 🔗 |
| E | [MessageBoxTypeFlag](./engine/MessageBoxTypeFlag) | 🔗 |
| C | [MessageManagerBase](./engine/MessageManagerBase) | 🔗 |
| C | [MetaMesh](./engine/MetaMesh) | 🔗 |
| E | [Mobility](./engine/Mobility) | 🔗 |
| C | [MouseManager](./engine/MouseManager) | 🔗 |
| C | [Music](./engine/Music) | 🔗 |
| C | [NativeConfig](./engine/NativeConfig) | 🔗 |
| C | [NativeParallelDriver](./engine/NativeParallelDriver) | 🔗 |
| C | [NativeScriptComponent](./engine/NativeScriptComponent) | 🔗 |
| C | [ParticleSystem](./engine/ParticleSystem) | 🔗 |
| C | [ParticleSystemManager](./engine/ParticleSystemManager) | 🔗 |
| C | [Path](./engine/Path) | 🔗 |
| C | [PerformanceAnalyzer](./engine/PerformanceAnalyzer) | 🔗 |
| S | [PhysicsContact](./engine/PhysicsContact) | 🔗 |
| S | [PhysicsContactInfo](./engine/PhysicsContactInfo) | 🔗 |
| S | [PhysicsContactPair](./engine/PhysicsContactPair) | 🔗 |
| E | [PhysicsEventType](./engine/PhysicsEventType) | 🔗 |
| C | [PhysicsJoint](./engine/PhysicsJoint) | 🔗 |
| E | [PhysicsMaterialFlags](./engine/PhysicsMaterialFlags) | 🔗 |
| C | [PhysicsShape](./engine/PhysicsShape) | 🔗 |
| E | [PostfxConfig](./engine/PostfxConfig) | 🔗 |
| E | [RagdollState](./engine/RagdollState) | 🔗 |
| C | [RenderTargetComponent](./engine/RenderTargetComponent) | 🔗 |
| C | [Resource](./engine/Resource) | 🔗 |
| E | [RglScriptFieldType](./engine/RglScriptFieldType) | 🔗 |
| C | Scene | — |
| S | [SceneInitializationData](./engine/SceneInitializationData) | 🔗 |
| C | [SceneProblemChecker](./engine/SceneProblemChecker) | 🔗 |
| C | [SceneView](./engine/SceneView) | 🔗 |
| C | [Screen](./engine/Screen) | 🔗 |
| C | [ScreenManagerEngineConnection](./engine/ScreenManagerEngineConnection) | 🔗 |
| C | [ScriptComponent](./engine/ScriptComponent) | 🔗 |
| C | [ScriptComponentBehavior](./engine/ScriptComponentBehavior) | 🔗 |
| S | [ScriptComponentFieldHolder](./engine/ScriptComponentFieldHolder) | 🔗 |
| C | [Shader](./engine/Shader) | 🔗 |
| E | [ShadowType](./engine/ShadowType) | 🔗 |
| E | [Significance](./engine/Significance) | 🔗 |
| C | [SimpleButton](./engine/SimpleButton) | 🔗 |
| C | Skeleton | — |
| C | [SoundEvent](./engine/SoundEvent) | 🔗 |
| S | [SoundEventParameter](./engine/SoundEventParameter) | 🔗 |
| C | [SoundManager](./engine/SoundManager) | 🔗 |
| S | [SphereData](./engine/SphereData) | 🔗 |
| C | [TableauView](./engine/TableauView) | 🔗 |
| E | [TextFlags](./engine/TextFlags) | 🔗 |
| C | [Texture](./engine/Texture) | 🔗 |
| E | [TextureSaveFormat](./engine/TextureSaveFormat) | 🔗 |
| C | [TextureView](./engine/TextureView) | 🔗 |
| C | [ThumbnailCreatorView](./engine/ThumbnailCreatorView) | 🔗 |
| S | [ThumbnailRenderRequest](./engine/ThumbnailRenderRequest) | 🔗 |
| E | [TickRequirement](./engine/TickRequirement) | 🔗 |
| C | [Time](./engine/Time) | 🔗 |
| S | [TransformedBoundingBoxPointsContainer](./engine/TransformedBoundingBoxPointsContainer) | 🔗 |
| S | [TwoDimensionMeshDrawData](./engine/TwoDimensionMeshDrawData) | 🔗 |
| S | [TwoDimensionTextMeshDrawData](./engine/TwoDimensionTextMeshDrawData) | 🔗 |
| C | [TwoDimensionView](./engine/TwoDimensionView) | 🔗 |
| E | [Type](./engine/Type) | 🔗 |
| E | [UpgradeLevelMask](./engine/UpgradeLevelMask) | 🔗 |
| C | Utilities | — |
| C | [VideoPlayerView](./engine/VideoPlayerView) | 🔗 |
| C | [View](./engine/View) | 🔗 |
| E | [ViewRenderOptions](./engine/ViewRenderOptions) | 🔗 |
| E | [VisibilityMaskFlags](./engine/VisibilityMaskFlags) | 🔗 |
| S | [VolumeDataForSubmergeComputation](./engine/VolumeDataForSubmergeComputation) | 🔗 |
| S | [WeakGameEntity](./engine/WeakGameEntity) | 🔗 |
| S | [WeakMaterial](./engine/WeakMaterial) | 🔗 |
| S | [WorldFrame](./engine/WorldFrame) | 🔗 |
| S | [WorldPosition](./engine/WorldPosition) | 🔗 |
| E | [WorldPositionEnforcedCache](./engine/WorldPositionEnforcedCache) | 🔗 |
| E | [ZValidityState](./engine/ZValidityState) | 🔗 |

## TaleWorlds.Engine.GauntletUI (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EngineTexture](./engine/EngineTexture) | 🔗 |
| C | Extensions | — |
| C | [GauntletLayer](./engine/GauntletLayer) | 🔗 |
| C | [GauntletMovieIdentifier](./engine/GauntletMovieIdentifier) | 🔗 |
| C | [TwoDimensionEnginePlatform](./engine/TwoDimensionEnginePlatform) | 🔗 |
| C | [TwoDimensionEngineResourceContext](./engine/TwoDimensionEngineResourceContext) | 🔗 |
| C | [UIConfig](./engine/UIConfig) | 🔗 |
| C | [UIResourceManager](./engine/UIResourceManager) | 🔗 |

## TaleWorlds.Engine.InputSystem (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CheatsHotKeyCategory](./engine/CheatsHotKeyCategory) | 🔗 |
| C | [DebugHotKeyCategory](./engine/DebugHotKeyCategory) | 🔗 |
| C | [EngineInputManager](./engine/EngineInputManager) | 🔗 |

## TaleWorlds.Engine.Options (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [ConfigQuality](./engine/ConfigQuality) | 🔗 |
| I | [IBooleanOptionData](./engine/IBooleanOptionData) | 🔗 |
| I | [INumericOptionData](./engine/INumericOptionData) | 🔗 |
| I | [IOptionData](./engine/IOptionData) | 🔗 |
| I | [ISelectionOptionData](./engine/ISelectionOptionData) | 🔗 |
| C | [NativeBooleanOptionData](./engine/NativeBooleanOptionData) | 🔗 |
| C | [NativeNumericOptionData](./engine/NativeNumericOptionData) | 🔗 |
| C | [NativeOptionData](./engine/NativeOptionData) | 🔗 |
| C | [NativeOptions](./engine/NativeOptions) | 🔗 |
| E | [NativeOptionsType](./engine/NativeOptionsType) | 🔗 |
| C | [NativeSelectionOptionData](./engine/NativeSelectionOptionData) | 🔗 |
| S | [SelectionData](./engine/SelectionData) | 🔗 |

## TaleWorlds.Engine.Screens (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SceneLayer](./engine/SceneLayer) | 🔗 |
