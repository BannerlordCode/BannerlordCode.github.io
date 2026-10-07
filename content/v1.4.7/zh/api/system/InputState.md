---
title: "InputState"
description: "输入状态快照类，提供归一化与像素级鼠标位置查询，是每帧读取鼠标状态的核心工具。"
---
# InputState

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `public class`
**基类：** `object`（无显式基类）
**源文件：** `bannerlord-1.4.7/TaleWorlds.InputSystem/InputState.cs`（声明见第 7 行）

## 概述

`InputState` 是输入系统的「状态快照」类，封装了当前帧的鼠标位置信息，并提供归一化坐标与像素坐标之间的互相换算。它不直接处理按键逻辑，而是专注于鼠标位置的读取与转换，是 UI 交互、地图标记、光标控制等功能的底层数据来源。

与 `InputContext` 的 `GetPointerX/Y` 不同，`InputState` 提供了更丰富的鼠标状态维度：当前位置、上一帧位置、位置是否变化、以及像素级精确坐标。这让开发者能实现「鼠标移动检测」「光标拖拽」等需要帧间比较的功能。

## 心智模型

把 `InputState` 想象成一个「鼠标状态面板」：

- 它有两个坐标系：**归一化坐标**（0–1 范围，与分辨率无关）和**像素坐标**（实际屏幕像素）；
- 两个坐标系通过 `NativeResolution`（原生分辨率）互相换算；
- 它同时保存当前帧和上一帧的位置，可以检测「鼠标是否移动了」；
- `MousePositionChanged` 是一个便捷的布尔值，直接告诉你这一帧鼠标有没有动。

关键设计点：**归一化坐标是 UI 层的通用语言**。因为 UI 布局通常用相对比例定义，归一化坐标让鼠标位置可以直接与 UI 元素做命中测试，而不需要关心实际分辨率。

## 怎么用

### 怎么拿到

源树路径：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7/TaleWorlds.InputSystem/InputState.cs`

- 类声明：`InputState.cs:7` — `public class InputState`
- `NativeResolution` 属性：`InputState.cs:11` — 返回 `Input.Resolution`
- `MousePositionRanged` 属性：`InputState.cs:22` — 归一化鼠标位置
- `OldMousePositionRanged` 属性：`InputState.cs:38` — 上一帧归一化位置
- `MousePositionChanged` 属性：`InputState.cs:43` — 位置是否变化
- `MousePositionPixel` 属性：`InputState.cs:48` — 像素级鼠标位置

`InputState` 通常由 `Input` 类在内部创建，mod 开发者通过 `Input.GetInputState()` 或类似入口获取当前帧的状态实例。

### 典型用法

```csharp
// 1. 获取归一化鼠标位置（用于 UI 命中测试）
InputState state = Input.GetInputState();
float nx = state.MousePositionRanged.x;
float ny = state.MousePositionRanged.y;

// 2. 检测鼠标是否移动
if (state.MousePositionChanged)
{
    Vector2 delta = state.MousePositionRanged - state.OldMousePositionRanged;
    // 处理拖拽逻辑
}

// 3. 获取像素坐标（用于精确渲染）
Vector2 pixel = state.MousePositionPixel;
```

### 坑

- **归一化坐标不是像素坐标**：`MousePositionRanged` 返回 0–1 范围，`MousePositionPixel` 返回实际像素。混用会导致位置计算错误。
- **NativeResolution 可能变化**：窗口缩放或分辨率切换时 `NativeResolution` 会更新，缓存旧值会导致换算错误。
- **MousePositionChanged 是帧间比较**：如果两帧之间鼠标没动，它为 `false`，即使鼠标确实在屏幕上。
- **OldMousePositionRanged 是上一帧的快照**：跨多帧缓存会导致拖拽增量计算错误。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `NativeResolution` (11) | 原生分辨率，用于归一化与像素坐标的换算 |
| `MousePositionRanged` (22) | 当前帧归一化鼠标位置（0–1 范围） |
| `OldMousePositionRanged` (38) | 上一帧归一化鼠标位置 |
| `MousePositionChanged` (43) | 当前帧鼠标位置是否与上一帧不同 |
| `MousePositionPixel` (48) | 当前帧像素级鼠标位置 |

## 真实示例

```csharp
// 来自 InputState.cs 的属性定义
public Vector2 NativeResolution { get { return Input.Resolution; } }
public Vector2 MousePositionRanged { get { /* 归一化计算 */ } }
public Vector2 OldMousePositionRanged { get { /* 上一帧缓存 */ } }
public bool MousePositionChanged { get { /* 帧间比较 */ } }
public Vector2 MousePositionPixel { get { /* 像素换算 */ } }
```

## 参见

- [InputContext](../InputContext)
- [GameKeyContext](../GameKeyContext)
- [../../sandbox/AgentNavigator](../../sandbox/AgentNavigator)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
