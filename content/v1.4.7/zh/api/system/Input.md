---
title: "Input"
description: "输入系统的静态入口，聚合输入状态、调试输入与输入管理器，并提供手柄平台判定。"
---
# Input

**命名空间：** `TaleWorlds.InputSystem`
**模块：** `TaleWorlds.InputSystem`
**类型：** `static class`
**基类：** `object`
**源文件：** `TaleWorlds.InputSystem/Input.cs`（声明见第 7 行）

## 概述

`Input` 是输入系统的静态门面（facade）。它把三样东西聚到一处：`InputState`（本帧输入快照）、`DebugInput`（调试用输入）、`InputManager`（底层输入管理器）。所有 `GameKey` / `HotKey` 的状态查询最终都落到这里。因为它静态且全局唯一，mod 代码在任何地方都能直接 `Input.XXX` 调用，无需传递引用。

## 心智模型

把 `Input` 想成「输入总机」：`InputManager` 是总机背后的交换机，`InputState` 是这一帧的接线状态，`DebugInput` 是维修用的旁路。平时你只跟总机说话；只有需要调试输入或做平台判断时才需要知道后面那几层。注意 `InputManager` 在屏幕键盘激活时会返回一个空的 `_emptyInputManager`，此时拿不到真实输入。

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.InputSystem/Input.cs`（类声明见第 7 行）。`Input` 是静态类，直接通过 `Input` 访问，不需要实例化，也不需要从别处获取引用。

### 典型用法

```csharp
if (Input.IsPlaystation(controller))
{
    // 针对 PS 手柄做适配
}
```

### 坑

- `InputManager` 在屏幕键盘激活时返回 `_emptyInputManager`，此时按键状态不可信，别在这种状态下做关键判定。
- `Input` 是静态全局状态，跨场景、跨线程访问时要注意生命周期与刷新时机。
- `IsPlaystation` 是扩展方法，判断的是手柄平台而非当前按键，别用来做按键存在性检查。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `InputState` | 本帧输入状态快照 |
| `DebugInput` | 调试用输入通道 |
| `InputManager` | 底层输入管理器；屏幕键盘激活时返回空实现 |
| `IsPlaystation` | 扩展方法，判断是否为 PS 手柄 |

## 真实示例

```csharp
var state = Input.InputState;
bool isPs = Input.IsPlaystation(someController);
var mgr = Input.InputManager;
```

## 参见

- [GameKey](../GameKey)
- [HotKey](../HotKey)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
