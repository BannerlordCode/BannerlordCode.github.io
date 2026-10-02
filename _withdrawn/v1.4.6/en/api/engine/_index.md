---
<!-- generated-by: tools/_v146_stubs.mjs -->
title: "engine bucket index"
description: "engine: canonical bucket with 191 public types. The engine and rendering layer: `TaleWorlds.Engine*` (including the `Engine.GauntletUI` bridge) and `TaleWorlds.Diamond`. `GauntletLayer` lives here while `Widget` lives in `gui/` — two similar namespaces deliberately kept apart."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# engine bucket index

**Bucket:** `engine`
**Types:** 191
**Routing rule:** `rule:TaleWorlds.Diamond`

## Bucket Tour

The engine and rendering layer: `TaleWorlds.Engine*` (including the `Engine.GauntletUI` bridge) and `TaleWorlds.Diamond`. `GauntletLayer` lives here while `Widget` lives in `gui/` — two similar namespaces deliberately kept apart.

> Every page route carries a trailing slash: same-bucket types are `./<Type>`, cross-bucket is `../../<bucket>/<Type>`, the parent index is `../`.

- - [↑ API reference](..//) · - [↑ version home](../..//)

> 1 further types are owned by the deep-writing workers and their pages have not landed yet, so they are listed by name only: GauntletLayer.

## Complete Class Catalog

### A

- [AccessObject](./AccessObject) — `TaleWorlds.Diamond` · class · exposed 1
- [AccessObjectJsonConverter](./AccessObjectJsonConverter) — `TaleWorlds.Diamond` · class · exposed 4
- [AccessObjectResult](./AccessObjectResult) — `TaleWorlds.Diamond` · class · exposed 5
- [AesHelper](./AesHelper) — `TaleWorlds.Diamond` · class · exposed 2
- [AliveMessage](./AliveMessage) — `TaleWorlds.Diamond.Rest` · class · exposed 3
- [AnimResult](./AnimResult) — `TaleWorlds.Engine` · struct · exposed 3
- [ApplicationHealthChecker](./ApplicationHealthChecker) — `TaleWorlds.Engine` · class · exposed 3
- [AsyncTask](./AsyncTask) — `TaleWorlds.Engine` · class · exposed 1

### B

- [BillboardType](./BillboardType) — `TaleWorlds.Engine` · enum · exposed 3
- [BodyFlags](./BodyFlags) — `TaleWorlds.Engine` · enum · exposed 44
- [BoundingBox](./BoundingBox) — `TaleWorlds.Engine` · struct · exposed 17

### C

- [Camera](./Camera) — `TaleWorlds.Engine` · class · exposed 28
- [CapsuleData](./CapsuleData) — `TaleWorlds.Engine` · struct · exposed 5
- [CheatsHotKeyCategory](./CheatsHotKeyCategory) — `TaleWorlds.Engine.InputSystem` · class · exposed 25
- [CheckForSceneProblemsDelegate](./CheckForSceneProblemsDelegate) — `TaleWorlds.Engine` · delegate · exposed 0
- [Client<T>](./Client__1) — `TaleWorlds.Diamond` · class · exposed 18
- [ClientApplicationConfiguration](./ClientApplicationConfiguration) — `TaleWorlds.Diamond.ClientApplication` · class · exposed 10
- [ClientMessageHandler<TMessage>](./ClientMessageHandler__1) — `TaleWorlds.Diamond` · delegate · exposed 0
- [ClientRestSession](./ClientRestSession) — `TaleWorlds.Diamond.Rest` · class · exposed 5
- [ClientSocketSession](./ClientSocketSession) — `TaleWorlds.Diamond.Socket` · class · exposed 4
- [ClothSimulatorComponent](./ClothSimulatorComponent) — `TaleWorlds.Engine` · class · exposed 13
- [CompositeComponent](./CompositeComponent) — `TaleWorlds.Engine` · class · exposed 20
- [ConnectMessage](./ConnectMessage) — `TaleWorlds.Diamond.Rest` · class · exposed 0
- [CrashInformationCollector](./CrashInformationCollector) — `TaleWorlds.Engine` · class · exposed 5

### D

- [DebugHotKeyCategory](./DebugHotKeyCategory) — `TaleWorlds.Engine.InputSystem` · class · exposed 276
- [Decal](./Decal) — `TaleWorlds.Engine` · class · exposed 17
- [DecalAtlasGroup](./DecalAtlasGroup) — `TaleWorlds.Engine` · enum · exposed 6
- [DiamondClientApplication](./DiamondClientApplication) — `TaleWorlds.Diamond.ClientApplication` · class · exposed 11
- [DiamondClientApplicationObject](./DiamondClientApplicationObject) — `TaleWorlds.Diamond.ClientApplication` · class · exposed 3
- [DisconnectMessage](./DisconnectMessage) — `TaleWorlds.Diamond.Rest` · class · exposed 0

### E

- [EditDataPolicy](./EditDataPolicy) — `TaleWorlds.Engine` · enum · exposed 2
- [EditorVisibleScriptComponentVariable](./EditorVisibleScriptComponentVariable) — `TaleWorlds.Engine` · class · exposed 2
- [EngineCallback](./EngineCallback) — `TaleWorlds.Engine` · class · exposed 1
- [EngineController](./EngineController) — `TaleWorlds.Engine` · class · exposed 7
- [EngineExtensions](./EngineExtensions) — `TaleWorlds.Engine` · class · exposed 1
- [EngineFilePaths](./EngineFilePaths) — `TaleWorlds.Engine` · class · exposed 2
- [EngineInputManager](./EngineInputManager) — `TaleWorlds.Engine.InputSystem` · class · exposed 5
- [EngineTexture](./EngineTexture) — `TaleWorlds.Engine.GauntletUI` · class · exposed 3
- [EntityFlags](./EntityFlags) — `TaleWorlds.Engine` · enum · exposed 25
- [EntityVisibilityFlags](./EntityVisibilityFlags) — `TaleWorlds.Engine` · enum · exposed 5
- [EpicAccessObject](./EpicAccessObject) — `TaleWorlds.Diamond` · class · exposed 1
- [Extensions](./Extensions) — `TaleWorlds.Engine.GauntletUI` · class · exposed 1

### F

- [FloaterVolumeDynamicUpAxis](./FloaterVolumeDynamicUpAxis) — `TaleWorlds.Engine` · enum · exposed 3
- [FunctionResult](./FunctionResult) — `TaleWorlds.Diamond` · class · exposed 0
- [FunctionResultJsonConverter](./FunctionResultJsonConverter) — `TaleWorlds.Diamond` · class · exposed 4

### G

- [GameEntity](./GameEntity) — `TaleWorlds.Engine` · class · exposed 234
- [GameEntityComponent](./GameEntityComponent) — `TaleWorlds.Engine` · class · exposed 2
- [GameEntityPhysicsExtensions](./GameEntityPhysicsExtensions) — `TaleWorlds.Engine` · class · exposed 118
- [GameEntityWithWorldPosition](./GameEntityWithWorldPosition) — `TaleWorlds.Engine` · class · exposed 9
- [GauntletMovieIdentifier](./GauntletMovieIdentifier) — `TaleWorlds.Engine.GauntletUI` · class · exposed 3
- [GDKAccessObject](./GDKAccessObject) — `TaleWorlds.Diamond` · class · exposed 1
- [GenericRestSessionProvider<T>](./GenericRestSessionProvider__1) — `TaleWorlds.Diamond.ClientApplication` · class · exposed 2
- [GenericThreadedRestSessionProvider<T>](./GenericThreadedRestSessionProvider__1) — `TaleWorlds.Diamond.ClientApplication` · class · exposed 3
- [GOGAccessObject](./GOGAccessObject) — `TaleWorlds.Diamond` · class · exposed 6

### H

- [HandlerResult](./HandlerResult) — `TaleWorlds.Diamond` · class · exposed 7
- [HasTableauCache](./HasTableauCache) — `TaleWorlds.Engine` · class · exposed 4
- [Highlights](./Highlights) — `TaleWorlds.Engine` · class · exposed 12

### I

- [IBooleanOptionData](./IBooleanOptionData) — `TaleWorlds.Engine.Options` · interface · exposed 0
- [IClient](./IClient) — `TaleWorlds.Diamond` · interface · exposed 8
- [IClientSession](./IClientSession) — `TaleWorlds.Diamond` · interface · exposed 7
- [IClientSessionProvider<T>](./IClientSessionProvider__1) — `TaleWorlds.Diamond` · interface · exposed 1
- [IConnectionInformation](./IConnectionInformation) — `TaleWorlds.Diamond` · interface · exposed 2
- [ILoadingWindowManager](./ILoadingWindowManager) — `TaleWorlds.Engine` · interface · exposed 5
- [ILoginAccessProvider](./ILoginAccessProvider) — `TaleWorlds.Diamond` · interface · exposed 4
- [Imgui](./Imgui) — `TaleWorlds.Engine` · class · exposed 38
- [InnerProcessConnectionInformation](./InnerProcessConnectionInformation) — `TaleWorlds.Diamond` · class · exposed 0
- [InputLayout](./InputLayout) — `TaleWorlds.Engine` · enum · exposed 10
- [Intersection](./Intersection) — `TaleWorlds.Engine` · struct · exposed 1
- [IntersectionDetails](./IntersectionDetails) — `TaleWorlds.Engine` · enum · exposed 8
- [IntersectionType](./IntersectionType) — `TaleWorlds.Engine` · enum · exposed 3
- [INumericOptionData](./INumericOptionData) — `TaleWorlds.Engine.Options` · interface · exposed 5
- [IOptionData](./IOptionData) — `TaleWorlds.Engine.Options` · interface · exposed 8
- [ISelectionOptionData](./ISelectionOptionData) — `TaleWorlds.Engine.Options` · interface · exposed 2

### J

- [Job](./Job) — `TaleWorlds.Engine` · class · exposed 2
- [JobManager](./JobManager) — `TaleWorlds.Engine` · class · exposed 2

### L

- [Light](./Light) — `TaleWorlds.Engine` · class · exposed 14
- [LoadingWindow](./LoadingWindow) — `TaleWorlds.Engine` · class · exposed 7
- [LoginBanReason](./LoginBanReason) — `TaleWorlds.Diamond` · enum · exposed 5
- [LoginErrorCode](./LoginErrorCode) — `TaleWorlds.Diamond` · enum · exposed 5
- [LoginMessage](./LoginMessage) — `TaleWorlds.Diamond` · class · exposed 4
- [LoginResult](./LoginResult) — `TaleWorlds.Diamond` · class · exposed 11
- [LoginResultObject](./LoginResultObject) — `TaleWorlds.Diamond` · class · exposed 0
- [LoginResultObjectJsonConverter](./LoginResultObjectJsonConverter) — `TaleWorlds.Diamond` · class · exposed 4

### M

- [ManagedExtensions](./ManagedExtensions) — `TaleWorlds.Engine` · class · exposed 0
- [ManagedMeshEditOperations](./ManagedMeshEditOperations) — `TaleWorlds.Engine` · class · exposed 57
- [ManagedScriptComponent](./ManagedScriptComponent) — `TaleWorlds.Engine` · class · exposed 3
- [ManagedScriptHolder](./ManagedScriptHolder) — `TaleWorlds.Engine` · class · exposed 5
- [Material](./Material) — `TaleWorlds.Engine` · class · exposed 43
- [MaterialCacheIDGetMethodDelegate](./MaterialCacheIDGetMethodDelegate) — `TaleWorlds.Engine` · delegate · exposed 0
- [MaterialFlags](./MaterialFlags) — `TaleWorlds.Engine` · enum · exposed 29
- [MBDebug](./MBDebug) — `TaleWorlds.Engine` · class · exposed 45
- [MBMeshCullingMode](./MBMeshCullingMode) — `TaleWorlds.Engine` · enum · exposed 5
- [MBMouseButtonState](./MBMouseButtonState) — `TaleWorlds.Engine` · enum · exposed 2
- [Mesh](./Mesh) — `TaleWorlds.Engine` · class · exposed 65
- [MeshBuilder](./MeshBuilder) — `TaleWorlds.Engine` · class · exposed 12
- [Message](./Message) — `TaleWorlds.Diamond` · class · exposed 0
- [MessageDescription](./MessageDescription) — `TaleWorlds.Diamond` · class · exposed 4
- [MessageJsonConverter](./MessageJsonConverter) — `TaleWorlds.Diamond` · class · exposed 4
- [MessageManagerBase](./MessageManagerBase) — `TaleWorlds.Engine` · class · exposed 4
- [MessageType](./MessageType) — `TaleWorlds.Diamond.Rest` · enum · exposed 4
- [MetaMesh](./MetaMesh) — `TaleWorlds.Engine` · class · exposed 70
- [MouseManager](./MouseManager) — `TaleWorlds.Engine` · class · exposed 6
- [Music](./Music) — `TaleWorlds.Engine` · class · exposed 10

### N

- [NativeBooleanOptionData](./NativeBooleanOptionData) — `TaleWorlds.Engine.Options` · class · exposed 1
- [NativeConfig](./NativeConfig) — `TaleWorlds.Engine` · class · exposed 20
- [NativeNumericOptionData](./NativeNumericOptionData) — `TaleWorlds.Engine.Options` · class · exposed 6
- [NativeOptionData](./NativeOptionData) — `TaleWorlds.Engine.Options` · class · exposed 9
- [NativeOptions](./NativeOptions) — `TaleWorlds.Engine.Options` · class · exposed 43
- [NativeParallelDriver](./NativeParallelDriver) — `TaleWorlds.Engine` · class · exposed 6
- [NativeScriptComponent](./NativeScriptComponent) — `TaleWorlds.Engine` · class · exposed 0
- [NativeSelectionOptionData](./NativeSelectionOptionData) — `TaleWorlds.Engine.Options` · class · exposed 4

### P

- [ParticleSystem](./ParticleSystem) — `TaleWorlds.Engine` · class · exposed 16
- [ParticleSystemManager](./ParticleSystemManager) — `TaleWorlds.Engine` · class · exposed 1
- [Path](./Path) — `TaleWorlds.Engine` · class · exposed 16
- [PeerId](./PeerId) — `TaleWorlds.Diamond` · struct · exposed 13
- [PeerIdJsonConverter](./PeerIdJsonConverter) — `TaleWorlds.Diamond` · class · exposed 4
- [PerformanceAnalyzer](./PerformanceAnalyzer) — `TaleWorlds.Engine` · class · exposed 4
- [PhysicsContact](./PhysicsContact) — `TaleWorlds.Engine` · struct · exposed 1
- [PhysicsContactInfo](./PhysicsContactInfo) — `TaleWorlds.Engine` · struct · exposed 0
- [PhysicsContactPair](./PhysicsContactPair) — `TaleWorlds.Engine` · struct · exposed 1
- [PhysicsEventType](./PhysicsEventType) — `TaleWorlds.Engine` · enum · exposed 3
- [PhysicsJoint](./PhysicsJoint) — `TaleWorlds.Engine` · class · exposed 0
- [PhysicsMaterial](./PhysicsMaterial) — `TaleWorlds.Engine` · struct · exposed 20
- [PhysicsMaterialFlags](./PhysicsMaterialFlags) — `TaleWorlds.Engine` · enum · exposed 5
- [PhysicsShape](./PhysicsShape) — `TaleWorlds.Engine` · class · exposed 25
- [PlayerIdExtensions](./PlayerIdExtensions) — `TaleWorlds.Diamond` · class · exposed 2
- [PSAccessObject](./PSAccessObject) — `TaleWorlds.Diamond` · class · exposed 4

### R

- [RagdollState](./RagdollState) — `TaleWorlds.Engine` · enum · exposed 5
- [RenderTargetComponent](./RenderTargetComponent) — `TaleWorlds.Engine` · class · exposed 4
- [Resource](./Resource) — `TaleWorlds.Engine` · class · exposed 3
- [RestData](./RestData) — `TaleWorlds.Diamond.Rest` · class · exposed 3
- [RestDataJsonConverter](./RestDataJsonConverter) — `TaleWorlds.Diamond.Rest` · class · exposed 5
- [RestFunctionResult](./RestFunctionResult) — `TaleWorlds.Diamond.Rest` · class · exposed 1
- [RestObjectFunctionResult](./RestObjectFunctionResult) — `TaleWorlds.Diamond.Rest` · class · exposed 3
- [RestObjectRequestMessage](./RestObjectRequestMessage) — `TaleWorlds.Diamond.Rest` · class · exposed 5
- [RestObjectResponseMessage](./RestObjectResponseMessage) — `TaleWorlds.Diamond.Rest` · class · exposed 3
- [RestRequestMessage](./RestRequestMessage) — `TaleWorlds.Diamond.Rest` · class · exposed 1
- [RestResponse](./RestResponse) — `TaleWorlds.Diamond.Rest` · class · exposed 11
- [RestResponseMessage](./RestResponseMessage) — `TaleWorlds.Diamond.Rest` · class · exposed 1
- [RglScriptFieldType](./RglScriptFieldType) — `TaleWorlds.Engine` · enum · exposed 15

### S

- [Scene](./Scene) — `TaleWorlds.Engine` · class · exposed 302
- [SceneInitializationData](./SceneInitializationData) — `TaleWorlds.Engine` · struct · exposed 1
- [SceneLayer](./SceneLayer) — `TaleWorlds.Engine.Screens` · class · exposed 30
- [SceneProblemChecker](./SceneProblemChecker) — `TaleWorlds.Engine` · class · exposed 0
- [SceneView](./SceneView) — `TaleWorlds.Engine` · class · exposed 31
- [Screen](./Screen) — `TaleWorlds.Engine` · class · exposed 7
- [ScreenManagerEngineConnection](./ScreenManagerEngineConnection) — `TaleWorlds.Engine` · class · exposed 0
- [ScriptComponent](./ScriptComponent) — `TaleWorlds.Engine` · class · exposed 2
- [ScriptComponentBehavior](./ScriptComponentBehavior) — `TaleWorlds.Engine` · class · exposed 39
- [ScriptComponentFieldHolder](./ScriptComponentFieldHolder) — `TaleWorlds.Engine` · struct · exposed 0
- [SelectionData](./SelectionData) — `TaleWorlds.Engine.Options` · struct · exposed 1
- [SessionCredentials](./SessionCredentials) — `TaleWorlds.Diamond` · class · exposed 3
- [SessionKey](./SessionKey) — `TaleWorlds.Diamond` · struct · exposed 11
- [SessionProviderType](./SessionProviderType) — `TaleWorlds.Diamond.ClientApplication` · enum · exposed 3
- [Shader](./Shader) — `TaleWorlds.Engine` · class · exposed 3
- [SimpleButton](./SimpleButton) — `TaleWorlds.Engine` · class · exposed 0
- [Skeleton](./Skeleton) — `TaleWorlds.Engine` · class · exposed 57
- [SocketMessage](./SocketMessage) — `TaleWorlds.Diamond.Socket` · class · exposed 5
- [SoundEvent](./SoundEvent) — `TaleWorlds.Engine` · class · exposed 29
- [SoundEventParameter](./SoundEventParameter) — `TaleWorlds.Engine` · struct · exposed 2
- [SoundManager](./SoundManager) — `TaleWorlds.Engine` · class · exposed 40
- [SphereData](./SphereData) — `TaleWorlds.Engine` · struct · exposed 1
- [SteamAccessObject](./SteamAccessObject) — `TaleWorlds.Diamond` · class · exposed 5

### T

- [TableauView](./TableauView) — `TaleWorlds.Engine` · class · exposed 6
- [TestAccessObject](./TestAccessObject) — `TaleWorlds.Diamond` · class · exposed 4
- [TextFlags](./TextFlags) — `TaleWorlds.Engine` · enum · exposed 14
- [Texture](./Texture) — `TaleWorlds.Engine` · class · exposed 30
- [TextureView](./TextureView) — `TaleWorlds.Engine` · class · exposed 2
- [ThreadedClient](./ThreadedClient) — `TaleWorlds.Diamond` · class · exposed 6
- [ThreadedClientSession](./ThreadedClientSession) — `TaleWorlds.Diamond` · class · exposed 1
- [ThumbnailCreatorView](./ThumbnailCreatorView) — `TaleWorlds.Engine` · class · exposed 11
- [ThumbnailRenderRequest](./ThumbnailRenderRequest) — `TaleWorlds.Engine` · struct · exposed 4
- [Time](./Time) — `TaleWorlds.Engine` · class · exposed 1
- [TwoDimensionEnginePlatform](./TwoDimensionEnginePlatform) — `TaleWorlds.Engine.GauntletUI` · class · exposed 1
- [TwoDimensionEngineResourceContext](./TwoDimensionEngineResourceContext) — `TaleWorlds.Engine.GauntletUI` · class · exposed 0
- [TwoDimensionMeshDrawData](./TwoDimensionMeshDrawData) — `TaleWorlds.Engine` · struct · exposed 0
- [TwoDimensionTextMeshDrawData](./TwoDimensionTextMeshDrawData) — `TaleWorlds.Engine` · struct · exposed 0
- [TwoDimensionView](./TwoDimensionView) — `TaleWorlds.Engine` · class · exposed 8

### U

- [UIConfig](./UIConfig) — `TaleWorlds.Engine.GauntletUI` · class · exposed 6
- [UIResourceManager](./UIResourceManager) — `TaleWorlds.Engine.GauntletUI` · class · exposed 12
- [Utilities](./Utilities) — `TaleWorlds.Engine` · class · exposed 159

### V

- [VideoPlayerView](./VideoPlayerView) — `TaleWorlds.Engine` · class · exposed 5
- [View](./View) — `TaleWorlds.Engine` · class · exposed 21
- [VisibilityMaskFlags](./VisibilityMaskFlags) — `TaleWorlds.Engine` · enum · exposed 27
- [VolumeDataForSubmergeComputation](./VolumeDataForSubmergeComputation) — `TaleWorlds.Engine` · struct · exposed 6

### W

- [WeakGameEntity](./WeakGameEntity) — `TaleWorlds.Engine` · struct · exposed 244
- [WeakMaterial](./WeakMaterial) — `TaleWorlds.Engine` · struct · exposed 21
- [WorldFrame](./WorldFrame) — `TaleWorlds.Engine` · struct · exposed 6
- [WorldPosition](./WorldPosition) — `TaleWorlds.Engine` · struct · exposed 25

### Z

- [ZValidityState](./ZValidityState) — `TaleWorlds.Engine` · enum · exposed 4

## See Also

- - [↑ API reference](..//)
- - [↑ version home](../..//)
