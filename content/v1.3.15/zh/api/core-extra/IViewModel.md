---
title: "IViewModel"
description: "IViewModel 的自动生成类参考。"
---
# IViewModel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public interface IViewModel : INotifyPropertyChanged`
**Base:** `INotifyPropertyChanged`
**File:** `TaleWorlds.Library/IViewModel.cs`

## 概述

`IViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `IViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIViewModel service = ...;
```

## 参见

- [本区域目录](../)