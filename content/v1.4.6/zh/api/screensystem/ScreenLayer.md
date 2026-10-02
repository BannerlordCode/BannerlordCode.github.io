---
title: "ScreenLayer"
description: "ScreenLayer：TaleWorlds.ScreenSystem 的 public 类，继承 IComparable；公开成员 37 个（方法 21、属性 14、字段 0）。源文件 TaleWorlds.ScreenSystem/ScreenLayer.cs。"
---
# ScreenLayer

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public abstract class ScreenLayer : IComparable`
**File:** `TaleWorlds.ScreenSystem/ScreenLayer.cs`

## 概述

ScreenLayer 位于 TaleWorlds.ScreenSystem 模块，源文件 TaleWorlds.ScreenSystem/ScreenLayer.cs。它是一个 public 类（abstract），实现/继承 IComparable，继承链为 ScreenLayer → IComparable。public/protected 成员共 37 个：21 方法、14 属性、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ScreenLayer 是 TaleWorlds.ScreenSystem 的顶层类型，命名空间与模块目录一致，继承链 ScreenLayer → IComparable。成员构成以方法为主（方法 21/37，属性 14/37），对外主要以操作入口暴露。继承链上的 IComparable 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ScreenSystem/ScreenLayer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public static event Action<ScreenLayer>OnLayerActiveStateChanged;` | 事件 |
| `Name` | `public string Name` | 属性 |
| `Scale` | `public float Scale` | 属性 |
| `UsableArea` | `public Vec2 UsableArea` | 属性 |
| `Input` | `public InputContext Input` | 属性 |
| `InputRestrictions` | `public InputRestrictions InputRestrictions` | 属性 |
| `LastActiveState` | `public bool LastActiveState` | 属性 |
| `IsFinalized` | `public bool IsFinalized` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsHitThisFrame` | `public bool IsHitThisFrame` | 属性 |
| `IsFocusLayer` | `public bool IsFocusLayer` | 属性 |
| `ActiveCursor` | `public CursorType ActiveCursor` | 属性 |
| `_usedInputs` | `protected InputType _usedInputs` | 属性 |
| `ScreenOrderInLastFrame` | `public int ScreenOrderInLastFrame` | 属性 |
| `ScreenLayer` | `protected ScreenLayer(string name, int localOrder)` | 构造函数 |
| `Tick` | `protected internal virtual void Tick(float dt)` | 方法 |
| `LateUpdate` | `protected internal virtual void LateUpdate(float dt)` | 方法 |
| `RenderTick` | `protected internal virtual void RenderTick(float dt)` | 方法 |
| `Update` | `protected internal virtual void Update(IReadOnlyList<int>lastKeysPressed)` | 方法 |
| `OnActivate` | `protected virtual void OnActivate()` | 方法 |
| `OnDeactivate` | `protected virtual void OnDeactivate()` | 方法 |
| `OnGainFocus` | `protected internal virtual void OnGainFocus()` | 方法 |
| `OnLoseFocus` | `protected internal virtual void OnLoseFocus()` | 方法 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 方法 |
| `RefreshGlobalOrder` | `protected internal virtual void RefreshGlobalOrder(ref int currentOrder)` | 方法 |
| `DrawDebugInfo` | `public virtual void DrawDebugInfo()` | 方法 |
| `EarlyProcessEvents` | `public virtual void EarlyProcessEvents(InputType handledInputs)` | 方法 |
| `ProcessEvents` | `public virtual void ProcessEvents()` | 方法 |
| `HitTest` | `public virtual bool HitTest(Vector2 position)` | 方法 |
| `HitTest` | `public virtual bool HitTest()` | 方法 |
| `FocusTest` | `public virtual bool FocusTest()` | 方法 |
| `InputUsageMask` | `public InputUsageMask InputUsageMask` | 属性 |
| `IsFocusedOnInput` | `public virtual bool IsFocusedOnInput()` | 方法 |
| `OnOnScreenKeyboardDone` | `public virtual void OnOnScreenKeyboardDone(string inputText)` | 方法 |
| `OnOnScreenKeyboardCanceled` | `public virtual void OnOnScreenKeyboardCanceled()` | 方法 |
| `CompareTo` | `public int CompareTo(object obj)` | 方法 |
| `UpdateLayout` | `public virtual void UpdateLayout()` | 方法 |

## 参见

- [↑ screensystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CursorType](../CursorType)
- [同命名空间 GlobalLayer](../GlobalLayer)
- [同命名空间 InputRestrictions](../InputRestrictions)
- [同命名空间 IScreenManagerEngineConnection](../IScreenManagerEngineConnection)
