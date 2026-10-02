---
title: "Core extra — Foundation long tail: runtime primitives, platform bridge, events and collections"
description: "Three namespaces merged into one directory: `TaleWorlds.Core`, `TaleWorlds.Library` and `TaleWorlds.DotNet`. This is not"
---
# Core extra — Foundation long tail: runtime primitives, platform bridge, events and collections

Three namespaces merged into one directory: `TaleWorlds.Core`, `TaleWorlds.Library` and `TaleWorlds.DotNet`. This is not a "business" area — it is the **foundation every business area stands on**: assembly loading, the event bus, MVVM notification, cross-platform IO, diagnostics.

What a mod author looks for here is lifecycle plumbing, not playable objects: `Game`, `GameStateManager`, `ViewModel`, `AssemblyLoader`, `ApplicationPlatform`.

Some platform and third-party namespaces also land here through the fallback rule (Diamond lobby protobuf, `StbSharp`, `psai.*`). Those types are not mod API.

## Pages in this area (54)

[BannerHelper](BannerHelper) · [BannerImageIdentifier](BannerImageIdentifier) · [CallbackDebugTool](CallbackDebugTool)
[CallbackStringBufferManager](CallbackStringBufferManager) · [CharacterImageIdentifier](CharacterImageIdentifier) · [CharacterSkillsResolver](CharacterSkillsResolver)
[ClassCode](ClassCode) · [ClassCodeAccessModifier](ClassCodeAccessModifier) · [CodeBlock](CodeBlock)
[CodeGenerationContext](CodeGenerationContext) · [CodeGenerationFile](CodeGenerationFile) · [CommandLineFunctionality](CommandLineFunctionality)
[CommentSection](CommentSection) · [Controller](Controller) · [Crafting](Crafting)
[CraftingPieceImageIdentifier](CraftingPieceImageIdentifier) · [CustomEngineStructMemberData](CustomEngineStructMemberData) · [CustomParameter](CustomParameter)
[DictionaryByType](DictionaryByType) · [DotNetHttpDriver](DotNetHttpDriver) · [EmptyImageIdentifier](EmptyImageIdentifier)
[EngineStackArray](EngineStackArray) · [Error](Error) · [EventBase](EventBase)
[EventManager](EventManager) · [GameStateManager](GameStateManager) · [GameTextManager](GameTextManager)
[GraphLinePointVM](GraphLinePointVM) · [GraphLineVM](GraphLineVM) · [GraphVM](GraphVM)
[HttpDriverManager](HttpDriverManager) · [HttpGetRequest](HttpGetRequest) · [HttpPostRequest](HttpPostRequest)
[HttpRequestTaskState](HttpRequestTaskState) · [IGameStarter](IGameStarter) · [IHttpDriver](IHttpDriver)
[ImageIdentifier](ImageIdentifier) · [InformationManager](InformationManager) · [ItemImageIdentifier](ItemImageIdentifier)
[LinQuick](LinQuick) · [Logger](Logger) · [MBDotNet](MBDotNet)
[MBSortedMultiList](MBSortedMultiList) · [Min](Min) · [NewsItem](NewsItem)
[NewsManager](NewsManager) · [NewsType](NewsType) · [Oriented2DArea](Oriented2DArea)
[Program](Program) · [SRTHelper](SRTHelper) · [SceneNotificationData](SceneNotificationData)
[StackArray](StackArray) · [TauntUsageManager](TauntUsageManager) · [TooltipTriggerVM](TooltipTriggerVM)

## Sibling areas

[core](../core/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
