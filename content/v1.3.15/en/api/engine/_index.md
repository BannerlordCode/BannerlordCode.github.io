---
title: "engine index"
description: Engine class reference index
---
## Mental Model

Engine types are managed handles over the native scene and rendering runtime. `Scene` owns entities, `GameEntity` owns components, and `NativeObject` makes pointer lifetime explicit. `GauntletLayer` and `TwoDimensionView` connect that runtime to the UI stack; all handles become invalid when their native owner is released.

Use engine APIs inside the scene, screen, or mission lifecycle that created them. Keep UI state in a view-model and use campaign Actions for world-state changes. Do not cache a native handle past scene teardown or call engine drawing APIs from a campaign tick without an active scene.

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.Engine.GauntletUI | [GauntletLayer](./GauntletLayer) | Hosts a Gauntlet movie as an interactive screen layer. | While a screen owns the layer. |
| TaleWorlds.Engine | [GameEntity](./GameEntity) | Represents one native scene entity and its attached components. | From scene creation until entity release. |
| TaleWorlds.Engine | [Scene](./Scene) | Owns scene entities, resources, and spatial queries. | During mission or map-scene lifetime. |
| TaleWorlds.DotNet | [NativeObject](./NativeObject) | Stores the managed pointer and release boundary for native handles. | For every managed engine wrapper. |
| TaleWorlds.Engine | [GameEntityComponent](./GameEntityComponent) | Adds specialized behavior to a game entity. | While its parent entity is alive. |
| TaleWorlds.Engine | [EngineScreenManager](./EngineScreenManager) | Bridges engine frame dispatch to the screen and layer stack. | During the application loop. |
| TaleWorlds.Engine | [TwoDimensionView](./TwoDimensionView) | Provides the engine-side viewport used by 2D UI drawing. | While a UI view is attached. |
| TaleWorlds.Engine | [Mesh](./Mesh) | Holds native mesh data used for scene rendering. | During resource load and draw. |
| TaleWorlds.Engine | [WorldPosition](./WorldPosition) | Carries world coordinates and orientation for spatial operations. | During placement and physics queries. |
| TaleWorlds.Engine | [Camera](./Camera) | Defines the projection used to render a scene. | While a scene view is active. |

<!-- BEGIN SECTION INDEX -->

## Parent Navigation

- [API Reference](../)
- [Version Home](../../)

## Child Classes — Alphabetical

### A

- [AnimResult](./AnimResult)
- [ApplicationHealthChecker](./ApplicationHealthChecker)
- [ApplicationInterfaceBase](./ApplicationInterfaceBase)
- [AsyncTask](./AsyncTask)

### B

- [BillboardType](./BillboardType)
- [BodyFlags](./BodyFlags)
- [BoundingBox](./BoundingBox)

### C

- [Camera](./Camera)
- [CapsuleData](./CapsuleData)
- [CheatsHotKeyCategory](./CheatsHotKeyCategory)
- [ClothSimulatorComponent](./ClothSimulatorComponent)
- [ColorStyle](./ColorStyle)
- [ComponentType](./ComponentType)
- [CompositeComponent](./CompositeComponent)
- [ConfigQuality](./ConfigQuality)
- [CrashInformation](./CrashInformation)
- [CrashInformationCollector](./CrashInformationCollector)
- [CrashInformationProvider](./CrashInformationProvider)

### D

- [DebugHotKeyCategory](./DebugHotKeyCategory)
- [Decal](./Decal)
- [DecalAtlasGroup](./DecalAtlasGroup)

### E

- [EditDataPolicy](./EditDataPolicy)
- [EditorVisibleScriptComponentVariable](./EditorVisibleScriptComponentVariable)
- [EngineApplicationInterface](./EngineApplicationInterface)
- [EngineCallback](./EngineCallback)
- [EngineController](./EngineController)
- [EngineExtensions](./EngineExtensions)
- [EngineFilePaths](./EngineFilePaths)
- [EngineInputManager](./EngineInputManager)
- [EngineManaged](./EngineManaged)
- [EngineRenderDisplayMode](./EngineRenderDisplayMode)
- [EngineScreenManager](./EngineScreenManager)
- [EngineTexture](./EngineTexture)
- [EntityFlags](./EntityFlags)
- [EntityVisibilityFlags](./EntityVisibilityFlags)
- [Extensions](./Extensions__TaleWorlds_Engine_GauntletUI)

### F

- [Face](./Face)
- [FaceCorner](./FaceCorner)
- [FloaterVolumeDynamicUpAxis](./FloaterVolumeDynamicUpAxis)
- [ForceMode](./ForceMode)
- [FtlCapsuleData](./FtlCapsuleData)

### G

- [GameEntity](./GameEntity)
- [GameEntityComponent](./GameEntityComponent)
- [GameEntityPhysicsExtensions](./GameEntityPhysicsExtensions)
- [GameEntityWithWorldPosition](./GameEntityWithWorldPosition)
- [GauntletLayer](./GauntletLayer)
- [GauntletMovieIdentifier](./GauntletMovieIdentifier)

### H

- [HasTableauCache](./HasTableauCache)
- [Highlights](./Highlights)

### I

- [IAsyncTask](./IAsyncTask)
- [IBodyPart](./IBodyPart)
- [IBooleanOptionData](./IBooleanOptionData)
- [ICamera](./ICamera)
- [IClothSimulatorComponent](./IClothSimulatorComponent)
- [ICompositeComponent](./ICompositeComponent)
- [IConfig](./IConfig)
- [IDebug](./IDebug)
- [IDecal](./IDecal)
- [IEngineSizeChecker](./IEngineSizeChecker)
- [IGameEntity](./IGameEntity)
- [IGameEntityComponent](./IGameEntityComponent)
- [IHighlights](./IHighlights)
- [IImgui](./IImgui)
- [IInput](./IInput)
- [ILight](./ILight)
- [ILoadingWindowManager](./ILoadingWindowManager)
- [IManagedMeshEditOperations](./IManagedMeshEditOperations)
- [IMaterial](./IMaterial)
- [IMesh](./IMesh)
- [IMeshBuilder](./IMeshBuilder)
- [IMetaMesh](./IMetaMesh)
- [Imgui](./Imgui)
- [IMouseManager](./IMouseManager)
- [IMusic](./IMusic)
- [InputLayout](./InputLayout)
- [Intersection](./Intersection)
- [IntersectionDetails](./IntersectionDetails)
- [IntersectionType](./IntersectionType)
- [INumericOptionData](./INumericOptionData)
- [IOptionData](./IOptionData)
- [IParticleSystem](./IParticleSystem)
- [IPath](./IPath)
- [IPhysicsMaterial](./IPhysicsMaterial)
- [IPhysicsShape](./IPhysicsShape)
- [IScene](./IScene)
- [ISceneView](./ISceneView)
- [IScreen](./IScreen)
- [IScriptComponent](./IScriptComponent)
- [ISelectionOptionData](./ISelectionOptionData)
- [IShader](./IShader)
- [ISkeleton](./ISkeleton)
- [ISoundEvent](./ISoundEvent)
- [ISoundManager](./ISoundManager)
- [ITableauView](./ITableauView)
- [ITexture](./ITexture)
- [ITextureView](./ITextureView)
- [IThumbnailCreatorView](./IThumbnailCreatorView)
- [ITime](./ITime)
- [ITwoDimensionView](./ITwoDimensionView)
- [IUtil](./IUtil)
- [IVideoPlayerView](./IVideoPlayerView)
- [IView](./IView)

### J

- [Job](./Job)
- [JobManager](./JobManager)

### L

- [Light](./Light)
- [LoadingWindow](./LoadingWindow)

### M

- [MainThreadPerformanceQuery](./MainThreadPerformanceQuery)
- [ManagedExtensions](./ManagedExtensions)
- [ManagedMeshEditOperations](./ManagedMeshEditOperations)
- [ManagedScriptComponent](./ManagedScriptComponent)
- [ManagedScriptHolder](./ManagedScriptHolder)
- [Material](./Material)
- [MaterialFlags](./MaterialFlags)
- [MBAlphaBlendMode](./MBAlphaBlendMode)
- [MBDebug](./MBDebug)
- [MBMeshCullingMode](./MBMeshCullingMode)
- [MBMouseButtonState](./MBMouseButtonState)
- [MBTextureType](./MBTextureType)
- [Mesh](./Mesh)
- [MeshBuilder](./MeshBuilder)
- [MessageBoxTypeFlag](./MessageBoxTypeFlag)
- [MessageManagerBase](./MessageManagerBase)
- [MetaMesh](./MetaMesh)
- [Mobility](./Mobility)
- [MouseManager](./MouseManager)
- [Music](./Music)

### N

- [NativeBooleanOptionData](./NativeBooleanOptionData)
- [NativeConfig](./NativeConfig)
- [NativeNumericOptionData](./NativeNumericOptionData)
- [NativeObject](./NativeObject)
- [NativeOptionData](./NativeOptionData)
- [NativeOptions](./NativeOptions)
- [NativeOptionsType](./NativeOptionsType)
- [NativeParallelDriver](./NativeParallelDriver)
- [NativeScriptComponent](./NativeScriptComponent)
- [NativeSelectionOptionData](./NativeSelectionOptionData)

### P

- [ParticleSystem](./ParticleSystem)
- [ParticleSystemManager](./ParticleSystemManager)
- [Path](./Path)
- [PerformanceAnalyzer](./PerformanceAnalyzer)
- [PhysicsContact](./PhysicsContact)
- [PhysicsContactInfo](./PhysicsContactInfo)
- [PhysicsContactPair](./PhysicsContactPair)
- [PhysicsEventType](./PhysicsEventType)
- [PhysicsJoint](./PhysicsJoint)
- [PhysicsMaterial](./PhysicsMaterial)
- [PhysicsMaterialFlags](./PhysicsMaterialFlags)
- [PhysicsShape](./PhysicsShape)
- [PostfxConfig](./PostfxConfig)

### R

- [RagdollState](./RagdollState)
- [RenderTargetComponent](./RenderTargetComponent)
- [Resource](./Resource)
- [RglScriptFieldType](./RglScriptFieldType)

### S

- [Scene](./Scene)
- [SceneInitializationData](./SceneInitializationData)
- [SceneLayer](./SceneLayer)
- [SceneProblemChecker](./SceneProblemChecker)
- [SceneView](./SceneView)
- [Screen](./Screen)
- [ScreenManagerEngineConnection](./ScreenManagerEngineConnection)
- [ScriptComponent](./ScriptComponent)
- [ScriptComponentBehavior](./ScriptComponentBehavior)
- [ScriptComponentFieldHolder](./ScriptComponentFieldHolder)
- [SelectionData](./SelectionData)
- [Shader](./Shader)
- [ShadowType](./ShadowType)
- [Significance](./Significance)
- [SimpleButton](./SimpleButton)
- [Skeleton](./Skeleton)
- [SoundEvent](./SoundEvent)
- [SoundEventParameter](./SoundEventParameter)
- [SoundManager](./SoundManager)
- [SphereData](./SphereData)

### T

- [TableauView](./TableauView)
- [TextFlags](./TextFlags)
- [Texture](./Texture)
- [TextureSaveFormat](./TextureSaveFormat)
- [TextureView](./TextureView)
- [ThumbnailCreatorView](./ThumbnailCreatorView)
- [ThumbnailRenderRequest](./ThumbnailRenderRequest)
- [TickRequirement](./TickRequirement)
- [Time](./Time)
- [TransformedBoundingBoxPointsContainer](./TransformedBoundingBoxPointsContainer)
- [TwoDimensionEnginePlatform](./TwoDimensionEnginePlatform)
- [TwoDimensionEngineResourceContext](./TwoDimensionEngineResourceContext)
- [TwoDimensionMeshDrawData](./TwoDimensionMeshDrawData)
- [TwoDimensionTextMeshDrawData](./TwoDimensionTextMeshDrawData)
- [TwoDimensionView](./TwoDimensionView)
- [Type](./Type)

### U

- [UIConfig](./UIConfig)
- [UIResourceManager](./UIResourceManager)
- [UpgradeLevelMask](./UpgradeLevelMask)
- [Utilities](./Utilities)

### V

- [VideoPlayerView](./VideoPlayerView)
- [View](./View)
- [ViewRenderOptions](./ViewRenderOptions)
- [VisibilityMaskFlags](./VisibilityMaskFlags)
- [VolumeDataForSubmergeComputation](./VolumeDataForSubmergeComputation)

### W

- [WeakGameEntity](./WeakGameEntity)
- [WeakMaterial](./WeakMaterial)
- [WorldFrame](./WorldFrame)
- [WorldPosition](./WorldPosition)
- [WorldPositionEnforcedCache](./WorldPositionEnforcedCache)

### Z

- [ZValidityState](./ZValidityState)


<!-- END SECTION INDEX -->
