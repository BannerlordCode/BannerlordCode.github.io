---
title: 网络/平台/服务 Network & Platform 类目录 / Class Catalog
extra:
  sidebar: auto
---
# 网络/平台/服务 Network & Platform 类目录

## 心智模型

先把 `网络/平台/服务 Network & Platform 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.15 源码中该领域全部公开类型，按命名空间分组。共 **246** 个类型，其中 **237** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## Helpers (43)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AIDifficulty](./campaign-ext/AIDifficulty) | 🔗 |
| C | [AiHelper](./campaign-ext/AiHelper) | 🔗 |
| C | [AlleyHelper](./campaign-ext/AlleyHelper) | 🔗 |
| C | [BannerHelper](./campaign-ext/BannerHelper) | 🔗 |
| C | [BarterHelper](./campaign-ext/BarterHelper) | 🔗 |
| C | [BoardGameHelper](./campaign-ext/BoardGameHelper) | 🔗 |
| E | [BoardGameState](./campaign-ext/BoardGameState) | 🔗 |
| C | [BuildingHelper](./campaign-ext/BuildingHelper) | 🔗 |
| C | [CaravanHelper](./campaign-ext/CaravanHelper) | 🔗 |
| C | [CharacterHelper](./campaign-ext/CharacterHelper) | 🔗 |
| C | [CraftingHelper](./campaign-ext/CraftingHelper) | 🔗 |
| C | [DialogHelper](./campaign-ext/DialogHelper) | 🔗 |
| C | [DiplomacyHelper](./campaign-ext/DiplomacyHelper) | 🔗 |
| C | [DistanceHelper](./campaign-ext/DistanceHelper) | 🔗 |
| C | [EmbarkDisembarkData](./campaign-ext/EmbarkDisembarkData) | 🔗 |
| C | [EquipmentHelper](./campaign-ext/EquipmentHelper) | 🔗 |
| C | [FactionHelper](./campaign-ext/FactionHelper) | 🔗 |
| C | [HeroHelper](./campaign-ext/HeroHelper) | 🔗 |
| C | [IncidentHelper](./campaign-ext/IncidentHelper) | 🔗 |
| E | [InventoryCategoryType](./campaign-ext/InventoryCategoryType) | 🔗 |
| E | [InventoryItemType](./campaign-ext/InventoryItemType) | 🔗 |
| E | [InventoryMode](./campaign-ext/InventoryMode) | 🔗 |
| C | [InventoryScreenHelper](./campaign-ext/InventoryScreenHelper) | 🔗 |
| C | [ItemHelper](./campaign-ext/ItemHelper) | 🔗 |
| C | [MapEventHelper](./campaign-ext/MapEventHelper) | 🔗 |
| C | [MenuHelper](./campaign-ext/MenuHelper) | 🔗 |
| C | [MiscHelper](./campaign-ext/MiscHelper) | 🔗 |
| C | [MobilePartyHelper](./campaign-ext/MobilePartyHelper) | 🔗 |
| C | [NavigationHelper](./campaign-ext/NavigationHelper) | 🔗 |
| C | [PartyBaseHelper](./campaign-ext/PartyBaseHelper) | 🔗 |
| C | [PartyScreenHelper](./campaign-ext/PartyScreenHelper) | 🔗 |
| E | [PartyScreenMode](./campaign-ext/PartyScreenMode) | 🔗 |
| C | [PerkHelper](./campaign-ext/PerkHelper) | 🔗 |
| C | [PersuasionHelper](./campaign-ext/PersuasionHelper) | 🔗 |
| C | [PortStateHelper](./campaign-ext/PortStateHelper) | 🔗 |
| C | [QuestHelper](./campaign-ext/QuestHelper) | 🔗 |
| C | [SettlementHelper](./campaign-ext/SettlementHelper) | 🔗 |
| C | [ShipHelper](./campaign-ext/ShipHelper) | 🔗 |
| C | [SkillHelper](./campaign-ext/SkillHelper) | 🔗 |
| C | [StringHelpers](./campaign-ext/StringHelpers) | 🔗 |
| C | [TeleportationHelper](./campaign-ext/TeleportationHelper) | 🔗 |
| C | [TooltipHelper](./campaign-ext/TooltipHelper) | 🔗 |
| C | [TownHelpers](./campaign-ext/TownHelpers) | 🔗 |

## TaleWorlds.Diamond (36)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AccessObject](./campaign-ext/AccessObject) | 🔗 |
| C | [AccessObjectJsonConverter](./campaign-ext/AccessObjectJsonConverter) | 🔗 |
| C | [AccessObjectResult](./campaign-ext/AccessObjectResult) | 🔗 |
| C | [AesHelper](./campaign-ext/AesHelper) | 🔗 |
| C | [Client](./campaign-ext/Client) | 🔗 |
| C | [EpicAccessObject](./campaign-ext/EpicAccessObject) | 🔗 |
| C | [FunctionResult](./campaign-ext/FunctionResult) | 🔗 |
| C | [FunctionResultJsonConverter](./campaign-ext/FunctionResultJsonConverter) | 🔗 |
| C | [GDKAccessObject](./campaign-ext/GDKAccessObject) | 🔗 |
| C | [GOGAccessObject](./campaign-ext/GOGAccessObject) | 🔗 |
| C | [HandlerResult](./campaign-ext/HandlerResult) | 🔗 |
| I | [IClient](./campaign-ext/IClient) | 🔗 |
| I | [IClientSession](./campaign-ext/IClientSession) | 🔗 |
| I | [IClientSessionProvider](./campaign-ext/IClientSessionProvider) | 🔗 |
| I | [IConnectionInformation](./campaign-ext/IConnectionInformation) | 🔗 |
| I | [ILoginAccessProvider](./campaign-ext/ILoginAccessProvider) | 🔗 |
| C | [InnerProcessConnectionInformation](./campaign-ext/InnerProcessConnectionInformation) | 🔗 |
| E | [LoginBanReason](./campaign-ext/LoginBanReason) | 🔗 |
| E | [LoginErrorCode](./campaign-ext/LoginErrorCode) | 🔗 |
| C | [LoginMessage](./campaign-ext/LoginMessage) | 🔗 |
| C | [LoginResult](./campaign-ext/LoginResult) | 🔗 |
| C | [LoginResultObject](./campaign-ext/LoginResultObject) | 🔗 |
| C | [LoginResultObjectJsonConverter](./campaign-ext/LoginResultObjectJsonConverter) | 🔗 |
| C | [Message](./campaign-ext/Message) | 🔗 |
| C | [MessageDescription](./campaign-ext/MessageDescription) | 🔗 |
| C | [MessageJsonConverter](./campaign-ext/MessageJsonConverter) | 🔗 |
| S | [PeerId](./campaign-ext/PeerId) | 🔗 |
| C | [PeerIdJsonConverter](./campaign-ext/PeerIdJsonConverter) | 🔗 |
| C | [PlayerIdExtensions](./campaign-ext/PlayerIdExtensions) | 🔗 |
| C | [PSAccessObject](./campaign-ext/PSAccessObject) | 🔗 |
| C | [SessionCredentials](./campaign-ext/SessionCredentials) | 🔗 |
| S | [SessionKey](./campaign-ext/SessionKey) | 🔗 |
| C | [SteamAccessObject](./campaign-ext/SteamAccessObject) | 🔗 |
| C | [TestAccessObject](./campaign-ext/TestAccessObject) | 🔗 |
| C | [ThreadedClient](./campaign-ext/ThreadedClient) | 🔗 |
| C | [ThreadedClientSession](./campaign-ext/ThreadedClientSession) | 🔗 |

## TaleWorlds.Diamond.AccessProvider.GDK (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GDKLoginAccessProvider](./campaign-ext/GDKLoginAccessProvider) | 🔗 |

## TaleWorlds.Diamond.AccessProvider.GOG (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GOGLoginAccessProvider](./campaign-ext/GOGLoginAccessProvider) | 🔗 |

## TaleWorlds.Diamond.AccessProvider.Steam (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SteamLoginAccessProvider](./campaign-ext/SteamLoginAccessProvider) | 🔗 |

## TaleWorlds.Diamond.AccessProvider.Test (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [TestLoginAccessProvider](./campaign-ext/TestLoginAccessProvider) | 🔗 |

## TaleWorlds.Diamond.ClientApplication (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClientApplicationConfiguration](./campaign-ext/ClientApplicationConfiguration) | 🔗 |
| C | [DiamondClientApplication](./campaign-ext/DiamondClientApplication) | 🔗 |
| C | [DiamondClientApplicationObject](./campaign-ext/DiamondClientApplicationObject) | 🔗 |
| C | [GenericRestSessionProvider](./campaign-ext/GenericRestSessionProvider) | 🔗 |
| C | [GenericThreadedRestSessionProvider](./campaign-ext/GenericThreadedRestSessionProvider) | 🔗 |
| E | [SessionProviderType](./campaign-ext/SessionProviderType) | 🔗 |

## TaleWorlds.Diamond.Rest (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AliveMessage](./campaign-ext/AliveMessage) | 🔗 |
| C | [ClientRestSession](./campaign-ext/ClientRestSession) | 🔗 |
| C | [ConnectMessage](./campaign-ext/ConnectMessage) | 🔗 |
| C | [DisconnectMessage](./campaign-ext/DisconnectMessage) | 🔗 |
| E | [MessageType](./campaign-ext/MessageType) | 🔗 |
| C | [RestData](./campaign-ext/RestData) | 🔗 |
| C | [RestDataJsonConverter](./campaign-ext/RestDataJsonConverter) | 🔗 |
| C | [RestFunctionResult](./campaign-ext/RestFunctionResult) | 🔗 |
| C | [RestObjectFunctionResult](./campaign-ext/RestObjectFunctionResult) | 🔗 |
| C | [RestObjectRequestMessage](./campaign-ext/RestObjectRequestMessage) | 🔗 |
| C | [RestObjectResponseMessage](./campaign-ext/RestObjectResponseMessage) | 🔗 |
| C | [RestRequestMessage](./campaign-ext/RestRequestMessage) | 🔗 |
| C | [RestResponse](./campaign-ext/RestResponse) | 🔗 |
| C | [RestResponseMessage](./campaign-ext/RestResponseMessage) | 🔗 |

## TaleWorlds.Diamond.Socket (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClientSocketSession](./campaign-ext/ClientSocketSession) | 🔗 |
| C | [SocketMessage](./campaign-ext/SocketMessage) | 🔗 |

## TaleWorlds.DotNet (29)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CallbackDebugTool](./campaign-ext/CallbackDebugTool) | 🔗 |
| C | [CallbackStringBufferManager](./campaign-ext/CallbackStringBufferManager) | 🔗 |
| C | [Controller](./campaign-ext/Controller) | 🔗 |
| C | [CustomEngineStructMemberData](./campaign-ext/CustomEngineStructMemberData) | 🔗 |
| C | [DefineAsEngineStruct](./campaign-ext/DefineAsEngineStruct) | 🔗 |
| C | [DefineCustomEngineStructMemberData](./campaign-ext/DefineCustomEngineStructMemberData) | 🔗 |
| C | [DotNetObject](./campaign-ext/DotNetObject) | 🔗 |
| C | [EditableScriptComponentVariable](./campaign-ext/EditableScriptComponentVariable) | 🔗 |
| C | [EngineBaseClass](./campaign-ext/EngineBaseClass) | 🔗 |
| C | EngineClass | — |
| C | [EngineStruct](./campaign-ext/EngineStruct) | 🔗 |
| C | [GameApplicationDomainController](./campaign-ext/GameApplicationDomainController) | 🔗 |
| I | [ICallbackManager](./campaign-ext/ICallbackManager) | 🔗 |
| I | [IManagedComponent](./campaign-ext/IManagedComponent) | 🔗 |
| C | [LibraryCallback](./campaign-ext/LibraryCallback) | 🔗 |
| C | [Managed](./campaign-ext/Managed) | 🔗 |
| C | [ManagedDelegate](./campaign-ext/ManagedDelegate) | 🔗 |
| C | [ManagedFromNativeCallback](./campaign-ext/ManagedFromNativeCallback) | 🔗 |
| C | [ManagedObject](./campaign-ext/ManagedObject) | 🔗 |
| C | [ManagedToUnmanagedScopedCallCounter](./campaign-ext/ManagedToUnmanagedScopedCallCounter) | 🔗 |
| C | [NativeArray](./campaign-ext/NativeArray) | 🔗 |
| C | [NativeArrayEnumerator](./campaign-ext/NativeArrayEnumerator) | 🔗 |
| C | NativeObject | — |
| C | [NativeObjectArray](./campaign-ext/NativeObjectArray) | 🔗 |
| C | [NativeString](./campaign-ext/NativeString) | 🔗 |
| C | [NativeTelemetryManager](./campaign-ext/NativeTelemetryManager) | 🔗 |
| C | [ScriptComponentParams](./campaign-ext/ScriptComponentParams) | 🔗 |
| S | [StackArray40Int](./campaign-ext/StackArray40Int) | 🔗 |
| C | [WeakNativeObjectReference](./campaign-ext/WeakNativeObjectReference) | 🔗 |

## TaleWorlds.Network (32)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Authorize](./campaign-ext/Authorize) | 🔗 |
| C | [ClientsideSession](./campaign-ext/ClientsideSession) | 🔗 |
| C | [ClientWebSocketHandler](./campaign-ext/ClientWebSocketHandler) | 🔗 |
| E | [ConnectionState](./campaign-ext/ConnectionState) | 🔗 |
| C | [Coroutine](./campaign-ext/Coroutine) | 🔗 |
| C | [CoroutineManager](./campaign-ext/CoroutineManager) | 🔗 |
| C | [CoroutineState](./campaign-ext/CoroutineState) | 🔗 |
| I | [IMessageProxyClient](./campaign-ext/IMessageProxyClient) | 🔗 |
| I | [INetworkMessageReader](./campaign-ext/INetworkMessageReader) | 🔗 |
| I | [INetworkMessageWriter](./campaign-ext/INetworkMessageWriter) | 🔗 |
| I | [INetworkSerializable](./campaign-ext/INetworkSerializable) | 🔗 |
| C | [JsonSocketMessage](./campaign-ext/JsonSocketMessage) | 🔗 |
| C | [MessageContract](./campaign-ext/MessageContract) | 🔗 |
| C | [MessageContractHandlerManager](./campaign-ext/MessageContractHandlerManager) | 🔗 |
| C | [MessageId](./campaign-ext/MessageId) | 🔗 |
| C | [MessageInfo](./campaign-ext/MessageInfo) | 🔗 |
| C | [MessageProxy](./campaign-ext/MessageProxy) | 🔗 |
| C | [MessageServiceConnection](./campaign-ext/MessageServiceConnection) | 🔗 |
| E | [MessageTypes](./campaign-ext/MessageTypes) | 🔗 |
| C | [NetworkMessage](./campaign-ext/NetworkMessage) | 🔗 |
| C | [NetworkSession](./campaign-ext/NetworkSession) | 🔗 |
| C | [PostBoxId](./campaign-ext/PostBoxId) | 🔗 |
| C | [RESTClient](./campaign-ext/RESTClient) | 🔗 |
| C | [ServersideSession](./campaign-ext/ServersideSession) | 🔗 |
| C | [ServersideSessionManager](./campaign-ext/ServersideSessionManager) | 🔗 |
| C | [ServiceException](./campaign-ext/ServiceException) | 🔗 |
| C | [ServiceExceptionModel](./campaign-ext/ServiceExceptionModel) | 🔗 |
| E | [ThreadType](./campaign-ext/ThreadType) | 🔗 |
| C | [TickManager](./campaign-ext/TickManager) | 🔗 |
| C | [WaitForSpecialCase](./campaign-ext/WaitForSpecialCase) | 🔗 |
| C | [WaitForTicks](./campaign-ext/WaitForTicks) | 🔗 |
| C | [WebSocketMessage](./campaign-ext/WebSocketMessage) | 🔗 |

## TaleWorlds.ObjectSystem (16)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [IObjectManagerHandler](./campaign-ext/IObjectManagerHandler) | 🔗 |
| C | [MBCanNotCreatePresumedObjectException](./campaign-ext/MBCanNotCreatePresumedObjectException) | 🔗 |
| S | [MBGUID](./campaign-ext/MBGUID) | 🔗 |
| C | [MBIllegalRegisterException](./campaign-ext/MBIllegalRegisterException) | 🔗 |
| C | [MBInvalidReferenceException](./campaign-ext/MBInvalidReferenceException) | 🔗 |
| C | MBObjectBase | — |
| C | MBObjectManager | — |
| S | [MbObjectXmlInformation](./campaign-ext/MbObjectXmlInformation) | 🔗 |
| C | MBOutOfRangeException | — |
| C | [MBTooManyRegisteredTypesException](./campaign-ext/MBTooManyRegisteredTypesException) | 🔗 |
| C | MBTypeMismatchException | — |
| C | [MBTypeNotRegisteredException](./campaign-ext/MBTypeNotRegisteredException) | 🔗 |
| C | [ObjectSystemException](./campaign-ext/ObjectSystemException) | 🔗 |
| C | [SaveableObjectSystemTypeDefiner](./campaign-ext/SaveableObjectSystemTypeDefiner) | 🔗 |
| C | [XmlResource](./campaign-ext/XmlResource) | 🔗 |
| S | [XsdElement](./campaign-ext/XsdElement) | 🔗 |

## TaleWorlds.PlatformService (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FriendListService](./campaign-ext/FriendListService) | 🔗 |
| E | [FriendListServiceType](./campaign-ext/FriendListServiceType) | 🔗 |
| I | [IFriendListService](./campaign-ext/IFriendListService) | 🔗 |
| I | [IPlatformInvitationServices](./campaign-ext/IPlatformInvitationServices) | 🔗 |
| I | [IPlatformServices](./campaign-ext/IPlatformServices) | 🔗 |
| I | [ISessionService](./campaign-ext/ISessionService) | 🔗 |
| C | [NullPlatformServices](./campaign-ext/NullPlatformServices) | 🔗 |
| E | [Permission](./campaign-ext/Permission) | 🔗 |
| E | [PlatformInviteResponse](./campaign-ext/PlatformInviteResponse) | 🔗 |
| C | [PlatformServices](./campaign-ext/PlatformServices) | 🔗 |
| E | [Privilege](./campaign-ext/Privilege) | 🔗 |
| E | [SessionInvitationType](./campaign-ext/SessionInvitationType) | 🔗 |
| C | [TestFriendListService](./campaign-ext/TestFriendListService) | 🔗 |
| C | [TestPlatformServices](./campaign-ext/TestPlatformServices) | 🔗 |

## TaleWorlds.PlatformService.Epic (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EpicFriendListService](./campaign-ext/EpicFriendListService) | 🔗 |
| C | [EpicPlatformAvatarService](./campaign-ext/EpicPlatformAvatarService) | 🔗 |
| C | [EpicPlatformServices](./campaign-ext/EpicPlatformServices) | 🔗 |
| C | [EpicThirdPartyFriendListService](./campaign-ext/EpicThirdPartyFriendListService) | 🔗 |

## TaleWorlds.PlatformService.GOG (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AuthenticationListener](./campaign-ext/AuthenticationListener) | 🔗 |
| C | [FriendListListener](./campaign-ext/FriendListListener) | 🔗 |
| C | [GOGAchievement](./campaign-ext/GOGAchievement) | 🔗 |
| C | [GOGAchievementService](./campaign-ext/GOGAchievementService) | 🔗 |
| C | [GOGFriendListService](./campaign-ext/GOGFriendListService) | 🔗 |
| C | [GOGPlatformAvatarService](./campaign-ext/GOGPlatformAvatarService) | 🔗 |
| C | [GOGPlatformServices](./campaign-ext/GOGPlatformServices) | 🔗 |
| C | [GogServicesConnectionStateListener](./campaign-ext/GogServicesConnectionStateListener) | 🔗 |
| C | [StatsAndAchievementsStoreListener](./campaign-ext/StatsAndAchievementsStoreListener) | 🔗 |
| C | [SteamPlayerIdExtensions](./campaign-ext/SteamPlayerIdExtensions) | 🔗 |
| C | [UserInformationRetrieveListener](./campaign-ext/UserInformationRetrieveListener) | 🔗 |
| C | [UserStatsAndAchievementsRetrieveListener](./campaign-ext/UserStatsAndAchievementsRetrieveListener) | 🔗 |

## TaleWorlds.PlatformService.Steam (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SteamAchievementService](./campaign-ext/SteamAchievementService) | 🔗 |
| C | [SteamFriendListService](./campaign-ext/SteamFriendListService) | 🔗 |
| C | [SteamModuleExtension](./campaign-ext/SteamModuleExtension) | 🔗 |
| C | [SteamPlatformAvatarService](./campaign-ext/SteamPlatformAvatarService) | 🔗 |
| C | [SteamPlatformServices](./campaign-ext/SteamPlatformServices) | 🔗 |
| C | SteamPlayerIdExtensions | — |

## TaleWorlds.PlayerServices (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [PlayerId](./campaign-ext/PlayerId) | 🔗 |
| C | PlayerIdExtensions | — |
| C | [PlayerIdJsonConverter](./campaign-ext/PlayerIdJsonConverter) | 🔗 |
| E | [PlayerIdProvidedTypes](./campaign-ext/PlayerIdProvidedTypes) | 🔗 |
| C | [TimeoutWebClient](./campaign-ext/TimeoutWebClient) | 🔗 |

## TaleWorlds.PlayerServices.Avatar (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ApiAvatarServiceBase](./campaign-ext/ApiAvatarServiceBase) | 🔗 |
| C | [ApiAvatarServiceBaseSingleThread](./campaign-ext/ApiAvatarServiceBaseSingleThread) | 🔗 |
| C | [AvatarData](./campaign-ext/AvatarData) | 🔗 |
| C | [AvatarDataResponse](./campaign-ext/AvatarDataResponse) | 🔗 |
| E | [DataStatus](./campaign-ext/DataStatus) | 🔗 |
| C | [GOGAvatarService](./campaign-ext/GOGAvatarService) | 🔗 |
| I | [IAvatarService](./campaign-ext/IAvatarService) | 🔗 |
| E | [ImageType](./campaign-ext/ImageType) | 🔗 |
| C | [SteamAvatarService](./campaign-ext/SteamAvatarService) | 🔗 |
| C | [TestAvatarService](./campaign-ext/TestAvatarService) | 🔗 |

## TaleWorlds.ScreenSystem (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [CursorType](./campaign-ext/CursorType) | 🔗 |
| C | [GlobalLayer](./campaign-ext/GlobalLayer) | 🔗 |
| C | [InputRestrictions](./campaign-ext/InputRestrictions) | 🔗 |
| I | [IScreenManagerEngineConnection](./campaign-ext/IScreenManagerEngineConnection) | 🔗 |
| C | [ScreenBase](./campaign-ext/ScreenBase) | 🔗 |
| C | [ScreenComponent](./campaign-ext/ScreenComponent) | 🔗 |
| C | [ScreenLayer](./campaign-ext/ScreenLayer) | 🔗 |
| C | ScreenManager | — |

## TaleWorlds.ServiceDiscovery.Client (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [IDiscoveryService](./campaign-ext/IDiscoveryService) | 🔗 |
| C | [RemoteDiscoveryService](./campaign-ext/RemoteDiscoveryService) | 🔗 |
| C | [ServiceAddress](./campaign-ext/ServiceAddress) | 🔗 |
| C | [ServiceAddressManager](./campaign-ext/ServiceAddressManager) | 🔗 |
| C | [ServiceResolvedAddress](./campaign-ext/ServiceResolvedAddress) | 🔗 |
