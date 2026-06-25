---
title: "LoadingWindowViewModel"
description: "LoadingWindowViewModel 的自动生成类参考。"
---
# LoadingWindowViewModel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs`

## 概述

`LoadingWindowViewModel` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。

## 心智模型

把 `LoadingWindowViewModel` 当作一个 ViewModel 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentlyShowingMultiplayer` | `public bool CurrentlyShowingMultiplayer { get; }` |
| `Enabled` | `public bool Enabled { get; set; }` |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GameModeText` | `public string GameModeText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `IsMultiplayer` | `public bool IsMultiplayer { get; set; }` |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled { get; set; }` |
| `LoadingImageName` | `public string LoadingImageName { get; set; }` |

## 主要方法

### SetTotalGenericImageCount
`public void SetTotalGenericImageCount(int totalGenericImageCount)`

**用途 / Purpose:** 为 「total generic image count」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LoadingWindowViewModel 实例
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.SetTotalGenericImageCount(0);
```

### UnloadImageDelegate
`public delegate void UnloadImageDelegate(int index)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 LoadingWindowViewModel 实例
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.UnloadImageDelegate(0);
```

### LoadImageDelegate
`public delegate void LoadImageDelegate(int index, out string imageName)`

**用途 / Purpose:** 从持久化存储或流中读取 「image delegate」。

```csharp
// 先通过子系统 API 拿到 LoadingWindowViewModel 实例
LoadingWindowViewModel loadingWindowViewModel = ...;
loadingWindowViewModel.LoadImageDelegate(0, imageName);
```

## 使用示例

```csharp
// 将实例绑定到 Movie 或 View 的 ViewModel
LoadingWindowViewModel vm = ...;
movie.SetViewModel(vm);
```

## 参见

- [本区域目录](../)