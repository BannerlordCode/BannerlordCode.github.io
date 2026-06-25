---
title: Managed
description: Managed - .NET 运行时与引擎原生层的桥接入口
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Managed`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Managed

**命名空间:** TaleWorlds.DotNet
**模块:** TaleWorlds.DotNet
**类型:** static class
**领域:** 引擎核心 Engine Core

## 概述

`Managed

` 是霸主引擎中 .NET（托管）层与 C++ 原生层之间的核心桥接点。引擎启动时，原生层通过本类?

`Start

` 方法初始化托管运行时，注册回调管理器，并把所有引?API 函数指针传递给托管层。每帧的 

`ApplicationTick

` 也由原生层通过 

`[LibraryCallback]

` 调入本类，驱动托管对象的生命周期管理（GC、对象句柄回收）与各 

`IManagedComponent

` ?tick?
它还维护"脚本类型注册?——所有标记了 

`ScriptComponentParams

` 或含?

`EditableScriptComponentVariable

` 字段的类型都会被缓存其字段元数据（`_fieldsOfScriptsCached

`、`_editableFieldsOfScriptsCached

`），供引擎编辑器在运行时通过类名+字段名的哈希值快速反射读写字段值。这是霸?实体脚本组件"系统的基础设施?
模组开发者通常不直接调用本类，但理解其工作原理有助于理解引擎与脚本之间的交互边界?
## 心智模型

- **启动?*: 原生引擎 ?

`Managed.Start(components)

` ?

`AssemblyLoader.Initialize()

` ?注册 

`ManagedInitializeMethod

` 回调 ?原生引擎调用 

`Initialize()

` ?加载自动生成的回?DLL ?创建 

`ICallbackManager

` ?传递所有引擎回调委托?- **每帧 tick**: 原生层调?

`ApplicationTick(dt)

` ?

`ManagedObject.HandleManagedObjects()

` 回收弱引??

`DotNetObject.HandleDotNetObjects()

` ?

`NativeObject.HandleNativeObjects()

` ?各组?

`OnApplicationTick

`?- **类型注册**: 

`InitializeTypes

` / 

`AddTypes

` 把模组的脚本类型注册?

`_moduleTypes

` 字典，同时缓存每个类型的字段元数据（按类名哈希与字段名哈希索引），供引擎编辑器快速反射?- **字符串哈?*: 

`GetStringHashCode

` 使用 djb2 算法（初始?5381，`hash = hash*33 + c

`），所有脚本类型与字段的索引都基于此哈希?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`Closing

` \| 

`bool

` (internal) \| 引擎是否正在关闭 \|
\| 

`ModuleTypes

` \| 

`Dictionary&lt;string, Type&gt;

` (internal) \| 所有已注册的脚本类型，按类名索?\|
\| 

`NativeTelemetryManager

` \| 

`NativeTelemetryManager

` (internal) \| 原生遥测管理?\|
\| 

`ManagedCallbacksDll

` \| 

`string

` \| 自动生成的回?DLL 路径 \|

## 主要方法

### Start
`

`

`csharp
public static void Start(IEnumerable&lt;IManagedComponent&gt; components)
`

`

`
引擎启动入口。把组件加入 

`_components

`，设置不变文化，初始化程序集加载器，注册初始化回调，并调用每个组件的 

`OnStart

`?
### Initialize
`

`

`csharp
private static void Initialize()
`

`

`
由原生层回调。加载自动生成的回调 DLL，找?

`ICallbackManager

` 实现类并实例化，初始化回调管理器，把所有引擎回调委托传递给原生层，最后设?

`LibraryApplicationInterface

` 的脚本接口对象?
### ApplicationTick
`

`

`csharp
internal static void ApplicationTick(float dt)
`

`

`
每帧由原生层调用。处理托管对象回收、DotNet 对象句柄、原生对象句柄、GC、遥测更新，并调用每个组件的 

`OnApplicationTick

`?
### InitializeTypes / AddTypes
`

`

`csharp
public static void InitializeTypes(Dictionary&lt;string, Type&gt; types)
public static void AddTypes(Dictionary&lt;string, Type&gt; types)
`

`

`
注册脚本类型。`InitializeTypes

` 是首次注册（替换），

`AddTypes

` 是增量追加。两者都缓存每个类型的字段元数据：遍历所有字段（含继承层），读取 

`EditableScriptComponentVariable

` 特性确定可见性与字段名覆盖，按字符串哈希索引存入 

`_fieldsOfScriptsCached

` ?

`_editableFieldsOfScriptsCached

`?
### GetStringHashCode
`

`

`csharp
public static uint GetStringHashCode(string text)
`

`

`
使用 djb2 算法计算字符串的 32 位哈希。所有脚本类型与字段的索引键都基于此哈希?
### GetStackTraceStr / GetStackTraceRaw
`

`

`csharp
public static string GetStackTraceStr(int skipCount = 0)
public static string GetStackTraceRaw(int skipCount = 0)
`

`

`
获取格式化或原始堆栈跟踪字符串。`GetStackTraceRaw

` 输出 

`程序集路径@MetadataToken@ILOffset

` 格式，用于引擎崩溃报告?
### GetEditableFieldsOfClass / GetFieldOfClass
`

`

`csharp
internal static Dictionary&lt;uint, FieldInfo&gt; GetEditableFieldsOfClass(uint classNameHash)
internal static FieldInfo GetFieldOfClass(uint classNameHash, uint fieldNameHash)
`

`

`
按类名哈希与字段名哈希快速查找字段反射信息。引擎编辑器通过这两个方法在运行时读写脚本组件字段?
### CreateObjectClassInstanceWithPointer
`

`

`csharp
internal static ManagedObject CreateObjectClassInstanceWithPointer(string className, IntPtr pointer)
`

`

`
按类名查找类型，用接?

`IntPtr

` 的构造函数创建实例。引擎用此方法从原生指针创建对应的托管包装对象?
## 使用示例

### 示例: 注册自定义脚本组件类?**场景**: 模组定义了新的实体脚本组件，需要在引擎编辑器中可见?

`

`

`csharp
var myTypes = new Dictionary&lt;string, Type&gt;
{
    { "MyCustomComponent", typeof(MyCustomComponent) }
};
Managed.AddTypes(myTypes);
`

`

`
**要点**: 必须在引擎初始化阶段调用；字段若标记?

`[EditableScriptComponentVariable(true)]

` 则在编辑器中可编辑?
### 示例: 获取当前内存使用?**场景**: 模组想在调试界面显示托管堆内存?

`

`

`csharp
long memoryBytes = Managed.GetMemoryUsage(); // 内部调用 GC.GetTotalMemory
`

`

`
**要点**: 此方法标记为 

`[LibraryCallback]

`，通常由原生层调用，但模组也可直接调用?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
