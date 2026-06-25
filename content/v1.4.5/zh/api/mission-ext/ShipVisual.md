---
title: "ShipVisual"
description: "ShipVisual 的自动生成类参考。"
---
# ShipVisual

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShipVisual : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/ShipVisual.cs`

## 概述

`ShipVisual` 位于 `TaleWorlds.MountAndBlade.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Seed` | `public int Seed { get; }` |
| `CustomSailPatternId` | `public string CustomSailPatternId { get; }` |
| `SailVisuals` | `public List<ScriptComponentBehavior> SailVisuals { get; }` |
| `Health` | `public float Health { get; set; }` |

## 主要方法

### Initialize
`public void Initialize(int seed, string customSailPatternId = "")`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 ShipVisual 实例
ShipVisual shipVisual = ...;
shipVisual.Initialize(0, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ShipVisual shipVisual = ...;
shipVisual.Initialize(0, "example");
```

## 参见

- [本区域目录](../)