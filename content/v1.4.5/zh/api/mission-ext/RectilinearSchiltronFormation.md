---
title: "RectilinearSchiltronFormation"
description: "RectilinearSchiltronFormation 的自动生成类参考。"
---
# RectilinearSchiltronFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RectilinearSchiltronFormation : SquareFormation`
**Base:** `SquareFormation`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/RectilinearSchiltronFormation.cs`

## 概述

`RectilinearSchiltronFormation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaximumWidth` | `public override float MaximumWidth { get; }` |

## 主要方法

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 RectilinearSchiltronFormation 实例
RectilinearSchiltronFormation rectilinearSchiltronFormation = ...;
var result = rectilinearSchiltronFormation.Clone(formation);
```

### Form
`public void Form()`

**用途 / Purpose:** 处理与 「form」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RectilinearSchiltronFormation 实例
RectilinearSchiltronFormation rectilinearSchiltronFormation = ...;
rectilinearSchiltronFormation.Form();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RectilinearSchiltronFormation rectilinearSchiltronFormation = ...;
rectilinearSchiltronFormation.Clone(formation);
```

## 参见

- [本区域目录](../)