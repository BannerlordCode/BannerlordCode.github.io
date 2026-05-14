---
title: 完整函数目录 / Complete Function Catalog
description: TaleWorlds.Native.dll v1.3.15 反编译函数地址索引
---

# 完整函数目录 / Complete Function Catalog

本页整理 `TaleWorlds.Native.dll.c` 中已索引的 11,095 个反编译函数。完整地址列表保存在 [ALL-FUNCTIONS-LIST.txt](./ALL-FUNCTIONS-LIST.txt)，每行一个 `FUN_` 符号，按地址升序排列。

> 重要：`FUN_180...` 是反编译工具生成的函数名，并不代表原始函数名。下方分类主要用于缩小搜索范围；具体语义必须结合字符串引用、调用关系、vftable、导出表和托管 `[EngineMethod]` 映射确认。

## 总览 / Overview

| 项目 | 数值 |
|------|------|
| 已索引函数 | 11,095 |
| 首个函数 | `FUN_180001000` |
| 最后函数 | `FUN_180a21db0` |
| 完整列表 | [ALL-FUNCTIONS-LIST.txt](./ALL-FUNCTIONS-LIST.txt) |
| 源码文件 | `TaleWorlds.Native.dll.c` |
| 头文件声明 | `TaleWorlds.Native.dll.h` |

## 导出函数 / Named Exports

这些符号保留了可读名称，是启动和互操作分析的首选入口。

| 符号 | 头文件位置 | 源码位置 | 用途 |
|------|------------|----------|------|
| `WotsMainSDLL` | `TaleWorlds.Native.dll.h:2477` | `TaleWorlds.Native.dll.c:81569` | 托管 Starter 入口 |
| `WotsMainNativeSDLL` | `TaleWorlds.Native.dll.h:2478` | `TaleWorlds.Native.dll.c:81586` | Native SDLL 入口 |
| `WotsMain` | `TaleWorlds.Native.dll.h:2488` | `TaleWorlds.Native.dll.c:82473` | 主入口变体 |
| `WotsMainNative` | `TaleWorlds.Native.dll.h:2489` | `TaleWorlds.Native.dll.c:82490` | Native 主入口变体 |
| `WotsMainNativeCoreCLR` | `TaleWorlds.Native.dll.h:2490` | `TaleWorlds.Native.dll.c:82507` | CoreCLR Native 入口 |
| `pass_managed_library_callback_method_pointers` | `TaleWorlds.Native.dll.h:15414` | `TaleWorlds.Native.dll.c:1316402` | 托管库回调指针注册 |
| `pass_controller_methods` | `TaleWorlds.Native.dll.h:15415` | `TaleWorlds.Native.dll.c:1316414` | 托管 controller 初始化委托注册 |
| `pass_managed_initialize_method_pointer` | `TaleWorlds.Native.dll.h:15416` | `TaleWorlds.Native.dll.c:1316424` | 托管初始化委托注册 |
| `DllMain` | `TaleWorlds.Native.dll.h:21264` | `TaleWorlds.Native.dll.c:1787079` | Windows DLL 入口 |

详见 [导出与托管桥接](./exports-and-bridge.md)。

## 地址段索引 / Address Range Index

| 地址范围 | 已索引数量 | 主要用途 |
|----------|------------|----------|
| `0x180001000-0x180100000` | 1,564 | 启动、CRT、异常、基础运行库和早期引擎初始化 |
| `0x180100000-0x180200000` | 1,175 | 核心引擎、渲染和资源相关函数的密集区域 |
| `0x180200000-0x180300000` | 1,135 | 物理、查询、碰撞和部分运行时系统 |
| `0x180300000-0x180400000` | 1,120 | 动画、骨骼、Agent 视觉和资源处理 |
| `0x180400000-0x180500000` | 1,129 | Mission、Agent、装备、战斗逻辑和世界对象 |
| `0x180500000-0x180600000` | 1,113 | 场景、实体、编辑器、导航和地形相关逻辑 |
| `0x180600000-0x180700000` | 955 | 音频、FMOD、任务和部分引擎服务 |
| `0x180700000-0x180800000` | 1,163 | 网络、资源、场景组件和较大系统函数 |
| `0x180800000+` | 1,741 | 高地址段系统、运行库、尾部工具函数和异常支撑 |
| **总计** | **11,095** | |

## 地址段示例 / Range Samples

### 启动与早期初始化

```text
FUN_180001000
FUN_180001030
FUN_18000113a
FUN_1800012e2
FUN_1800014e1
...
FUN_180045730
WotsMainSDLL
WotsMainNativeSDLL
...
WotsMain
WotsMainNative
WotsMainNativeCoreCLR
```

### 托管桥接和 FTDN 区域

```text
pass_managed_library_callback_method_pointers
pass_controller_methods
pass_managed_initialize_method_pointer

ftdnNative_array
ftdnNative_object_array
ftdnNative_string
```

这些不是全部位于同一地址段，但它们构成 Native 与 C# `TaleWorlds.DotNet` 之间最重要的桥接线索。

### 高地址段尾部

```text
FUN_180a216d0
FUN_180a21730
FUN_180a21760
FUN_180a217b0
...
FUN_180a21d70
FUN_180a21d80
FUN_180a21db0
```

## 如何使用完整地址列表 / How To Use The Address List

1. 打开 [ALL-FUNCTIONS-LIST.txt](./ALL-FUNCTIONS-LIST.txt)。
2. 用地址前缀缩小范围，例如搜索 `FUN_180746` 或 `FUN_180a21`。
3. 回到 `TaleWorlds.Native.dll.c` 中搜索同名函数。
4. 查看函数附近的字符串、全局变量、vftable 写入和被调用函数。
5. 回到托管文档中查对应的 `[EngineMethod]` 或 `[EngineClass]` 名称。

## 推荐交叉引用路径 / Recommended Cross-Reference Paths

| 起点 | 下一步 |
|------|--------|
| 托管接口方法 | 查 [EngineMethod](../native/EngineMethod.md)，再搜索原生方法名或回调注册表 |
| `NativeObject` 崩溃 | 查 [NativeObject](../native/NativeObject.md)、`IManaged`、`increase_reference_count`、`decrease_reference_count` |
| 数组/字符串互操作 | 查 `ftdnNative_array`、`ftdnNative_string`、[INativeArray](../native/INativeArray.md)、[INativeString](../native/INativeString.md) |
| DLL 启动问题 | 查 `WotsMainSDLL`、`pass_controller_methods`、[导出与托管桥接](./exports-and-bridge.md) |
| 资源或 Native 模块问题 | 搜索 `Modules/Native`、`Unable to find native module`、`get_tileset.bat` |
| 场景脚本问题 | 搜索 `rglNative_script_component`，再看 [场景系统](./scene.md) |

## 注意事项 / Notes

- 本目录不提供函数体全文，避免在文档中复制大段反编译源码。
- 地址只适用于当前 v1.3.15 样本；不同补丁版本可能移动。
- 部分地址段标签是索引用语，不表示该段内每个函数都属于同一系统。
- 若需要确认导出序号和名称，建议使用 PE 导出表工具复核。

---

**最后更新:** 2026-05-14  
**源码版本:** TaleWorlds.Native.dll v1.3.15  
**总函数数:** 11,095
