---
<!-- generated-by: tools/_v146_stubs.mjs -->
title: "engine 模块目录"
description: "engine：canonical 桶，含 191 个 public 类型。引擎与渲染层：`TaleWorlds.Engine*`（含 `Engine.GauntletUI` 桥接）、`TaleWorlds.Diamond`。`GauntletLayer` 在这里而 `Widget` 在 `gui/`，两个相似命名空间被故意分开。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# engine 模块目录

**Bucket:** `engine`
**Types:** 191
**Routing rule:** `rule:TaleWorlds.Diamond`

## 模块导览

引擎与渲染层：`TaleWorlds.Engine*`（含 `Engine.GauntletUI` 桥接）、`TaleWorlds.Diamond`。`GauntletLayer` 在这里而 `Widget` 在 `gui/`，两个相似命名空间被故意分开。

> 本桶页面路由自带尾斜杠：同桶类型写 `./<Type>`，跨桶写 `../../<bucket>/<Type>`，父级索引写 `../`。

- - [↑ API 参考](..//) · - [↑ 版本首页](../..//)

> 另有 1 个类型由深写 worker 负责、页面尚未落地，因此这里只列名字不列链接：GauntletLayer。

## 完整类目录

### A

- [AccessObject](./AccessObject) — `TaleWorlds.Diamond` · 类 · 公开成员 1
- [AccessObjectJsonConverter](./AccessObjectJsonConverter) — `TaleWorlds.Diamond` · 类 · 公开成员 4
- [AccessObjectResult](./AccessObjectResult) — `TaleWorlds.Diamond` · 类 · 公开成员 5
- [AesHelper](./AesHelper) — `TaleWorlds.Diamond` · 类 · 公开成员 2
- [AliveMessage](./AliveMessage) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 3
- [AnimResult](./AnimResult) — `TaleWorlds.Engine` · 结构体 · 公开成员 3
- [ApplicationHealthChecker](./ApplicationHealthChecker) — `TaleWorlds.Engine` · 类 · 公开成员 3
- [AsyncTask](./AsyncTask) — `TaleWorlds.Engine` · 类 · 公开成员 1

### B

- [BillboardType](./BillboardType) — `TaleWorlds.Engine` · 枚举 · 公开成员 3
- [BodyFlags](./BodyFlags) — `TaleWorlds.Engine` · 枚举 · 公开成员 44
- [BoundingBox](./BoundingBox) — `TaleWorlds.Engine` · 结构体 · 公开成员 17

### C

- [Camera](./Camera) — `TaleWorlds.Engine` · 类 · 公开成员 28
- [CapsuleData](./CapsuleData) — `TaleWorlds.Engine` · 结构体 · 公开成员 5
- [CheatsHotKeyCategory](./CheatsHotKeyCategory) — `TaleWorlds.Engine.InputSystem` · 类 · 公开成员 25
- [CheckForSceneProblemsDelegate](./CheckForSceneProblemsDelegate) — `TaleWorlds.Engine` · 委托 · 公开成员 0
- [Client<T>](./Client__1) — `TaleWorlds.Diamond` · 类 · 公开成员 18
- [ClientApplicationConfiguration](./ClientApplicationConfiguration) — `TaleWorlds.Diamond.ClientApplication` · 类 · 公开成员 10
- [ClientMessageHandler<TMessage>](./ClientMessageHandler__1) — `TaleWorlds.Diamond` · 委托 · 公开成员 0
- [ClientRestSession](./ClientRestSession) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 5
- [ClientSocketSession](./ClientSocketSession) — `TaleWorlds.Diamond.Socket` · 类 · 公开成员 4
- [ClothSimulatorComponent](./ClothSimulatorComponent) — `TaleWorlds.Engine` · 类 · 公开成员 13
- [CompositeComponent](./CompositeComponent) — `TaleWorlds.Engine` · 类 · 公开成员 20
- [ConnectMessage](./ConnectMessage) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 0
- [CrashInformationCollector](./CrashInformationCollector) — `TaleWorlds.Engine` · 类 · 公开成员 5

### D

- [DebugHotKeyCategory](./DebugHotKeyCategory) — `TaleWorlds.Engine.InputSystem` · 类 · 公开成员 276
- [Decal](./Decal) — `TaleWorlds.Engine` · 类 · 公开成员 17
- [DecalAtlasGroup](./DecalAtlasGroup) — `TaleWorlds.Engine` · 枚举 · 公开成员 6
- [DiamondClientApplication](./DiamondClientApplication) — `TaleWorlds.Diamond.ClientApplication` · 类 · 公开成员 11
- [DiamondClientApplicationObject](./DiamondClientApplicationObject) — `TaleWorlds.Diamond.ClientApplication` · 类 · 公开成员 3
- [DisconnectMessage](./DisconnectMessage) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 0

### E

- [EditDataPolicy](./EditDataPolicy) — `TaleWorlds.Engine` · 枚举 · 公开成员 2
- [EditorVisibleScriptComponentVariable](./EditorVisibleScriptComponentVariable) — `TaleWorlds.Engine` · 类 · 公开成员 2
- [EngineCallback](./EngineCallback) — `TaleWorlds.Engine` · 类 · 公开成员 1
- [EngineController](./EngineController) — `TaleWorlds.Engine` · 类 · 公开成员 7
- [EngineExtensions](./EngineExtensions) — `TaleWorlds.Engine` · 类 · 公开成员 1
- [EngineFilePaths](./EngineFilePaths) — `TaleWorlds.Engine` · 类 · 公开成员 2
- [EngineInputManager](./EngineInputManager) — `TaleWorlds.Engine.InputSystem` · 类 · 公开成员 5
- [EngineTexture](./EngineTexture) — `TaleWorlds.Engine.GauntletUI` · 类 · 公开成员 3
- [EntityFlags](./EntityFlags) — `TaleWorlds.Engine` · 枚举 · 公开成员 25
- [EntityVisibilityFlags](./EntityVisibilityFlags) — `TaleWorlds.Engine` · 枚举 · 公开成员 5
- [EpicAccessObject](./EpicAccessObject) — `TaleWorlds.Diamond` · 类 · 公开成员 1
- [Extensions](./Extensions) — `TaleWorlds.Engine.GauntletUI` · 类 · 公开成员 1

### F

- [FloaterVolumeDynamicUpAxis](./FloaterVolumeDynamicUpAxis) — `TaleWorlds.Engine` · 枚举 · 公开成员 3
- [FunctionResult](./FunctionResult) — `TaleWorlds.Diamond` · 类 · 公开成员 0
- [FunctionResultJsonConverter](./FunctionResultJsonConverter) — `TaleWorlds.Diamond` · 类 · 公开成员 4

### G

- [GameEntity](./GameEntity) — `TaleWorlds.Engine` · 类 · 公开成员 234
- [GameEntityComponent](./GameEntityComponent) — `TaleWorlds.Engine` · 类 · 公开成员 2
- [GameEntityPhysicsExtensions](./GameEntityPhysicsExtensions) — `TaleWorlds.Engine` · 类 · 公开成员 118
- [GameEntityWithWorldPosition](./GameEntityWithWorldPosition) — `TaleWorlds.Engine` · 类 · 公开成员 9
- [GauntletMovieIdentifier](./GauntletMovieIdentifier) — `TaleWorlds.Engine.GauntletUI` · 类 · 公开成员 3
- [GDKAccessObject](./GDKAccessObject) — `TaleWorlds.Diamond` · 类 · 公开成员 1
- [GenericRestSessionProvider<T>](./GenericRestSessionProvider__1) — `TaleWorlds.Diamond.ClientApplication` · 类 · 公开成员 2
- [GenericThreadedRestSessionProvider<T>](./GenericThreadedRestSessionProvider__1) — `TaleWorlds.Diamond.ClientApplication` · 类 · 公开成员 3
- [GOGAccessObject](./GOGAccessObject) — `TaleWorlds.Diamond` · 类 · 公开成员 6

### H

- [HandlerResult](./HandlerResult) — `TaleWorlds.Diamond` · 类 · 公开成员 7
- [HasTableauCache](./HasTableauCache) — `TaleWorlds.Engine` · 类 · 公开成员 4
- [Highlights](./Highlights) — `TaleWorlds.Engine` · 类 · 公开成员 12

### I

- [IBooleanOptionData](./IBooleanOptionData) — `TaleWorlds.Engine.Options` · 接口 · 公开成员 0
- [IClient](./IClient) — `TaleWorlds.Diamond` · 接口 · 公开成员 8
- [IClientSession](./IClientSession) — `TaleWorlds.Diamond` · 接口 · 公开成员 7
- [IClientSessionProvider<T>](./IClientSessionProvider__1) — `TaleWorlds.Diamond` · 接口 · 公开成员 1
- [IConnectionInformation](./IConnectionInformation) — `TaleWorlds.Diamond` · 接口 · 公开成员 2
- [ILoadingWindowManager](./ILoadingWindowManager) — `TaleWorlds.Engine` · 接口 · 公开成员 5
- [ILoginAccessProvider](./ILoginAccessProvider) — `TaleWorlds.Diamond` · 接口 · 公开成员 4
- [Imgui](./Imgui) — `TaleWorlds.Engine` · 类 · 公开成员 38
- [InnerProcessConnectionInformation](./InnerProcessConnectionInformation) — `TaleWorlds.Diamond` · 类 · 公开成员 0
- [InputLayout](./InputLayout) — `TaleWorlds.Engine` · 枚举 · 公开成员 10
- [Intersection](./Intersection) — `TaleWorlds.Engine` · 结构体 · 公开成员 1
- [IntersectionDetails](./IntersectionDetails) — `TaleWorlds.Engine` · 枚举 · 公开成员 8
- [IntersectionType](./IntersectionType) — `TaleWorlds.Engine` · 枚举 · 公开成员 3
- [INumericOptionData](./INumericOptionData) — `TaleWorlds.Engine.Options` · 接口 · 公开成员 5
- [IOptionData](./IOptionData) — `TaleWorlds.Engine.Options` · 接口 · 公开成员 8
- [ISelectionOptionData](./ISelectionOptionData) — `TaleWorlds.Engine.Options` · 接口 · 公开成员 2

### J

- [Job](./Job) — `TaleWorlds.Engine` · 类 · 公开成员 2
- [JobManager](./JobManager) — `TaleWorlds.Engine` · 类 · 公开成员 2

### L

- [Light](./Light) — `TaleWorlds.Engine` · 类 · 公开成员 14
- [LoadingWindow](./LoadingWindow) — `TaleWorlds.Engine` · 类 · 公开成员 7
- [LoginBanReason](./LoginBanReason) — `TaleWorlds.Diamond` · 枚举 · 公开成员 5
- [LoginErrorCode](./LoginErrorCode) — `TaleWorlds.Diamond` · 枚举 · 公开成员 5
- [LoginMessage](./LoginMessage) — `TaleWorlds.Diamond` · 类 · 公开成员 4
- [LoginResult](./LoginResult) — `TaleWorlds.Diamond` · 类 · 公开成员 11
- [LoginResultObject](./LoginResultObject) — `TaleWorlds.Diamond` · 类 · 公开成员 0
- [LoginResultObjectJsonConverter](./LoginResultObjectJsonConverter) — `TaleWorlds.Diamond` · 类 · 公开成员 4

### M

- [ManagedExtensions](./ManagedExtensions) — `TaleWorlds.Engine` · 类 · 公开成员 0
- [ManagedMeshEditOperations](./ManagedMeshEditOperations) — `TaleWorlds.Engine` · 类 · 公开成员 57
- [ManagedScriptComponent](./ManagedScriptComponent) — `TaleWorlds.Engine` · 类 · 公开成员 3
- [ManagedScriptHolder](./ManagedScriptHolder) — `TaleWorlds.Engine` · 类 · 公开成员 5
- [Material](./Material) — `TaleWorlds.Engine` · 类 · 公开成员 43
- [MaterialCacheIDGetMethodDelegate](./MaterialCacheIDGetMethodDelegate) — `TaleWorlds.Engine` · 委托 · 公开成员 0
- [MaterialFlags](./MaterialFlags) — `TaleWorlds.Engine` · 枚举 · 公开成员 29
- [MBDebug](./MBDebug) — `TaleWorlds.Engine` · 类 · 公开成员 45
- [MBMeshCullingMode](./MBMeshCullingMode) — `TaleWorlds.Engine` · 枚举 · 公开成员 5
- [MBMouseButtonState](./MBMouseButtonState) — `TaleWorlds.Engine` · 枚举 · 公开成员 2
- [Mesh](./Mesh) — `TaleWorlds.Engine` · 类 · 公开成员 65
- [MeshBuilder](./MeshBuilder) — `TaleWorlds.Engine` · 类 · 公开成员 12
- [Message](./Message) — `TaleWorlds.Diamond` · 类 · 公开成员 0
- [MessageDescription](./MessageDescription) — `TaleWorlds.Diamond` · 类 · 公开成员 4
- [MessageJsonConverter](./MessageJsonConverter) — `TaleWorlds.Diamond` · 类 · 公开成员 4
- [MessageManagerBase](./MessageManagerBase) — `TaleWorlds.Engine` · 类 · 公开成员 4
- [MessageType](./MessageType) — `TaleWorlds.Diamond.Rest` · 枚举 · 公开成员 4
- [MetaMesh](./MetaMesh) — `TaleWorlds.Engine` · 类 · 公开成员 70
- [MouseManager](./MouseManager) — `TaleWorlds.Engine` · 类 · 公开成员 6
- [Music](./Music) — `TaleWorlds.Engine` · 类 · 公开成员 10

### N

- [NativeBooleanOptionData](./NativeBooleanOptionData) — `TaleWorlds.Engine.Options` · 类 · 公开成员 1
- [NativeConfig](./NativeConfig) — `TaleWorlds.Engine` · 类 · 公开成员 20
- [NativeNumericOptionData](./NativeNumericOptionData) — `TaleWorlds.Engine.Options` · 类 · 公开成员 6
- [NativeOptionData](./NativeOptionData) — `TaleWorlds.Engine.Options` · 类 · 公开成员 9
- [NativeOptions](./NativeOptions) — `TaleWorlds.Engine.Options` · 类 · 公开成员 43
- [NativeParallelDriver](./NativeParallelDriver) — `TaleWorlds.Engine` · 类 · 公开成员 6
- [NativeScriptComponent](./NativeScriptComponent) — `TaleWorlds.Engine` · 类 · 公开成员 0
- [NativeSelectionOptionData](./NativeSelectionOptionData) — `TaleWorlds.Engine.Options` · 类 · 公开成员 4

### P

- [ParticleSystem](./ParticleSystem) — `TaleWorlds.Engine` · 类 · 公开成员 16
- [ParticleSystemManager](./ParticleSystemManager) — `TaleWorlds.Engine` · 类 · 公开成员 1
- [Path](./Path) — `TaleWorlds.Engine` · 类 · 公开成员 16
- [PeerId](./PeerId) — `TaleWorlds.Diamond` · 结构体 · 公开成员 13
- [PeerIdJsonConverter](./PeerIdJsonConverter) — `TaleWorlds.Diamond` · 类 · 公开成员 4
- [PerformanceAnalyzer](./PerformanceAnalyzer) — `TaleWorlds.Engine` · 类 · 公开成员 4
- [PhysicsContact](./PhysicsContact) — `TaleWorlds.Engine` · 结构体 · 公开成员 1
- [PhysicsContactInfo](./PhysicsContactInfo) — `TaleWorlds.Engine` · 结构体 · 公开成员 0
- [PhysicsContactPair](./PhysicsContactPair) — `TaleWorlds.Engine` · 结构体 · 公开成员 1
- [PhysicsEventType](./PhysicsEventType) — `TaleWorlds.Engine` · 枚举 · 公开成员 3
- [PhysicsJoint](./PhysicsJoint) — `TaleWorlds.Engine` · 类 · 公开成员 0
- [PhysicsMaterial](./PhysicsMaterial) — `TaleWorlds.Engine` · 结构体 · 公开成员 20
- [PhysicsMaterialFlags](./PhysicsMaterialFlags) — `TaleWorlds.Engine` · 枚举 · 公开成员 5
- [PhysicsShape](./PhysicsShape) — `TaleWorlds.Engine` · 类 · 公开成员 25
- [PlayerIdExtensions](./PlayerIdExtensions) — `TaleWorlds.Diamond` · 类 · 公开成员 2
- [PSAccessObject](./PSAccessObject) — `TaleWorlds.Diamond` · 类 · 公开成员 4

### R

- [RagdollState](./RagdollState) — `TaleWorlds.Engine` · 枚举 · 公开成员 5
- [RenderTargetComponent](./RenderTargetComponent) — `TaleWorlds.Engine` · 类 · 公开成员 4
- [Resource](./Resource) — `TaleWorlds.Engine` · 类 · 公开成员 3
- [RestData](./RestData) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 3
- [RestDataJsonConverter](./RestDataJsonConverter) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 5
- [RestFunctionResult](./RestFunctionResult) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 1
- [RestObjectFunctionResult](./RestObjectFunctionResult) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 3
- [RestObjectRequestMessage](./RestObjectRequestMessage) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 5
- [RestObjectResponseMessage](./RestObjectResponseMessage) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 3
- [RestRequestMessage](./RestRequestMessage) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 1
- [RestResponse](./RestResponse) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 11
- [RestResponseMessage](./RestResponseMessage) — `TaleWorlds.Diamond.Rest` · 类 · 公开成员 1
- [RglScriptFieldType](./RglScriptFieldType) — `TaleWorlds.Engine` · 枚举 · 公开成员 15

### S

- [Scene](./Scene) — `TaleWorlds.Engine` · 类 · 公开成员 302
- [SceneInitializationData](./SceneInitializationData) — `TaleWorlds.Engine` · 结构体 · 公开成员 1
- [SceneLayer](./SceneLayer) — `TaleWorlds.Engine.Screens` · 类 · 公开成员 30
- [SceneProblemChecker](./SceneProblemChecker) — `TaleWorlds.Engine` · 类 · 公开成员 0
- [SceneView](./SceneView) — `TaleWorlds.Engine` · 类 · 公开成员 31
- [Screen](./Screen) — `TaleWorlds.Engine` · 类 · 公开成员 7
- [ScreenManagerEngineConnection](./ScreenManagerEngineConnection) — `TaleWorlds.Engine` · 类 · 公开成员 0
- [ScriptComponent](./ScriptComponent) — `TaleWorlds.Engine` · 类 · 公开成员 2
- [ScriptComponentBehavior](./ScriptComponentBehavior) — `TaleWorlds.Engine` · 类 · 公开成员 39
- [ScriptComponentFieldHolder](./ScriptComponentFieldHolder) — `TaleWorlds.Engine` · 结构体 · 公开成员 0
- [SelectionData](./SelectionData) — `TaleWorlds.Engine.Options` · 结构体 · 公开成员 1
- [SessionCredentials](./SessionCredentials) — `TaleWorlds.Diamond` · 类 · 公开成员 3
- [SessionKey](./SessionKey) — `TaleWorlds.Diamond` · 结构体 · 公开成员 11
- [SessionProviderType](./SessionProviderType) — `TaleWorlds.Diamond.ClientApplication` · 枚举 · 公开成员 3
- [Shader](./Shader) — `TaleWorlds.Engine` · 类 · 公开成员 3
- [SimpleButton](./SimpleButton) — `TaleWorlds.Engine` · 类 · 公开成员 0
- [Skeleton](./Skeleton) — `TaleWorlds.Engine` · 类 · 公开成员 57
- [SocketMessage](./SocketMessage) — `TaleWorlds.Diamond.Socket` · 类 · 公开成员 5
- [SoundEvent](./SoundEvent) — `TaleWorlds.Engine` · 类 · 公开成员 29
- [SoundEventParameter](./SoundEventParameter) — `TaleWorlds.Engine` · 结构体 · 公开成员 2
- [SoundManager](./SoundManager) — `TaleWorlds.Engine` · 类 · 公开成员 40
- [SphereData](./SphereData) — `TaleWorlds.Engine` · 结构体 · 公开成员 1
- [SteamAccessObject](./SteamAccessObject) — `TaleWorlds.Diamond` · 类 · 公开成员 5

### T

- [TableauView](./TableauView) — `TaleWorlds.Engine` · 类 · 公开成员 6
- [TestAccessObject](./TestAccessObject) — `TaleWorlds.Diamond` · 类 · 公开成员 4
- [TextFlags](./TextFlags) — `TaleWorlds.Engine` · 枚举 · 公开成员 14
- [Texture](./Texture) — `TaleWorlds.Engine` · 类 · 公开成员 30
- [TextureView](./TextureView) — `TaleWorlds.Engine` · 类 · 公开成员 2
- [ThreadedClient](./ThreadedClient) — `TaleWorlds.Diamond` · 类 · 公开成员 6
- [ThreadedClientSession](./ThreadedClientSession) — `TaleWorlds.Diamond` · 类 · 公开成员 1
- [ThumbnailCreatorView](./ThumbnailCreatorView) — `TaleWorlds.Engine` · 类 · 公开成员 11
- [ThumbnailRenderRequest](./ThumbnailRenderRequest) — `TaleWorlds.Engine` · 结构体 · 公开成员 4
- [Time](./Time) — `TaleWorlds.Engine` · 类 · 公开成员 1
- [TwoDimensionEnginePlatform](./TwoDimensionEnginePlatform) — `TaleWorlds.Engine.GauntletUI` · 类 · 公开成员 1
- [TwoDimensionEngineResourceContext](./TwoDimensionEngineResourceContext) — `TaleWorlds.Engine.GauntletUI` · 类 · 公开成员 0
- [TwoDimensionMeshDrawData](./TwoDimensionMeshDrawData) — `TaleWorlds.Engine` · 结构体 · 公开成员 0
- [TwoDimensionTextMeshDrawData](./TwoDimensionTextMeshDrawData) — `TaleWorlds.Engine` · 结构体 · 公开成员 0
- [TwoDimensionView](./TwoDimensionView) — `TaleWorlds.Engine` · 类 · 公开成员 8

### U

- [UIConfig](./UIConfig) — `TaleWorlds.Engine.GauntletUI` · 类 · 公开成员 6
- [UIResourceManager](./UIResourceManager) — `TaleWorlds.Engine.GauntletUI` · 类 · 公开成员 12
- [Utilities](./Utilities) — `TaleWorlds.Engine` · 类 · 公开成员 159

### V

- [VideoPlayerView](./VideoPlayerView) — `TaleWorlds.Engine` · 类 · 公开成员 5
- [View](./View) — `TaleWorlds.Engine` · 类 · 公开成员 21
- [VisibilityMaskFlags](./VisibilityMaskFlags) — `TaleWorlds.Engine` · 枚举 · 公开成员 27
- [VolumeDataForSubmergeComputation](./VolumeDataForSubmergeComputation) — `TaleWorlds.Engine` · 结构体 · 公开成员 6

### W

- [WeakGameEntity](./WeakGameEntity) — `TaleWorlds.Engine` · 结构体 · 公开成员 244
- [WeakMaterial](./WeakMaterial) — `TaleWorlds.Engine` · 结构体 · 公开成员 21
- [WorldFrame](./WorldFrame) — `TaleWorlds.Engine` · 结构体 · 公开成员 6
- [WorldPosition](./WorldPosition) — `TaleWorlds.Engine` · 结构体 · 公开成员 25

### Z

- [ZValidityState](./ZValidityState) — `TaleWorlds.Engine` · 枚举 · 公开成员 4

## 参见

- - [↑ API 参考](..//)
- - [↑ 版本首页](../..//)
