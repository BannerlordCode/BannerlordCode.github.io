---
title: "LauncherDLLData"
description: "LauncherDLLData 的自动生成类参考。"
---
# LauncherDLLData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDLLData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs`

## 概述

`LauncherDLLData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `LauncherDLLData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SubModule` | `public SubModuleInfo SubModule { get; }` |
| `IsDangerous` | `public bool IsDangerous { get; }` |
| `VerifyInformation` | `public string VerifyInformation { get; }` |
| `Size` | `public uint Size { get; }` |

## 主要方法

### SetIsDLLDangerous
`public void SetIsDLLDangerous(bool isDangerous)`

**用途 / Purpose:** **用途 / Purpose:** 为 is d l l dangerous 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LauncherDLLData 实例
LauncherDLLData launcherDLLData = ...;
launcherDLLData.SetIsDLLDangerous(false);
```

### SetDLLSize
`public void SetDLLSize(uint size)`

**用途 / Purpose:** **用途 / Purpose:** 为 d l l size 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LauncherDLLData 实例
LauncherDLLData launcherDLLData = ...;
launcherDLLData.SetDLLSize(0);
```

### SetDLLVerifyInformation
`public void SetDLLVerifyInformation(string info)`

**用途 / Purpose:** **用途 / Purpose:** 为 d l l verify information 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LauncherDLLData 实例
LauncherDLLData launcherDLLData = ...;
launcherDLLData.SetDLLVerifyInformation("example");
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
LauncherDLLData entry = ...;
```

## 参见

- [本区域目录](../)