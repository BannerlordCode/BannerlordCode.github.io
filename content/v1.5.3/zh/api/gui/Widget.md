---
title: "Widget"
description: "Widget 的自动生成类参考。"
---
# Widget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Widget : PropertyOwnerObject `
**Base:** PropertyOwnerObject
**Source:** TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Widget.cs

## 概述

`Widget` 的自动生成类参考页面。声明来自 `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/Widget.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetAllChildrenAndThisRecursive
`public List<Widget> GetAllChildrenAndThisRecursive() `

### ApplyActionToAllChildren
`public void ApplyActionToAllChildren(Action<Widget> action) `

### ApplyActionToAllChildrenRecursive
`public void ApplyActionToAllChildrenRecursive(Action<Widget> action) `

### GetAllChildrenRecursive
`public List<Widget> GetAllChildrenRecursive(Func<Widget,bool> predicate = null) `

### GetAllParents
`public List<Widget> GetAllParents() `

### AddComponent
`public void AddComponent(WidgetComponent component) `

### SetMeasureAndLayoutDirty
`protected void SetMeasureAndLayoutDirty() `

### SetMeasureDirty
`protected void SetMeasureDirty() `

### SetLayoutDirty
`protected void SetLayoutDirty() `

### OnLayoutUpdated
`protected virtual void OnLayoutUpdated() `

### AddState
`public void AddState(string stateName) `

### ContainsState
`public bool ContainsState(string stateName) `

### SetState
`public virtual void SetState(string stateName) `

### FindChild
`public Widget FindChild(BindingPath path) `
`public Widget FindChild(string singlePathNode) `
`public Widget FindChild(WidgetSearchDelegate widgetSearchDelegate) `
`public Widget FindChild(string id,bool includeAllChildren = false) `

### GetFirstInChildrenAndThisRecursive
`public Widget GetFirstInChildrenAndThisRecursive(Func<Widget,bool> predicate) `

### GetFirstInChildrenRecursive
`public Widget GetFirstInChildrenRecursive(Func<Widget,bool> predicate) `

### RemoveAllChildren
`public void RemoveAllChildren() `

### OnUpdate
`protected virtual void OnUpdate(float dt) `

### OnParallelUpdate
`protected virtual void OnParallelUpdate(float dt) `

### OnLateUpdate
`protected virtual void OnLateUpdate(float dt) `

### RefreshState
`protected virtual void RefreshState() `

### UpdateAnimationPropertiesSubTask
`public virtual void UpdateAnimationPropertiesSubTask(float alphaFactor) `

### Measure
`public void Measure(Vector2 measureSpec) `

### CheckIsMyChildRecursive
`public bool CheckIsMyChildRecursive(Widget child) `

### AddChild
`public void AddChild(Widget widget) `

### AddChildAtIndex
`public void AddChildAtIndex(Widget widget,int index) `

### SwapChildren
`public void SwapChildren(Widget widget1,Widget widget2) `

### OnChildAdded
`protected virtual void OnChildAdded(Widget child) `

### RemoveChild
`public void RemoveChild(Widget widget) `

### OnBeforeRemovedChild
`public virtual void OnBeforeRemovedChild(Widget widget) `

### HasChild
`public bool HasChild(Widget widget) `

### OnBeforeChildRemoved
`protected virtual void OnBeforeChildRemoved(Widget child) `

### OnAfterChildRemoved
`protected virtual void OnAfterChildRemoved(Widget child,int previousIndexOfChild) `

### UpdateBrushes
`public virtual void UpdateBrushes(float dt) `

### GetChildIndex
`public int GetChildIndex(Widget child) `

### GetVisibleChildIndex
`public int GetVisibleChildIndex(Widget child) `

### GetFilterChildIndex
`public int GetFilterChildIndex(Widget child,Func<Widget,bool> childrenFilter) `

### GetChild
`public Widget GetChild(int i) `

### Layout
`public void Layout(float left,float bottom,float right,float top) `

### OnUpdatePosition
`protected virtual void OnUpdatePosition() `

### OnUpdateChildPositions
`protected virtual void OnUpdateChildPositions() `

### HandleInput
`public virtual void HandleInput(IReadOnlyList<int> lastKeysPressed) `

### IsPointInsideMeasuredArea
`public bool IsPointInsideMeasuredArea(Vector2 p) `

### IsPointInsideGamepadCursorArea
`public bool IsPointInsideGamepadCursorArea(Vector2 p) `

### Hide
`public void Hide() `

### Show
`public void Show() `

### GetLocalPoint
`public Vector2 GetLocalPoint(Vector2 globalPoint) `

### SetSiblingIndex
`public void SetSiblingIndex(int index,bool force = false) `

### GetSiblingIndex
`public int GetSiblingIndex() `

### GetVisibleSiblingIndex
`public int GetVisibleSiblingIndex() `

### Render
`public void Render(TwoDimensionContext twoDimensionContext,TwoDimensionDrawContext drawContext) `

### OnRender
`protected virtual void OnRender(TwoDimensionContext twoDimensionContext,TwoDimensionDrawContext drawContext) `

### EventFired
`protected void EventFired(string eventName,params object[] args) `

### IsRecursivelyVisible
`public bool IsRecursivelyVisible() `

### OnDisconnectedFromRoot
`protected virtual void OnDisconnectedFromRoot() `

### OnConnectedToRoot
`protected virtual void OnConnectedToRoot() `

### ToString
`public override string ToString() `

### OnGamepadNavigationIndexUpdated
`protected virtual void OnGamepadNavigationIndexUpdated(int newIndex) `

### OnGamepadNavigationFocusGain
`public void OnGamepadNavigationFocusGain() `

### OnPreviewMousePressed
`protected virtual bool OnPreviewMousePressed() `

### OnPreviewMouseReleased
`protected virtual bool OnPreviewMouseReleased() `

### OnPreviewMouseAlternatePressed
`protected virtual bool OnPreviewMouseAlternatePressed() `

### OnPreviewMouseAlternateReleased
`protected virtual bool OnPreviewMouseAlternateReleased() `

### OnPreviewDragBegin
`protected virtual bool OnPreviewDragBegin() `

### OnPreviewDragEnd
`protected virtual bool OnPreviewDragEnd() `

### OnPreviewDrop
`protected virtual bool OnPreviewDrop() `

### OnPreviewMouseScroll
`protected virtual bool OnPreviewMouseScroll() `

### OnPreviewRightStickMovement
`protected virtual bool OnPreviewRightStickMovement() `

### OnPreviewMouseMove
`protected virtual bool OnPreviewMouseMove() `

### OnPreviewDragHover
`protected virtual bool OnPreviewDragHover() `

### OnMousePressed
`protected internal virtual void OnMousePressed() `

### OnMouseReleased
`protected internal virtual void OnMouseReleased(bool isFromInput) `

### OnMouseAlternatePressed
`protected internal virtual void OnMouseAlternatePressed() `

### OnMouseAlternateReleased
`protected internal virtual void OnMouseAlternateReleased(bool isFromInput) `

### OnMouseMove
`protected internal virtual void OnMouseMove() `

### OnHoverBegin
`protected internal virtual void OnHoverBegin() `

### OnHoverEnd
`protected internal virtual void OnHoverEnd() `

### OnDragBegin
`protected internal virtual void OnDragBegin() `

### OnDragEnd
`protected internal virtual void OnDragEnd() `

### OnDrop
`protected internal virtual bool OnDrop() `

### OnMouseScroll
`protected internal virtual void OnMouseScroll() `

### OnRightStickMovement
`protected internal virtual void OnRightStickMovement() `

### OnDragHoverBegin
`protected internal virtual void OnDragHoverBegin() `

### OnDragHoverEnd
`protected internal virtual void OnDragHoverEnd() `

### OnGainFocus
`protected internal virtual void OnGainFocus() `

### OnLoseFocus
`protected internal virtual void OnLoseFocus() `

### OnMouseOverBegin
`protected internal virtual void OnMouseOverBegin() `

### OnMouseOverEnd
`protected internal virtual void OnMouseOverEnd() `

### OnContextActivated
`protected internal virtual void OnContextActivated() `

### OnContextDeactivated
`protected internal virtual void OnContextDeactivated() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
