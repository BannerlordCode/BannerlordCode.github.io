---
title: "ListAdvancedStartOption"
description: "ListAdvancedStartOption 的自动生成类参考。"
---
# ListAdvancedStartOption

**Namespace:** SandBox.AdvancedStartOptions
**Module:** SandBox
**Type:** `public class ListAdvancedStartOption : AdvancedStartOption `
**Base:** AdvancedStartOption
**Source:** SandBox/AdvancedStartOptions/ListAdvancedStartOption.cs

## 概述

`ListAdvancedStartOption` 的自动生成类参考页面。声明来自 `SandBox/AdvancedStartOptions/ListAdvancedStartOption.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetItems
`public IReadOnlyList<ValueTuple<string,ListAdvancedStartOption.ListItemCondition>> GetItems() `

### AddItem
`public void AddItem([TupleElementNames(new string[] { "Identifier","Condition" })] ValueTuple<string,ListAdvancedStartOption.ListItemCondition> item) `

### GetItemCondition
`public bool GetItemCondition(string identifier,AdvancedStartOptions options,out TextObject disabledText) `

### RemoveItem
`public bool RemoveItem(string identifier) `

### ListItemCondition
`public delegate bool ListItemCondition(AdvancedStartOptions options,out TextObject disabledText)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
