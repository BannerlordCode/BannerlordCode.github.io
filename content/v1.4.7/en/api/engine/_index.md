---
title: "Engine — Engine boundary: diagnostics, 2D render context and Diamond"
description: "`TaleWorlds.Engine` and its sub-namespaces, plus the `TaleWorlds.Diamond` access providers. Includes `MBDebug`, vector a"
---
# Engine — Engine boundary: diagnostics, 2D render context and Diamond

`TaleWorlds.Engine` and its sub-namespaces, plus the `TaleWorlds.Diamond` access providers. Includes `MBDebug`, vector and matrix types, and `TaleWorlds.Engine.GauntletUI`.

**`GauntletLayer` is here** (namespace `TaleWorlds.Engine.GauntletUI`), not in [GUI](../gui/). These two similarly-named namespaces are deliberately in different buckets — see [SDK Overview](../../architecture/sdk-overview).

`MBDebug` was moved to [Core-Extra](../core-extra/) by the entry-class override, because mod authors reach for it in their first hour.

## Pages in this area (41)

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
[TwoDimensionEngineResourceContext](TwoDimensionEngineResourceContext) · [Utilities](Utilities)

## Sibling areas

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
