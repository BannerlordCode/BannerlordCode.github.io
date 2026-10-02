---
title: "Core extra — 基础层的长尾：运行时原语、平台桥接、事件与集合"
description: "`TaleWorlds.Core`、`TaleWorlds.Library`、`TaleWorlds.DotNet` 三个命名空间合并成一个目录。它不是一个'业务'区域，而是所有业务区域共同依赖的地基：程序集加载、事件总线、MVVM 通知、"
---
# Core extra — 基础层的长尾：运行时原语、平台桥接、事件与集合

`TaleWorlds.Core`、`TaleWorlds.Library`、`TaleWorlds.DotNet` 三个命名空间合并成一个目录。它不是一个"业务"区域，而是**所有业务区域共同依赖的地基**：程序集加载、事件总线、MVVM 通知、跨平台 IO、诊断输出都在这里。

模组作者在这里找的是生命周期原语，不是可玩的对象。`Game`、`GameStateManager`、`ViewModel`、`AssemblyLoader`、`ApplicationPlatform` 属于这一类。

目录里还有一部分平台与第三方命名空间（Diamond 大厅 protobuf、`StbSharp`、`psai.*`）由兜底规则收进来，噪声闸门漏掉的都堆在这里 —— 它们的类型不是模组 API。

## 本区页面（56）

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
[Game](Game) · [ViewModel](ViewModel)

## 相邻目录

[core](../core/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
