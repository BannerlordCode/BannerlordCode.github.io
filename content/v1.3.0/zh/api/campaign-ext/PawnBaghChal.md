---
title: "PawnBaghChal"
description: "PawnBaghChal 的自动生成类参考。"
---
# PawnBaghChal

**Namespace:** SandBox.BoardGames.Pawns
**Module:** SandBox.BoardGames
**Type:** `public class PawnBaghChal : PawnBase`
**Base:** `PawnBase`
**File:** `SandBox/BoardGames/Pawns/PawnBaghChal.cs`

## 概述

`PawnBaghChal` 位于 `SandBox.BoardGames.Pawns`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.BoardGames.Pawns` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPlaced` | `public override bool IsPlaced { get; }` |
| `InitialFrame` | `public MatrixFrame InitialFrame { get; }` |
| `IsTiger` | `public bool IsTiger { get; }` |
| `IsGoat` | `public bool IsGoat { get; }` |

## 主要方法

### Reset
`public override void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PawnBaghChal 实例
PawnBaghChal pawnBaghChal = ...;
pawnBaghChal.Reset();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PawnBaghChal pawnBaghChal = ...;
pawnBaghChal.Reset();
```

## 参见

- [本区域目录](../)