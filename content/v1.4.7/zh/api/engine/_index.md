---
title: "Engine — 引擎边界：调试、二维渲染上下文与 Diamond"
description: "`TaleWorlds.Engine` 及其子命名空间，加上 `TaleWorlds.Diamond` 的访问提供方。包含 `MBDebug`、向量矩阵类型、`TaleWorlds.Engine.GauntletUI`。"
---
# Engine — 引擎边界：调试、二维渲染上下文与 Diamond

`TaleWorlds.Engine` 及其子命名空间，加上 `TaleWorlds.Diamond` 的访问提供方。包含 `MBDebug`、向量矩阵类型、`TaleWorlds.Engine.GauntletUI`。

**`GauntletLayer` 在这里**（命名空间 `TaleWorlds.Engine.GauntletUI`），不在 [GUI](../gui/)。这两个名字相似的命名空间故意落在不同目录，详见 [SDK 总览](../../architecture/sdk-overview)。

`MBDebug` 被入口类规则搬去了 [Core-Extra](../core-extra/)，因为模组作者第一时间就会用它。

## 本区页面（43）

[AccessObject](AccessObject) · [AccessObjectJsonConverter](AccessObjectJsonConverter) · [AccessObjectResult](AccessObjectResult)
[AesHelper](AesHelper) · [AliveMessage](AliveMessage) · [BoundingBox](BoundingBox)
[CheatsHotKeyCategory](CheatsHotKeyCategory) · [Client](Client) · [ClientApplicationConfiguration](ClientApplicationConfiguration)
[ClientMessageHandler](ClientMessageHandler) · [ClientRestSession](ClientRestSession) · [ClientRestSessionTask](ClientRestSessionTask)
[ClientSocketSession](ClientSocketSession) · [ConnectMessage](ConnectMessage) · [CrashInformationCollector](CrashInformationCollector)
[DebugHotKeyCategory](DebugHotKeyCategory) · [DiamondClientApplication](DiamondClientApplication) · [DiamondClientApplicationObject](DiamondClientApplicationObject)
[DisconnectMessage](DisconnectMessage) · [EngineInputManager](EngineInputManager) · [EngineTexture](EngineTexture)
[Extensions](Extensions) · [GauntletMovieIdentifier](GauntletMovieIdentifier) · [GenericRestSessionProvider](GenericRestSessionProvider)
[GenericThreadedRestSessionProvider](GenericThreadedRestSessionProvider) · [IBooleanOptionData](IBooleanOptionData) · [INumericOptionData](INumericOptionData)
[IOptionData](IOptionData) · [ISelectionOptionData](ISelectionOptionData) · [MeshBuilder](MeshBuilder)
[MessageType](MessageType) · [NativeBooleanOptionData](NativeBooleanOptionData) · [NativeNumericOptionData](NativeNumericOptionData)
[NativeParallelDriver](NativeParallelDriver) · [PerformanceAnalyzer](PerformanceAnalyzer) · [SceneLayer](SceneLayer)
[SessionProviderType](SessionProviderType) · [SocketMessage](SocketMessage) · [TwoDimensionEnginePlatform](TwoDimensionEnginePlatform)
[TwoDimensionEngineResourceContext](TwoDimensionEngineResourceContext) · [Utilities](Utilities) · [GauntletLayer](GauntletLayer)
[MBDebug](MBDebug)

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
