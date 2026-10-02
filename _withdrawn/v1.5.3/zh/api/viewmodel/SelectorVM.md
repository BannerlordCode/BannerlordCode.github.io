---
title: "SelectorVM"
description: "SelectorVM 的自动生成类参考。"
---
# SelectorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Selector
**Module:** TaleWorlds.Core.ViewModelCollection
**Type:** `public class SelectorVM<T> : ViewModel where T : SelectorItemVM `
**Base:** ViewModel
**Source:** TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs

## 概述

`SelectorVM` 的自动生成类参考页面。声明来自 `TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Refresh
`public void Refresh(IEnumerable<string> list,int selectedIndex,Action<SelectorVM<T>> onChange) `
`public void Refresh(IEnumerable<TextObject> list,int selectedIndex,Action<SelectorVM<T>> onChange) `
`public void Refresh(IEnumerable<T> list,int selectedIndex,Action<SelectorVM<T>> onChange) `

### SetOnChangeAction
`public void SetOnChangeAction(Action<SelectorVM<T>> onChange) `

### AddItem
`public void AddItem(T item) `

### ExecuteRandomize
`public void ExecuteRandomize() `

### ExecuteSelectNextItem
`public void ExecuteSelectNextItem() `

### ExecuteSelectPreviousItem
`public void ExecuteSelectPreviousItem() `

### GetCurrentItem
`public T GetCurrentItem() `

### RefreshValues
`public override void RefreshValues() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
