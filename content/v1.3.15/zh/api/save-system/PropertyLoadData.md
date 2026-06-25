---
title: "PropertyLoadData"
description: "PropertyLoadData 的自动生成类参考。"
---
# PropertyLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class PropertyLoadData : MemberLoadData`
**Base:** `MemberLoadData`
**File:** `TaleWorlds.SaveSystem/Load/PropertyLoadData.cs`

## 概述

`PropertyLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PropertyLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### FillObject
`public void FillObject()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 PropertyLoadData 实例
PropertyLoadData propertyLoadData = ...;
propertyLoadData.FillObject();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
PropertyLoadData entry = ...;
```

## 参见

- [本区域目录](../)