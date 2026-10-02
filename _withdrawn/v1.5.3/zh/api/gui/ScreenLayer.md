---
title: "ScreenLayer"
description: "ScreenLayer 的自动生成类参考。"
---
# ScreenLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenLayer : IComparable `
**Base:** IComparable
**Source:** TaleWorlds.ScreenSystem/ScreenLayer.cs

## 概述

`ScreenLayer` 的自动生成类参考页面。声明来自 `TaleWorlds.ScreenSystem/ScreenLayer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Tick
`protected internal virtual void Tick(float dt) `

### LateUpdate
`protected internal virtual void LateUpdate(float dt) `

### RenderTick
`protected internal virtual void RenderTick(float dt) `

### Update
`protected internal virtual void Update(IReadOnlyList<int> lastKeysPressed) `

### OnActivate
`protected virtual void OnActivate() `

### OnDeactivate
`protected virtual void OnDeactivate() `

### OnGainFocus
`protected internal virtual void OnGainFocus() `

### OnLoseFocus
`protected internal virtual void OnLoseFocus() `

### OnFinalize
`protected virtual void OnFinalize() `

### RefreshGlobalOrder
`protected internal virtual void RefreshGlobalOrder(ref int currentOrder) `

### DrawDebugInfo
`public virtual void DrawDebugInfo() `

### EarlyProcessEvents
`public virtual void EarlyProcessEvents(InputType handledInputs) `

### ProcessEvents
`public virtual void ProcessEvents() `

### HitTest
`public virtual bool HitTest(Vector2 position) `
`public virtual bool HitTest() `

### FocusTest
`public virtual bool FocusTest() `

### IsFocusedOnInput
`public virtual bool IsFocusedOnInput() `

### OnOnScreenKeyboardDone
`public virtual void OnOnScreenKeyboardDone(string inputText) `

### OnOnScreenKeyboardCanceled
`public virtual void OnOnScreenKeyboardCanceled() `

### CompareTo
`public int CompareTo(object obj) `

### UpdateLayout
`public virtual void UpdateLayout() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
