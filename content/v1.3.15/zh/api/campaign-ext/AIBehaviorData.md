---
title: "AIBehaviorData"
description: "AIBehaviorData 的自动生成类参考。"
---
# AIBehaviorData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**Base:** `IEquatable<AIBehaviorData>`
**File:** `TaleWorlds.CampaignSystem/AIBehaviorData.cs`

## 概述

`AIBehaviorData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AIBehaviorData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 AIBehaviorData 实例
AIBehaviorData aIBehaviorData = ...;
var result = aIBehaviorData.Equals(obj);
```

### Equals
`public bool Equals(AIBehaviorData other)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 AIBehaviorData 实例
AIBehaviorData aIBehaviorData = ...;
var result = aIBehaviorData.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 AIBehaviorData 实例
AIBehaviorData aIBehaviorData = ...;
var result = aIBehaviorData.GetHashCode();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AIBehaviorData entry = ...;
```

## 参见

- [本区域目录](../)