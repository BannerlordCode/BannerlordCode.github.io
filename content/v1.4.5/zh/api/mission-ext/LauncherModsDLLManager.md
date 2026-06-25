---
title: "LauncherModsDLLManager"
description: "LauncherModsDLLManager 的自动生成类参考。"
---
# LauncherModsDLLManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModsDLLManager`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsDLLManager.cs`

## 概述

`LauncherModsDLLManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `LauncherModsDLLManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShouldUpdateSaveData` | `public bool ShouldUpdateSaveData { get; }` |

## 主要方法

### GetSubModuleVerifyData
`public LauncherDLLData GetSubModuleVerifyData(SubModuleInfo subModuleInfo)`

**用途 / Purpose:** 读取并返回当前对象中 sub module verify data 的结果。

```csharp
// 先通过子系统 API 拿到 LauncherModsDLLManager 实例
LauncherModsDLLManager launcherModsDLLManager = ...;
var result = launcherModsDLLManager.GetSubModuleVerifyData(subModuleInfo);
```

## 使用示例

```csharp
var manager = LauncherModsDLLManager.Current;
```

## 参见

- [本区域目录](../)