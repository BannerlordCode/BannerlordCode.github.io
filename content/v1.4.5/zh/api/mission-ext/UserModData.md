---
title: "UserModData"
description: "UserModData 的自动生成类参考。"
---
# UserModData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class UserModData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/UserModData.cs`

## 概述

`UserModData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `UserModData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `LastKnownVersion` | `public string LastKnownVersion { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## 主要方法

### IsUpdatedToBeDefault
`public bool IsUpdatedToBeDefault(ModuleInfo module)`

**用途 / Purpose:** 判断当前对象是否处于 updated to be default 状态或条件。

```csharp
// 先通过子系统 API 拿到 UserModData 实例
UserModData userModData = ...;
var result = userModData.IsUpdatedToBeDefault(module);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
UserModData entry = ...;
```

## 参见

- [本区域目录](../)