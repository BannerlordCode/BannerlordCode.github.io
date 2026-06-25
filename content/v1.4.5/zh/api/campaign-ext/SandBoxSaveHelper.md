---
title: "SandBoxSaveHelper"
description: "SandBoxSaveHelper 的自动生成类参考。"
---
# SandBoxSaveHelper

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxSaveHelper`
**Base:** 无
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxSaveHelper.cs`

## 概述

`SandBoxSaveHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SandBoxSaveHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ModuleCheckResult
`public readonly struct ModuleCheckResult(string moduleId, ModuleCheckResultType type)`

**用途 / Purpose:** 调用 ModuleCheckResult 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandBoxSaveHelper 实例
SandBoxSaveHelper sandBoxSaveHelper = ...;
var result = sandBoxSaveHelper.ModuleCheckResult("example", type);
```

### TryLoadSave
`public static void TryLoadSave(SaveGameFileInfo saveInfo, Action<LoadResult> onStartGame, Action onCancel = null)`

**用途 / Purpose:** 尝试获取 load save 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
SandBoxSaveHelper.TryLoadSave(saveInfo, onStartGame, null);
```

### CheckMetaDataCompatibilityErrors
`public static MBReadOnlyList<ModuleCheckResult> CheckMetaDataCompatibilityErrors(MetaData fileMetaData)`

**用途 / Purpose:** 检查meta data compatibility errors在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
SandBoxSaveHelper.CheckMetaDataCompatibilityErrors(fileMetaData);
```

### GetIsDisabledWithReason
`public unsafe static bool GetIsDisabledWithReason(SaveGameFileInfo saveGameFileInfo, out TextObject reason)`

**用途 / Purpose:** 读取并返回当前对象中 is disabled with reason 的结果。

```csharp
// 静态调用，不需要实例
SandBoxSaveHelper.GetIsDisabledWithReason(saveGameFileInfo, reason);
```

### GetModuleNameFromModuleId
`public static string GetModuleNameFromModuleId(string id)`

**用途 / Purpose:** 读取并返回当前对象中 module name from module id 的结果。

```csharp
// 静态调用，不需要实例
SandBoxSaveHelper.GetModuleNameFromModuleId("example");
```

## 使用示例

```csharp
SandBoxSaveHelper.Initialize();
```

## 参见

- [本区域目录](../)