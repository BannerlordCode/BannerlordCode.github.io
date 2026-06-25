---
title: "FormationConfiguration"
description: "FormationConfiguration 的自动生成类参考。"
---
# FormationConfiguration

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationConfiguration`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderVM.cs`

## 概述

`FormationConfiguration` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FormationConfiguration
`public struct FormationConfiguration(int formationIndex, List<FormationFilterType> filters)`

**用途 / Purpose:** **用途 / Purpose:** 将ion configuration格式化为适合显示或存储的字符串。

```csharp
// 先通过子系统 API 拿到 FormationConfiguration 实例
FormationConfiguration formationConfiguration = ...;
var result = formationConfiguration.FormationConfiguration(0, filters);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FormationConfiguration formationConfiguration = ...;
formationConfiguration.FormationConfiguration(0, filters);
```

## 参见

- [本区域目录](../)