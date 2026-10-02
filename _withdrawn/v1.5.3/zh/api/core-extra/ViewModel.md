---
title: "ViewModel"
description: "ViewModel 的自动生成类参考。"
---
# ViewModel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class ViewModel : IViewModel,INotifyPropertyChanged `
**Base:** IViewModel,INotifyPropertyChanged
**Source:** TaleWorlds.Library/ViewModel.cs

## 概述

`ViewModel` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/ViewModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnPropertyChanged
`public void OnPropertyChanged([CallerMemberName] string propertyName = null) `

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(bool value,[CallerMemberName] string propertyName = null) `
`public void OnPropertyChangedWithValue(int value,[CallerMemberName] string propertyName = null) `
`public void OnPropertyChangedWithValue(float value,[CallerMemberName] string propertyName = null) `
`public void OnPropertyChangedWithValue(uint value,[CallerMemberName] string propertyName = null) `
`public void OnPropertyChangedWithValue(Color value,[CallerMemberName] string propertyName = null) `
`public void OnPropertyChangedWithValue(double value,[CallerMemberName] string propertyName = null) `
`public void OnPropertyChangedWithValue(Vec2 value,[CallerMemberName] string propertyName = null) `

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path,bool isList) `
`public object GetViewModelAtPath(BindingPath path) `

### GetPropertyValue
`public object GetPropertyValue(string name,PropertyTypeFeeder propertyTypeFeeder) `
`public object GetPropertyValue(string name) `

### GetPropertyType
`public Type GetPropertyType(string name) `

### SetPropertyValue
`public void SetPropertyValue(string name,object value) `

### OnFinalize
`public virtual void OnFinalize() `

### ExecuteCommand
`public void ExecuteCommand(string commandName,object[] parameters) `

### RefreshValues
`public virtual void RefreshValues() `

### RefreshPropertyAndMethodInfos
`public static void RefreshPropertyAndMethodInfos() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
