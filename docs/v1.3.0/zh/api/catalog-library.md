---
title: 基础库 Library 类目录 / Class Catalog
sidebar: auto
---

# 基础库 Library 类目录

## 心智模型

先把 `基础库 Library 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.0 源码中该领域全部公开类型，按命名空间分组。共 **200** 个类型，其中 **191** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.Library (169)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [AmbientInformation](/v1.3.15/zh/api/core-extra/AmbientInformation.md) | 🔗 |
| C | [ApplicationPlatform](/v1.3.15/zh/api/core-extra/ApplicationPlatform.md) | 🔗 |
| S | [ApplicationVersion](/v1.3.15/zh/api/core-extra/ApplicationVersion.md) | 🔗 |
| C | [ApplicationVersionJsonConverter](/v1.3.15/zh/api/core-extra/ApplicationVersionJsonConverter.md) | 🔗 |
| E | [ApplicationVersionType](/v1.3.15/zh/api/core-extra/ApplicationVersionType.md) | 🔗 |
| S | [AreaInformation](/v1.3.15/zh/api/core-extra/AreaInformation.md) | 🔗 |
| C | [AssemblyLoader](/v1.3.15/zh/api/core-extra/AssemblyLoader.md) | 🔗 |
| C | [AsyncRunner](/v1.3.15/zh/api/core-extra/AsyncRunner.md) | 🔗 |
| S | [AtmosphereInfo](/v1.3.15/zh/api/core-extra/AtmosphereInfo.md) | 🔗 |
| C | [AwaitableAsyncRunner](/v1.3.15/zh/api/core-extra/AwaitableAsyncRunner.md) | 🔗 |
| C | [AzureDiscovery](/v1.3.15/zh/api/core-extra/AzureDiscovery.md) | 🔗 |
| C | [BasePath](/v1.3.15/zh/api/core-extra/BasePath.md) | 🔗 |
| C | [bin](/v1.3.15/zh/api/core-extra/bin.md) | 🔗 |
| C | [BinaryReader](/v1.3.15/zh/api/core-extra/BinaryReader.md) | 🔗 |
| C | [BinaryWriter](/v1.3.15/zh/api/core-extra/BinaryWriter.md) | 🔗 |
| C | [BindingPath](/v1.3.15/zh/api/core-extra/BindingPath.md) | 🔗 |
| C | [CachedDataAttribute](/v1.3.15/zh/api/core-extra/CachedDataAttribute.md) | 🔗 |
| C | [ClientProfiles](/v1.3.15/zh/api/core-extra/ClientProfiles.md) | 🔗 |
| S | [Color](/v1.3.15/zh/api/core-extra/Color.md) | 🔗 |
| C | [ColorExtensions](/v1.3.15/zh/api/core-extra/ColorExtensions.md) | 🔗 |
| C | [Colors](/v1.3.15/zh/api/core-extra/Colors.md) | 🔗 |
| C | [CommandLineArgumentFunction](/v1.3.15/zh/api/core-extra/CommandLineArgumentFunction.md) | 🔗 |
| C | [CommandLineFunctionality](/v1.3.15/zh/api/core-extra/CommandLineFunctionality.md) | 🔗 |
| C | [Common](/v1.3.15/zh/api/core-extra/Common.md) | 🔗 |
| E | [ComparerType](/v1.3.15/zh/api/core-extra/ComparerType.md) | 🔗 |
| C | [ConfigurationManager](/v1.3.15/zh/api/core-extra/ConfigurationManager.md) | 🔗 |
| S | [Corners](/v1.3.15/zh/api/core-extra/Corners.md) | 🔗 |
| C | [CubicBezier](/v1.3.15/zh/api/core-extra/CubicBezier.md) | 🔗 |
| C | DataSourceProperty | — |
| C | [Debug](/v1.3.15/zh/api/core-extra/Debug.md) | 🔗 |
| E | [DebugColor](/v1.3.15/zh/api/core-extra/DebugColor.md) | 🔗 |
| E | [DebugSystemFilter](/v1.3.15/zh/api/core-extra/DebugSystemFilter.md) | 🔗 |
| E | [DebugUserFilter](/v1.3.15/zh/api/core-extra/DebugUserFilter.md) | 🔗 |
| C | [DefaultParallelDriver](/v1.3.15/zh/api/core-extra/DefaultParallelDriver.md) | 🔗 |
| E | [DiamondDebugCategory](/v1.3.15/zh/api/core-extra/DiamondDebugCategory.md) | 🔗 |
| C | [DiamondDebugManager](/v1.3.15/zh/api/core-extra/DiamondDebugManager.md) | 🔗 |
| C | [EngineMethod](/v1.3.15/zh/api/core-extra/EngineMethod.md) | 🔗 |
| E | [EngineType](/v1.3.15/zh/api/core-extra/EngineType.md) | 🔗 |
| C | [EnumHelper](/v1.3.15/zh/api/core-extra/EnumHelper.md) | 🔗 |
| C | Extensions | — |
| C | [FileHelper](/v1.3.15/zh/api/core-extra/FileHelper.md) | 🔗 |
| C | [FileHelperExtensions](/v1.3.15/zh/api/core-extra/FileHelperExtensions.md) | 🔗 |
| S | [FogInformation](/v1.3.15/zh/api/core-extra/FogInformation.md) | 🔗 |
| C | [GenericComparer](/v1.3.15/zh/api/core-extra/GenericComparer.md) | 🔗 |
| E | [HTMLDebugCategory](/v1.3.15/zh/api/core-extra/HTMLDebugCategory.md) | 🔗 |
| C | [HttpHelper](/v1.3.15/zh/api/core-extra/HttpHelper.md) | 🔗 |
| I | [ICache](/v1.3.15/zh/api/core-extra/ICache.md) | 🔗 |
| I | [IConfigurationManager](/v1.3.15/zh/api/core-extra/IConfigurationManager.md) | 🔗 |
| I | [IDebugManager](/v1.3.15/zh/api/core-extra/IDebugManager.md) | 🔗 |
| I | [IMBBindingList](/v1.3.15/zh/api/core-extra/IMBBindingList.md) | 🔗 |
| I | [IMBCollection](/v1.3.15/zh/api/core-extra/IMBCollection.md) | 🔗 |
| C | [InformationManager](/v1.3.15/zh/api/core-extra/InformationManager.md) | 🔗 |
| C | [InformationMessage](/v1.3.15/zh/api/core-extra/InformationMessage.md) | 🔗 |
| E | [InputType](/v1.3.15/zh/api/core-extra/InputType.md) | 🔗 |
| E | [InputUsageMask](/v1.3.15/zh/api/core-extra/InputUsageMask.md) | 🔗 |
| C | [InquiryData](/v1.3.15/zh/api/core-extra/InquiryData.md) | 🔗 |
| I | [IParallelDriver](/v1.3.15/zh/api/core-extra/IParallelDriver.md) | 🔗 |
| I | [IPlatformFileHelper](/v1.3.15/zh/api/core-extra/IPlatformFileHelper.md) | 🔗 |
| I | [IReader](/v1.3.15/zh/api/core-extra/IReader.md) | 🔗 |
| I | [ISerializableObject](/v1.3.15/zh/api/core-extra/ISerializableObject.md) | 🔗 |
| I | [ITask](/v1.3.15/zh/api/core-extra/ITask.md) | 🔗 |
| I | [ITelemetryManager](/v1.3.15/zh/api/core-extra/ITelemetryManager.md) | 🔗 |
| I | [IViewModel](/v1.3.15/zh/api/core-extra/IViewModel.md) | 🔗 |
| I | [IViewModelGetterInterface](/v1.3.15/zh/api/core-extra/IViewModelGetterInterface.md) | 🔗 |
| I | [IViewModelSetterInterface](/v1.3.15/zh/api/core-extra/IViewModelSetterInterface.md) | 🔗 |
| I | [IWriter](/v1.3.15/zh/api/core-extra/IWriter.md) | 🔗 |
| S | [LineSegment2D](/v1.3.15/zh/api/core-extra/LineSegment2D.md) | 🔗 |
| C | [ListChangedEventArgs](/v1.3.15/zh/api/core-extra/ListChangedEventArgs.md) | 🔗 |
| E | [ListChangedType](/v1.3.15/zh/api/core-extra/ListChangedType.md) | 🔗 |
| C | [Logger](/v1.3.15/zh/api/core-extra/Logger.md) | 🔗 |
| C | [MachineId](/v1.3.15/zh/api/core-extra/MachineId.md) | 🔗 |
| S | [ManagedArray](/v1.3.15/zh/api/core-extra/ManagedArray.md) | 🔗 |
| C | [ManagedDllFolder](/v1.3.15/zh/api/core-extra/ManagedDllFolder.md) | 🔗 |
| S | [Mat2](/v1.3.15/zh/api/core-extra/Mat2.md) | 🔗 |
| S | Mat3 | — |
| C | [MathF](/v1.3.15/zh/api/core-extra/MathF.md) | 🔗 |
| S | [MatrixFrame](/v1.3.15/zh/api/core-extra/MatrixFrame.md) | 🔗 |
| C | [MBArrayList](/v1.3.15/zh/api/core-extra/MBArrayList.md) | 🔗 |
| C | [MBBindingList](/v1.3.15/zh/api/core-extra/MBBindingList.md) | 🔗 |
| C | MBList | — |
| C | [MBList2D](/v1.3.15/zh/api/core-extra/MBList2D.md) | 🔗 |
| C | [MBMath](/v1.3.15/zh/api/core-extra/MBMath.md) | 🔗 |
| C | [MBQueue](/v1.3.15/zh/api/core-extra/MBQueue.md) | 🔗 |
| C | [MBReadOnlyDictionary](/v1.3.15/zh/api/core-extra/MBReadOnlyDictionary.md) | 🔗 |
| C | MBReadOnlyList | — |
| C | [MBReadOnlyQueue](/v1.3.15/zh/api/core-extra/MBReadOnlyQueue.md) | 🔗 |
| C | [MBSortedMultiList](/v1.3.15/zh/api/core-extra/MBSortedMultiList.md) | 🔗 |
| S | [MBStringBuilder](/v1.3.15/zh/api/core-extra/MBStringBuilder.md) | 🔗 |
| C | [MBUtil](/v1.3.15/zh/api/core-extra/MBUtil.md) | 🔗 |
| C | [MBWorkspace](/v1.3.15/zh/api/core-extra/MBWorkspace.md) | 🔗 |
| S | [NauticalInformation](/v1.3.15/zh/api/core-extra/NauticalInformation.md) | 🔗 |
| C | [NavigationPath](/v1.3.15/zh/api/core-extra/NavigationPath.md) | 🔗 |
| C | [ObjectInstanceTracker](/v1.3.15/zh/api/core-extra/ObjectInstanceTracker.md) | 🔗 |
| S | [Oriented2DArea](/v1.3.15/zh/api/core-extra/Oriented2DArea.md) | 🔗 |
| C | [ParameterContainer](/v1.3.15/zh/api/core-extra/ParameterContainer.md) | 🔗 |
| C | [ParameterFile](/v1.3.15/zh/api/core-extra/ParameterFile.md) | 🔗 |
| C | [ParameterLoader](/v1.3.15/zh/api/core-extra/ParameterLoader.md) | 🔗 |
| C | [Parameters](/v1.3.15/zh/api/core-extra/Parameters.md) | 🔗 |
| S | [PathFaceRecord](/v1.3.15/zh/api/core-extra/PathFaceRecord.md) | 🔗 |
| C | [PathFinder](/v1.3.15/zh/api/core-extra/PathFinder.md) | 🔗 |
| C | [PerformanceTestBlock](/v1.3.15/zh/api/core-extra/PerformanceTestBlock.md) | 🔗 |
| S | [PinnedArrayData](/v1.3.15/zh/api/core-extra/PinnedArrayData.md) | 🔗 |
| E | [Platform](/v1.3.15/zh/api/core-extra/Platform.md) | 🔗 |
| S | [PlatformDirectoryPath](/v1.3.15/zh/api/core-extra/PlatformDirectoryPath.md) | 🔗 |
| C | [PlatformFileHelperPC](/v1.3.15/zh/api/core-extra/PlatformFileHelperPC.md) | 🔗 |
| S | [PlatformFilePath](/v1.3.15/zh/api/core-extra/PlatformFilePath.md) | 🔗 |
| E | [PlatformFileType](/v1.3.15/zh/api/core-extra/PlatformFileType.md) | 🔗 |
| C | [PlatformInitParams](/v1.3.15/zh/api/core-extra/PlatformInitParams.md) | 🔗 |
| S | [PostProcessInformation](/v1.3.15/zh/api/core-extra/PostProcessInformation.md) | 🔗 |
| C | [PriorityQueue](/v1.3.15/zh/api/core-extra/PriorityQueue.md) | 🔗 |
| E | [ProfanityChechkerType](/v1.3.15/zh/api/core-extra/ProfanityChechkerType.md) | 🔗 |
| C | [ProfanityChecker](/v1.3.15/zh/api/core-extra/ProfanityChecker.md) | 🔗 |
| S | [PropertyChangedWithBoolValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithBoolValueEventArgs.md) | 🔗 |
| S | [PropertyChangedWithColorValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithColorValueEventArgs.md) | 🔗 |
| S | [PropertyChangedWithDoubleValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithDoubleValueEventArgs.md) | 🔗 |
| S | [PropertyChangedWithFloatValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithFloatValueEventArgs.md) | 🔗 |
| S | [PropertyChangedWithIntValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithIntValueEventArgs.md) | 🔗 |
| S | [PropertyChangedWithUIntValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithUIntValueEventArgs.md) | 🔗 |
| S | [PropertyChangedWithValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithValueEventArgs.md) | 🔗 |
| S | [PropertyChangedWithVec2ValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithVec2ValueEventArgs.md) | 🔗 |
| S | [Quaternion](/v1.3.15/zh/api/core-extra/Quaternion.md) | 🔗 |
| S | [RainInformation](/v1.3.15/zh/api/core-extra/RainInformation.md) | 🔗 |
| S | [Ray](/v1.3.15/zh/api/core-extra/Ray.md) | 🔗 |
| C | [ResourceDepot](/v1.3.15/zh/api/core-extra/ResourceDepot.md) | 🔗 |
| C | [ResourceDepotFile](/v1.3.15/zh/api/core-extra/ResourceDepotFile.md) | 🔗 |
| C | [ResourceDepotLocation](/v1.3.15/zh/api/core-extra/ResourceDepotLocation.md) | 🔗 |
| E | [Runtime](/v1.3.15/zh/api/core-extra/Runtime.md) | 🔗 |
| E | [SaveResult](/v1.3.15/zh/api/core-extra/SaveResult.md) | 🔗 |
| S | [SaveResultWithMessage](/v1.3.15/zh/api/core-extra/SaveResultWithMessage.md) | 🔗 |
| C | [ScopedTimer](/v1.3.15/zh/api/core-extra/ScopedTimer.md) | 🔗 |
| C | [SerialTask](/v1.3.15/zh/api/core-extra/SerialTask.md) | 🔗 |
| C | [SingleThreadedSynchronizationContext](/v1.3.15/zh/api/core-extra/SingleThreadedSynchronizationContext.md) | 🔗 |
| C | [SingleThreadedSynchronizationContextManager](/v1.3.15/zh/api/core-extra/SingleThreadedSynchronizationContextManager.md) | 🔗 |
| S | [SkyInformation](/v1.3.15/zh/api/core-extra/SkyInformation.md) | 🔗 |
| S | [SnowInformation](/v1.3.15/zh/api/core-extra/SnowInformation.md) | 🔗 |
| C | [SRTHelper](/v1.3.15/zh/api/core-extra/SRTHelper.md) | 🔗 |
| C | [SrtParser](/v1.3.15/zh/api/core-extra/SrtParser.md) | 🔗 |
| S | [StackArray8Vec3](/v1.3.15/zh/api/core-extra/StackArray8Vec3.md) | 🔗 |
| C | [StreamHelpers](/v1.3.15/zh/api/core-extra/StreamHelpers.md) | 🔗 |
| C | [StringReader](/v1.3.15/zh/api/core-extra/StringReader.md) | 🔗 |
| C | [StringWriter](/v1.3.15/zh/api/core-extra/StringWriter.md) | 🔗 |
| C | [SubtitleItem](/v1.3.15/zh/api/core-extra/SubtitleItem.md) | 🔗 |
| S | [SunInformation](/v1.3.15/zh/api/core-extra/SunInformation.md) | 🔗 |
| E | [TelemetryLevelMask](/v1.3.15/zh/api/core-extra/TelemetryLevelMask.md) | 🔗 |
| C | [TestCommonBase](/v1.3.15/zh/api/core-extra/TestCommonBase.md) | 🔗 |
| C | [TestContext](/v1.3.15/zh/api/core-extra/TestContext.md) | 🔗 |
| C | [TextInquiryData](/v1.3.15/zh/api/core-extra/TextInquiryData.md) | 🔗 |
| C | [TimedDictionaryCache](/v1.3.15/zh/api/core-extra/TimedDictionaryCache.md) | 🔗 |
| S | [TimeInformation](/v1.3.15/zh/api/core-extra/TimeInformation.md) | 🔗 |
| C | [TooltipBaseVM](/v1.3.15/zh/api/core-extra/TooltipBaseVM.md) | 🔗 |
| S | [TooltipRegistry](/v1.3.15/zh/api/core-extra/TooltipRegistry.md) | 🔗 |
| S | [Transformation](/v1.3.15/zh/api/core-extra/Transformation.md) | 🔗 |
| C | [TWException](/v1.3.15/zh/api/core-extra/TWException.md) | 🔗 |
| C | [TWParallel](/v1.3.15/zh/api/core-extra/TWParallel.md) | 🔗 |
| C | [TWSharedMutex](/v1.3.15/zh/api/core-extra/TWSharedMutex.md) | 🔗 |
| S | [TWSharedMutexReadLock](/v1.3.15/zh/api/core-extra/TWSharedMutexReadLock.md) | 🔗 |
| S | [TWSharedMutexWriteLock](/v1.3.15/zh/api/core-extra/TWSharedMutexWriteLock.md) | 🔗 |
| C | [TWXmlLoadException](/v1.3.15/zh/api/core-extra/TWXmlLoadException.md) | 🔗 |
| C | [UiStringHelper](/v1.3.15/zh/api/core-extra/UiStringHelper.md) | 🔗 |
| C | [UniqueSceneId](/v1.3.15/zh/api/core-extra/UniqueSceneId.md) | 🔗 |
| S | Vec2 | — |
| S | [Vec2i](/v1.3.15/zh/api/core-extra/Vec2i.md) | 🔗 |
| S | Vec3 | — |
| S | [Vec3i](/v1.3.15/zh/api/core-extra/Vec3i.md) | 🔗 |
| C | ViewModel | — |
| C | [VirtualDirectoryAttribute](/v1.3.15/zh/api/core-extra/VirtualDirectoryAttribute.md) | 🔗 |
| C | [VirtualFileAttribute](/v1.3.15/zh/api/core-extra/VirtualFileAttribute.md) | 🔗 |
| C | [VirtualFolders](/v1.3.15/zh/api/core-extra/VirtualFolders.md) | 🔗 |
| C | [Win64_Shipping_Client](/v1.3.15/zh/api/core-extra/Win64_Shipping_Client.md) | 🔗 |

## TaleWorlds.Library.CodeGeneration (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClassCode](/v1.3.15/zh/api/core-extra/ClassCode.md) | 🔗 |
| E | [ClassCodeAccessModifier](/v1.3.15/zh/api/core-extra/ClassCodeAccessModifier.md) | 🔗 |
| C | [CodeBlock](/v1.3.15/zh/api/core-extra/CodeBlock.md) | 🔗 |
| C | [CodeGenerationContext](/v1.3.15/zh/api/core-extra/CodeGenerationContext.md) | 🔗 |
| C | [CodeGenerationFile](/v1.3.15/zh/api/core-extra/CodeGenerationFile.md) | 🔗 |
| C | [CommentSection](/v1.3.15/zh/api/core-extra/CommentSection.md) | 🔗 |
| C | [ConstructorCode](/v1.3.15/zh/api/core-extra/ConstructorCode.md) | 🔗 |
| C | [MethodCode](/v1.3.15/zh/api/core-extra/MethodCode.md) | 🔗 |
| E | [MethodCodeAccessModifier](/v1.3.15/zh/api/core-extra/MethodCodeAccessModifier.md) | 🔗 |
| E | [MethodCodePolymorphismInfo](/v1.3.15/zh/api/core-extra/MethodCodePolymorphismInfo.md) | 🔗 |
| C | [NamespaceCode](/v1.3.15/zh/api/core-extra/NamespaceCode.md) | 🔗 |
| C | [VariableCode](/v1.3.15/zh/api/core-extra/VariableCode.md) | 🔗 |
| E | [VariableCodeAccessModifier](/v1.3.15/zh/api/core-extra/VariableCodeAccessModifier.md) | 🔗 |

## TaleWorlds.Library.EventSystem (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DictionaryByType](/v1.3.15/zh/api/core-extra/DictionaryByType.md) | 🔗 |
| C | [EventBase](/v1.3.15/zh/api/core-extra/EventBase.md) | 🔗 |
| C | EventManager | — |

## TaleWorlds.Library.Graph (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GraphLinePointVM](/v1.3.15/zh/api/core-extra/GraphLinePointVM.md) | 🔗 |
| C | [GraphLineVM](/v1.3.15/zh/api/core-extra/GraphLineVM.md) | 🔗 |
| C | [GraphVM](/v1.3.15/zh/api/core-extra/GraphVM.md) | 🔗 |

## TaleWorlds.Library.Http (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DotNetHttpDriver](/v1.3.15/zh/api/core-extra/DotNetHttpDriver.md) | 🔗 |
| C | [HttpDriverManager](/v1.3.15/zh/api/core-extra/HttpDriverManager.md) | 🔗 |
| C | [HttpGetRequest](/v1.3.15/zh/api/core-extra/HttpGetRequest.md) | 🔗 |
| C | [HttpPostRequest](/v1.3.15/zh/api/core-extra/HttpPostRequest.md) | 🔗 |
| E | [HttpRequestTaskState](/v1.3.15/zh/api/core-extra/HttpRequestTaskState.md) | 🔗 |
| I | [IHttpDriver](/v1.3.15/zh/api/core-extra/IHttpDriver.md) | 🔗 |
| I | [IHttpRequestTask](/v1.3.15/zh/api/core-extra/IHttpRequestTask.md) | 🔗 |

## TaleWorlds.Library.Information (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [TooltipTriggerVM](/v1.3.15/zh/api/core-extra/TooltipTriggerVM.md) | 🔗 |

## TaleWorlds.Library.NewsManager (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [NewsItem](/v1.3.15/zh/api/core-extra/NewsItem.md) | 🔗 |
| C | [NewsManager](/v1.3.15/zh/api/core-extra/NewsManager.md) | 🔗 |
| S | [NewsType](/v1.3.15/zh/api/core-extra/NewsType.md) | 🔗 |
| E | [NewsTypes](/v1.3.15/zh/api/core-extra/NewsTypes.md) | 🔗 |
