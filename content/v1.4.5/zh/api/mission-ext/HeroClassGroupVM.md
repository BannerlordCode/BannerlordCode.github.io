---
title: "HeroClassGroupVM"
description: "HeroClassGroupVM 的自动生成类参考。"
---
# HeroClassGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HeroClassGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/HeroClassGroupVM.cs`

## 概述

`HeroClassGroupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SubClasses` | `public MBBindingList<HeroClassVM> SubClasses { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `IconPath` | `public string IconPath { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 HeroClassGroupVM 实例
HeroClassGroupVM heroClassGroupVM = ...;
heroClassGroupVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeroClassGroupVM heroClassGroupVM = ...;
heroClassGroupVM.RefreshValues();
```

## 参见

- [本区域目录](../)