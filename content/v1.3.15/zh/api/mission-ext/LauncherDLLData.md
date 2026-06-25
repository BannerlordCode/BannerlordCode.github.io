---
title: "LauncherDLLData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherDLLData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `is d l l dangerous` 的值或状态。

### SetDLLSize
`public void SetDLLSize(uint size)`

**用途 / Purpose:** 设置 `d l l size` 的值或状态。

### SetDLLVerifyInformation
`public void SetDLLVerifyInformation(string info)`

**用途 / Purpose:** 设置 `d l l verify information` 的值或状态。

## 使用示例

```csharp
var value = new LauncherDLLData();
```

## 参见

- [完整类目录](../catalog)