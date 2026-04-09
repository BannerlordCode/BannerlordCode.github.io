---
title: Native 1.3.15 源码参考 / Native 1.3.15 Source Reference
description: TaleWorlds.Native.dll v1.3.15 反编译源码参考文档
---

# Native 1.3.15 源码参考 / Native 1.3.15 Source Reference

> TaleWorlds.Native.dll v1.3.15 反编译源码参考文档
> 
> Decompiled source reference for TaleWorlds.Native.dll v1.3.15

## 概述 / Overview

本部分文档是 TaleWorlds.Native.dll v1.3.15 的反编译源码参考。

**重要说明：** 源码中的函数名使用 Ghidra 自动生成的前缀 `FUN_` + 地址命名。这些名称需要通过 IDA Pro 等工具进一步分析才能确定具体功能。

## 源码统计 / Source Statistics

| 指标 | 数值 |
|------|------|
| 源码文件 | TaleWorlds.Native.dll.c |
| 总行数 | 1,905,930 |
| 头文件 | TaleWorlds.Native.dll.h |
| 头文件行数 | 33,875 |
| 函数实现 | ~50,000+ |
| 全局变量/符号 | ~10,000+ |
| Typedef 类型 | 349 |
| Struct 定义 | 146 |
| Union 定义 | 12 |
| Enum 定义 | 6 |

## 源码结构 / Source Structure

```
native-1.3.15-src/
├── index.md                          # 本文件 / This file
├── COMPLETE-FUNCTIONS.md             # 完整函数索引 / Complete function index
├── COMPLETE-TYPES.md                 # 完整类型定义 / Complete type definitions
├── engine-core.md                    # 引擎核心 / Engine Core
├── rendering.md                      # 渲染系统 / Rendering System
├── animation.md                      # 动画系统 / Animation System
├── physics.md                        # 物理引擎 / Physics Engine
├── audio.md                          # 音频系统 / Audio System
├── network.md                        # 网络系统 / Network System
├── mission.md                        # 任务系统 / Mission System
├── scene.md                          # 场景系统 / Scene System
└── utilities.md                      # 工具函数 / Utilities
```

## 源码格式 / Source Format

### 函数命名规则

函数使用 Ghidra 自动命名：
```c
// 格式: FUN_ + 地址(十六进制)
void FUN_180001000(undefined *param_1, DWORD param_2, LPVOID param_3)
void FUN_1805f67f0(longlong param_1, longlong param_2)
```

### 变量命名规则

全局变量使用 Ghidra 自动命名：
```c
undefined8 DAT_180cf74f8;    // 全局数据
undefined4 DAT_180cf7560;   // 配置数据
```

标签/跳转目标：
```c
LAB_180a1ffb0:              // 代码标签
```

### 类型前缀

| 前缀 | 类型 | 说明 |
|------|------|------|
| `undefined` | 无类型 | 未知数据类型 |
| `undefined1` | uint8_t | 1字节无符号 |
| `undefined2` | uint16_t | 2字节无符号 |
| `undefined4` | uint32_t | 4字节无符号 |
| `undefined6` | uint48_t | 6字节无符号 |
| `undefined8` | uint64_t | 8字节无符号 |

## 函数分类 / Function Categories

### 按地址范围

| 地址范围 | 估计数量 | 系统分类 |
|---------|---------|---------|
| 0x180001000 - 0x180100000 | ~5,000 | 启动、CRT初始化 |
| 0x180100000 - 0x180400000 | ~15,000 | 核心引擎、渲染 |
| 0x180400000 - 0x180600000 | ~20,000 | 游戏逻辑、物理 |
| 0x180600000 - 0x180800000 | ~15,000 | 任务系统、场景 |
| 0x180800000+ | ~10,000 | 网络、音频 |

### 按功能分类

1. **启动与初始化** - DllMain, CRT初始化
2. **内存管理** - malloc/free, 堆操作
3. **线程与同步** - 互斥锁、条件变量、线程
4. **字符串处理** - str*, wc*, 格式化
5. **数学运算** - 向量、矩阵、四元数
6. **渲染系统** - DirectX 11, GPU命令
7. **物理引擎** - PhysX SDK
8. **动画系统** - 骨骼、动画播放
9. **任务系统** - Agent管理、伤害计算
10. **场景系统** - 场景加载、对象管理
11. **音频系统** - FMOD
12. **网络系统** - MBNet UDP

## 第三方库 / Third-Party Libraries

| 库 | 用途 |
|----|------|
| **PhysX SDK** | 物理模拟、碰撞检测 |
| **DirectX 11** | GPU渲染、着色器 |
| **FMOD** | 音效播放 |
| **C++ Standard Library** | 字符串、内存、线程 |

## 使用说明 / Usage Notes

1. **函数查找**: 使用地址前缀缩小范围
2. **IDA Pro 分析**: 建议使用 IDA Pro 进行进一步分析
3. **交叉引用**: 使用 `_refs` 命令查看函数调用关系
4. **结构体重建**: 使用 `T` 命令尝试识别结构体

## 注意事项 / Important Notes

- 函数名为 Ghidra 自动生成，不代表原始命名
- 地址可能因版本更新而变化
- 偏移量基于当前版本分析
- 本文档仅供参考学习，请尊重 TaleWorlds 知识产权

---

**最后更新:** 2026-04-09
**源码版本:** TaleWorlds.Native.dll v1.3.15
