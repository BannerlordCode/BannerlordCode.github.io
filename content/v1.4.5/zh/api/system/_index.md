---
title: "system 目录"
description: 系统层类参考目录
---
## 模块心智模型

system 桶不是「SubModule 桶」，而是托管 C# 与 TaleWorlds.Native.dll 原生引擎之间的**桥与启动器**——它是整个框架最底层的承托层，所有上层模块（SubModule、GameManager、对象系统）都建立在这套引用管理与动态绑定契约之上。

这个桶收纳的是 `TaleWorlds.DotNet`、`TaleWorlds.Starter.Library` 与 `TaleWorlds.ObjectSystem` 中最底层的互操作类型。`MBDotNet` 是真正的启动入口：它用 `[DllImport("TaleWorlds.Native.dll")]` 把托管侧的 `WotsMainDotNet`、控制器方法指针与初始化指针单向推过 P/Invoke 边界，进入原生引擎。换句话说，游戏的「开机键」在原生侧，而 MBDotNet 是托管侧唯一能按下的那只手。

桶里大部分类型是「对象生命周期的搬运工」。原生引擎里的对象在托管侧需要 GC 句柄才不会被回收，于是有了 `ManagedObjectKeeper` / `NativeObjectKeeper`（两者都只持有一个 `GCHandle` 与延迟释放计时器）、`NativeObjectPointer`（原生指针的 struct 包装）、`ManagedObjectOwner`（所有权封装），以及 `IManaged` 这个「由引擎托管的对象」契约。理解这套 keeper 机制，才能明白为什么你在 mod 里拿到的许多对象不是普通 C# 实例，而是悬挂在原生堆上、由引擎统一记账的引用。

再往上，`LibraryApplicationInterface` 与 `LibraryInterfaceBase` 定义了「托管库如何绑定到原生库」的契约；`EngineClassTypeDefinition`、`INativeArray`、`NativeStringHelper`、`INativeString` 负责把原生类定义、数组、字符串在两侧之间翻译；`ObjectTypeRecord` 则是 `MBObjectBase` 各子类型的注册表——它们是对象系统（见 `../../architecture/module-system/`）得以运转的底层供给。整体而言，system 桶不是你日常会直接 new 的地方，而是你必须理解「对象为什么是这副样子」的元层。

## 核心入口类型

- [MBDotNet](./MBDotNet) — P/Invoke 启动器，单向跨入 TaleWorlds.Native.dll
- [LibraryApplicationInterface](./LibraryApplicationInterface) — 原生库对托管侧暴露的接口面
- [LibraryInterfaceBase](./LibraryInterfaceBase) — 标注库绑定的 Attribute
- [IManaged](./IManaged) — 「由引擎托管的对象」契约
- [ManagedObjectKeeper](./ManagedObjectKeeper) — 托管对象 GC 句柄
- [NativeObjectKeeper](./NativeObjectKeeper) — 原生对象 GC 句柄
- [NativeObjectPointer](./NativeObjectPointer) — 原生指针 struct 包装
- [ManagedObjectOwner](./ManagedObjectOwner) — 对象所有权封装
- [ObjectTypeRecord](./ObjectTypeRecord) — MBObjectBase 各子类型的注册表
- [NativeStringHelper](./NativeStringHelper) — 原生字符串编组
- [EngineClassTypeDefinition](./EngineClassTypeDefinition) — 原生类类型定义
- [ITelemetry](./ITelemetry) — 平台遥测服务

## 与其他模块的关系

system 桶只负责「桥与底座」，不负责业务。SubModule 的加载阶段与生命周期由上层 `../engine/` 与 `../../architecture/module-system/` 描述——本桶提供的 `MBDotNet` 入口与库绑定机制，正是那些阶段得以在原生/托管两侧来回穿越的底层通道。

另一方面，任何穿越边界时的失败（如 P/Invoke 异常、句柄泄漏）都属于崩溃边界范畴，详见 `../../architecture/crash-boundaries/`。写 SubModule 时你几乎不会直接引用这里，但若要理解「对象为何能跨模块共享」「为何不能随便长期持有引用」，必须回到本桶。

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

### C

- [CustomParameter](./CustomParameter)

### E

- [EmptyInputManager](./EmptyInputManager)
- [EngineClassTypeDefinition](./EngineClassTypeDefinition)
- [EngineStackArray](./EngineStackArray)
- [EpicAchievementService](./EpicAchievementService)
- [Error](./Error)

### F

- [ForcedAvatarService](./ForcedAvatarService)

### I

- [ILibrarySizeChecker](./ILibrarySizeChecker)
- [IManaged](./IManaged)
- [INativeArray](./INativeArray)
- [INativeObjectArray](./INativeObjectArray)
- [INativeString](./INativeString)
- [INativeStringHelper](./INativeStringHelper)
- [IObjectTypeRecord](./IObjectTypeRecord)
- [ITelemetry](./ITelemetry)

### L

- [LibraryApplicationInterface](./LibraryApplicationInterface)
- [LibraryInterfaceBase](./LibraryInterfaceBase)

### M

- [ManagedObjectKeeper](./ManagedObjectKeeper)
- [ManagedObjectOwner](./ManagedObjectOwner)
- [MBDotNet](./MBDotNet)
- [MBGUIDBasicTypeSerializer](./MBGUIDBasicTypeSerializer)

### N

- [NativeObjectKeeper](./NativeObjectKeeper)
- [NativeObjectPointer](./NativeObjectPointer)
- [NativeStringHelper](./NativeStringHelper)

### O

- [ObjectTypeRecord](./ObjectTypeRecord)


<!-- END SECTION INDEX -->
