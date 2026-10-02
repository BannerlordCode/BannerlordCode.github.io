---
title: "ViewModel"
description: "Auto-generated class reference for ViewModel."
---
# ViewModel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class ViewModel : IViewModel,INotifyPropertyChanged `
**Base:** IViewModel, INotifyPropertyChanged
**Source:** TaleWorlds.Library/ViewModel.cs

## Overview

Auto-generated stub for `ViewModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnPropertyChanged
`public void OnPropertyChanged([CallerMemberName] string propertyName = null)`

### OnPropertyChangedWithValue
`public void OnPropertyChangedWithValue(bool value,[CallerMemberName] string propertyName = null)`

### GetViewModelAtPath
`public object GetViewModelAtPath(BindingPath path,bool isList)`

### GetPropertyValue
`public object GetPropertyValue(string name,PropertyTypeFeeder propertyTypeFeeder)`

### GetPropertyType
`public Type GetPropertyType(string name)`

### SetPropertyValue
`public void SetPropertyValue(string name,object value)`

### OnFinalize
`public virtual void OnFinalize()`

### ExecuteCommand
`public void ExecuteCommand(string commandName,object[] parameters)`

### RefreshValues
`public virtual void RefreshValues()`

### RefreshPropertyAndMethodInfos
`public static void RefreshPropertyAndMethodInfos()`

## See Also

- [Section index](../)
