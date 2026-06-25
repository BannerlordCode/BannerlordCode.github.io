---
title: "ReinforcementFormationPreferenceComparer"
description: "ReinforcementFormationPreferenceComparer 的自动生成类参考。"
---
# ReinforcementFormationPreferenceComparer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReinforcementFormationPreferenceComparer : IComparer<ReinforcementFormationPriority>`
**Base:** `IComparer<ReinforcementFormationPriority>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## 概述

`ReinforcementFormationPreferenceComparer` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Compare
`public int Compare(ReinforcementFormationPriority left, ReinforcementFormationPriority right)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 ReinforcementFormationPreferenceComparer 实例
ReinforcementFormationPreferenceComparer reinforcementFormationPreferenceComparer = ...;
var result = reinforcementFormationPreferenceComparer.Compare(left, right);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ReinforcementFormationPreferenceComparer reinforcementFormationPreferenceComparer = ...;
reinforcementFormationPreferenceComparer.Compare(left, right);
```

## 参见

- [本区域目录](../)