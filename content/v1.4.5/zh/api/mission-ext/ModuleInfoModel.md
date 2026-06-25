---
title: "ModuleInfoModel"
description: "ModuleInfoModel 的自动生成类参考。"
---
# ModuleInfoModel

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ModuleInfoModel`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs`

## 概述

`ModuleInfoModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ModuleInfoModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Name` | `public string Name { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `Version` | `public string Version { get; }` |

## 主要方法

### ShouldIncludeInSession
`public static bool ShouldIncludeInSession(ModuleInfo moduleInfo)`

**用途 / Purpose:** 调用 ShouldIncludeInSession 对应的操作。

```csharp
// 静态调用，不需要实例
ModuleInfoModel.ShouldIncludeInSession(moduleInfo);
```

### TryCreateForSession
`public static bool TryCreateForSession(ModuleInfo moduleInfo, out ModuleInfoModel moduleInfoModel)`

**用途 / Purpose:** 尝试获取 create for session 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
ModuleInfoModel.TryCreateForSession(moduleInfo, moduleInfoModel);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 ModuleInfoModel 实例
ModuleInfoModel moduleInfoModel = ...;
var result = moduleInfoModel.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 ModuleInfoModel 实例
ModuleInfoModel moduleInfoModel = ...;
var result = moduleInfoModel.GetHashCode();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<ModuleInfoModel>(new MyModuleInfoModel());
```

## 参见

- [本区域目录](../)