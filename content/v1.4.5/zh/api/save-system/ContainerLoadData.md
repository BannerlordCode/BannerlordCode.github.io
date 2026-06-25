---
title: "ContainerLoadData"
description: "ContainerLoadData 的自动生成类参考。"
---
# ContainerLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ContainerLoadData`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/ContainerLoadData.cs`

## 概述

`ContainerLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ContainerLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ContainerHeaderLoadData` | `public ContainerHeaderLoadData ContainerHeaderLoadData { get; }` |

## 主要方法

### InitializeReaders
`public void InitializeReaders(SaveEntryFolder saveEntryFolder)`

**用途 / Purpose:** 为 readers 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ContainerLoadData 实例
ContainerLoadData containerLoadData = ...;
containerLoadData.InitializeReaders(saveEntryFolder);
```

### FillCreatedObject
`public void FillCreatedObject()`

**用途 / Purpose:** 调用 FillCreatedObject 对应的操作。

```csharp
// 先通过子系统 API 拿到 ContainerLoadData 实例
ContainerLoadData containerLoadData = ...;
containerLoadData.FillCreatedObject();
```

### Read
`public void Read()`

**用途 / Purpose:** 从当前实例读取数据或状态。

```csharp
// 先通过子系统 API 拿到 ContainerLoadData 实例
ContainerLoadData containerLoadData = ...;
containerLoadData.Read();
```

### FillObject
`public void FillObject()`

**用途 / Purpose:** 调用 FillObject 对应的操作。

```csharp
// 先通过子系统 API 拿到 ContainerLoadData 实例
ContainerLoadData containerLoadData = ...;
containerLoadData.FillObject();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ContainerLoadData entry = ...;
```

## 参见

- [本区域目录](../)