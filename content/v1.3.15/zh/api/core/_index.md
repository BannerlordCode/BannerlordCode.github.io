---
title: "core 目录"
description: TaleWorlds.Core 核心数据类型类参考目录
---

## 模块心智模型

`core` 是整座 API 的“地基词汇表”所在。在 TaleWorlds.Core 命名空间里，它集中承载了所有上层模块都要反复使用的底层原语：向量与矩阵数学（Vec2 / Vec3 / Mat3 / MatrixFrame）、通用容器（MBList / MBReadOnlyList），以及贯穿全引擎的异常体系（MBException 家族）。任何一个模块方法签名里出现的 `Vec2`、`MBList`，它们的定义都来自这一层——它是各桶之间能“互相听懂”的共同语言，也是依赖图最底层的叶子，几乎不被其他模块等待，反而是所有人都在引用它。

在本站点的文档切分中，`core` 桶本身只收录了最贴近“模组引导与游戏物件基类”的少数类型（ItemObject、MBSubModuleBase、Module）；而上述那套数学 / 集合 / 异常的真正文档被拆分到了 `../core-extra/`。理解这一点很关键：阅读本桶时你看到的是命名空间的“入口门面”，真正的底层词汇表要去 `core-extra` 查阅。

## 核心入口类型

本站 `core` 桶自身收录的引导型类型：

- [ItemObject](./ItemObject) — 所有可量化游戏物件的抽象基类（武器、护甲、坐骑等均派生自此）。
- [MBSubModuleBase](./MBSubModuleBase) — 模组的引导基类，`Initialize` / `OnSubModuleLoad` 是几乎每个 Mod 的起点。
- [Module](./Module) — 描述一个游戏模块（Module）的元数据与装配信息。

而 `core` 命名空间真正的“共享词汇表”位于 `../core-extra/`，其中最常用的入口类型包括：

- [Vec2](../core-extra/Vec2) — 二维向量，坐标、朝向、速度差最频繁的载体。
- [Vec3](../core-extra/Vec3) — 三维向量，世界空间位置与位移的基础。
- [Mat3](../core-extra/Mat3) — 3×3 旋转 / 缩放矩阵。
- [MatrixFrame](../core-extra/MatrixFrame) — 旋转矩阵 + 平移组成的变换帧，场景物体位姿的标准表达。
- [MBList](../core-extra/MBList) — 引擎内部最常见的可变列表容器，大量 API 直接返回它。
- [MBReadOnlyList](../core-extra/MBReadOnlyList) — 只读视图，用于安全地暴露内部集合。
- [MBException](../core-extra/MBException) — 引擎级异常基类，几乎所有 Core 抛错都继承自它。
- [MathF](../core-extra/MathF) — 单精度浮点数学工具集（Clamp、Lerp、Sqrt 等）。
- [MBMath](../core-extra/MBMath) — 更高层数学辅助（夹角、插值、投影等）。

## 与其他模块的关系

`core` 是依赖图最底层：engine、campaign、module 等所有桶都在 import 它的类型。你在 `../engine/` 里看到的 `Camera`、`BoundingBox`，其参数几乎全是 `Vec3` / `MatrixFrame`；`../core-extra/` 里的容器与数学工具则是上层逻辑拼装数据的积木。可把 `core` + `core-extra` 视为引擎的“标准库”，上层业务模块都是在这套词汇之上二次表达。

关于崩溃与异常边界——MBException 家族如何被捕获与上报——详见架构文档 [崩溃边界](../../architecture/crash-boundaries/)；若想从零理解一个 Mod 如何通过 `MBSubModuleBase` 接入引擎，可回看 [模块系统](../../architecture/module-system/)。

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

### M

- [MBSubModuleBase](./MBSubModuleBase)
- [Module](./Module)


<!-- END SECTION INDEX -->
