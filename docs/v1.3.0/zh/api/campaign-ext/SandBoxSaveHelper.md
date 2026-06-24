<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxSaveHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSaveHelper

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class SandBoxSaveHelper`
**Base:** 无
**File:** `SandBox/SandBoxSaveHelper.cs`

## 概述

`SandBoxSaveHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SandBoxSaveHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TryLoadSave
`public static void TryLoadSave(SaveGameFileInfo saveInfo, Action<LoadResult> onStartGame, Action onCancel = null)`

**用途 / Purpose:** 尝试获取 `load save`，通常以 out 参数返回结果。

### CheckMetaDataCompatibilityErrors
`public static MBReadOnlyList<SandBoxSaveHelper.ModuleCheckResult> CheckMetaDataCompatibilityErrors(MetaData fileMetaData)`

**用途 / Purpose:** 处理 `check meta data compatibility errors` 相关逻辑。

### GetIsDisabledWithReason
`public static bool GetIsDisabledWithReason(SaveGameFileInfo saveGameFileInfo, out TextObject reason)`

**用途 / Purpose:** 获取 `is disabled with reason` 的当前值。

### GetModuleNameFromModuleId
`public static string GetModuleNameFromModuleId(string id)`

**用途 / Purpose:** 获取 `module name from module id` 的当前值。

## 使用示例

```csharp
SandBoxSaveHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)