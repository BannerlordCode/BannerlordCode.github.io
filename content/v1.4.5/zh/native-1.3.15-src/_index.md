---
title: Native 1.3.15 源码参考 / Native 1.3.15 Source Reference
description: TaleWorlds.Native.dll v1.3.15 反编译源码参考文档
---
# Native 1.3.15 源码参考 / Native 1.3.15 Source Reference

## 心智模型

先把 `Native 1.3.15 源码参考` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本节整理 `TaleWorlds.Native.dll` v1.3.15 的反编译 C 源码和头文件，重点用于查找原生导出、托管桥接、引擎类型名、函数地址以及常见系统模块。

> 说明：源码来自反编译输出。`FUN_180...`、`DAT_180...`、`LAB_180...` 等名称是工具生成名，不是 TaleWorlds 原始符号名。函数语义需要结合字符串引用、vftable、导出表、托管接口和调用交叉引用继续确认。

## 文档范围 / Scope

| 页面 | 内容 |
|------|------|
| [导出与托管桥接](./exports-and-bridge) | `WotsMain*`、`pass_controller_methods`、`pass_managed_*`、`ftdnNative_*` 的启动与互操作关系 |
| [完整函数目录](./COMPLETE-FUNCTIONS) | 11,095 个已索引反编译函数的地址分段和查找方式 |
| [完整类型参考](./COMPLETE-TYPES) | `TaleWorlds.Native.dll.h` 中的 typedef、struct、union、enum 和 Win32/RTTI/PhysX 类型 |
| [引擎核心](./engine-core) | Core、托管回调、FTDN 接口、引用计数、线程和任务 |
| [渲染系统](./rendering) | D3D11、场景视图、网格、材质、纹理、后处理、地形、粒子和资源加载 |
| [动画系统](./animation) | 动画树、Agent/Human/Horse 动画、骨骼、动画剪辑和 morph |
| [物理系统](./physics) | PhysX 世界、刚体、碰撞、查询、过滤回调、布料和高度场 |
| [音频系统](./audio) | FMOD 管理器、声音事件、发射器和环境声 |
| [网络系统](./network) | MBNet UDP、服务端/客户端会话、接收任务和看门狗 |
| [任务系统](./mission) | Agent、Missile、导航、城镇实体和世界地图相关对象 |
| [场景系统](./scene) | Game object、脚本组件、编辑器、导航网格、道路、河流和植被 |
| [工具函数](./utilities) | 字符串、数学、异常、正则、类型信息、生产者/消费者和配置 |

## 源码统计 / Source Statistics

| 指标 | 数值 |
|------|------|
| 源码文件 | `TaleWorlds.Native.dll.c` |
| 源码总行数 | 1,905,930 |
| 头文件 | `TaleWorlds.Native.dll.h` |
| 头文件行数 | 33,875 |
| 已索引反编译函数 | 11,095 |
| 完整函数地址列表 | [COMPLETE-FUNCTIONS.md](./COMPLETE-FUNCTIONS) |
| Typedef 类型 | 349 |
| Struct 定义 | 146 |
| Union 定义 | 12 |
| Enum 定义 | 6 |

## 目录结构 / Directory Structure

```text
native-1.3.15-src/
├── index.md
├── exports-and-bridge.md
├── COMPLETE-FUNCTIONS.md
├── COMPLETE-TYPES.md
├── COMPLETE-FUNCTIONS.md
├── engine-core.md
├── rendering.md
├── animation.md
├── physics.md
├── audio.md
├── network.md
├── mission.md
├── scene.md
└── utilities.md
```

## 关键入口 / Key Entry Points

| 符号 | 位置 | 说明 |
|------|------|------|
| `WotsMainSDLL` | `TaleWorlds.Native.dll.h:2477` / `TaleWorlds.Native.dll.c:81569` | Starter 侧常用入口，托管层 `MBDotNet.WotsMainDotNet` 通过 DllImport 指向它 |
| `WotsMainNativeSDLL` | `TaleWorlds.Native.dll.h:2478` / `TaleWorlds.Native.dll.c:81586` | Native SDLL 入口 |
| `WotsMain` | `TaleWorlds.Native.dll.h:2488` / `TaleWorlds.Native.dll.c:82473` | 主入口变体 |
| `WotsMainNative` | `TaleWorlds.Native.dll.h:2489` / `TaleWorlds.Native.dll.c:82490` | Native 主入口变体 |
| `WotsMainNativeCoreCLR` | `TaleWorlds.Native.dll.h:2490` / `TaleWorlds.Native.dll.c:82507` | CoreCLR 入口变体 |
| `pass_controller_methods` | `TaleWorlds.Native.dll.h:15415` / `TaleWorlds.Native.dll.c:1316414` | 接收托管控制器初始化委托 |
| `pass_managed_initialize_method_pointer` | `TaleWorlds.Native.dll.h:15416` / `TaleWorlds.Native.dll.c:1316424` | 接收托管初始化委托 |
| `pass_managed_library_callback_method_pointers` | `TaleWorlds.Native.dll.h:15414` / `TaleWorlds.Native.dll.c:1316402` | 接收托管库回调方法指针 |
| `DllMain` | `TaleWorlds.Native.dll.h:21264` / `TaleWorlds.Native.dll.c:1787079` | Windows DLL 入口 |

## 托管互操作地图 / Managed Interop Map

```text
TaleWorlds.Starter.Library/MBDotNet.cs
    DllImport("TaleWorlds.Native.dll")
        WotsMainSDLL
        pass_controller_methods
        pass_managed_initialize_method_pointer
        pass_managed_library_callback_method_pointers
            ↓
TaleWorlds.Native.dll
    stores callbacks and exposes engine-side function pointers
            ↓
ScriptingInterfaceObjects.SetFunctionPointer(id, pointer)
            ↓
LibraryApplicationInterface
    IManaged, INativeArray, INativeObjectArray, INativeString,
    INativeStringHelper, ILibrarySizeChecker, ITelemetry
            ↓
NativeObject / NativeArray / NativeString / NativeObjectArray
```

更多启动和桥接细节见 [导出与托管桥接](./exports-and-bridge)。

## 原生类型名线索 / Native Type Name Clues

反编译源码中可以直接通过字符串定位部分引擎类型名。例如：

| 字符串 | 典型位置 | 对应托管层 |
|--------|----------|------------|
| `ftdnNative_array` | `TaleWorlds.Native.dll.c:81262`, `1318173` | `[EngineClass("ftdnNative_array")] NativeArray` |
| `ftdnNative_object_array` | `TaleWorlds.Native.dll.c:81300`, `1320048` | `[EngineClass("ftdnNative_object_array")] NativeObjectArray` |
| `ftdnNative_string` | `TaleWorlds.Native.dll.c:81319`, `1320072` | `[EngineClass("ftdnNative_string")] NativeString` |
| `rglNative_script_component` | `TaleWorlds.Native.dll.c:73039`, `700152` | 原生脚本组件，见 [场景系统](./scene) |

## 查找建议 / How To Search

1. 已知托管接口方法名时，先查 [原生接口文档](../native/) 中的 `[EngineMethod]`，再在反编译源码中搜索该原生方法名或附近注册逻辑。
2. 已知原生类型名时，搜索字符串，例如 `ftdnNative_string`、`rglScene`、`rglMaterial`，再沿附近 vftable 写入和构造函数向外追踪。
3. 已知函数地址时，先在 [COMPLETE-FUNCTIONS.md](./COMPLETE-FUNCTIONS) 确认函数是否已索引，再到源码中搜索 `FUN_` 名称。
4. 已知崩溃日志或字符串时，优先搜索错误文本。例如 `Unable to find native module`、`/nativeTest`、`Modules/Native/get_tileset.bat`。
5. 做版本对比时，不要复用地址作为稳定 API。地址只对当前 v1.3.15 反编译样本有效。

## 第三方和平台依赖 / Third-Party And Platform Dependencies

| 依赖 | 在文档中的位置 | 用途 |
|------|----------------|------|
| DirectX 11 / D3D11 | [渲染系统](./rendering) | GPU 设备、命令列表、纹理和后处理 |
| PhysX | [物理系统](./physics) | 刚体、碰撞、查询、布料和高度场 |
| FMOD | [音频系统](./audio) | 声音管理器、事件和空间音频 |
| Win32 / COM / CRT | [完整类型参考](./COMPLETE-TYPES), [工具函数](./utilities) | DLL 入口、窗口、异常、RTTI 和运行库支撑 |

## 注意事项 / Important Notes

- 本节是反编译源码参考，不等同于官方 SDK API。
- 反编译类型中的 `undefined*` 表示工具尚未恢复出准确类型。
- `COMPLETE-FUNCTIONS.md` 中的功能分类是按地址段和局部线索整理的索引，不应视为最终命名。
- 修改 Mod 时应优先使用托管 API；Native 源码参考主要用于理解崩溃、互操作边界和引擎行为。

---

**最后更新:** 2026-05-14  
**源码版本:** TaleWorlds.Native.dll v1.3.15

## 使用示例

```csharp
var example = new Native 1.3.15 源码参考();
```

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [版本首页](../)

## ↓ 子页面目录

- [COMPLETE-TYPES](./COMPLETE-TYPES)
- [任务系统 / Mission System](./mission)
- [动画系统 / Animation System](./animation)
- [场景系统 / Scene System](./scene)
- [完整函数目录 / Complete Function Catalog](./COMPLETE-FUNCTIONS)
- [导出与托管桥接 / Exports and Managed Bridge](./exports-and-bridge)
- [工具函数 / Utilities](./utilities)
- [引擎核心 / Engine Core](./engine-core)
- [渲染系统 / Rendering System](./rendering)
- [物理引擎 / Physics Engine](./physics)
- [网络系统 / Network System](./network)
- [音频系统 / Audio System](./audio)

<!-- END SECTION INDEX -->
