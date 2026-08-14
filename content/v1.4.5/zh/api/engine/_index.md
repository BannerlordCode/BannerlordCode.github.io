---
title: "engine 目录"
description: TaleWorlds.Engine 引擎类参考目录
---

## 心智模型

engine 桶是离 C++ 引擎最近的一层托管封装——它既暴露场景/实体/网格等底层运行时对象，又承载 GauntletUI 的渲染宿主层，是模组与引擎原生边界之间的“转换中枢”。

`TaleWorlds.Engine` 本质是 C++ 引擎的 C# 薄封装层（managed/native bridge）。本桶绝大多数类型继承自 `NativeObject`（定义在 `TaleWorlds.DotNet`，但归类于此桶），其托管实例只是一个指向原生对象的指针（`Pointer`），真正的状态与行为都活在引擎 DLL 里；原生对象一旦被释放，托管侧就成了悬挂引用。理解这一点是阅读本桶一切类型的前提。

它负责三件最底层的事：① 场景与实体的运行时表示——`Scene` 持有 `GameEntity`，`GameEntity` 通过 `GameEntityComponent` 挂载可挂接组件；② 渲染与资源基元——`Mesh`、`Material`、`Texture`、`Camera`、`WorldPosition` 等空间与绘制原语；③ 把 GauntletUI 系统接入游戏循环——`GauntletLayer` 作为 `ScreenLayer` 子类，由 `EngineScreenManager` / `ScreenManagerEngineConnection` 在每帧驱动命中、聚焦与绘制。

因此 engine 桶是整条 API 栈里“最贴近金属”的一层：上层模块（core、object 系统、gui）都在它之上构建，而它自己几乎不谈游戏规则，只谈“世界里有何物、如何被看见与被操作”。

## 核心入口类型

- [GauntletLayer](./GauntletLayer) — GauntletUI 的宿主层；把绑定了 ViewModel 的 XAML 电影渲染成可交互 UI，是模组自定义面板/HUD 的主入口。
- [GameEntity](./GameEntity) — 场景中的实体（sealed，继承 `NativeObject`），几乎所有可摆放对象的根。
- [Scene](./Scene) — 场景容器（sealed，继承 `NativeObject`），持有实体、网格与物理状态。
- [NativeObject](./NativeObject) — 托管/原生边界的基类，`Pointer` 指向原生对象；理解它才能读懂本桶所有类型的生命周期。
- [EngineApplicationInterface](./EngineApplicationInterface) — 引擎与托管侧之间内部互操作入口（native interop 的落点）。
- [GameEntityComponent](./GameEntityComponent) — 可挂接到 `GameEntity` 上的组件基类，扩展实体行为。
- [EngineScreenManager](./EngineScreenManager) — 屏幕/图层栈的引擎侧管理，驱动每帧 `Tick` 与绘制。
- [TwoDimensionView](./TwoDimensionView) — 二维（GauntletUI）渲染视口，UIContext 在其上绘制控件树。
- [Mesh](./Mesh) — 网格资源与绘制基元，渲染层的核心数据类型。
- [WorldPosition](./WorldPosition) — 世界坐标 + 朝向的空间原语，实体定位与物理查询的基础。
- [Camera](./Camera) — 相机，决定场景如何被投影与渲染。
- [EngineController](./EngineController) — 引擎运行控制入口，承载主循环与子系统初始化。

## 与其他模块的关系

与 **GUI 模块**（[../gui/](../gui/)）关系最密：GauntletUI 的控件树、Widget、Brush 等都定义在 gui 桶，而本桶的 `GauntletLayer` / `TwoDimensionView` / `UIResourceManager` 是把它们实例化并挂到屏幕上的引擎侧宿主。写模组界面时，通常是“在 engine 桶拿到层与视口，在 gui 桶定义界面与样式”。

与**托管/原生边界**（[../../architecture/native-interop/](../../architecture/native-interop/)）强相关：本桶类型是 native-interop 最密集的落点，`NativeObject`、`EngineApplicationInterface` 是理解跨边界调用与对象生命周期的关键。若遇到“对象已失效 / 空引用”类崩溃，务必结合**崩溃边界**（[../../architecture/crash-boundaries/](../../architecture/crash-boundaries/)）排查——多数源于原生对象先于托管引用被释放，而非 C# 逻辑错误。

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.Engine.GauntletUI | [GauntletLayer](./GauntletLayer) | 将 Gauntlet Movie 作为可交互屏幕层承载。 | 屏幕持有该层期间。 |
| TaleWorlds.Engine | [GameEntity](./GameEntity) | 表示原生场景实体及其挂载组件。 | 从场景创建到实体释放。 |
| TaleWorlds.Engine | [Scene](./Scene) | 持有场景实体、资源和空间查询。 | Mission 或地图场景生命周期内。 |
| TaleWorlds.DotNet | [NativeObject](./NativeObject) | 保存托管指针并定义原生句柄的释放边界。 | 每个引擎托管包装器期间。 |
| TaleWorlds.Engine | [GameEntityComponent](./GameEntityComponent) | 为 GameEntity 添加专用行为。 | 父实体存活期间。 |
| TaleWorlds.Engine | [EngineScreenManager](./EngineScreenManager) | 将引擎帧派发连接到屏幕和层栈。 | 应用主循环期间。 |
| TaleWorlds.Engine | [TwoDimensionView](./TwoDimensionView) | 提供 2D UI 绘制使用的引擎视口。 | UI view 挂载期间。 |
| TaleWorlds.Engine | [Mesh](./Mesh) | 持有场景渲染所需的原生网格数据。 | 资源加载和绘制期间。 |
| TaleWorlds.Engine | [WorldPosition](./WorldPosition) | 承载空间操作使用的世界坐标和朝向。 | 放置和物理查询期间。 |
| TaleWorlds.Engine | [Camera](./Camera) | 定义场景渲染使用的投影。 | 场景视图活动期间。 |

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

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
