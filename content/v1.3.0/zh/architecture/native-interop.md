---
title: 托管 / 原生互操作 / Managed-Native Interop
description: 解释 Bannerlord v1.3.0 的 C# 托管代码如何通过 EngineMethod 调用 TaleWorlds.Native.dll，以及 mod 开发者应如何安全跨越这条边界。
---
# 托管 / 原生互操作 / Managed-Native Interop

## 上级导航

- [首页 / Home](../../)
- [架构总览 / Architecture](./)
- [SDK 总览 / SDK Overview](../sdk-overview/)

## 同级导航

| 页面 | 解决什么问题 |
|------|------------|
| [SDK 总览](../sdk-overview/) | 全部模块地图 |
| [模块系统](../module-system/) | 生命周期与加载机制 |
| [存档系统](../save-system/) | 自定义数据持久化 |
| [版本差异](../version-delta/) | 后续版本改了什么 |

> **v1.3.0 提示**
> v1.3.0 的原生互操作机制与 v1.3.15 基本一致。由于 v1.3.0 没有单独反编译的原生源码目录，排查原生侧问题时请使用 [v1.3.15 Native 源码参考](../../../../v1.3.15/zh/native-1.3.15-src/)。跨版本迁移请同时参考 [跨版本类对比](../../../../versions/)。

## 原生源码在哪里 / Where the native source lives

反编译后的 `TaleWorlds.Native.dll` 源码按版本放在代码库同级目录。v1.3.0 可用的参考如下：

| 目录 | 版本 | 说明 |
|------|------|------|
| `native-1.3.15/` | v1.3.15 | 主参考；托管层与原生层映射一致时可优先查此目录，[完整索引](../../../../v1.3.15/zh/native-1.3.15-src/) |
| `native-1.4.5/` | v1.4.5 | 后续版本反编译；结构不同但可作为概念对照 |
| `native-1.3.0/` | — | 没有单独解压 |
| `native-1.2.9/` | — | 已移除，不再存在 |

---

## 心智模型

Bannerlord engine 分成两层：

- **托管层**：你写的 C# mod 代码，以及 `TaleWorlds.*` 程序集。
- **原生层**：`TaleWorlds.Native.dll`，包含渲染、物理、动画、音频和网络等 engine 实现。

托管代码并不直接调用原生函数。TaleWorlds 用 `[EngineMethod]` 和 `[EngineClass]` 特性把 C# 包装类映射到原生导出，形成一个**受控的互操作边界**。普通 mod 只需要使用托管包装类，不必关心函数指针或 exports。

---

## 调用流程

```
你的 mod 代码
    ↓ 调用 Mission.Scene、Camera.SetFovVertical、Vec3 等托管 API
TaleWorlds.Engine / TaleWorlds.MountAndBlade 等托管程序集
    ↓ [EngineMethod("native_name")] 接口方法
LibraryApplicationInterface.INative* 静态委托
    ↓ 函数指针（启动时由 TaleWorlds.Native.dll 注入）
TaleWorlds.Native.dll
```

启动时，`MBDotNet` 通过几个 DllImport 把原生函数指针交给 `ScriptingInterfaceObjects.SetFunctionPointer`。之后所有 `[EngineMethod]` 方法都走这些静态委托，而不是每次重新 P/Invoke。

---

## 常见托管 → 原生调用

下面这张表列出 mod 开发中经常碰到的调用。它们看起来是普通的 C# 属性/方法，实际都会进入原生 engine。

| 托管调用 | 包装类程序集 | 原生子系统 | 常见用途 |
|----------|--------------|-----------|----------|
| `Mission.Scene` | `TaleWorlds.MountAndBlade` | [场景系统](../../../../v1.3.15/zh/native-1.3.15-src/scene) | 获取当前任务所在的 Scene |
| `Camera.SetFovVertical` | `TaleWorlds.Engine` | [渲染系统](../../../../v1.3.15/zh/native-1.3.15-src/rendering) | 修改视野，做自定义相机 |
| `Agent.GetCurrentVelocity` | `TaleWorlds.MountAndBlade` | [物理系统](../../../../v1.3.15/zh/native-1.3.15-src/physics) | 读取 Agent 当前速度 |
| `Agent.SetTargetPosition` | `TaleWorlds.MountAndBlade` | [任务系统](../../../../v1.3.15/zh/native-1.3.15-src/mission) + [场景系统](../../../../v1.3.15/zh/native-1.3.15-src/scene) | 指引 Agent 移动/寻路 |
| `MBBounds`（含 `Min`、`Max`、`Center`） | `TaleWorlds.Library` | [工具函数 / 数学](../../../../v1.3.15/zh/native-1.3.15-src/utilities) | 包围盒计算 |
| `Mat3`（旋转矩阵） | `TaleWorlds.Library` | [工具函数 / 数学](../../../../v1.3.15/zh/native-1.3.15-src/utilities) | 坐标系转换 |
| `Vec3` 运算（`Distance`、`Normalize` 等） | `TaleWorlds.Library` | [工具函数 / 数学](../../../../v1.3.15/zh/native-1.3.15-src/utilities) | 3D 向量数学 |
| `GameEntity.SetGlobalFrame` | `TaleWorlds.Engine` | [场景系统](../../../../v1.3.15/zh/native-1.3.15-src/scene) | 移动/旋转场景实体 |
| `Scene.AddEntity` | `TaleWorlds.Engine` | [场景系统](../../../../v1.3.15/zh/native-1.3.15-src/scene) | 向场景添加新实体 |
| `Mission.GetCamera` | `TaleWorlds.MountAndBlade` | [渲染系统](../../../../v1.3.15/zh/native-1.3.15-src/rendering) | 获取当前渲染相机 |
| `Skeleton.SetFrameAtChannel` | `TaleWorlds.Engine` | [动画系统](../../../../v1.3.15/zh/native-1.3.15-src/animation) | 控制骨骼动画 |
| `SoundEvent.PlayEvent` | `TaleWorlds.Engine` | [音频系统](../../../../v1.3.15/zh/native-1.3.15-src/audio) | 播放 FMOD 音效 |

> 表格中的子系统链接指向 [v1.3.15 反编译源码参考](../../../../v1.3.15/zh/native-1.3.15-src/)。这些页面按地址段和字符串线索对 `TaleWorlds.Native.dll` 做了索引，适合排查崩溃、验证函数映射时使用。v1.3.0 与 v1.3.15 的核心映射相同，但具体函数地址可能不同。

---

## 原生接口文档索引

如果你想看 `[EngineClass]`、`[EngineMethod]`、`NativeObject`、字符串/数组包装等托管桥接细节，先读这些页面：

- [原生接口总览](../../../../v1.3.15/zh/native/)
- [EngineClass 与 EngineMethod 特性](../../../../v1.3.15/zh/native/EngineMethod)
- [NativeObject 基类](../../../../v1.3.15/zh/native/NativeObject)
- [IManaged 生命周期](../../../../v1.3.15/zh/native/IManaged)
- [INativeArray 数组包装](../../../../v1.3.15/zh/native/INativeArray)
- [INativeObjectArray 对象数组](../../../../v1.3.15/zh/native/INativeObjectArray)
- [INativeString 字符串包装](../../../../v1.3.15/zh/native/INativeString)
- [LibraryApplicationInterface 注册表](../../../../v1.3.15/zh/native/LibraryApplicationInterface)

---

## Native 源码参考索引

当托管接口满足不了排查需求时，可以追到 `TaleWorlds.Native.dll` 的反编译源码：

- [Native 1.3.15 源码参考总览](../../../../v1.3.15/zh/native-1.3.15-src/)
- [导出与托管桥接](../../../../v1.3.15/zh/native-1.3.15-src/exports-and-bridge)
- [完整函数目录](../../../../v1.3.15/zh/native-1.3.15-src/COMPLETE-FUNCTIONS)
- [完整类型参考](../../../../v1.3.15/zh/native-1.3.15-src/COMPLETE-TYPES)
- [引擎核心](../../../../v1.3.15/zh/native-1.3.15-src/engine-core)
- [渲染系统](../../../../v1.3.15/zh/native-1.3.15-src/rendering)
- [动画系统](../../../../v1.3.15/zh/native-1.3.15-src/animation)
- [物理系统](../../../../v1.3.15/zh/native-1.3.15-src/physics)
- [音频系统](../../../../v1.3.15/zh/native-1.3.15-src/audio)
- [网络系统](../../../../v1.3.15/zh/native-1.3.15-src/network)
- [任务系统](../../../../v1.3.15/zh/native-1.3.15-src/mission)
- [场景系统](../../../../v1.3.15/zh/native-1.3.15-src/scene)
- [工具函数](../../../../v1.3.15/zh/native-1.3.15-src/utilities)

---

## 什么情况下要碰原生层

| 场景 | 建议做法 |
|------|----------|
| 日常 mod 功能 | 只用托管 API，例如 `Agent`、`Mission`、`Scene`、`Camera` |
| 想知道某个 C# 方法对应哪个原生函数 | 在该方法上搜索 `[EngineMethod("...")]`，再查源码参考 |
| 崩溃栈停在 `TaleWorlds.Native.dll` | 用崩溃地址或字符串在 [完整函数目录](../../../../v1.3.15/zh/native-1.3.15-src/COMPLETE-FUNCTIONS) 中定位 |
| 需要新的原生能力 | 先确认托管层真的没有公开，再考虑 Harmony patch 或反射，而非直接 P/Invoke |

---

> **不要直接 P/Invoke 到 `TaleWorlds.Native.dll`.**
>
> `TaleWorlds.Native.dll` 的导出不是稳定 API。函数地址、签名和调用约定会在版本间变化，而且 engine 启动时才把函数指针注入到 `LibraryApplicationInterface`。直接写 `[DllImport("TaleWorlds.Native.dll")]` 会导致：
>
> - 版本升级后立刻失效；
> - 调用约定或引用计数不匹配，引发崩溃或内存泄漏；
> - 绕过 TaleWorlds 的初始化顺序，可能拿到空指针。
>
> 如果你真的需要调用未公开的导出，请通过 [导出与托管桥接](../../../../v1.3.15/zh/native-1.3.15-src/exports-and-bridge) 理解启动流程，并优先用 Harmony/反射调用已有的托管包装方法。

---

## 相关指南

- [SDK 总览](../sdk-overview/) — 各层模块地图与入口类
- [常见模式](../../../../v1.3.15/zh/guide/common-patterns/) — 代码组织和最佳实践
- [任务系统](../../../../v1.3.15/zh/guide/mission-system/) — Mission、Agent、MissionBehavior
- [战役系统](../../../../v1.3.15/zh/guide/campaign-system/) — CampaignBehavior 与世界地图
- [存档系统指南](../../../../v1.3.15/zh/guide/save-system-guide/) — 跨版本保存自定义数据
- [跨版本类对比](../../../../versions/) — 迁移前检查 API 变化

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [架构总览 / Architecture](./)
- [SDK 总览 / SDK Overview](../sdk-overview)
- [开发指南 / Guides](../../guide/)

## ↓ 子页面

- [原生接口 / Native Reference](../../../../v1.3.15/zh/native/)
- [Native 1.3.15 源码参考 / Native 1.3.15 Source Reference](../../../../v1.3.15/zh/native-1.3.15-src/)

<!-- END SECTION INDEX -->
