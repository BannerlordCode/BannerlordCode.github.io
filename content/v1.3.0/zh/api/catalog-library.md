---
title: 基础库 Library 类目录 / Class Catalog
extra:
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
| S | [AmbientInformation](/v1.3.15/zh/api/core-extra/AmbientInformation) | 🔗 |
| C | [ApplicationPlatform](/v1.3.15/zh/api/core-extra/ApplicationPlatform) | 🔗 |
| S | [ApplicationVersion](/v1.3.15/zh/api/core-extra/ApplicationVersion) | 🔗 |
| C | [ApplicationVersionJsonConverter](/v1.3.15/zh/api/core-extra/ApplicationVersionJsonConverter) | 🔗 |
| E | [ApplicationVersionType](/v1.3.15/zh/api/core-extra/ApplicationVersionType) | 🔗 |
| S | [AreaInformation](/v1.3.15/zh/api/core-extra/AreaInformation) | 🔗 |
| C | [AssemblyLoader](/v1.3.15/zh/api/core-extra/AssemblyLoader) | 🔗 |
| C | [AsyncRunner](/v1.3.15/zh/api/core-extra/AsyncRunner) | 🔗 |
| S | [AtmosphereInfo](/v1.3.15/zh/api/core-extra/AtmosphereInfo) | 🔗 |
| C | [AwaitableAsyncRunner](/v1.3.15/zh/api/core-extra/AwaitableAsyncRunner) | 🔗 |
| C | [AzureDiscovery](/v1.3.15/zh/api/core-extra/AzureDiscovery) | 🔗 |
| C | [BasePath](/v1.3.15/zh/api/core-extra/BasePath) | 🔗 |
| C | [bin](/v1.3.15/zh/api/core-extra/bin) | 🔗 |
| C | [BinaryReader](/v1.3.15/zh/api/core-extra/BinaryReader) | 🔗 |
| C | [BinaryWriter](/v1.3.15/zh/api/core-extra/BinaryWriter) | 🔗 |
| C | [BindingPath](/v1.3.15/zh/api/core-extra/BindingPath) | 🔗 |
| C | [CachedDataAttribute](/v1.3.15/zh/api/core-extra/CachedDataAttribute) | 🔗 |
| C | [ClientProfiles](/v1.3.15/zh/api/core-extra/ClientProfiles) | 🔗 |
| S | [Color](/v1.3.15/zh/api/core-extra/Color) | 🔗 |
| C | [ColorExtensions](/v1.3.15/zh/api/core-extra/ColorExtensions) | 🔗 |
| C | [Colors](/v1.3.15/zh/api/core-extra/Colors) | 🔗 |
| C | [CommandLineArgumentFunction](/v1.3.15/zh/api/core-extra/CommandLineArgumentFunction) | 🔗 |
| C | [CommandLineFunctionality](/v1.3.15/zh/api/core-extra/CommandLineFunctionality) | 🔗 |
| C | [Common](/v1.3.15/zh/api/core-extra/Common) | 🔗 |
| E | [ComparerType](/v1.3.15/zh/api/core-extra/ComparerType) | 🔗 |
| C | [ConfigurationManager](/v1.3.15/zh/api/core-extra/ConfigurationManager) | 🔗 |
| S | [Corners](/v1.3.15/zh/api/core-extra/Corners) | 🔗 |
| C | [CubicBezier](/v1.3.15/zh/api/core-extra/CubicBezier) | 🔗 |
| C | DataSourceProperty | — |
| C | [Debug](/v1.3.15/zh/api/core-extra/Debug) | 🔗 |
| E | [DebugColor](/v1.3.15/zh/api/core-extra/DebugColor) | 🔗 |
| E | [DebugSystemFilter](/v1.3.15/zh/api/core-extra/DebugSystemFilter) | 🔗 |
| E | [DebugUserFilter](/v1.3.15/zh/api/core-extra/DebugUserFilter) | 🔗 |
| C | [DefaultParallelDriver](/v1.3.15/zh/api/core-extra/DefaultParallelDriver) | 🔗 |
| E | [DiamondDebugCategory](/v1.3.15/zh/api/core-extra/DiamondDebugCategory) | 🔗 |
| C | [DiamondDebugManager](/v1.3.15/zh/api/core-extra/DiamondDebugManager) | 🔗 |
| C | [EngineMethod](/v1.3.15/zh/api/core-extra/EngineMethod) | 🔗 |
| E | [EngineType](/v1.3.15/zh/api/core-extra/EngineType) | 🔗 |
| C | [EnumHelper](/v1.3.15/zh/api/core-extra/EnumHelper) | 🔗 |
| C | Extensions | — |
| C | [FileHelper](/v1.3.15/zh/api/core-extra/FileHelper) | 🔗 |
| C | [FileHelperExtensions](/v1.3.15/zh/api/core-extra/FileHelperExtensions) | 🔗 |
| S | [FogInformation](/v1.3.15/zh/api/core-extra/FogInformation) | 🔗 |
| C | [GenericComparer](/v1.3.15/zh/api/core-extra/GenericComparer) | 🔗 |
| E | [HTMLDebugCategory](/v1.3.15/zh/api/core-extra/HTMLDebugCategory) | 🔗 |
| C | [HttpHelper](/v1.3.15/zh/api/core-extra/HttpHelper) | 🔗 |
| I | [ICache](/v1.3.15/zh/api/core-extra/ICache) | 🔗 |
| I | [IConfigurationManager](/v1.3.15/zh/api/core-extra/IConfigurationManager) | 🔗 |
| I | [IDebugManager](/v1.3.15/zh/api/core-extra/IDebugManager) | 🔗 |
| I | [IMBBindingList](/v1.3.15/zh/api/core-extra/IMBBindingList) | 🔗 |
| I | [IMBCollection](/v1.3.15/zh/api/core-extra/IMBCollection) | 🔗 |
| C | [InformationManager](/v1.3.15/zh/api/core-extra/InformationManager) | 🔗 |
| C | [InformationMessage](/v1.3.15/zh/api/core-extra/InformationMessage) | 🔗 |
| E | [InputType](/v1.3.15/zh/api/core-extra/InputType) | 🔗 |
| E | [InputUsageMask](/v1.3.15/zh/api/core-extra/InputUsageMask) | 🔗 |
| C | [InquiryData](/v1.3.15/zh/api/core-extra/InquiryData) | 🔗 |
| I | [IParallelDriver](/v1.3.15/zh/api/core-extra/IParallelDriver) | 🔗 |
| I | [IPlatformFileHelper](/v1.3.15/zh/api/core-extra/IPlatformFileHelper) | 🔗 |
| I | [IReader](/v1.3.15/zh/api/core-extra/IReader) | 🔗 |
| I | [ISerializableObject](/v1.3.15/zh/api/core-extra/ISerializableObject) | 🔗 |
| I | [ITask](/v1.3.15/zh/api/core-extra/ITask) | 🔗 |
| I | [ITelemetryManager](/v1.3.15/zh/api/core-extra/ITelemetryManager) | 🔗 |
| I | [IViewModel](/v1.3.15/zh/api/core-extra/IViewModel) | 🔗 |
| I | [IViewModelGetterInterface](/v1.3.15/zh/api/core-extra/IViewModelGetterInterface) | 🔗 |
| I | [IViewModelSetterInterface](/v1.3.15/zh/api/core-extra/IViewModelSetterInterface) | 🔗 |
| I | [IWriter](/v1.3.15/zh/api/core-extra/IWriter) | 🔗 |
| S | [LineSegment2D](/v1.3.15/zh/api/core-extra/LineSegment2D) | 🔗 |
| C | [ListChangedEventArgs](/v1.3.15/zh/api/core-extra/ListChangedEventArgs) | 🔗 |
| E | [ListChangedType](/v1.3.15/zh/api/core-extra/ListChangedType) | 🔗 |
| C | [Logger](/v1.3.15/zh/api/core-extra/Logger) | 🔗 |
| C | [MachineId](/v1.3.15/zh/api/core-extra/MachineId) | 🔗 |
| S | [ManagedArray](/v1.3.15/zh/api/core-extra/ManagedArray) | 🔗 |
| C | [ManagedDllFolder](/v1.3.15/zh/api/core-extra/ManagedDllFolder) | 🔗 |
| S | [Mat2](/v1.3.15/zh/api/core-extra/Mat2) | 🔗 |
| S | Mat3 | — |
| C | [MathF](/v1.3.15/zh/api/core-extra/MathF) | 🔗 |
| S | [MatrixFrame](/v1.3.15/zh/api/core-extra/MatrixFrame) | 🔗 |
| C | [MBArrayList](/v1.3.15/zh/api/core-extra/MBArrayList) | 🔗 |
| C | [MBBindingList](/v1.3.15/zh/api/core-extra/MBBindingList) | 🔗 |
| C | MBList | — |
| C | [MBList2D](/v1.3.15/zh/api/core-extra/MBList2D) | 🔗 |
| C | [MBMath](/v1.3.15/zh/api/core-extra/MBMath) | 🔗 |
| C | [MBQueue](/v1.3.15/zh/api/core-extra/MBQueue) | 🔗 |
| C | [MBReadOnlyDictionary](/v1.3.15/zh/api/core-extra/MBReadOnlyDictionary) | 🔗 |
| C | MBReadOnlyList | — |
| C | [MBReadOnlyQueue](/v1.3.15/zh/api/core-extra/MBReadOnlyQueue) | 🔗 |
| C | [MBSortedMultiList](/v1.3.15/zh/api/core-extra/MBSortedMultiList) | 🔗 |
| S | [MBStringBuilder](/v1.3.15/zh/api/core-extra/MBStringBuilder) | 🔗 |
| C | [MBUtil](/v1.3.15/zh/api/core-extra/MBUtil) | 🔗 |
| C | [MBWorkspace](/v1.3.15/zh/api/core-extra/MBWorkspace) | 🔗 |
| S | [NauticalInformation](/v1.3.15/zh/api/core-extra/NauticalInformation) | 🔗 |
| C | [NavigationPath](/v1.3.15/zh/api/core-extra/NavigationPath) | 🔗 |
| C | [ObjectInstanceTracker](/v1.3.15/zh/api/core-extra/ObjectInstanceTracker) | 🔗 |
| S | [Oriented2DArea](/v1.3.15/zh/api/core-extra/Oriented2DArea) | 🔗 |
| C | [ParameterContainer](/v1.3.15/zh/api/core-extra/ParameterContainer) | 🔗 |
| C | [ParameterFile](/v1.3.15/zh/api/core-extra/ParameterFile) | 🔗 |
| C | [ParameterLoader](/v1.3.15/zh/api/core-extra/ParameterLoader) | 🔗 |
| C | [Parameters](/v1.3.15/zh/api/core-extra/Parameters) | 🔗 |
| S | [PathFaceRecord](/v1.3.15/zh/api/core-extra/PathFaceRecord) | 🔗 |
| C | [PathFinder](/v1.3.15/zh/api/core-extra/PathFinder) | 🔗 |
| C | [PerformanceTestBlock](/v1.3.15/zh/api/core-extra/PerformanceTestBlock) | 🔗 |
| S | [PinnedArrayData](/v1.3.15/zh/api/core-extra/PinnedArrayData) | 🔗 |
| E | [Platform](/v1.3.15/zh/api/core-extra/Platform) | 🔗 |
| S | [PlatformDirectoryPath](/v1.3.15/zh/api/core-extra/PlatformDirectoryPath) | 🔗 |
| C | [PlatformFileHelperPC](/v1.3.15/zh/api/core-extra/PlatformFileHelperPC) | 🔗 |
| S | [PlatformFilePath](/v1.3.15/zh/api/core-extra/PlatformFilePath) | 🔗 |
| E | [PlatformFileType](/v1.3.15/zh/api/core-extra/PlatformFileType) | 🔗 |
| C | [PlatformInitParams](/v1.3.15/zh/api/core-extra/PlatformInitParams) | 🔗 |
| S | [PostProcessInformation](/v1.3.15/zh/api/core-extra/PostProcessInformation) | 🔗 |
| C | [PriorityQueue](/v1.3.15/zh/api/core-extra/PriorityQueue) | 🔗 |
| E | [ProfanityChechkerType](/v1.3.15/zh/api/core-extra/ProfanityChechkerType) | 🔗 |
| C | [ProfanityChecker](/v1.3.15/zh/api/core-extra/ProfanityChecker) | 🔗 |
| S | [PropertyChangedWithBoolValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithBoolValueEventArgs) | 🔗 |
| S | [PropertyChangedWithColorValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithColorValueEventArgs) | 🔗 |
| S | [PropertyChangedWithDoubleValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithDoubleValueEventArgs) | 🔗 |
| S | [PropertyChangedWithFloatValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithFloatValueEventArgs) | 🔗 |
| S | [PropertyChangedWithIntValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithIntValueEventArgs) | 🔗 |
| S | [PropertyChangedWithUIntValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithUIntValueEventArgs) | 🔗 |
| S | [PropertyChangedWithValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithValueEventArgs) | 🔗 |
| S | [PropertyChangedWithVec2ValueEventArgs](/v1.3.15/zh/api/core-extra/PropertyChangedWithVec2ValueEventArgs) | 🔗 |
| S | [Quaternion](/v1.3.15/zh/api/core-extra/Quaternion) | 🔗 |
| S | [RainInformation](/v1.3.15/zh/api/core-extra/RainInformation) | 🔗 |
| S | [Ray](/v1.3.15/zh/api/core-extra/Ray) | 🔗 |
| C | [ResourceDepot](/v1.3.15/zh/api/core-extra/ResourceDepot) | 🔗 |
| C | [ResourceDepotFile](/v1.3.15/zh/api/core-extra/ResourceDepotFile) | 🔗 |
| C | [ResourceDepotLocation](/v1.3.15/zh/api/core-extra/ResourceDepotLocation) | 🔗 |
| E | [Runtime](/v1.3.15/zh/api/core-extra/Runtime) | 🔗 |
| E | [SaveResult](/v1.3.15/zh/api/core-extra/SaveResult) | 🔗 |
| S | [SaveResultWithMessage](/v1.3.15/zh/api/core-extra/SaveResultWithMessage) | 🔗 |
| C | [ScopedTimer](/v1.3.15/zh/api/core-extra/ScopedTimer) | 🔗 |
| C | [SerialTask](/v1.3.15/zh/api/core-extra/SerialTask) | 🔗 |
| C | [SingleThreadedSynchronizationContext](/v1.3.15/zh/api/core-extra/SingleThreadedSynchronizationContext) | 🔗 |
| C | [SingleThreadedSynchronizationContextManager](/v1.3.15/zh/api/core-extra/SingleThreadedSynchronizationContextManager) | 🔗 |
| S | [SkyInformation](/v1.3.15/zh/api/core-extra/SkyInformation) | 🔗 |
| S | [SnowInformation](/v1.3.15/zh/api/core-extra/SnowInformation) | 🔗 |
| C | [SRTHelper](/v1.3.15/zh/api/core-extra/SRTHelper) | 🔗 |
| C | [SrtParser](/v1.3.15/zh/api/core-extra/SrtParser) | 🔗 |
| S | [StackArray8Vec3](/v1.3.15/zh/api/core-extra/StackArray8Vec3) | 🔗 |
| C | [StreamHelpers](/v1.3.15/zh/api/core-extra/StreamHelpers) | 🔗 |
| C | [StringReader](/v1.3.15/zh/api/core-extra/StringReader) | 🔗 |
| C | [StringWriter](/v1.3.15/zh/api/core-extra/StringWriter) | 🔗 |
| C | [SubtitleItem](/v1.3.15/zh/api/core-extra/SubtitleItem) | 🔗 |
| S | [SunInformation](/v1.3.15/zh/api/core-extra/SunInformation) | 🔗 |
| E | [TelemetryLevelMask](/v1.3.15/zh/api/core-extra/TelemetryLevelMask) | 🔗 |
| C | [TestCommonBase](/v1.3.15/zh/api/core-extra/TestCommonBase) | 🔗 |
| C | [TestContext](/v1.3.15/zh/api/core-extra/TestContext) | 🔗 |
| C | [TextInquiryData](/v1.3.15/zh/api/core-extra/TextInquiryData) | 🔗 |
| C | [TimedDictionaryCache](/v1.3.15/zh/api/core-extra/TimedDictionaryCache) | 🔗 |
| S | [TimeInformation](/v1.3.15/zh/api/core-extra/TimeInformation) | 🔗 |
| C | [TooltipBaseVM](/v1.3.15/zh/api/core-extra/TooltipBaseVM) | 🔗 |
| S | [TooltipRegistry](/v1.3.15/zh/api/core-extra/TooltipRegistry) | 🔗 |
| S | [Transformation](/v1.3.15/zh/api/core-extra/Transformation) | 🔗 |
| C | [TWException](/v1.3.15/zh/api/core-extra/TWException) | 🔗 |
| C | [TWParallel](/v1.3.15/zh/api/core-extra/TWParallel) | 🔗 |
| C | [TWSharedMutex](/v1.3.15/zh/api/core-extra/TWSharedMutex) | 🔗 |
| S | [TWSharedMutexReadLock](/v1.3.15/zh/api/core-extra/TWSharedMutexReadLock) | 🔗 |
| S | [TWSharedMutexWriteLock](/v1.3.15/zh/api/core-extra/TWSharedMutexWriteLock) | 🔗 |
| C | [TWXmlLoadException](/v1.3.15/zh/api/core-extra/TWXmlLoadException) | 🔗 |
| C | [UiStringHelper](/v1.3.15/zh/api/core-extra/UiStringHelper) | 🔗 |
| C | [UniqueSceneId](/v1.3.15/zh/api/core-extra/UniqueSceneId) | 🔗 |
| S | Vec2 | — |
| S | [Vec2i](/v1.3.15/zh/api/core-extra/Vec2i) | 🔗 |
| S | Vec3 | — |
| S | [Vec3i](/v1.3.15/zh/api/core-extra/Vec3i) | 🔗 |
| C | ViewModel | — |
| C | [VirtualDirectoryAttribute](/v1.3.15/zh/api/core-extra/VirtualDirectoryAttribute) | 🔗 |
| C | [VirtualFileAttribute](/v1.3.15/zh/api/core-extra/VirtualFileAttribute) | 🔗 |
| C | [VirtualFolders](/v1.3.15/zh/api/core-extra/VirtualFolders) | 🔗 |
| C | [Win64_Shipping_Client](/v1.3.15/zh/api/core-extra/Win64_Shipping_Client) | 🔗 |

## TaleWorlds.Library.CodeGeneration (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClassCode](/v1.3.15/zh/api/core-extra/ClassCode) | 🔗 |
| E | [ClassCodeAccessModifier](/v1.3.15/zh/api/core-extra/ClassCodeAccessModifier) | 🔗 |
| C | [CodeBlock](/v1.3.15/zh/api/core-extra/CodeBlock) | 🔗 |
| C | [CodeGenerationContext](/v1.3.15/zh/api/core-extra/CodeGenerationContext) | 🔗 |
| C | [CodeGenerationFile](/v1.3.15/zh/api/core-extra/CodeGenerationFile) | 🔗 |
| C | [CommentSection](/v1.3.15/zh/api/core-extra/CommentSection) | 🔗 |
| C | [ConstructorCode](/v1.3.15/zh/api/core-extra/ConstructorCode) | 🔗 |
| C | [MethodCode](/v1.3.15/zh/api/core-extra/MethodCode) | 🔗 |
| E | [MethodCodeAccessModifier](/v1.3.15/zh/api/core-extra/MethodCodeAccessModifier) | 🔗 |
| E | [MethodCodePolymorphismInfo](/v1.3.15/zh/api/core-extra/MethodCodePolymorphismInfo) | 🔗 |
| C | [NamespaceCode](/v1.3.15/zh/api/core-extra/NamespaceCode) | 🔗 |
| C | [VariableCode](/v1.3.15/zh/api/core-extra/VariableCode) | 🔗 |
| E | [VariableCodeAccessModifier](/v1.3.15/zh/api/core-extra/VariableCodeAccessModifier) | 🔗 |

## TaleWorlds.Library.EventSystem (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DictionaryByType](/v1.3.15/zh/api/core-extra/DictionaryByType) | 🔗 |
| C | [EventBase](/v1.3.15/zh/api/core-extra/EventBase) | 🔗 |
| C | EventManager | — |

## TaleWorlds.Library.Graph (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GraphLinePointVM](/v1.3.15/zh/api/core-extra/GraphLinePointVM) | 🔗 |
| C | [GraphLineVM](/v1.3.15/zh/api/core-extra/GraphLineVM) | 🔗 |
| C | [GraphVM](/v1.3.15/zh/api/core-extra/GraphVM) | 🔗 |

## TaleWorlds.Library.Http (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DotNetHttpDriver](/v1.3.15/zh/api/core-extra/DotNetHttpDriver) | 🔗 |
| C | [HttpDriverManager](/v1.3.15/zh/api/core-extra/HttpDriverManager) | 🔗 |
| C | [HttpGetRequest](/v1.3.15/zh/api/core-extra/HttpGetRequest) | 🔗 |
| C | [HttpPostRequest](/v1.3.15/zh/api/core-extra/HttpPostRequest) | 🔗 |
| E | [HttpRequestTaskState](/v1.3.15/zh/api/core-extra/HttpRequestTaskState) | 🔗 |
| I | [IHttpDriver](/v1.3.15/zh/api/core-extra/IHttpDriver) | 🔗 |
| I | [IHttpRequestTask](/v1.3.15/zh/api/core-extra/IHttpRequestTask) | 🔗 |

## TaleWorlds.Library.Information (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [TooltipTriggerVM](/v1.3.15/zh/api/core-extra/TooltipTriggerVM) | 🔗 |

## TaleWorlds.Library.NewsManager (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [NewsItem](/v1.3.15/zh/api/core-extra/NewsItem) | 🔗 |
| C | [NewsManager](/v1.3.15/zh/api/core-extra/NewsManager) | 🔗 |
| S | [NewsType](/v1.3.15/zh/api/core-extra/NewsType) | 🔗 |
| E | [NewsTypes](/v1.3.15/zh/api/core-extra/NewsTypes) | 🔗 |
