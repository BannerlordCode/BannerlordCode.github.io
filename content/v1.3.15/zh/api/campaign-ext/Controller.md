---
title: Controller
description: Controller - 引擎托管运行时控制器，桥接原生与托管代码
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Controller`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Controller
**命名空间:** TaleWorlds.DotNet
**模块:** TaleWorlds.DotNet
**类型:** static class

## 概述
`Controller

` ?Bannerlord 引擎启动时由原生层（C++）调用进入托管层?NET）的入口类。它负责根据宿主运行时（.NET Framework / .NET Core / Mono）选择合适的初始化路径，将引擎方法委托（engine methods）注册到托管端，并通过 

`GameApplicationDomainController

` 在当前应用域上加载游戏程序集?
类本身是静态的，所有状态（?

`_hostedByNative

`、`_passControllerMethods

` 等回调委托）均为进程级单例。原生层在启动时会通过 

`SetEngineMethodsAsMono

`、`SetEngineMethodsAsHostedDotNetCore

` ?

`SetEngineMethodsAsDotNet

` 中的一个进入托管层，这三个方法分别对应不同的运行时宿主，最终都会调用内部的 

`SetEngineMethodsAsHostedByNative

` 或直接保存委托并调用 

`Start

`?
## 心智模型
?

`Controller

` 视作"原生 ?托管"的握手层：原生引擎持有若干函数指针（用于传递控制器方法、托管初始化回调、托管回调），通过 P/Invoke 交给 

`Controller

`；`Controller

` 将其包装成委托，然后通过 

`PassControllerMethods

` 反向?

`LoadOnCurrentApplicationDomain

` 委托回传给原生，从而完成双向通信通道的建立。`OverrideManagedDllFolder

` 用于在原生侧动态覆盖托?DLL 的搜索目录?
## 主要属?本类无公开属性；以下为关键字段（私有但影响行为）?
\| 字段 \| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`RuntimeLibrary

` \| 

`Runtime

` \| 当前运行时类型（DotNet / DotNetCore / Mono），?

`SetEngineMethodsAs*

` 方法设置 \|
\| 

`_hostedByNative

` \| 

`bool

` \| 是否由原生宿主托管（Mono ?.NET Core?\|
\| 

`_passControllerMethods

` \| 

`Delegate

` \| 原生传入?传递控制器方法"委托 \|
\| 

`_passManagedInitializeMethod

` \| 

`Delegate

` \| .NET 路径下的托管初始化委?\|
\| 

`_passManagedCallbackMethod

` \| 

`Delegate

` \| .NET 路径下的托管回调委托 \|

## 主要方法
### SetEngineMethodsAsMono
`

`

`csharp
public static void SetEngineMethodsAsMono(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)
`

`

`
由原?Mono 宿主调用。将 

`RuntimeLibrary

` 设为 

`Runtime.Mono

`，把函数指针包装为委托后调用内部?

`SetEngineMethodsAsHostedByNative

` 并启动控制器?
### SetEngineMethodsAsHostedDotNetCore
`

`

`csharp
public static void SetEngineMethodsAsHostedDotNetCore(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)
`

`

`
由原?.NET Core 宿主调用。行为同上，?

`RuntimeLibrary

` 设为 

`Runtime.DotNetCore

`?
### SetEngineMethodsAsDotNet
`

`

`csharp
public static void SetEngineMethodsAsDotNet(Delegate passControllerMethods, Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod)
`

`

`
?.NET 路径。通过 

`RuntimeInformation.FrameworkDescription

` 自动判断?.NET Framework 还是 .NET Core/.NET 6，直接保存委托并调用 

`Start

`。此路径?

`_hostedByNative

` 保持 

`false

`，后?

`LoadOnCurrentApplicationDomain

` 会走 

`GameApplicationDomainController.Load

` 而非 

`LoadAsHostedByNative

`?
### OverrideManagedDllFolder
`

`

`csharp
[MonoPInvokeCallback]
public static void OverrideManagedDllFolder(IntPtr overridenFolderAsPointer)
`

`

`
原生侧回调，将指针解析为 ANSI 字符串后调用 

`ManagedDllFolder.OverrideManagedDllFolder

`，用于动态更改托?DLL 搜索目录?
### LoadOnCurrentApplicationDomain
`

`

`csharp
public static void LoadOnCurrentApplicationDomain(IntPtr gameDllNameAsPointer, IntPtr gameTypeNameAsPointer, int currentEngineAsInteger, int currentPlatformAsInteger)
`

`

`
由原生层通过 

`_passControllerMethods

` 委托回调进入。初始化 

`ApplicationPlatform

`，将私有路径追加到当?

`AppDomain

`，创?

`GameApplicationDomainController

`，并根据 

`_hostedByNative

` 选择 

`LoadAsHostedByNative

`（函数指针路径）?

`Load

`（委托路径）加载游戏 DLL 与类型?
## 使用示例
### 示例: 模组作者一般不应直接调?**场景**: 

`Controller

` 的所有公开方法都设计为被原生引?P/Invoke 调用，模组代码不应直接使用。了解其存在主要用于诊断启动期问题（?DLL 加载失败、运行时识别错误）?

`

`

`csharp
// 以下仅为说明：原生启动序列伪代码
// 1. 原生选择运行??调用对应 SetEngineMethodsAs*
// 2. Controller.Start() 内部?LoadOnCurrentApplicationDomain 委托回传给原?// 3. 原生回调 LoadOnCurrentApplicationDomain，进?GameApplicationDomainController
`

`

`
**要点**: 

`Controller

` 是单向入口，仅在引擎启动时使用；模组通过 

`MBSubModuleBase

` 等更高层 API 接入游戏?
## 参见
- [完整类目录](../catalog-campaign)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
