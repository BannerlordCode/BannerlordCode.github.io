---
title: "DLLCheckData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DLLCheckData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DLLCheckData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLLCheckData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.UserDatas/DLLCheckData.cs`

## 概述

`DLLCheckData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `DLLCheckData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DLLName` | `public string DLLName { get; set; }` |
| `DLLVerifyInformation` | `public string DLLVerifyInformation { get; set; }` |
| `LatestSizeInBytes` | `public uint LatestSizeInBytes { get; set; }` |
| `IsDangerous` | `public bool IsDangerous { get; set; }` |

## 使用示例

```csharp
var value = new DLLCheckData();
```

## 参见

- [完整类目录](../catalog)