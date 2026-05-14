---
title: 导出与托管桥接 / Exports and Managed Bridge
description: TaleWorlds.Native.dll v1.3.15 导出函数、启动入口和托管互操作桥接
---

# 导出与托管桥接 / Exports and Managed Bridge

本页聚焦 `TaleWorlds.Native.dll` v1.3.15 与托管层之间的连接点。它补充 [原生接口 / Native Reference](../native/)：托管文档说明 C# 侧如何调用接口，本页说明 DLL 侧能看到哪些入口、回调和原生类型名线索。

## 启动入口 / Startup Exports

| 导出符号 | 序号线索 | 头文件声明 | 源码实现 | 说明 |
|----------|----------|------------|----------|------|
| `WotsMain` | 27 | `TaleWorlds.Native.dll.h:2488` | `TaleWorlds.Native.dll.c:82473` | 主入口变体 |
| `WotsMainNative` | 28 | `TaleWorlds.Native.dll.h:2489` | `TaleWorlds.Native.dll.c:82490` | Native 主入口变体 |
| `WotsMainNativeCoreCLR` | 29 | `TaleWorlds.Native.dll.h:2490` | `TaleWorlds.Native.dll.c:82507` | CoreCLR Native 入口变体 |
| `WotsMainNativeSDLL` | 30 | `TaleWorlds.Native.dll.h:2478` | `TaleWorlds.Native.dll.c:81586` | Native SDLL 入口 |
| `WotsMainSDLL` | 31 | `TaleWorlds.Native.dll.h:2477` | `TaleWorlds.Native.dll.c:81569` | Starter 托管侧 `MBDotNet.WotsMainDotNet` 导入的入口 |

`WotsMainSDLL` 是托管启动代码最直接可见的入口。在 [LibraryApplicationInterface 文档](../native/LibraryApplicationInterface.md) 中，`MBDotNet.WotsMainDotNet` 通过 `DllImport("TaleWorlds.Native.dll", EntryPoint = "WotsMainSDLL")` 绑定到它。

## 回调注册导出 / Callback Registration Exports

| 导出符号 | 序号线索 | 头文件声明 | 源码实现 | 托管侧用途 |
|----------|----------|------------|----------|------------|
| `pass_controller_methods` | 34 | `TaleWorlds.Native.dll.h:15415` | `TaleWorlds.Native.dll.c:1316414` | 接收当前 AppDomain / controller 初始化委托 |
| `pass_managed_initialize_method_pointer` | 35 | `TaleWorlds.Native.dll.h:15416` | `TaleWorlds.Native.dll.c:1316424` | 接收托管初始化委托 |
| `pass_managed_library_callback_method_pointers` | 36 | `TaleWorlds.Native.dll.h:15414` | `TaleWorlds.Native.dll.c:1316402` | 接收托管库回调方法指针 |

反编译源码中还能看到这三个导出被作为一组传递或保存：

- `TaleWorlds.Native.dll.c:323564-323565` 附近把 `pass_controller_methods`、`pass_managed_initialize_method_pointer`、`pass_managed_library_callback_method_pointers` 作为连续参数使用。
- `TaleWorlds.Native.dll.c:1318122-1318124` 附近将这三个符号放入局部结构/表中。

这些位置是分析启动流程时的关键锚点。

## 托管启动顺序 / Managed Startup Sequence

```text
MBDotNet.PassControllerMethods(delegate)
MBDotNet.PassManagedInitializeMethodPointerDotNet(delegate)
MBDotNet.PassManagedEngineCallbackMethodPointersDotNet(delegate)
MBDotNet.WotsMainDotNet(args)
    ↓
TaleWorlds.Native.dll
    stores managed delegates and prepares native callback tables
    ↓
Managed library / engine callbacks
    call back into managed generated code
    ↓
ScriptingInterfaceObjects.SetFunctionPointer(id, pointer)
    ↓
LibraryApplicationInterface.SetObjects(...)
```

上述顺序是从托管 DllImport 声明和 DLL 导出语义整理出的分析路径。具体调用时机仍需结合 `TaleWorlds.Starter.Library` 的启动代码确认。

## 回调 vftable 线索 / Callback Vftable Clues

| vftable 字符串 | 源码位置示例 | 说明 |
|----------------|--------------|------|
| `Managed_library_callbacks::vftable` | `TaleWorlds.Native.dll.c:1316384`, `1316454` | 托管库级回调对象 |
| `Managed_engine_callbacks::vftable` | `TaleWorlds.Native.dll.c:293800`, `294217` | 托管引擎级回调对象 |
| `Managed_core_callbacks::vftable` | `TaleWorlds.Native.dll.c:1001044`, `1011573` | 核心回调对象 |

这些 vftable 写入通常出现在构造、重置或回调对象初始化附近。向上追构造函数、向下追调用点，可以把导出函数与后续托管回调联系起来。

## FTDN 原生包装类型 / FTDN Native Wrapper Types

`ftdn*` 类型是托管 `NativeObject` 系列最容易定位的原生类型名。

| 原生字符串 | 源码位置示例 | C# 包装 |
|------------|--------------|---------|
| `ftdnNative_array` | `TaleWorlds.Native.dll.c:81262`, `87953`, `1318173`, `1319758` | `NativeArray` / `INativeArray` |
| `ftdnNative_object_array` | `TaleWorlds.Native.dll.c:81300`, `1319828`, `1320048` | `NativeObjectArray` / `INativeObjectArray` |
| `ftdnNative_string` | `TaleWorlds.Native.dll.c:81319`, `1319926`, `1320072` | `NativeString` / `INativeString` |

托管侧的 `[EngineClass("ftdnNative_array")]` 等特性在 [EngineClass 与 EngineMethod](../native/EngineMethod.md) 中有说明。反编译侧的字符串和 vftable 写入可以用来追踪原生对象创建、引用计数和跨边界返回值。

## 脚本组件桥接 / Script Component Bridge

| 原生字符串 | 源码位置示例 | 说明 |
|------------|--------------|------|
| `rglNative_script_component` | `TaleWorlds.Native.dll.c:73039`, `700152`, `700178`, `721195` | 原生脚本组件类型，位于场景对象/组件体系内 |

该类型与 `rglScript_component`、`rglManaged_script_component` 同属场景脚本组件分析入口。详见 [场景系统](./scene.md)。

## 与托管 Native 文档的对应关系 / Mapping To Managed Native Reference

| 托管文档 | 原生侧锚点 |
|----------|------------|
| [NativeObject](../native/NativeObject.md) | `IManaged` 引用计数、`EngineClass` 类型注册、`ftdn*` 原生对象 |
| [INativeArray](../native/INativeArray.md) | `ftdnNative_array` 字符串、vftable 写入、`create/get_data_*` 系列方法 |
| [INativeString](../native/INativeString.md) | `ftdnNative_string` 字符串和字符串 helper |
| [INativeObjectArray](../native/INativeObjectArray.md) | `ftdnNative_object_array` 字符串和对象数组方法 |
| [LibraryApplicationInterface](../native/LibraryApplicationInterface.md) | `pass_managed_library_callback_method_pointers`、`ScriptingInterfaceObjects.SetFunctionPointer` |
| [EngineMethod](../native/EngineMethod.md) | `[EngineMethod]` 名称与原生注册表/回调表之间的映射 |

## 常见排查入口 / Useful Investigation Anchors

| 线索 | 源码位置示例 | 用途 |
|------|--------------|------|
| `/nativeTest` | `TaleWorlds.Native.dll.c:88571`, `324126` | 启动参数或测试路径分析 |
| `Unable to find native module. Skipping asset preload` | `TaleWorlds.Native.dll.c:136632` | Native 模块资源预加载问题 |
| `../../Modules/Native/splash.bmp` | `TaleWorlds.Native.dll.c:316205` | Native 模块资源路径 |
| `Modules/Native/get_tileset.bat` | `TaleWorlds.Native.dll.c:319297`, `319389` | Tileset 缺失或过期提示 |

## 分析注意 / Analysis Notes

- 导出符号和序号线索来自反编译注释，建议用 PE 工具复核导出表。
- vftable 名称可作为类型定位线索，但反编译代码中的对象布局仍需要人工确认。
- 托管侧接口名比原生侧函数地址更稳定；写 Mod 时优先依赖托管 API。
- 地址和行号只适用于当前 v1.3.15 反编译样本。
