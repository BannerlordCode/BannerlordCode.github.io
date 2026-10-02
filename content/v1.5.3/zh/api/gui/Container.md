---
title: "Container"
description: "Container 的自动生成类参考。"
---
# Container

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class Container : Widget `
**Base:** Widget
**Source:** TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs

## 概述

`Container` 的自动生成类参考页面。声明来自 `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Container.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetDropGizmoPosition
`public abstract Vector2 GetDropGizmoPosition(Vector2 draggedWidgetPosition)`

### GetIndexForDrop
`public abstract int GetIndexForDrop(Vector2 draggedWidgetPosition)`

### OnDrop
`protected internal override bool OnDrop() `

### OnChildSelected
`public abstract void OnChildSelected(Widget widget)`

### GetItemDescription
`public ContainerItemDescription GetItemDescription(string id,int index) `

### OnChildAdded
`protected override void OnChildAdded(Widget child) `

### OnBeforeChildRemoved
`protected override void OnBeforeChildRemoved(Widget child) `

### OnAfterChildRemoved
`protected override void OnAfterChildRemoved(Widget child,int previousIndexOfChild) `

### AddItemDescription
`public void AddItemDescription(ContainerItemDescription itemDescription) `

### FindParentPanel
`public ScrollablePanel FindParentPanel() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
